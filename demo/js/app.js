import { routes } from './routes.js';
import { init } from '../../lib/index.js';

document.addEventListener('DOMContentLoaded', (event) => {
    function initRouter() {
        console.log(init);
        init(routes, 'views');
    }

    initRouter();
});