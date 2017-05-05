import {resolve, join} from 'path';
import {IPackageJson} from './package.json';
import {readJSON, writeFile} from './promise-fs';
import {askDefault, close} from './promise-readline';
import {which, exec, rm} from 'shelljs';
const root = resolve(__dirname, '../../../');

if (!which('git')) {
    console.error('You need to have git installed :\'(');
    process.exit(1);
}

async function main () {
    // Read package json and prompt for the project information
    const [projectInfo, packageJSON] = await Promise.all([promptProjectInfo(), readPackageJSON()]);

    // Replace package json defaults
    const newPackage = {
        ...packageJSON,
        version: '0.0.1',
        description: '',
        author: getGitAuthor(),
        name: projectInfo.name,
        license: projectInfo.license
    };

    // Remove post install
    delete newPackage.scripts['postinstall'];

    // Write the new package json back
    writeFile(join(root, 'package.json'), JSON.stringify(newPackage, null, 2));

    // Reset git and make first commit
    resetGit(projectInfo.name, packageJSON.version);
}

// Function to read the project package json
const readPackageJSON = () => readJSON<IPackageJson>(join(root, 'package.json'));

// Prompt the user for the project information
async function promptProjectInfo () {
    const folderName = root.split('/').pop();
    const name = await askDefault(`Name [${folderName}]: `, folderName || '');
    const license = await askDefault('License [MIT]: ', 'MIT');
    close();
    return {name, license};
}

// Get a string with the users git info, like "Hernan Rajchert <hrajchert@gmail.com>"
function getGitAuthor () {
    const {name, email} = getGitUserInfo();
    return `${name} <${email}>`;
}

// Reads git user info
function getGitUserInfo () {
    const name = exec('git config user.name', {silent: true}).stdout.toString().trim();
    const email = exec('git config user.email', {silent: true}).stdout.toString().trim();
    return {name, email};
}

function resetGit (projectName: string, tnsVersion: string) {
    // Delete current git
    rm('-rf', join(root, '.git'));
    // Initialize git with a new first commit
    exec(`git init "${root}"`);
    exec('git add .');
    exec(`git commit -m "chore(general): Initialize ${projectName} using typescript-node-starter:${tnsVersion}"`);
}
main();




