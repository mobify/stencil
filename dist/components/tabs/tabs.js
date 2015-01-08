define(['$'], function ($) {

    return {
        'tabs': [
            'tabsLabel': 'Site Tabs',
            'tabsControlsItems': {
                {'tabsTarget': 'home', 'tabsTitle': 'Home', 'currentClass': ''},
                {'tabsTarget': 'homeware', 'tabsTitle': 'Homeware', 'currentClass': 'c--current'},
                {'tabsTarget': 'kitchen', 'tabsTitle': 'Kitchen', 'currentClass': ''},
                {'tabsTarget': 'cooking-baking', 'tabsTitle': 'Cooking & Baking', 'currentClass': ''}
            },
            'tabsBody': {
                {'tabsTrigger': 'home', 'tabsTitle': 'Home', 'tabsContent': '<p>Content Here</p>', 'currentClass': ''},
                {'tabsTrigger': 'homeware', 'tabsTitle': 'Homeware', 'tabsContent': '<p>Content Here</p>', 'currentClass': 'c--current'},
                {'tabsTrigger': 'kitchen', 'tabsTitle': 'Kitchen', 'tabsContent': '<p>Content Here</p>', 'currentClass': ''},
                {'tabsTrigger': 'cooking-baking', 'tabsTitle': 'Cooking & Baking', 'tabsContent': '<p>Content Here</p>', 'currentClass': ''}
            }
        ]
    };
});
