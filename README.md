# bpmn-io npm project boilerplate

This is a blueprint you can use to create your own projects.


## Placeholders

After copying the template replace the following placeholders in the `package.json` file:

* `<AUTHOR_NAME>`: your name
* `<AUTHOR_GITHUB_NAME>`: your name on [GitHub](https://github.com)
* `<PACKAGE_NAME>`: the name of the project (for npm package and repository)
* `<PACKAGE_DESCRIPTION>`: a short description of the package


## Project structure

The following shows the general project structure

```plain
├─docs
│ └─api
├─lib
│ └─foo.js
├─resources
├─test
│ ├─fixtures
│ └─spec
│   └─fooSpec.js
├─tmp
│ └─reports
├─Gruntfile.js
├─index.js
└─package.json
```

A note on the structure:

*   `docs` contains documentation relevant for developers or users

    *   `docs/api` gets generated from the project sources

*   `lib` contains the project sources

*   `resources` can contain non-js sources such as JSON config files or images

*   `test` contains all test related data

    *   `test/spec` and sub folders hold test cases with the convention `:nameSpec.js`
    *   `test/fixtures` hold test data

*   `index.js` is the main entry point for the module


## What is inside

The boilerplate uses the following components:

* [grunt](http://gruntjs.com) for building
* [jasmine](https://jasmine.github.io/), version 1.3 for testing
* [jsdoc](http://usejsdoc.org/) for documentation generation
* [jshint](http://jshint.com/) for linting


## Build tasks

The contained `Gruntfile.js` configures the following build tasks:


#### release