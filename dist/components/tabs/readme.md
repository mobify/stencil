# Tabs Component

There are two parts with tabs component, one is tabs controls and tabs body.
Tabs controls list all tab buttons, placed in one line. Tabs body is tabs
content in tabs body.


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Tabs Component into your project with Sass:

```
    @import '../bower_components/stencil/dist/components/tabs';
```


## Using the Tabs Component

List of tabs buttons in tabs controls and tabs content in tabs body. There is overflow
scroll in tabs controls so the content in tabs wont be squished.


### Markup

```
    {#tabs}
    <div class="c-tabs">
        <ul class="c-tabs__controls" role="tablist" aria-label="{tabsLabel}">
            {#tabsControlsItems}
            <li class="c-tabs__controls-item {currentClass}">
                <button class="c-tabs__button" data-target="{tabsTarget}" aria-label="{tabsTitle}">{tabsTitle}</button>
            </li>
            {/tabsControlsItems}
        </ul>

        <div class="c-tabs__body">
            {#tabsBody}
            <section class="c-tabs__item {currentClass}" id="{tabsTrigger}">
                <h2 class="c-tabs__title u-hide-visually">{tabsTitle}</h2>
                <div class="c-tabs__content">
                    {tabsContent}
                </div>
            </section>
            {/tabsBody}
        </div>
    </div>
    {/tabs}
```


## Demo

Example of the [Tabs Component](https://mobify.github.io/stencil/visual/components/tabs/index.html)
