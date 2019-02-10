// Requiring our movie module exported from movie.js
var Movie = require("./keys.js");
var inquirer = require("inquirer");
var axios = require("axios");
var spotify = require("node-spotify-api");


var command = process.argv[2];
var spotify= process.agv[3];




// Grab or assemble the movie name and store it in a variable called "movieName"
// var movieName = process.argv[2];
var movieName = process.argv.slice(2).join('+');
// console.log(arg);
console.log(movieName);





var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });

axios.get(queryUrl).then(
    function(response){
        console.log(response.data.Title + " was released in " + response.data.Year);
    }
).catch(
    function(error){
        console.log(error);
    }
)
;

// If the request with axios is successful
// ...

// Then log the Release Year for the movie
// ...












// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request with axios to the queryUrl
axios.get(queryUrl).then(
    function(response){
        console.log(response.data.Title + " was released in " + response.data.Year);
    }
).catch(
    function(error){
        console.log(error);
    }
)
;

// If the request with axios is successful
// ...

// Then log the Release Year for the movie
// ...



var spotifyThisSong = function(trackQuery) {
  
  var spotify = require("spotify");

  spotify.search({ type: "track", query: trackQuery }, function(error, data) {
    if (error) {
      // if error
      console.log("Error occurred: " + error);
    } else {
      // if no error
      // For loop is for when a track has multiple artists
      for (var i = 0; i < data.tracks.items[0].artists.length; i++) {
        if (i === 0) {
          console.log("Artist(s):    " + data.tracks.items[0].artists[i].name);
        } else {
          console.log("              " + data.tracks.items[0].artists[i].name);
        }
      }
      console.log("Song:         " + data.tracks.items[0].name);
      console.log("Preview Link: " + data.tracks.items[0].preview_url);
      console.log("Album:        " + data.tracks.items[0].album.name);
    }
  });
};

var movieThis = function(movieQuery) {
  // Load request npm module
  var request = require("request");

  // if query that is passed in is undefined, Mr. Nobody becomes the default
  if (movieQuery === undefined) {
    movieQuery = "mr nobody";
  }

 
  request(
    "http://www.omdbapi.com/?t=" + movieQuery + "&y=&plot=short&r=json",
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log("* Title of the movie:         " + JSON.parse(body).Title);
        console.log("* Year the movie came out:    " + JSON.parse(body).Year);
        console.log(
          "* IMDB Rating of the movie:   " + JSON.parse(body).imdbRating
        );
        console.log(
          "* Country produced:           " + JSON.parse(body).Country
        );
        console.log(
          "* Language of the movie:      " + JSON.parse(body).Language
        );
        console.log("* Plot of the movie:          " + JSON.parse(body).Plot);
        console.log("* Actors in the movie:        " + JSON.parse(body).Actors);

        // For loop parses through Ratings object to see if there is a RT rating
        // 	--> and if there is, it will print it
        for (var i = 0; i < JSON.parse(body).Ratings.length; i++) {
          if (JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes") {
            console.log(
              "* Rotten Tomatoes Rating:     " +
                JSON.parse(body).Ratings[i].Value
            );
            if (JSON.parse(body).Ratings[i].Website !== undefined) {
              console.log(
                "* Rotten Tomatoes URL:        " +
                  JSON.parse(body).Ratings[i].Website
              );
            }
          }
        }
      }
    }
  );
};

request(
    "http://www.omdbapi.com/?t=" + movieQuery + "&y=&plot=short&r=json",
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log("* Title of the movie:         " + JSON.parse(body).Title);
        console.log("* Year the movie came out:    " + JSON.parse(body).Year);
        console.log(
          "* IMDB Rating of the movie:   " + JSON.parse(body).imdbRating
        );
        console.log(
          "* Country produced:           " + JSON.parse(body).Country
        );
        console.log(
          "* Language of the movie:      " + JSON.parse(body).Language
        );
        console.log("* Plot of the movie:          " + JSON.parse(body).Plot);
        console.log("* Actors in the movie:        " + JSON.parse(body).Actors);

        // For loop parses through Ratings object to see if there is a RT rating
        // 	--> and if there is, it will print it
        for (var i = 0; i < JSON.parse(body).Ratings.length; i++) {
          if (JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes") {
            console.log(
              "* Rotten Tomatoes Rating:     " +
                JSON.parse(body).Ratings[i].Value
            );
            if (JSON.parse(body).Ratings[i].Website !== undefined) {
              console.log(
                "* Rotten Tomatoes URL:        " +
                  JSON.parse(body).Ratings[i].Website
              );
            }
          }
        }
      }
    }
  );


// Make a request for a user with a given ID
axios
  .get("/user?ID=12345")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

// Optionally the request above could also be done as
axios
  .get("/user", {
    params: {
      ID: 12345
    }
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });





