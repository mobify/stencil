# Ratio Component

Fluid-width element with an intrinsic width/height ratio. Can also be used to make video content fit the width of its container. Also works well for featured areas with small and predictable text content – for example, a hero block with a background image and (maybe) a title.

Ratio is square by default and ships with 4 × 3 and 16 × 9 ratios as modifier classes. Create custom ratios by defining additional modifiers.

Additional background on this technique and example use cases can be found in the following articles:

* http://alistapart.com/article/creating-intrinsic-ratios-for-video/
* http://daverupert.com/2012/04/uncle-daves-ol-padded-box/


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Ratio Component into your project with Sass:

```scss
@import '../bower_components/mobify-stencil/dist/components/ratio/ratio';
```


## Using the Ratio Component

The ratio is 1×1 by default, and can be applied on just about any type of media available in HTML.


### Example Markup

```html
<!-- iframes -->
<div class="c-ratio">
    <iframe class="c-ratio__item"></iframe>
</div>

<!-- Embeds -->
<div class="c-ratio">
    <embed class="c-ratio__item"></embed>
</div>

<!-- Images -->
<div class="c-ratio">
    <img src="#" class="c-ratio__item" />
</div>
```


### Options

To constrain the ratio to 4:3 (SD Video) the `.c--4by3` modifier can be used.

```html
<!-- 4 by 3 ratio -->
<div class="c-ratio c--4by3">
    <img src="#" class="c-ratio__item" />
</div>
```

To constrain the ratio to 16:9 (HD Video) the `.c--16by9` modifier can be used.

```html
<!-- 16 by 9 ratio -->
<div class="c-ratio c--16by9">
    <img src="#" class="c-ratio__item" />
</div>
```

Additionally, you can constrain the ratio even further using `max-height` on the `c-ratio` wrapper. In this case, the ratio stencil behaves as if it is a minimum ratio, which can then widen to any width after hitting the max-height value.

See the example markup below, or a [live example here](https://mobify.github.io/stencil/visual/components/ratio/index.html).

```html
<!-- Under a height of 200px, this will be a 1 by 1 square. Larger than that,
     it will fill the width as needed while staying the same height. -->
<div class="c-ratio" style="max-height: 200px">
    <img src="#" class="c-ratio__item" />
</div>
```


## Demo

Visual examples of the [Ratio Component](https://mobify.github.io/stencil/visual/components/ratio/index.html)


## Attribution

* https://github.com/suitcss/components-flex-embed
