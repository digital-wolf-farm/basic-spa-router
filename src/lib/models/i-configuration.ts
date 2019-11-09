import { IRoute } from './i-route';

export interface IConfiguration {
    routes: IRoute[];
    templatesDirectory: string;
}