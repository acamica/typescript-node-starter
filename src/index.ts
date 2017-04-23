import * as os from 'os';
import {readFile} from 'fs';
import {add} from './foo/foo';

readFile('./package.json', (err, packageStr) => {
    if (err) {
        console.error('There was a problem reading package json', err);
        return;
    }

    const json = JSON.parse(packageStr.toString());

    console.log(`Running typescript-node-starter version ${json.version}`);
    console.info(`Running on ${os.hostname()} with ${os.cpus().length} CPU's and ${os.totalmem()} mem`);
    console.info(`1 + 1 = ${add(1, 1)}`);
});
