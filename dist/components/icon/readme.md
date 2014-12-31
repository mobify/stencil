# Icon Component

Icons are font-based symbols with a wide array of meaning and utility. They can be used to convey directions, importance, social media, interface elements, and more.


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


## Using the Icon Component

An element is made into an icon by adding either the `c-icon` class, and/or adding the `data-icon-name` attribute with an existing value from the `$icon-list` map.

Optionally, you can set any icon to replace any text by adding the `c-icon--replace` class, or by setting the attribute `data-icon-replace` to true


### Configuration

The following variables need to be declared so the correct fonts load, and to assign names to all your fonts:

`$icon-font` should be the name of your font and font files. For example, if your font file is `my-icons.svg`, then you want `$icon-font: 'my-icons'`.

`$icon-font-path` is the path to your icon font files.

`$icon-font-list` is the list (called a map in Sass) of font names with their associated unicode address. For example:

```
$icon-font-list: (
    menu: '/00e1',
    plus: '/00e2',
    minus: '/00e3',
    twitter: '/00e4',
    facebook: '/00e5',
    // etc.
);
```

These variables should be declared prior to the icon `@import`.


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
