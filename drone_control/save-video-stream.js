// Run this to save a h264 video file, with the PaVE frame filtered out.
// You can then use this file as a ffmpeg source for additional processing
// or streaming to a ffserver

var arDrone = require('..');
var PaVEParser = require('../lib/video/PaVEParser');
var output = require('fs').createWriteStream('./vid.h264');

var video = arDrone.createClient().getVideoStream();
var parser = new PaVEParser();

parser
  .on('data', function(data) {
    output.write(data.payload);
  })
  .on('end', function() {
    output.end();
  });

video.pipe(parser);
