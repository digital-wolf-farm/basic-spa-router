let routes;
let templatesDirectory;
function getDefinedRoutes() {
    return routes;
}
function getTemplatesDirectory() {
    return templatesDirectory;
}
function saveConfiguration(appRoutes, templatesRootDirectory) {
    routes = appRoutes;
    templatesDirectory = templatesRootDirectory;
}
export { getDefinedRoutes, getTemplatesDirectory, saveConfiguration };
