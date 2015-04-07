define(['$'], function ($) {

    return {
        outerItems: [
            {
                text: 'Item 1',
                hasInnerItems: false
            },
            {
                text: 'Item 2',
                hasInnerItems: true,
                innerItems: [
                    {
                        text: 'Item 2.1'
                    },
                    {
                        text: 'Item 2.2'
                    }
                ]
            },
            {
                text: 'Item 3',
                hasInnerItems: true,
                innerItems: [
                    {
                        text: '3.1'
                    },
                    {
                        text: '3.2'
                    },
                    {
                        text: '3.3'
                    }
                ]
            }
        ]
    };
});
