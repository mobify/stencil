# Product Component


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Product Component into your project with Sass:

```
    @import '../bower_components/stencil/dist/components/product';
```

## Using the Product Component

### Example Markup

```
<div class="c-product {?isHighlight}c--highlight{/isHighlight}" role="group">
    <a class="c-product__title" href="{url}" title="{title}" rel="external">
        <h2>{title}</h2>
    </a>

    {#image}
        <div class="c-product__image">
            <a href="{url}" title="{title}" rel="external">
                <img src="{path}" alt="{title}" />
            </a>
        </div>
    {/image}

    <span class="c-product__price" aria-label="Price is {price}">{price}</span>

    {#isDiscount}
        <span class="c-product__price" aria-label="Old price is {price}">{oldPrice}</span>

        <s class="c-product__price c--discount" aria-label="New discounted price is {price}">{discountPrice}</s>
    {/isDiscount}

    <div class="c-product__controls">
        {colors} <!-- its own component -->
        {sizes} <!-- its own component -->
        {quantity} <!-- its own component -->
        {ratings} <!-- its own component -->
    </div>

    <div class="c-product__information">
        <p>Information here</p>
    </div>

    <div class="c-product__action">
        {addToCart} <!-- button component -->
    </div>
</div>
```

### Options

`c--highlight` modifier will highlight product item


## Demo

Visual examples of the [Product Component](https://mobify.github.io/stencil/visual/components/product/index.html)
