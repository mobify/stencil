# Select Component

The select element is a native element that is difficult to style. This component helps fix that by wrapping the select, and forcing custom styles on top of it.


## Installation

Refer to the main [installation instructions for Stencil](https://github.com/mobify/stencil#installation).

Use the following to import the Select Component into your project with Sass:

```
@import '../bower_components/mobify-stencil/dist/components/select/select';
```


## Using the Select Component

Either use the below example markup in your dust file, or import the `_select.dust` template into your templates using the following import. Pass a string to `label` key, and pass the select element DOM to the `select` key:

```
{>select label="The Label Text" select=theSelect/}
```


### Example Markup

```
<div class="c-select">
    <select>
        <option>Value 1</option>
        <option>Value 2</option>
        <option>Value 3</option>
    </select>
</div>
```


## Demo

Example of the [Select Component](https://mobify.github.io/stencil/visual/components/select/index.html)
