
var fs = require('fs');
var utils = require('utils');
var phantomcss = require('../../node_modules/phantomcss/phantomcss.js');
var clientHelpers = {};

function getFileName(filePath) {
    var fileName = '';

    if ( fs.exists(filePath) && fs.isFile(filePath) ) {
        var segments = filePath.split(fs.separator);
        fileName = segments[segments.length - 1];


        if ( fileName.slice(0, fileName.indexOf('.') ) === 'index' ) {
            fileName = segments[segments.length - 2];
        }
    } else {
        fileName = false;
    }

    return fileName;
}

function getTestFiles(path) {
    var files = [];

    if ( fs.exists(path) && fs.isFile(path) && utils.fileExt(path) === 'html' ) {
        files.push(path);
    } else if ( fs.isDirectory(path) ) {
        fs.list(path).forEach(function(file) {
            if (file !== '.' && file !== '..') { // Avoid loops.
                files = files.concat( getTestFiles(path + '/' + file) );
            }
        });
    }

    return files;
};

clientHelpers.prepareScreenshots = function prepareScreenshots() {
    var tests = document.querySelectorAll('.c-test');
    var testCount = 1;
    var caseCount = 1;
    var shotCount = 0;

    [].forEach.call(tests, function(test, index) {
        var targets = test.querySelectorAll('.c-test__run');

        [].forEach.call(targets, function(target) {
            target.setAttribute('data-shot-id', shotCount);
            target.setAttribute('data-shot-counter', testCount + '.' + caseCount);

            caseCount++;
            shotCount++;
        });

        caseCount = 1;
        testCount++;
    });

    return document.querySelectorAll('[data-shot-id]').length;
}

clientHelpers.getScreenshotName = function getScreenshotName(testFile, index) {
    var subject = document.querySelector('[data-shot-id="' + index + '"]');
    var counter = subject.getAttribute('data-shot-counter');
    var name = subject.getAttribute('data-shot-name') || false;

    return testFile + '/' + counter + '-' + (name ? name : testFile);
}

phantomcss.init({
    libraryRoot: '../../node_modules/phantomcss',
    screenshotRoot: './screenshots',
    fileNameGetter: function(root, fileName) {
        var name;

        fileName = fileName || 'screenshot';
        name = root + fs.separator + fileName;

        if ( fs.isFile(name + '.png') ) {
            return name + '.diff.png';
        } else {
            return name + '.png';
        }
    }
});

casper.on('remote.message', function(message) {
    this.echo('Remote console.log: ' + message);
});

casper.start().zoom(2).viewport(1200, 1200);

var visualTestsDir = '../visual';
var singleTest = casper.cli.options.only || false;
var testFiles = [];
var slash = fs.separator;

if (singleTest) {
    testFiles = [visualTestsDir + slash + singleTest + slash + 'index.html'];
} else {
    testFiles = getTestFiles(visualTestsDir);
}

testFiles.forEach(function(path) {
    if ( !fs.exists(path) || !fs.isFile(path) ) {
        throw new Error('Visual test not found. Make sure you pass type and path e.g. components/arrange');
    }

    var file = getFileName(path);

    casper.thenOpen(path);

    casper.then(function takeScreenshots() {
        var shotCount = this.evaluate(clientHelpers.prepareScreenshots);

        for (var i = 0; i < shotCount; i++) {
            var shotName = this.evaluate(clientHelpers.getScreenshotName, file, i);

            phantomcss.screenshot('[data-shot-id="' + i + '"]', shotName);
        };
    });
});

casper.then(function compare() {
    phantomcss.compareAll();
});

casper.then(function done() {
    casper.test.done();
});

casper.run(function() {
    console.log('\nDone.');
    phantom.exit( phantomcss.getExitStatus() );
});
