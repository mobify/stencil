
var fs = require('fs');
var utils = require('utils');
var phantomcss = require('../../node_modules/phantomcss/phantomcss.js');

var visualTestsDir = '../visual';
var clientHelpers = {};

function getParentDir(filePath) {
    if ( fs.exists(filePath) && fs.isFile(filePath) ) {
        var segments = filePath.split(fs.separator);
        return segments[segments.length - 2];
    }
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

clientHelpers.getScreenshotName = function getScreenshotName(index) {
    var subject = document.querySelector('[data-shot-id="' + index + '"]');
    var prefix = subject.getAttribute('data-shot-counter');
    var suffix = subject.getAttribute('data-shot-name') || false;

    return prefix + '-' + (suffix ? suffix : 'arrange');
}

phantomcss.init({
    libraryRoot: '../../node_modules/phantomcss',
    screenshotRoot: './screenshots',
    failedComparisonsRoot: './failures',
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

casper.on('remote.message', function clientLog(message) {
    this.echo('Remote console.log: ' + message);
});

casper
    .start()
    .zoom(2)
    .viewport(1200, 1200);

// var testFiles = getTestFiles(visualTestsDir);
var testFiles = ['../visual/components/arrange/index.html'];

testFiles.forEach(function(file) {
    casper.log( getParentDir(file) , 'error');

    casper.thenOpen(file);

    casper.then(function takeScreenshots() {
        var shotCount = this.evaluate(clientHelpers.prepareScreenshots);

        for (var i = 0; i < shotCount; i++) {
            var shotName = this.evaluate(clientHelpers.getScreenshotName, i);

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
