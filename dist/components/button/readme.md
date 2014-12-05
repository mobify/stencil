# Button Component

Buttons are actionable UI elements that typically are used to draw attention to one kind of behaviour or another. For example "Save", "Submit" or "Purchase".


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Media Component into your project with Sass:

```scss
@import '../bower_components/stencil/dist/components/button';
```


## Using the Button Component


### Example Markup

```html
<!-- Using an Anchor Tag -->
<a class="c-button" href="#">Anchor Button</a>

<!-- Using an Input Tag -->
<input class="c-button" type="submit" value="Submit Button" />

<!-- Using an Button Tag -->
<button class="c-button">Button Button</button>
```


### Options

By default, there are no options. However, it is common practice to extend the button component with modifiers on a project to project basis. For example...

* `c--primary` – think of a prominent "Buy Now" button
* `c--secondary` - buttons that aren't plainly styled, but aren't a primary action
* `c--big` – larger fonts and padding than normal buttons
* `c--small` – smaller fonts and padding than normal buttons


## Demo

Visual examples of the [Button Component](https://mobify.github.io/stencil/visual/components/button/index.html)


## Attribution

- https://github.com/suitcss/components-button/
