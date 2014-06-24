
// Wrap up after each test suite run.

// If fixture screenshots exist for the tests that were run, run visual diffs
// and flag tests as pass/fail.
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
