TypeScript Node App Starter
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)
===========================

Create bare bones NodeJS apps using TypeScript 🎉

Quick Start:
------------

### Clone, cd and Install

```bash
$ git clone https://github.com/acamica/typescript-node-starter.git myapp
$ cd myapp
# Install and follow the questions.
$ npm install
```
ℹ️ Remember to replace `myapp` with your application name

ℹ️ You can use yarn or npm.

### Edit and Run
Write your program using `src/index.ts` as the entry point, and run it.

```bash
$ npm run start
```

Features
--------
* 🛡 TypeScript configuration
* 🛡 Unit testing and tdd/bdd workflow
* ☁️ Homogeneous environment using [Docker](https://www.docker.com/) 🐳
* 👮 TSlint before commit
* 👮 Git [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog/blob/v0.5.3/conventions/angular.md) messages validation
* 🔐 Reliable package management using [yarn](https://yarnpkg.com/en/)
* 🎉 Visual Studio Code goodies
* 📝 [Editor config](http://editorconfig.org/) for editors that supports it

### 🛡 TypeScript Configuration
The project comes with TypeScript v2.3 already configured. You can see and tweak the compiler options with the [tsconfig.json](https://www.typescriptlang.org/docs/handbook/compiler-options.html) file.

By default, the [strict master option](https://github.com/Microsoft/TypeScript/pull/14486) and `noUnusedLocals` are enabled, if you are new to typescript you may want to lay back on the strictness by disabling it, and as you get more accustomed you can enable it again.

👮 Your files should follow the conventions set in `tslint.json` in order to make a `git commit`.

### 🛡 Unit Testing & TDD

Both your code and your test files are in TypeScript. This way if a test fails it's easier to see if its due to a change in the contract or an actual bug.

The project comes with these tools already configured:

* [Mocha](https://mochajs.org/): is the test framework that knows how to run your tests.
* [Chai](http://chaijs.com/api/): is an assertion library with different flavours of API.
* [Sinon](http://sinonjs.org/): is a library that helps `spying` on functions to see if they where called and how, and creating mocks and stubs for simulating API's.

👮 All the test need to pass in order to make a `git push`.

#### Why mocha + chai + sinon:
* ✅ It's been proven over and over / Well known in the community.
* ✅ Decoupled test runner from the assertion and or mock library.
* 🚫 By default it runs all the test sequentially (so it may be slower than others)

#### How to Use:

Create a test file next to the file you want to test, using the nomenclature `<file-name>.test.ts`.

You can run your test in a single run by doing:

```bash
$ npm t
# or
# npm run test
```

Or you can enter in a `Test Driven Development` mode, so whenever you change a file it gets compiled and the test are executed.

```bash
$ npm run tdd
```

🌟 You can install a terminal notifier to receive growl messages with the test execution results.

```bash
# How to install growl messages on your platform
# Mac OS X (Darwin):
$ sudo gem install terminal-notifier

# Ubuntu (Linux):
$ sudo apt-get install libnotify-bin
```

#### How to Remove:

```bash
$ yarn remove -D mocha @types/mocha chai @types/chai sinon
```

In the `package.json` remove the scripts "test", "watch:test" and "tdd" and if no other script uses it, remove `npm-run-all` as a dependency.

### 🐳 Docker

If the node app you are trying to build is intended to be a service of some sort (micro or monolithic) you may want to guarantee that it runs in reliable environment. Using Docker we can specify the version of `os`, `node` and others to reduce the difference between dev, prod and ci environments.

If you want to learn more about Docker you can try [this course (in spanish)](https://www.acamica.com/cursos/128/introduccion-a-docker). To remove docker from the project just delete the `Dockerfile`.

You can build your docker images using the command

```bash
$ npm run docker:build
```

The images created by the build will be tagged with the name and version of your project as specified in the package.json. You can run the image using docker directly or you can run it as an `npm script`.

```bash
$ npm run docker:run
```

If you need to modify the way your image is built, runned or published, you can edit the `docker:*` scripts
located in the package.json.

Notice that the `Dockerfile` takes advantage of the `layers cache`, if you modify the code in the `src` folder it won't run `yarn install`, it will only build the typescript code. If you change the `package.json` or `yarn.lock` it will install deps and then build.

### 🎉 Visual Studio Code Goodies

If you are using [Visual Studio Code](https://code.visualstudio.com/) you have some things pre-configured under the `.vscode` folder:

* You can [run or debug your *tests*](https://code.visualstudio.com/docs/editor/debugging) by selecting the `Run tests` [launch configuration](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations).
* You can [run or debug your *program*](https://code.visualstudio.com/docs/editor/debugging) by selecting the `Launch Program` [launch configuration](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations).
* You can replay the run by pressing F5.
* When editing typescript files you get `fix lint on save`.
* You can build the project by doing `⌘⇧B`.
* Build and tag a docker image using the `docker-build` [task](https://code.visualstudio.com/docs/editor/tasks).
* Build, tag and run a docker image using the `Build and Launch Docker` [launch configuration](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations).

TODO:
-----
* Add package deps upgrade tool
* Add automatic Changelog
* Add automatic semver
* Add CI
* Add doc generation
* Add testing coverage
* Add readme badges
* Improve docker integration to build faster
* Improve tdd watch mode
* Maybe: Create branch with FRP using rx and ramda
* Maybe: Create branch with express and knex
* Maybe: Create branch with CLI using commander or similar
* Add a gif of growl messages
* See if we can add a way to create test in a `test` directory as well.
* Video of tdd with zen mode
* add reference for an english course on docker
* Implement docker:push

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars0.githubusercontent.com/u/2634059?v=4" width="100px;"/><br /><sub>Hernan Rajchert</sub>](https://github.com/hrajchert)<br />[💻](https://github.com/acamica/typescript-node-starter/commits?author=hrajchert "Code") [📖](https://github.com/acamica/typescript-node-starter/commits?author=hrajchert "Documentation") [🐛](https://github.com/acamica/typescript-node-starter/issues?q=author%3Ahrajchert "Bug reports") | [<img src="https://avatars2.githubusercontent.com/u/824445?v=4" width="100px;"/><br /><sub>Facundo Rubin</sub>](https://github.com/facurubin)<br />[💻](https://github.com/acamica/typescript-node-starter/commits?author=facurubin "Code") [📖](https://github.com/acamica/typescript-node-starter/commits?author=facurubin "Documentation") [🐛](https://github.com/acamica/typescript-node-starter/issues?q=author%3Afacurubin "Bug reports") | [<img src="https://avatars0.githubusercontent.com/u/4248944?v=4" width="100px;"/><br /><sub>Cristhian Duran</sub>](https://durancristhian.github.io/)<br />[🐛](https://github.com/acamica/typescript-node-starter/issues?q=author%3Adurancristhian "Bug reports") | [<img src="https://avatars0.githubusercontent.com/u/948922?v=4" width="100px;"/><br /><sub>Nicolás Quiroz</sub>](https://nicolasquiroz.com)<br />[💻](https://github.com/acamica/typescript-node-starter/commits?author=nhsz "Code") [📖](https://github.com/acamica/typescript-node-starter/commits?author=nhsz "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/1573956?v=4" width="100px;"/><br /><sub>Gonzalo Gluzman</sub>](https://github.com/dggluz)<br />[💻](https://github.com/acamica/typescript-node-starter/commits?author=dggluz "Code") |
| :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT
