var http = require('http');
var querystring = require('querystring');
var extend = require('util')._extend;

module.exports = function(config)
{
  var host = 'api.findanyfilm.com';

  var httpCallback = function(callback)
  {
    return function(response) {
      var str = '';
    
      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        str += chunk;
      });
    
      //the whole response has been recieved, so we just print it out here
      response.on('end', function () {
        callback(JSON.parse(str));
      });
    }
  }

  var query = function(path) {
    return function(options, callback) {
      http.request({
        host: host,
        path: path + '?' + querystring.stringify(extend({apikey: config.apiKey}, options))
      }, httpCallback(callback)).end();
    }
  }

  this.getFilms = query('/search_g.php');
  this.getCinemas = query('/cinema_by_film.php');
  this.getFilmsByCinema = query('/films_by_cinema.php');
  this.getFilmsByLocation = query('/films_by_location.php');
  this.getAvailability = query('/film_availability.php');
}