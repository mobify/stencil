
// See _begin.js for preroll prep work.

// Start a browser session and prep for retina screenshots.
casper.start().zoom(2).viewport(1200, 1200);

// For each test file found in preroll, iterate over the elements under test and
// take screenshots.
testFiles.forEach(function(path) {
    if ( !fs.exists(path) || !fs.isFile(path) ) {
        throw new Error('Visual test not found. Make sure you pass type and path e.g. components/arrange');
    }

    var file = getFileName(path);

    casper.thenOpen(path);

    casper.then(function takeScreenshots() {
        // Find the elements to shoot in the DOM.
        var shotCount = this.evaluate(clientHelpers.prepareScreenshots);

        for (var i = 0; i < shotCount; i++) {
            var fallback = file.replace('/', '-');

            // Get the final formatted filename for the screenshot.
            var shotName = file + slash + this.evaluate(
                clientHelpers.getScreenshotName, i, fallback
            );

            // Take the screenshot and save to disk.
            phantomcss.screenshot('[data-shot-id="' + i + '"]', shotName);
        };
    });
});

// End the test suite. Test postroll will run next.
casper.test.done();
