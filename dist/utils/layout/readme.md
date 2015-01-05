# Layout Utilities

Layout utilities are classes that aid in achieving layout positioning. These include:

* Floating: Float elements left or right
* Clearfix: Clearfix your floats
* Positioning: Add relative positioning
* Box Context: Control the behaviour of floats by declaring a block context boundary


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the utility into your project with Sass:

```
@import '../bower_components/mobify-stencil/dist/utils/layout/layout';
```


## Using the Layout Utility


### Example Markup

```html
<!-- Floating and Clearfixing -->
<div class="u-clearfix">
    <div class="u-float-start">I'm floating left (or toward the start)!</div>
    <div class="u-float-end"> I'm floating right (or toward the end)!</div>
</div>

<!-- Position Context (applies position: relative) -->
<div class="u-position-context">
    <!-- An absolutely positioned element -->
</div>

<!-- Block Context (applies overflow: hidden) -->
<div class="u-block-context">
    <div class="u-clearfix">
        <div class="u-float-start">Left floated element</div>
        <div class="u-block-context">
            This block won't flow beneath the float object because it is contained
            via the `overflow: hidden` property.
        </div>
    </div>
</div>
```


## Demo

Visual examples of the [Layout Utility](https://mobify.github.io/stencil/visual/utils/layout/index.html)


## Attribution

- https://github.com/suitcss/utils-layout
- http://www.smashingmagazine.com/2013/10/21/challenging-css-best-practices-atomic-approach/
