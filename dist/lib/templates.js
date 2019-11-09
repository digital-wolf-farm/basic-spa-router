var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const templateCache = [];
function findTemplate(template) {
    return __awaiter(this, void 0, void 0, function* () {
        if (checkIfTemplateIsCached(template)) {
            // getTemplateFromCache(template);
        }
        else {
            // await readTemplateFromFile(template);
        }
    });
}
function readTemplateFromFile(rootDirectory, pathToTemplate, template) {
    return __awaiter(this, void 0, void 0, function* () {
        // getConfiguration for rootDirectory and pathToTemplate
        return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest();
            let url;
            if (pathToTemplate === '') {
                url = `${rootDirectory}/${template}.html`;
            }
            else {
                url = `${rootDirectory}/${pathToTemplate}/${template}.html`;
            }
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                }
                else {
                    reject();
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        });
    });
}
function checkIfTemplateIsCached(templateName) {
    return templateCache.filter((template) => templateName === template.name).length > 0;
}
export { findTemplate };
