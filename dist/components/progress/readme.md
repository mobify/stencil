# Progress Component

Helps to show users where they exist within a multiple-page workflow, such as a checkout flow.


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Progress Component into your project with Sass:

```
@import '../bower_components/stencil/dist/components/progress';
```

## Using the Progress Component

### Example Markup

```
<div class="c-progress" role="progressbar" aria-valuetext="Step {currentStep} of {maxStep}" aria-valuenow="{currentStep}">
    <div class="c-progress__step" aria-hidden="true">
        <div class="c-progress-step__item {stepClass} {?isComplete}c--completed{/isComplete}">
            <span class="c-progress-step__index">{index}</span>
            <div class="c-progress-step__label">{label}</div>
        </div>
    </div>
</div>
```

### Options

The background color of the current step can be set with the configurable variable  `$progress__current-bg-color`

The background color of a completed step can be set with the configurable variable  `$progress__completed-bg-color`


## Demo

Visual examples of the [Progress Component](https://mobify.github.io/stencil/visual/components/progress/index.html)

## Attribution
