TypeScript node app starter
===========================

TODO: add basic explanation of the project

Usage:
------
TODO: Add some doc on how to create an instance from this repo.


Features
--------
* TSlint before commit
* GIT messages validator using format like `feat(general): Some description`
* Reliable package management using [yarn](https://yarnpkg.com/en/)
* Homogeneous service enviroment using [Docker](https://www.docker.com/)
* [Editor config](http://editorconfig.org/) for editors that supports it like Visual Code

### Docker

If the node app you are trying to build is intended to be a service of some sort (micro or monolithic) you may want to guarantee that it runs in reliable enviroment. Using Docker we can specify the version of `os`, `node` and others to reduce the difference between dev, prod and ci enviroments.

If you want to learn more about Docker you can try [this course (in spanish)](https://www.acamica.com/cursos/128/introduccion-a-docker). To remove docker from the project just delete the `Dockerfile`.

To use docker with this starter project, first create your images with the following command

```console
docker build -t myapp:0.0.1 .
```

where `-t myapp:0.0.1` tags the image as `myapp` in the specific version. Then run an instance of your image like this

```console
docker run myapp
```

Notice that the `Dockerfile` is built in order to take advantage of the `Docker layers`, if you modify the code in the src folder it won't run `yarn install`, but if you change the `package.json` or `yarn.lock` it will.

TODO: add reference for english course on docker


TODO:
-----
* Add unit testing
* Add TDD workflow
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
