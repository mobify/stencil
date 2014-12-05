# Ratio Component

Fluid-width element with an intrinsic width/height ratio. Can also be used to make video content fit the width of its container. Also works well for featured areas with small and predictable text content – for example, a hero block with a background image and (maybe) a title.

Ratio is square by default and ships with 4 × 3 and 16 × 9 ratios as modifier classes. Create custom ratios by defining additional modifiers.

Additional background on this technique and example use cases can be found in the following articles:

http://alistapart.com/article/creating-intrinsic-ratios-for-video/

http://daverupert.com/2012/04/uncle-daves-ol-padded-box/

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

To constrain the ratio to 4:3 (SD Video) the `.c--4by3` modifier can be used.

To constrain the ratio to 16:9 (HD Video) the `.c--16by9` modifier can be used.


## Demo

Visual examples of the [Ratio Component](https://mobify.github.io/stencil/visual/components/ratio/index.html)


## Attribution

https://github.com/suitcss/components-flex-embed
