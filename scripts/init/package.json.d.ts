export interface StringMap {
    [key: string]: string;
}

export interface IPackageJson {
    name: string;
    version: string;
    description: string;
    main: string;
    author: string;
    license: string;
    scripts: StringMap,
    dependencies: StringMap,
    devDependencies: StringMap
}
