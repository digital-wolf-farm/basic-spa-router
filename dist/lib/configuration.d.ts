import { IRoute } from './models/i-route.js';
declare function getDefinedRoutes(): IRoute[];
declare function getTemplatesDirectory(): string;
declare function saveConfiguration(appRoutes: IRoute[], templatesRootDirectory: string): void;
export { getDefinedRoutes, getTemplatesDirectory, saveConfiguration };
