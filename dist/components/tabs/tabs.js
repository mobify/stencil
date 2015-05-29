define(['$'], function ($) {

    return {
        'tabs': [
            {
                'id': 'home',
                'labelId': 'label-home',
                'title': 'Home',
                'content': '<p>Content Here</p>',
                'class': '',
                'hidden': 'true',
                'tabindex': '-1'
            },

            {
                'id': 'homeware',
                'labelId': 'label-homeware',
                'title': 'Homeware',
                'content': '<p>Content Here</p>',
                'class': 'c--current',
                'hidden': 'false',
                'tabindex': '0'
            },

            {
                'id': 'kitchen',
                'title': 'Kitchen',
                'labelId': 'label-kitchen',
                'content': '<p>Content Here</p>',
                'class': '',
                'hidden': 'true',
                'tabindex': '-1'
            },

            {
                'id': 'cooking-baking',
                'labelId': 'label-cooking-baking',
                'title': 'Cooking & Baking',
                'content': '<p>Content Here</p>',
                'class': '',
                'hidden': 'true',
                'tabindex': '-1'
            }
        ]
    };
});
