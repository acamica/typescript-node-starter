TypeScript node app starter
===========================

TODO: add basic explanation of the project

Usage:
------
TODO: Add some doc on how to create an instance from this repo.


Features
--------
* Unit testing and tdd/bdd workflow
* TSlint before commit
* GIT messages validator using format like `feat(general): Some description`
* Reliable package management using [yarn](https://yarnpkg.com/en/)
* Homogeneous service environment using [Docker](https://www.docker.com/)
* [Editor config](http://editorconfig.org/) for editors that supports it like Visual Code

### Unit testing & TDD

Unit testing is your first line of defense against bugs when you are developing your application, but it's useless if you don't have a proper workflow to run them. With this integration you can run your unit test in a single run or get into tdd mode using an npm script. Also the test need to pass in order to make a `git push`.

Your code is in TypeScript and so should your test files. That way if a test fails it's easier to see if its due to a change in the contract or an actual bug.

#### Why mocha + chai + sinon:
* ✅ It's been proven over and over / Well known in the community.
* ✅ Decoupled test runner from the assertion and or mock library.
* 🚫 By default it runs all the test sequentially (so it may be slower than others)

#### How to use:

Create a test file next to the file you want to test, using the nomenclature `<file-name>.test.ts`.

If you are running a single pass you have to build the source and test and then run them.

```bash
$ npm run build
$ npm t
# or
$ npm run build-and:test
```

While you are developing you can run in `tdd` mode, so whenever you change a file it gets compiled and the test runned.

```bash
$ npm run tdd
```

🌟 If you install a terminal notifier you can receive growl messages with the test execution results. 🌟

```bash
# How to install growl messages on your platform
# Mac OS X (Darwin):
$ sudo gem install terminal-notifier

# Ubuntu (Linux):
$ sudo apt-get install libnotify-bin
```

TODO: add ci

TODO: Add a gif of growl messages

TODO: Investigate how to run from visual code

TODO: See if we can add a way to create test in a `test` directory as well.

#### How to remove:


```bash
$ yarn remove -D mocha @types/mocha chai @types/chai sinon
```

In the `package.json` remove the scripts "test", "watch:test" and "tdd" and if no other script uses it, remove `npm-run-all` as a dependency.


#### More info
TODO: Add link to sinon, chai and

### Docker

If the node app you are trying to build is intended to be a service of some sort (micro or monolithic) you may want to guarantee that it runs in reliable environment. Using Docker we can specify the version of `os`, `node` and others to reduce the difference between dev, prod and ci environments.

If you want to learn more about Docker you can try [this course (in spanish)](https://www.acamica.com/cursos/128/introduccion-a-docker). To remove docker from the project just delete the `Dockerfile`.

To use docker with this starter project, first create your images with the following command

```bash
$ docker build -t myapp:0.0.1 .
```

where `-t myapp:0.0.1` tags the image as `myapp` in the specific version. Then run an instance of your image like this

```bash
$ docker run myapp
```

Notice that the `Dockerfile` is built in order to take advantage of the `Docker layers`, if you modify the code in the src folder it won't run `yarn install`, but if you change the `package.json` or `yarn.lock` it will.

TODO: add reference for english course on docker


TODO:
-----
* Add package deps upgrade tool
* Add automatic changelog
* Add automatic semver
* Add CI
* Add doc generation
* Add testing coverage
* Add `npm install` script or similar to enable simpler "forks"
* Add readme badges
* Maybe: Create branch with FRP using rx and ramda
* Maybe: Create branch with express and knex
* Maybe: Create branch with CLI using commander or similar
* Improve docs
