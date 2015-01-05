# Spacing Utilities

Spacing applies a margins in any of the four directions:

- Top
- Bottom
- "Start" (left)
- "End" (right)

This spacing can be applied in a range of sizes. Default settings allow for the following sizes:

- Horizontal Spacing `u-margin-top-{size}` or `u-margin-bottom-{size}`
    - `0`:  none
    - `th`: thick space (about 1.5× a “normal” word space)
    - `en`: en space (half an em)
    - `em`: em space
    - `s`:  small
    - `m`:  medium
    - `l`:  large

- Vertical Spacing  `u-margin-start-{size}` or `u-margin-end-{size}`
    - `0`: none
    - `s`: small
    - `m`: medium
    - `l`: large


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the utility into your project with Sass:

```
@import '../bower_components/mobify-stencil/dist/utils/spacing/spacing';
```


## Using the Spacing Utility


### Example Markup

```html
<!-- Example horizontal spacing -->
<h1 class="u-margin-top-s u-margin-bottom-l">Welcome</h1>

<!-- Example vertical spacing -->
<span class="c-icon u-margin-start-en"></span> Menu
```


## Demo

Visual examples of the [Spacing Utility](https://mobify.github.io/stencil/visual/utils/spacing/index.html)
