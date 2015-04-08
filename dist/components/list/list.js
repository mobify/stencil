define(['$'], function ($) {

    return {
        items: [
            {
                item: 'Item 1'
            },
            {
                item: 'Item 2',
                modifierClass: 'c--ul',
                nestedList: [
                    {
                        item: 'Item 2.1'
                    },
                    {
                        item: 'Item 2.2'
                    }
                ]
            },
            {
                item: 'Item 3',
                modifierClass: 'c--ol',
                nestedList: [
                    {
                        item: '3.1'
                    },
                    {
                        item: '3.2'
                    },
                    {
                        item: '3.3'
                    }
                ]
            }
        ]
    };
});
