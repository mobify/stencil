define(['$'], function ($) {

    return {
        'tabs': [
            {
                'id': 'home',
                'title': 'Home',
                'content': '<p>Content Here</p>',
                'class': '',
                'hidden': 'true',
                'tabindex': '-1'
            },

            {
                'id': 'homeware',
                'title': 'Homeware',
                'content': '<p>Content Here</p>',
                'class': 'c--current',
                'hidden': 'false',
                'tabindex': '0'
            },

            {
                'id': 'kitchen',
                'title': 'Kitchen',
                'content': '<p>Content Here</p>',
                'class': '',
                'hidden': 'true',
                'tabindex': '-1'
            },

            {
                'id': 'cooking-baking',
                'title': 'Cooking & Baking',
                'content': '<p>Content Here</p>',
                'class': '',
                'hidden': 'true',
                'tabindex': '-1'
            }
        ]
    };
});
