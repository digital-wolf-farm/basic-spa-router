const configuration = {
    routes: [],
    templatesDirectory: ''
};
function getDefinedRoutes() {
    return configuration.routes;
}
function getTemplatesDirectory() {
    return configuration.templatesDirectory;
}
function saveConfiguration(appRoutes, templatesRootDirectory) {
    configuration.routes = appRoutes;
    configuration.templatesDirectory = templatesRootDirectory;
}
export { getDefinedRoutes, getTemplatesDirectory, saveConfiguration };
