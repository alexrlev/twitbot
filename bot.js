// Our Twitter library
var Twit = require('twit');
// We need to include our configuration file
var T = new Twit(require('./config.js'));

var fs = require('fs');

var path = require('path');

var lovePhrases1 = [ "good morning ",
                    "my love! ",
                    "daily reminder: ",
                    "don't forget! ",
                   	"hey there girls and gays ",
                   	"PSA! ",
                   	"boys and gals! ",
                   	"yo! ",
                   	"hey man, ",
                   	"hello! ",
                   	"hey there friend, ",
                   	"important news!! ",
                   	"hey cutie ;) ",
                   	"*ryan gosling voice* hey girl - ",
                   	"hi :) ",
                   	"hello friend ",
                   	"don't worry - ",
                   	"a concept: " ];
                    //18 lovePhrases1's

var lovePhrases2 = [ "go get that bread",
                  	"i love you",
                  	"u look cute today",
                  	"u are loved",
                  	"you're doing your best",
                  	"your emotions are valid!",
                  	"it's ok to ask for help!",
                  	"stay hydrated",
                  	"kiss your homies goodnight",
                  	"check on your friends",
                  	"try not to compare yourself to others",
                  	"be kind to yourself",
                  	"self care is key",
                  	"be sure to compliment yourself today",
                  	"pat a nice dog today",
                  	"call your mom",
                  	"call your dad",
                  	"take a break",
                  	"u deserve to be loved",
                  	"tell your friends u love them",
                  	"u don't deserve your toxic relationship",
                  	"someone is starry-eyed for u",
                  	"trust the moon",
                  	"u are made of stars",
                  	"the planets believe in u",
                  	"don't give up!",
                  	"hope is powerful" ,
                  	"u don't have to be perfect",
                  	"take time to do what makes your soul happy",
                  	"surround yourself with people, color, sounds, and work that nourish you",
                  	"make your happiness a priority",
                  	"self-care is not selfish",
                  	"take the time to love yourself today",
                  	"pet a nice kitty today"];
                    //34 lovePhrases2's

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function random_from_array(images){
	return images[Math.floor(Math.random() * images.length)];
}

var tweetInd = 1;

function upload_random_image(images){

	var lovePhrase = chooseRandom(lovePhrases1) + chooseRandom(lovePhrases2);
  //612 possible phrases

	console.log('Opening an image...');
  var image_path = path.join(__dirname, '/images/' + random_from_array(images)),
  b64content = fs.readFileSync(image_path, { encoding: 'base64' });

  console.log('Uploading an image...');

  T.post('media/upload', { media_data : b64content }, function (err, data, response) {
      if (err){
	      console.log('ERROR:');
	      console.log(err);
	    }
	    else{
	      console.log('Image uploaded!');
	      console.log('Now tweeting it...');
	      T.post('statuses/update', {
	        		status: lovePhrase,
	        		media_ids: new Array(data.media_id_string)
	      		},
	        	function(err, data, response) {
	        		if (err){
	            		console.log('ERROR:');
	            		console.log(err);
	          		} else{
	            		console.log('Tweet #' + tweetInd + ' posted!');
                  tweetInd = tweetInd + 1;
	          		}
	        	}
	     	);
    	}
  	});
}

fs.readdir(__dirname + '/images', function(err, files) {
	if (err){
    	console.log(err);
  	}
  	else{
    	var images = [];
    	files.forEach(function(f) {
      		images.push(f);
    	});
  	}
  	upload_random_image(images);
  	setInterval(function(){
    	upload_random_image(images);
    	}, 2 * 1000 * 60 * 60);
});