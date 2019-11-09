function isRouteValid(currentRouteArray, definedRoutesArray) {
    const comparedElement = currentRouteArray.shift();
    const tempRoutesArray = definedRoutesArray.filter((route) => route.path === comparedElement);
    if (tempRoutesArray.length === 0) {
        return false;
    }
    else if (tempRoutesArray.length > 1) {
        // Add loging that wrong definition of routes, there is at least 2 the same
        return false;
    }
    if (currentRouteArray.length > 0 && !tempRoutesArray[0].children) {
        return false;
    }
    else if (currentRouteArray.length > 0 && tempRoutesArray[0].children) {
        return isRouteValid(currentRouteArray, tempRoutesArray[0].children);
    }
    return true;
}
export { isRouteValid };
