# Stencil

Customizable, composable and testable UI components and utilities for mobile browsers.

Stencil provides a set of building blocks for mobile UI that helps you implement common patterns faster, more reliably, and without dictating design specifics. It also provides a set of conventions based on modular and object-oriented approaches to CSS that allow you to build your own robust, testable components.


## Table of Contents

### Components

Stencil components are common, frequently used patterns that either make up UI elements (i.e. breadcrumb, button, etc.) or can be used to structure UI layouts (i.e. align, grid, etc.)

* [Alert](https://github.com/mobify/stencil/tree/master/dist/components/alert)
* [Align](https://github.com/mobify/stencil/tree/master/dist/components/align)
* [Arrange](https://github.com/mobify/stencil/tree/master/dist/components/arrange)
* [Breadcrumb](https://github.com/mobify/stencil/tree/master/dist/components/breadcrumb)
* [Button](https://github.com/mobify/stencil/tree/master/dist/components/button)
* [Grid](https://github.com/mobify/stencil/tree/master/dist/components/grid)
* [Icon](https://github.com/mobify/stencil/tree/master/dist/components/icon)
* [Media](https://github.com/mobify/stencil/tree/master/dist/components/media)
* [Ratio](https://github.com/mobify/stencil/tree/master/dist/components/ratio)
* [Select](https://github.com/mobify/stencil/tree/master/dist/components/select)
* [Stack](https://github.com/mobify/stencil/tree/master/dist/components/stack)


### Utilities

Utilities are basic CSS patterns or frequently used properties that can be used in various one-off situations to apply simple, straight-forward changes in appearance or spacing.

* [Dimension](https://github.com/mobify/stencil/tree/master/dist/utils/dimension)
* [Layout](https://github.com/mobify/stencil/tree/master/dist/utils/layout)
* [Spacing](https://github.com/mobify/stencil/tree/master/dist/utils/spacing)
* [Text](https://github.com/mobify/stencil/tree/master/dist/utils/text)
* [Visibility](https://github.com/mobify/stencil/tree/master/dist/utils/visibility)


## Requirements

Stencil is written in Sass (SCSS syntax), and requires Sass 3.4. It also relies on [Spline](http://github.com/mobify/spline) and works best when included with [Vellum](http://github.com/mobify/vellum).


## Installation

Install with [Bower](http://bower.io):

```
bower install mobify-stencil --save
```

Once installed, the Stencil library lives in your project’s `bower_components` directory. Individual components will provide a stylesheet partial (Sass) including example markup and (optionally) JavaScript.

Use the Sass `@import` directive to include a component’s styles. For example, in `my-project/styles/stylesheet.scss`, I can import the Grid component like so:

```scss
@import '../bower_components/mobify-stencil/dist/components/grid/grid';
```

Always import Stencil components *after* your Sass variables and *before* any of your own components. This ensures that Stencil receives the values you want for any of its configurable variables while allowing you to reliably build on what it provides.


## Using a Stencil component

Stencil components are like any component you build yourself, except (as with all dependecies) you should never modify them directly. You can *configure* a Stencil component’s CSS by overriding its configurable variables in your own stylesheets. You can also *extend* components by styling them as you see fit and creating new variations on existing components. Feel free to override Stencil styles as well, although Stencil tries to be as minimal as possible so you shouldn’t often need to.

One of Stencil’s advantages is that you can work more with HTML and write less custom CSS. Once your theming is in place and you’ve build any custom components you need, you might find you can compose whole screens of UI by simply writing HTML implementing the markup patterns (structure and classes) defined by the component.

Note that Stencil’s components are designed to be robust. As long as you *structure* your markup as according to a component’s example markup and apply the correct classes, you should be free to use the most appropriate, semantic HTML elements for your use case.


### Configuring and extending

Components are customizable in two ways: *configuration* and *extension*. Configure a component by setting a component’s variables *before* you import the component, and extend by adding/overriding styles or adding new modifiers *after* importing the component. The order is important, because each component will use its default values for variables unless you provide your own. For example, assume you have the following in your main stylesheet:

```scss
@import 'variables'; // Do this first, so Stencil is aware of your settings.
@import '../bower_components/mobify-stencil/dist/components/button/button'; // Import Stencil components before yours.
@import 'my-components/button'; // Add styles to Stencil components after importing them.
```

The contents of these files might look like this:

```scss
// _variables.scss

// Configure some variables for Stencil’s button:
$button-padding: 5px 10px;
$button-border-radius: 5px;
```

```scss
// my-components/_button.scss

// Override or add to a Stencil style:
.c-button {
    border: 0; // override
    background-color: hsl(200, 70%, 50%); // add
}

// Extend with a new modifier, in this case for a button that uses the site’s brand color:
.c-button.c--brand-color {
    background: $brand-color;
    color: #fff;
}
```


## Naming conventions

Stencil uses Mobify’s variation on the BEM (Block/Element/Modifier) convention. Read more about the details of the convention in our open source [CSS style guide](https://github.com/mobify/mobify-code-style/blob/master/css/Readme.md#component-oriented-naming).

Stencil adds one extra convention to this: utility classes. These special classes are conceptually a bit like a Sass mixin: they allow you to “mix in” new styles into an existing component. Unlike mixins, Stencil utility classes are applied as classes in your markup. An example of a utility class is `u-width-full`. It does exactly what you’d think: makes an element take up the full width of its container. This utility class can be used in conjunction with the Grid component (along with other width utilities) for building layout, and can also be applied for example to make buttons full-width without needing a custom full-width button modifier.

Some things to note about utility classes:

1. Utility classes should apply a focused set of CSS properties that are applicable across a wide range of components;
2. Utility classes use a `u-` prefix instead of the `c-` prefix used for a component’s class name;
3. Utility classes almost always use `!important` in their styles. This is to ensure their styles always apply on top of other styles. Use utiliy classes surgically to adjust existing components, and use with care.


## Testing

### Setting up our visual testing suite

- Important: Install CasperJS and its dependency PhantomJS. These are not package-managed and must be installed separately. This is especially true since the test suite requires the latest dev version of CasperJS to work correctly. Use only the “install with Git” instructions on this page: http://docs.casperjs.org/en/latest/installation.html
- Verify that Casper is installed by typing `casperjs` on the command line. You should see a message with the Casper and Phantom version numbers
- In the Stencil directory, run `npm install`.


### Running tests

- In the stencil directory, run `grunt test` to run all tests. This may take some time as it will run through visual diffs for all components provided in Stencil.
- If you want to test a single component, run `grunt test:components/arrange` where `components/arrange` is the directory of the component you want to test.
- Verbose terminal output is on by default. You can suppress this by appending `:terse` to the end of your grunt command, e.g. `grunt test:components/arrange:terse`.


### Working with components and utilities locally

#### Previewing Stencil

1. Ensure you have Sass 3.4+: run `sass -v`. If you have Sass < 3.4, run `gem update sass`.

2. Ensure you have Bower: run `bower -v`. If not, run `npm install -g bower`.

3. Clone git@github.com:mobify/stencil.git. Tests should be done on master.

4. On stencil directory and run `npm install && bower install`.

5. Run `grunt serve` to run testing environment locally. It will automatically recompile your stylesheets when you change them.

6. Navigate to localhost:3000.

7. Components and utilities are found in tests/visual/ directory.

#### Creating New Stencils

The process below describes how to create a new component. The steps are described using `components` but the process is identical for `utils`. When building a new utility, simply replace all references to `components` with `utils`. For example: instead of `/dist/components/component-name/component-name.scss`, it's `/dist/utils/utils-name/utils-name.scss`.

1. Create a new component folder in **/dist/component/{name-of-your-component}**

2. In your new component folder create the following files:

    _(For a good starting place, see the template files in **/templates**)_

    ```
    /dist/components/component-name
    -- _component-name.scss
    -- component-name.dust
    -- component-name.json
    -- readme.md
    ```
    Note that the `*.scss` file should be prefixed with an underscore to avoid creating an unnecessary css file.

3. Next, we should write some visual tests for our component. Create another component folder, but this time in **/tests/visual/components**

4. In your new component test folder, create an `index.html` file

    _(For a good starting place, see the `index.html` template in **/templates**)_

5. Now create a `component-name.scss` file

    _(Notice that this file should NOT have underscore in the file name. This is because we do want the `*.css` and `*.css.map` files that Sass will create)_

6. In your newly created `scss` file, import **Vellum** and your **New Component styles**

    ```
    @import 'bower_components/vellum/dist/vellum';
    @import 'dist/components/component-name/component-name';
    ```

    If you did everything correct `component-name.scss` will create `component-name.css` and `component-name.css.map` files and the Test folder will have the following structure:

    ```
    /tests/visual/components/component-name
    -- index.html
    -- component-name.css
    -- component-name.css.map
    -- component-name.scss

    ```

7. Files descriptions:

    Write your SCSS styles in the **/dist/components/_component-name.scss**

    Create and test your markup in the **/tests/visual/index.html**

    When markup is done create its dust template in the **/dist/components/component-name.dust**

    Fill json file with dummy data for dust template in **/dist/components/component-name.json**

    Write instucrions how to use this component in **/dist/components/readme.md**

## Updating `gh-pages` Online Docs

We use the `gh-pages` branch to host Stencil's visual test and make them accessible via the interwebs. In order to maintain these docs, we use [git-subtree](https://github.com/git/git/tree/master/contrib/subtree) to keep the `gh-pages` tests in sync with `master`.

Before you update the docs, make sure that `master` is fully up to date with all the latest tests and documentation.

The process is as follows:

1. Checkout the `master` branch
2. Run `git subtree split --branch gh-pages --prefix tests/`
3. Run `git push origin gh-pages`
3. Done!

What did that do? Well a subtree split effectively takes a sub-directory (in our case `tests/`) and creates a new branch (`gh-pages`) for just that directory. Of course, instead of creating a new branch, we simply pulled over only the commits from master that apply to that directory and added it to the sub-tree branch. That's why when you check out the `gh-pages` branch, the root directory consists of all the files found in the `tests/` directory of `master`.

**WARNING** do NOT directly commit to the `gh-pages` branch! This will break our ability to use the git-subtree tool. Only apply changes to `gh-pages` using the subtree tool.


## License

*MIT License. Stencil is Copyright © 2014 Mobify. It is free software and may be redistributed under the terms specified in the LICENSE file.*
