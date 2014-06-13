
casper.then(function compare() {
    phantomcss.compareSession();
});

casper.then(function done() {
    casper.test.done();
});

casper.run(function() {
    console.log('\nDone.');
    phantom.exit( phantomcss.getExitStatus() );
});
