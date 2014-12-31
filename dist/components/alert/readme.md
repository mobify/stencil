# Alert Component

The alert box is a dialogue block used to convey important, high priority information to users.

## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Alert Component into your project with Sass:

```
    @import '../bower_components/mobify-stencil/dist/components/alert/alert';
```

## Using the Alert Component

Text that only communicates crucial information but does not require user action can use the neutral base alert.

Text that conveys a sense of "success" or affirmation can use the `.c--success` modifier.

Text that a sense of serious urgency, or "failure" (and generally requires user action) can use the `.c--error` modifier.

### Markup

```
    <div class="c-alert">
        {message}
    </div>
```

## Demo

Example of the [Alert Component](https://mobify.github.io/stencil/visual/components/alert/index.html)
