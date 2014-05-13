
var phantomcss = require('../../node_modules/phantomcss/phantomcss.js');
var shotCount = 0;

function tagAndCountTests() {
    var tests = document.querySelectorAll('.c-test');

    [].forEach.call(tests, function(test, index) {
        test.setAttribute('data-test-id', index);
    });

    return document.querySelectorAll('[data-test-id]').length;
}

function getScreenshotName(index) {
    var test = document.querySelector('[data-test-id="' + index + '"]');
    var testDescription = test.querySelector('.c-test__describe').textContent;

    return testDescription
        .trim()
        .replace('.', '')
        .replace(/(\W)+/g, '-')
        .toLowerCase();
}

phantomcss.init({
    libraryRoot: 'node_modules/phantomcss',
    screenshotRoot: 'test/regression/screenshots',
    failedComparisonsRoot: 'test/regression/screenshots/failures',
    fileNameGetter: function(root, fileName) {
        var name;

        fileName = fileName || "screenshot";
        shotCount++;
        name = root + fs.separator + shotCount + '-' + fileName;

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


casper
    .start()
    .zoom(2)
    .viewport(1200, 1200);

casper.thenOpen('http://localhost:8000/test/tests/components/arrange/');

casper.then(function() {
    testCount = this.evaluate(tagAndCountTests);

    for (var i = 0; i < testCount; i++) {
        var screenshotName = this.evaluate( getScreenshotName, i );

        phantomcss.screenshot('[data-test-id="' + i + '"]', screenshotName);
    };
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
