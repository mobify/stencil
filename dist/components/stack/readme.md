# Stack Component

A vertical set of items separated by space with optional dividers.


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Stack Component into your project with Sass:

```
@import '../bower_components/mobify-stencil/dist/components/stack/stack';
```


## Using the Stack Component

Gutter size and border style can be set by configuring the variables `$stack__gutter` and `$stack__border`.


### Example Markup

```
<div class="c-stack c--ruled">
    <div class="c-stack__item">
    <div class="c-stack__item">
</div>
```


### Options

To separate items with a horizontal rule, the `.c--ruled` modifier can be used.

To add a border around the group of items, the `.c--bordered` modifier can be used.

Both modifiers can be combined to apply both a border and horizontal rules `.c--ruled.c--bordered`


## Demo

Visual examples of the [Stack Component](https://mobify.github.io/stencil/visual/components/stack/index.html)
