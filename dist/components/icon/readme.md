# Icon Component

Icons are font-based symbols with a wide array of meaning and utility. They can be used to convey directions, importance, social media, interface elements, and more.


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Icon Component into your project with Sass:

```
@import '../bower_components/stencil/dist/components/icon';
```


## Using the Icon Component

An element is made into an icon by adding either the `c-icon` class, and/or adding the `data-icon-name` attribute with an existing value from the `$icon-list` map.

Optionally, you can set any icon to replace any text by adding the `c-icon--replace` class, or by setting the attribute `data-icon-replace` to true


### Markup

```
<span class="c-icon" data-icon-name="hamburger"></span>
```

Or, optionally...

```
<span class="c-icon c--replace" data-icon-name="hamburger">Menu</span>
```


## Demo

Example of the [Icon Component](https://mobify.github.io/stencil/visual/components/icon/index.html)
