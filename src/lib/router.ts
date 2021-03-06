import { getDefinedRoutes, saveConfiguration } from './configuration.js';
import { getHashLocation } from './location.js';
import { IRoute } from './models/i-route.js';
import { appendTemplate } from './templates.js';
import { isRouteValid } from './validators.js';

function init(appRoutes: IRoute[], templatesRootDirectory: string): void {
    saveConfiguration(appRoutes, templatesRootDirectory);
    getCurrentLocation();
    detectLocationChange();
}

function getCurrentLocation(): void {
    const hashLocation = getHashLocation();
    const routes = getDefinedRoutes();
    
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

    isRouteValid(hashLocationArray, availableRoutes) ? appendTemplate(hashLocationArray) :  appendTemplate(['*']);
}

function emitPageReadyEvent(): void {
    document.dispatchEvent(new Event('pageReady'));
}

export { init };