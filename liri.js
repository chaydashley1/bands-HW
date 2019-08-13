//dependencies - all packages here
require("dotenv").config();

var Spotify = require("node-spotify-api");
var axios = require("axios");
var keys = require("./keys.js");
var moment = require("moment");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);

//function to get the artist name
var getArtistNames = function(artist) {
  return artist.name;
};

//function for running spotify search
var getMeSpotify = function(songName) {
  if (songName === undefined) {
    songName = "I Don't Wanna Miss a Thing";
  }

  spotify.search(
    {
      type: "track",
      query: songName
    },
    function(err, data) {
      if (err) {
        console.log("Error occurred: " + err);
        return;
      }

      var songs = data.tracks.items;

      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("artist(s): " + songs[i].artists.map(getArtistNames));
        console.log("song name: " + songs[i].name);
        console.log("preview song: " + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("-----------------------------------");
      }
    }
  );
};

getMeSpotify();
