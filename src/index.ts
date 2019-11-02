import { IRoute } from './models/i-route';

let routes: IRoute[];
let templatesDirectory: string;

async function getTemplate(rootDirectory: string, pathToTemplate: string, template: string): Promise<any> {
    return new Promise((resolve) => {
        const xhttp = new XMLHttpRequest();
        let url: string;

        if (pathToTemplate === '') {
            url = `${rootDirectory}/${template}.html`;
        } else {
            url = `${rootDirectory}/${pathToTemplate}/${template}.html`;
        }

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                // append template to router-outlet
                // scope.rootElem.innerHTML = this.responseText;
                // move it after full path is rendered
                // document.dispatchEvent(new Event('pageRendered'));
                resolve(this.responseText);
            }
        };
        xhttp.open('GET', url, true);
        xhttp.send();
    });
}

function detectLocationChange() {
    window.addEventListener('hashchange', (event: HashChangeEvent) => {
        const hashLocation = window.location.hash;
        validateRoute(hashLocation, routes);
    });
}

function init(appRoutes: IRoute[], templatesRootDirectory: string): void {
    routes = appRoutes;
    templatesDirectory = templatesRootDirectory;

    detectLocationChange();
}

function validateRoute(currentHashLocation: string, availableRoutes: IRoute[]) {
    const hashLocationArray = currentHashLocation.split('/');
    hashLocationArray.shift();

    // add loop for iterating over hashLocationArray and check if elements are part of routes
}

export { init };