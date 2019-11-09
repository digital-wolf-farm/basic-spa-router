import { getDefinedRoutes, saveConfiguration } from './configuration.js';
import { getHashLocation } from './location.js';
import { isRouteValid } from './validators.js';
function init(appRoutes, templatesRootDirectory) {
    saveConfiguration(appRoutes, templatesRootDirectory);
    getCurrentLocation();
    detectLocationChange();
}
function getCurrentLocation() {
    const hashLocation = getHashLocation();
    const routes = getDefinedRoutes();
    validateRoute(hashLocation, routes);
}
function detectLocationChange() {
    window.addEventListener('hashchange', (event) => {
        getCurrentLocation();
    });
}
function validateRoute(currentHashLocation, availableRoutes) {
    const hashLocationArray = currentHashLocation.split('/');
    hashLocationArray.shift();
    if (isRouteValid(hashLocationArray, availableRoutes)) {
        // findTemplate
    }
    else {
        // findTemplate(404)
    }
}
export { init };
