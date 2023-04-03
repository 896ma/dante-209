const gm = require('gm').subClass({imageMagick: true});
const inputFile = 'images/softlife.gif';
const outputFile = 'videos/softlife.mp4';

gm(inputFile)
  .write(outputFile, (err) => {
    if (err) throw err;
    console.log('GIF conversion complete');
  });
