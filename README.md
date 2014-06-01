# stencil

A collection of loosely-coupled composable UI components for mobile browsers.

- Describe components and utilities
- Explain loosely-coupled
- Explain composable
- Link to more docs? E.g. naming conventions?

## Prerequisites

Stencil is written in Sass, and requires Sass 3.3. For development prerequisites, see the section on Contributing.

## Installation

Install with [Bower](http://bower.io):

```
bower install --save mobify/stencil
```

## Usage


### Importing Stencil partials

Although all components are packaged together for easy installation, you’ll need to import what you want to use from within your project’s Sass. This is easy using the `@import` directive. If you have a stylesheet at my-project/styles/main.scss, your import statement will look something like this:

```scss
@import '../bower_components/stencil/dist/components/grid/grid';
```

It’s recommended to import Stencil’s components after your Sass variables and before any of your local project components. This allows you control over Stencil’s variables while allowing you to build on the foundation Stencil provides.

### Implementing a Stencil component

Once you’ve imported a component, you use it by copying the basic HTML patterns listed with each component’s example template, e.g. stencil/dist/components/grid/grid.dust. Stencil is built as robustly as possible, so if your document semantics require different tag names, no problem.

Stencil components aim to provide a lot of the stuff you use on every project and none of the rest, so you’ll want to apply your own styles on top of Stencil. To build on what Stencil provides, simply write your own stylesheet that targets existing Stencil classes. This is most useful for applying the theme layer such as colours, borders, backgrounds and other non-structural styles. You’re encouraged to override existing Stencil style declarations if you need to, but you shouldn’t find yourself doing it broadly. If you’re running into that problem, please [file an issue](#).

You can also configure a Stencil component by providing alternate values for its variables. Define these in your project’s Sass, before you import Stencil components. Your values will be used without having to write any overrides.

Add another page with extended usage tips, including:
    - configuring with Grunt and grunt-contrib-sass
    - adding bower_components to the Sass load path to shorten import statements.


## License

MIT
