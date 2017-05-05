import {readFile as read, writeFile as write} from 'fs';

export const readFile = (path: string) => new Promise<Buffer>(
    (resolve, reject) => read(path, (err, buffer) => {
        if (err) {
            return reject(`Can\'t read ${path}: ${err}`);
        }
        return resolve(buffer);
    })
);

export const writeFile = (path: string, data: any) => new Promise<void>(
    (resolve, reject) => write(path, data, (err) => {
        if (err) {
            return reject();
        }
        return resolve();
    })
);

export const readJSON = <T>(path: string) => readFile(path)
                                            .then(buffer => JSON.parse(buffer.toString()) as T);
