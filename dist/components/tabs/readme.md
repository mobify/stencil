# Tabs Component

There are two parts with tabs component: tabs controls and tabs body.
Tabs controls list all tab buttons, placed in one line. Tabs body is tabs
content in tabs body.


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Tabs Component into your project with Sass:

```
    @import '../bower_components/mobify-stencil/dist/components/tabs/tabs';
```


## Using the Tabs Component

List of tabs buttons in tabs controls and tabs content in tabs body. There is overflow
scroll in tabs controls so the content in tabs wont be squished.


### Markup

```
    {?tabs}
        <div class="c-tabs" role="tab">
            <ul id="c-tab-controls" class="c-tabs__controls" role="tablist">
                {#tabs}
                    <li class="c-tabs__controls-item {class}">
                        <button class="c-tabs__button" data-target="{id}" aria-label="{title}" type="button">{title}</button>
                    </li>
                {/tabs}
            </ul>

            <div class="c-tabs__body" role="tabpanel" aria-controls="c-tab-controls">
                {#tabs}
                    <section class="c-tabs__content {class}" id="{id}">
                        <h2 class="u-hide-visually">{title}</h2>
                        {content}
                    </section>
                {/tabs}
            </div>
        </div>
    {/tabs}
```


## Demo

Example of the [Tabs Component](https://mobify.github.io/stencil/visual/components/tabs/index.html)
