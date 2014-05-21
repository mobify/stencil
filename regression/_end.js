
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
