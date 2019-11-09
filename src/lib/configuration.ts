import { IConfiguration } from './models/i-configuration.js';
import { IRoute } from './models/i-route.js';

const configuration: IConfiguration = {
    routes: [],
    templatesDirectory: ''
}

function getDefinedRoutes(): IRoute[] {
    return configuration.routes;
}

function getTemplatesDirectory(): string {
    return configuration.templatesDirectory;
}

function saveConfiguration(appRoutes: IRoute[], templatesRootDirectory: string): void {
    configuration.routes = appRoutes;
    configuration.templatesDirectory = templatesRootDirectory;
}

export { getDefinedRoutes, getTemplatesDirectory, saveConfiguration };
