# Progress Steps Component

Helps to show users where they exist within a multiple-page workflow, such as a checkout flow.


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Progress Steps Component into your project with Sass:

```
@import '../bower_components/stencil/dist/components/progress-steps';
```

## Using the Progress Component

### Example Markup

```
<div class="c-progress-steps" role="progressbar" aria-valuetext="Step {currentStep} of {maxStep}" aria-valuenow="{currentStep}">
    <div class="c-progress-steps__item {stepClass} {?isComplete}c--completed{/isComplete}" aria-hidden="true">
        <span class="c-progress-steps__step-index">{index}</span>
        <span class="c-progress-steps__step-label">{label}</span>
    </div>
</div>
```

### Options

The padding of a step can be set with the configurable variable `$progress-steps__item-padding`

The background color of the steps can be set with the configurable variable `$progress-steps__item-bg-color`

The background color of the current step can be set with the configurable variable  `$progress-steps__current-bg-color`

The background color of completed steps can be set with the configurable variable  `$progress-steps__completed-bg-color`

The angle of the chevron arrow can be configured with the configurable variables `$progress-steps__divider-angle` and `$progress-steps__divider-width`

The dividing line of the chevron can be configured with the configurable variables `$progress-steps__divider-border-thickness` and `$progress-steps__divider-border-color`

## Demo

Visual examples of the [Progress Component](https://mobify.github.io/stencil/visual/components/progress-steps/index.html)
