
var fs = require('fs');
var utils = require('utils');
var phantomcss = require('../../node_modules/phantomcss/phantomcss.js');
var clientHelpers = {};
var visualTestsDir = '../visual';
var scope = casper.cli.options.scope || false;
var testFiles = [];
var slash = fs.separator;

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

function getFileName(filePath) {
    var fileName = '';

    if ( fs.exists(filePath) && fs.isFile(filePath) ) {
        var segments = filePath.split(slash);

        fileName = segments[segments.length - 1];

        if ( fileName.slice(0, fileName.indexOf('.') ) === 'index' ) {
            fileName = segments[segments.length - 2];
        }
    } else {
        fileName = false;
    }

    return fileName;
}

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

clientHelpers.getScreenshotName = function getScreenshotName(index, fallback) {
    var subject = document.querySelector('[data-shot-id="' + index + '"]');
    var counter = subject.getAttribute('data-shot-counter');
    var name = subject.getAttribute('data-shot-name') || false;

    return counter + '-' + (name ? name : fallback);
}

if (scope && scope !== 'all') {
    testFiles = [visualTestsDir + slash + scope + slash + 'index.html'];
} else {
    testFiles = getTestFiles(visualTestsDir);
}

casper.on('remote.message', function(message) {
    this.echo('Remote console.log: ' + message);
});

phantomcss.init({
    libraryRoot: '../../node_modules/phantomcss',
    screenshotRoot: '../fixtures/screenshots',
    fileNameGetter: formatFileName
});

casper.test.done();
    
