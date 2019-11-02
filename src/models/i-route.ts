export interface IRoute {
    path: string;
    template: string;
    directory: string;
    children?: IRoute[];
}
