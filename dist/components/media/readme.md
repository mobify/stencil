# Media Component

The media object, implemented using flexbox.


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Media Component into your project with Sass:

```
    @import '../bower_components/mobify-stencil/dist/components/media/media';
```

## Using the Media Component

### Example Markup

```
    <div class="c-media">
        <div class="c-media__figure">
            <img src="{src}" alt="{alt}">
        </div>
        <div class="c-media__body">
            {content}
        </div>
    </div>
```

### Options

To vertically center the figure and body, the `.c--align-middle` modifier can be used.

To reverse the display order of the figure and body, the `.c--reversed` modifier can be used.


## Demo

Visual examples of the [Media Component](https://mobify.github.io/stencil/visual/components/media/index.html)

## Attribution

http://philipwalton.github.io/solved-by-flexbox/demos/media-object/
http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/
