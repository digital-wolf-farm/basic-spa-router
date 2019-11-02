export const routes = [
    {
        path: '',
        template: 'default',
        directory: 'default'
    }, {
        path: '*',
        template: 'page-not-found',
        directory: 'default'
    }, {
        path: 'module1',
        template: 'module1',
        directory: 'module1',
        children: [
            {
                path: 'page1',
                template: 'page-m1-p1',
                directory: 'module1/pages'
            }, {
                path: 'page2',
                template: 'page-m1-p2',
                directory: 'module1/pages'
            }
        ]
    }, {
        path: 'module2',
        template: 'module2',
        directory: 'module2',
        children: [
            {
                path: 'page1',
                template: 'page-m2-p1',
                directory: 'module2/pages'
            }, {
                path: 'page2',
                template: 'page-m2-p2',
                directory: 'module2/pages'
            }
        ]
    }
]