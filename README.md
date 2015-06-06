# node-findanyfilm
[Node.js](https://nodejs.org/) module to access [FindAnyFilm.com](http://www.findanyfilm.com/)'s API

## Installation

    npm install git://github.com/matt-williams/node-findanyfilm.git

## Usage

    // Import the module
    var FindAnyFilm = require('findanyfilm');

    // Create a FindAnyFilm object, supplying your API key
    var faf = new FindAnyFilm({apiKey: 'xxxxxxxx'});

    // Query a film
    faf.getFilms({title: 'Ex Machina'}, function(results) {
      console.log(results);
    });

    // Get metadata about it
    faf.getFilmMetadata({faf_id: '61488'}, function(results) {
      console.log(results);
    });
