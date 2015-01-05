# Grid Component

Provides a framework for laying out items in a regular grid.


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Grid Component into your project with Sass:

```
    @import '../bower_components/mobify-stencil/dist/components/grid/grid';
```

## Using the Grid Component

To add gutters to the grid, the modifier `.c--gutters` can be used.

Horizontal and vertical gutter sizes can be set by configuring the `$grid__h-gutter` and `$grid__v-gutter` variables.

### Example Markup

```
    <div class="c-grid c--{n}up">
        <div class="c-grid__span">
        <div class="c-grid__span">
        <div class="c-grid__span">
    </div>
```


## Demo

Example of the [Grid Component](https://mobify.github.io/stencil/visual/components/grid/index.html)

## Attribution

https://github.com/suitcss/components-grid/
