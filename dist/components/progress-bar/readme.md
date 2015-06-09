# Progress Bar

Progress bar is used to indicate a progress of something.


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Spline is required when using the icon stencil, so be sure to include the following import:

```
@import '../bower_components/spline/spline/dist/spline'
```

Use the following to import the Icon Component into your project with Sass:

```
@import '../bower_components/mobify-stencil/dist/components/icon/icon';
```


## Using the Progress Bar Component

Progress-bar requires `u-visually-hidden` utility imported to the project. This utility is used for accessibility reason - it visually hides **'Progress is 45%'** that is remained for the screen-readers.


### Example Markup

```
    <div class="c-progress-bar">
        <span class="c-progress-bar__progress" style="width: 45%" >
            <span class="u-visually-hidden">Progress is 45%</span>
        </span>
    </div>
```

## Demo

Example of the [Progress-Bar Component](https://mobify.github.io/stencil/visual/components/progress-bar/index.html)
