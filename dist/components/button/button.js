define(['$'], function ($) {

    var $anchorButton = $('<a class="c-button" href="#">Anchor Button</a>');
    var $inputButton = $('<input class="c-button" type="submit" value="Submit Button" />');
    var $buttonButton = $('<button class="c-button">Button Button</button>');

    return {
        'name': [
            $anchorButton,
            $inputButton,
            $buttonButton
        ]
    };
});
