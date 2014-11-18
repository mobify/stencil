
/**
 * PhantomJS modules
 */

var fs = require('fs');
var slash = fs.separator;

/**
 * CasperJS modules
 */

var utils = require('utils');

/**
 * PhantomCSS library
 */

var phantomcss = require('../../node_modules/phantomcss/phantomcss.js');

/**
 * Test suite defaults, options passed from CLI and buffers
 */

var visualTestsDir = '../visual';
var scope = casper.cli.options.scope || false;
var testFiles = [];

/**
 * Client-side scripts that get injected into the PhantomJS environment.
 */

var clientHelpers = {};

/**
 * Find test (html) files recursively starting at the given path.
 *
 * @param {String} path
 * @return {Array}
 */

function getTestFiles(path) {
    var files = [];

    if ( fs.exists(path) && fs.isFile(path) && utils.fileExt(path) === 'html' ) {
        files.push(path);
    } else if ( fs.isDirectory(path) ) {
        fs.list(path).forEach(function(file) {
            if (file !== '.' && file !== '..') { // Avoid loops.
                files = files.concat( getTestFiles(path + slash + file) );
            }
        });
    }

    return files;
};

/**
 * Get the two closest parent directories of the given file as a path segment.
 * @todo Rename this function.
 *
 * @param {String} filePath
 * @return {String}
 */

function getFileName(filePath) {
    var fileName = '';

    if ( fs.exists(filePath) && fs.isFile(filePath) ) {
        var segments = filePath.split(slash);
        var endpoint = segments.length - 1;

        fileName = segments[endpoint - 1] + slash + segments[endpoint];

        if ( fileName.match(/index.html$/) ) {
            fileName = segments[endpoint - 2] + slash + segments[endpoint - 1];
        }
    } else {
        fileName = false;
    }

    return fileName;
}

/**
 * Format the name of the screenshot image to be written to disk. This is not
 * called directly but is invoked by PhantomCSS.
 *
 * @param {String} root
 * @param {String} fileName
 * @return {String}
 */

function formatFileName(root, fileName) {
    var name;

    fileName = fileName || 'screenshot';
    name = root + slash + fileName;

    if ( fs.isFile(name + '.png') ) {
        return name + '.diff.png';
    } else {
        return name + '.png';
    }
}

/**
 * Uniquely identify the elements to take screenshots of. Works around 
 * limitations in PhantomCSS’s selector-based screenshot API.
 *
 * @return {Number}
 */

clientHelpers.prepareScreenshots = function prepareScreenshots() {
    var tests = document.querySelectorAll('.c-test');

    // Set a decimal counter format to help label screenshot names, starting at
    // 1.1 (test 1, case 1).
    var testCount = 1;
    var caseCount = 1;

    // Global count of tests, zero-indexed.
    var shotCount = 0;

    [].forEach.call(tests, function(test, index) {
        // We want screenshots of all the test beds.
        var targets = test.querySelectorAll('.c-test__run');

        [].forEach.call(targets, function(target) {
            // Set the unique screenshot id
            target.setAttribute('data-shot-id', shotCount);

            target.setAttribute('data-shot-counter', testCount + '.' + caseCount);

            caseCount++;
            shotCount++;
        });

        // When we move to the next test, reset the case count, e.g. 1.4 → 2.1.
        testCount++;
        caseCount = 1;
    });

    // Return only the number of test cases to take screenshots of. PhantomJS 
    // can’t return DOM objects from the client, only builtins.
    return document.querySelectorAll('[data-shot-id]').length;
}

/**
 * Get the test author’s supplied screenshot name from the test html or use a 
 * fallback if none was found.
 *
 * @param {Number} index The zero-based index of the desired screenshot target
 * @param {String} fallback The fallback name if manual name was found
 * @return {String}
 */

clientHelpers.getScreenshotName = function getScreenshotName(index, fallback) {
    var subject = document.querySelector('[data-shot-id="' + index + '"]');
    var counter = subject.getAttribute('data-shot-counter');

    // Look for test cases with `data-shot-name` supplied by the test author. 
    var name = subject.getAttribute('data-shot-name') || false;

    // Build the screenshot name from the supplied name and the decimal counter,
    // e.g. '1.2-supplied-name'.
    return counter + '-' + (name ? name : fallback);
}


// Based on the CLI scope option, determine which test files to run tests
// against. Scope must be a two-part path segement, e.g. 'components/arrange'.
if (scope && scope !== 'all') {
    testFiles = [visualTestsDir + slash + scope + slash + 'index.html'];
} else {
    testFiles = getTestFiles(visualTestsDir);
}


// Receive console.log messages from the Phantom client and echo them to the
// Casper CLI.
casper.on('remote.message', function(message) {
    this.echo('Remote console.log: ' + message);
});


// Boot PhantomCSS and set the file name formatter.
phantomcss.init({
    libraryRoot: '../../node_modules/phantomcss',
    screenshotRoot: '../fixtures/screenshots',
    fileNameGetter: formatFileName
});

// End the pre-roll setup. Test suite will run next.
casper.test.done();
