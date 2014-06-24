stencil
=======

## Installation

Install with [Bower](http://bower.io):

```
bower install --save mobify/stencil
```

## Testing

### Setting up our visual testing suite

- Important: Install CasperJS and its dependency PhantomJS. These are not package-managed and must be installed separately. This is especially true since the test suite requires the latest dev version of CasperJS to work correctly. Use only the “install with Git” instructions on this page: http://docs.casperjs.org/en/latest/installation.html
- Verify that Casper is installed by typing `casperjs` on the command line. You should see a message with the Casper and Phantom version numbers
- In the Stencil directory, run `npm install`.

### Running tests

- In the stencil directory, run `grunt test` to run all tests. This may take some time as it will run through visual diffs for all components provided in Stencil.
- If you want to test a single component, run `grunt test:components/arrange` where `components/arrange` is the directory of the component you want to test.
- Verbose terminal output is on by default. You can suppress this by appending `:terse` to the end of your grunt command, e.g. `grunt test:components/arrange:terse`.
