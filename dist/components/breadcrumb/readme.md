# Breadcrumb Component

Breadcrumbs are a group of navigation links that helps users keep track of
their location within the site.


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Breadcrumb Component into your project with Sass:

```
    @import '../bower_components/mobify-stencil/dist/components/breadcrumb/breadcrumb';
```

## Using the Breadcrumb Component

The breadcrumb `.c-breadcrumb__item` class is most often put on either the breadcrumb `<a>` tag itself, or the breadcrumb anchor's `<li>` tag.

For alternate styling of the current item, the modifier `.c--current` can be used.

### Example Markup

```
    <nav class="c-breadcrumb">
        <ol>
            {#breadcrumb}
                <li class="c-breadcrumb__item">
                    <a href="…">…</a>
                </li>
            {/breadcrumb}
        </ol>
    </nav>
```


## Demo

Example of the [Breadcrumb Component](https://mobify.github.io/stencil/visual/components/breadcrumb/index.html)
