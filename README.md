# neighborhood-map
Single-page app that shows music venue locations around San Francisco

[![Build Status](https://travis-ci.org/justinharringa/neighborhood-map.svg?branch=master)](https://travis-ci.org/justinharringa/neighborhood-map)

# Getting Started

## Install Node.js 5
You should install Node.js AND update npm following 
[these instructions](https://docs.npmjs.com/getting-started/installing-node).

**NOTE**: Node.js 6 won't work properly with grunt-responsive-images-extender 
([see issue](https://github.com/stephanmax/grunt-responsive-images-extender/issues/12))

## Install Dependencies
You will just need to run `npm install` to download the dependencies so 
long as you have installed Node.js and updated npm as per the 
instructions referenced above.

## Usage 

### Build the project
Running `grunt` will clean and copy files to the `dist` directory and 
will also generate responsive files for all images.

### Check PageSpeed Insights
Simply run `grunt psi-ngrok` to get PageSpeed Insights output

### Load via HTTP server to profile
If you'd like the local code accessible on the web, run the following 
command from the root directory of the project to be able to load via 
an HTTP Server:

```grunt http-server:dev```

# Bootstrap for Responsiveness
The neighborhood map was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>