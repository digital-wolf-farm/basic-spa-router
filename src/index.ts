import { getHashLocation } from './location';
import { IRoute } from './models/i-route';
import { findTemplate } from './templates';
import { isRouteValid } from './validators';

let routes: IRoute[];
let templatesDirectory: string;

function init(appRoutes: IRoute[], templatesRootDirectory: string): void {
    routes = appRoutes;
    templatesDirectory = templatesRootDirectory;

    getCurrentLocation();
    detectLocationChange();
}

function getCurrentLocation(): void {
    const hashLocation = getHashLocation();
    validateRoute(hashLocation, routes);
}

function detectLocationChange() {
    window.addEventListener('hashchange', (event: HashChangeEvent) => {
        getCurrentLocation();
    });
}

function validateRoute(currentHashLocation: string, availableRoutes: IRoute[]) {
    const hashLocationArray = currentHashLocation.split('/');
    hashLocationArray.shift();

    if (isRouteValid(hashLocationArray, availableRoutes)) {
        // findTemplate
    } else {
        // findTemplate(404)
    }
}

export { init };