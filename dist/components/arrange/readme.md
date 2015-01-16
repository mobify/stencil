# Arrange Component

Arrange and align a row of items with a lot of control. Provides a declarative, robust cross-browser way of using flexbox.


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Arrange Component into your project with Sass:

```
    @import '../bower_components/mobify-stencil/dist/components/arrange/arrange';
```


## Using the Arrange Component

Shrink Arrange items to a minimum size with the `.c--shrink` modifier.

Top align Arrange items with the `.c--align-top` modifier.

Vertically center align Arrange items with the `.c--align-middle` modifier.

Bottom align Arrange items with the `.c--align-bottom` modifier.

Set the display order of Arrange items with the `.c--order-{number}` modifier, replacing `{number}` with the order number.

Apply gutters with the `.c--gutters` modifier.

Additionally, Arrange items support the use of [dimension utilities](https://mobify.github.io/stencil/visual/utils/dimension/) such as `.u-width-1of2`.


### Example Markup

```
    <div class="c-arrange c--align-middle c--gutters">
        <div class="c-arrange__item">…</div>
        <div class="c-arrange__item">…</div>
        <div class="c-arrange__item c--shrink">…</div>
    </div>
```

## Demo

Example of the [Arrange Component](https://mobify.github.io/stencil/visual/components/arrange/index.html)


## Attribution

https://github.com/suitcss/components-arrange/
