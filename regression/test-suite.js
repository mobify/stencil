
casper.start().zoom(2).viewport(1200, 1200);

testFiles.forEach(function(path) {
    if ( !fs.exists(path) || !fs.isFile(path) ) {
        throw new Error('Visual test not found. Make sure you pass type and path e.g. components/arrange');
    }

    var file = getFileName(path);

    casper.thenOpen(path);

    casper.then(function takeScreenshots() {
        var shotCount = this.evaluate(clientHelpers.prepareScreenshots);

        for (var i = 0; i < shotCount; i++) {
            var fallback = file.replace('/', '-');
            var shotName = file + slash + this.evaluate(
                clientHelpers.getScreenshotName, i, fallback
            );

            phantomcss.screenshot('[data-shot-id="' + i + '"]', shotName);
        };
    });
});

casper.test.done();
