# Freshbox

This is the beginning of the Freshbox client codebase.  It is based upon Ember App Kit and uses the same scaffolding.  See the Documentation under _Getting Started_

## Getting Started

* [Getting Started Guide](http://stefanpenner.github.io/ember-app-kit/guides/getting-started.html)
* *Safari Books Online Blog* - [Introduction to Ember App Kit](http://blog.safaribooksonline.com/2013/09/18/ember-app-kit/) for more experienced Ember developers by @mixonic
* *Ember Sherpa* - [Introduction to Ember App Kit](http://embersherpa.com/articles/introduction-to-ember-app-kit/) for those who are new to the Grunt workflow by @taras


## Features

- Sane project structure
- ES6 module transpiler support (easy, future-proof modules)
- Module system-aware resolver (see [Referencing views](https://github.com/stefanpenner/ember-app-kit/wiki/Referencing-Views) and [Using Ember loaders](https://github.com/stefanpenner/ember-app-kit/wiki/Using-Ember-loaders))
- Transparent project compilation & minification for easy deploys via [Grunt](http://gruntjs.com/)
- Package management via [Bower](https://github.com/bower/bower)
- Support for CoffeeScript, SASS, and Emblem
- Testing via QUnit, Ember Testing and Karma (with examples)
- Linting via JSHint (including module syntax)
- Catch-all `index.html` for easy reloading of pushState router apps

## Installation Instructions

### Clone the Repository
    git clone git@github.com:ottemo/freshbox.git freshbox-client

### Install NPM, Grunt and Bower
    brew install npm
    npm install -g grunt-cli
    npm install -g bower

### Install dependancies
    npm install
    bower install

### Build and Run Unit Tests
    grunt

### Run Client in Development Mode w/LiveReload
    grunt server



## Special Thanks

Some ideas in ember-app-kit originated in work by Yapp Labs (@yapplabs) with McGraw-Hill Education Labs (@mhelabs) on [yapplabs/glazier](https://github.com/yapplabs/glazier). Thanks to Yapp and MHE for supporting the Ember ecosystem!
