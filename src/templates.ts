import { ITemplateData } from './models/i-template-data';

const templateCache: ITemplateData[] = [];

async function findTemplate(template: string): Promise<any> {
    if (checkIfTemplateIsCached(template)) {
        // getTemplateFromCache(template);
    } else {
        // await readTemplateFromFile(template);
    }
}

async function readTemplateFromFile(rootDirectory: string, pathToTemplate: string, template: string): Promise<any> {
    // getConfiguration for rootDirectory and pathToTemplate
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        let url: string;

        if (pathToTemplate === '') {
            url = `${rootDirectory}/${template}.html`;
        } else {
            url = `${rootDirectory}/${pathToTemplate}/${template}.html`;
        }

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(this.responseText);
            } else {
                reject();
            }
        };
        xhttp.open('GET', url, true);
        xhttp.send();
    });
}

function checkIfTemplateIsCached(templateName: string): boolean {
    return templateCache.filter((template) => templateName === template.name).length > 0;
}

export { findTemplate };