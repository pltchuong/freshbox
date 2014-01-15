# Freshbox Client

This is the beginning of the Freshbox client codebase.  It is based upon Ember App Kit [![Build Status](https://travis-ci.org/stefanpenner/ember-app-kit.png?branch=master)](https://travis-ci.org/stefanpenner/ember-app-kit) and uses the same scaffolding.  See the Documentation under _Understanding Ember App Kit_

## Understanding Ember App Kit

* [Getting Started Guide](http://stefanpenner.github.io/ember-app-kit/guides/getting-started.html)
* *Safari Books Online Blog* - [Introduction to Ember App Kit](http://blog.safaribooksonline.com/2013/09/18/ember-app-kit/) for more experienced Ember developers by @mixonic
* *Ember Sherpa* - [Introduction to Ember App Kit](http://embersherpa.com/articles/introduction-to-ember-app-kit/) for those who are new to the Grunt workflow by @taras


## Features

- Sane project structure
- ES6 module transpiler support (easy, future-proof modules)
- Module system-aware resolver (see [Referencing views](https://github.com/stefanpenner/ember-app-kit/wiki/Referencing-Views) and [Using Ember loaders](https://github.com/stefanpenner/ember-app-kit/wiki/Using-Ember-loaders))
- Transparent project compilation & minification for easy deploys via [Grunt](http://gruntjs.com/)
- Package management via [Bower](https://github.com/bower/bower)
- Support for CoffeeScript and SASS
- Testing via QUnit, Ember Testing and Karma (with examples)
- Linting via JSHint (including module syntax)
- Catch-all `index.html` for easy reloading of pushState router apps

## Installation Instructions

### Clone the Repository
    git clone git@github.com:ottemo/freshbox.git freshbox

### Install NPM, Grunt and Bower

#### OSX
    brew install npm
    brew install git-flow
    brew install hub
    alias hub=git  // add this to your .bashrc or .bash_profile
    npm install -g yo qunit grunt-cli bower
    gem install compass  // you must have ruby 1.9.x or 2.x.x installed

#### Debian based Linux
    sudo apt-get update
    sudo apt-get install -y python-software-properties python g++ make
    sudo add-apt-repository -y ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

    sudo gem install compass
    sudo apt-get install git-flow

    curl http://hub.github.com/standalone -sLo ~/bin/hub
    chmod +x ~/bin/hub
    eval '$(hub alias -s)'   # add to your .bashrc or .bash_profile or .profile

    npm install -g yo qunit grunt-cli bower

### Install local dependancies
    cd <directory of cloned repo>
    npm install
    bower install

### Initialize Git-Flow
    git checkout master
    git checkout develop
    git flow init -d

### Start a Feature Branch
    git flow feature start <FEATURE-NAME>

### Issue a Pull Request on Github
    git push -u origin <FEATURE-BRANCH>
    git pull-request -b develop

### Build and Run Unit Tests and Karma
    grunt

### Run in Development Mode w/LiveReload
    grunt server

