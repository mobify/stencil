# Ratio Component

Fluid-width element with an intrinsic width/height ratio. Create custom ratios by defining additional modifiers.


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Ratio Component into your project with Sass:

```
@import '../bower_components/stencil/dist/components/ratio';
```

## Using the Ratio Component

The ratio is 1×1 by default. `max-height` can be used to constrain the ratio.

### Example Markup

```
<div class="c-ratio c--16by9">
    [<el class="c-ratio__item">|<iframe>|<object>|<embed>]
</div>
```

### Options

To constrain the ratio to 4:3 (SD Video) `.c--4by3` modifier can be used.

To constrain the ratio to 16:9 (HD Video) `.c--16by9` modifier can be used.


## Demo

Visual examples of the [Ratio Component](https://mobify.github.io/stencil/visual/components/ratio/index.html)

## Attribution

https://github.com/suitcss/components-flex-embed
