# twitbot

This bot combines phrases from two arrays to tweet with one image randomly selected from the images folder. It attempts to tweet every two hours.

_Note: you must be comfortable using your computer's command line interface to use this bot. If you've never used it, there are tutorials for [macOS](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line) and [Windows](http://www.bleepingcomputer.com/tutorials/windows-command-prompt-introduction/)._

## Installation

If you don't already have have them, install [Node.js](http://nodejs.org/). This will install two programs: `node`, which runs JavaScript from the command line, and `npm`, which helps you install software that Node.js can run.

Make an empty project directory somewhere convenient for you, [download the archive zip file](https://github.com/dariusk/examplebot/archive/master.zip), and unzip the contents to your project directory. Go to your project directory in the command line. There should be four files there: `.gitignore`, `README.md`, `bot.js` and `config.js`. In that directory type:

`npm install twit`

This installs some code to the `npm_modules` subdirectory, which you don't need to worry about. (It's Twit, the library that lets us talk to Twitter.)

## Connecting to Twitter

At this point you need to register a Twitter account and also get its "app info".

So create a Twitter account for whatever account you want to tweet this stuff. Twitter doesn't allow you to register multiple twitter accounts on the same email address. I used my normal gmail account and added +something before the @ sign (i.e. alexrlev+something@gmail.com). Once you register the account to that email address, wait for the confirmation email. Then go here and log in as the Twitter account for your bot:

https://apps.twitter.com/app/new

Once you're there, fill in the required fields: name, description, website. None of it really matters at all to your actual app, it's just for Twitter's information. Do the captcha and submit.

Next you'll see a screen with a "Details" tab. Click on the "Settings" tab and under "Application Type" choose "Read and Write", then hit the update button at the bottom.

Then go to the Keys and Access Tokens tab, and at the bottom click "create my access token". Nothing might happen immediately. Wait a minute and reload the page. then there should be "access token" and "access token secret", which are both long strings of letters and numbers.

Now use a text editor to open up the "config.js" file. It should look like this:

```javascript
module.exports = {
  consumer_key:         'blah',
  consumer_secret:      'blah',
  access_token:         'blah',
  access_token_secret:  'blah'
}
```

In between those quotes, instead of `'blah'`, paste the appropriate info from the Details page. This is essentially the login information for the app.

Now type the following in the command line in your project directory:

`node bot.js`

Hopefully at this point you see a couple messages about opening the images, uploading, and successfully tweeting.

For me, my laptop has to be on and I have to leave the command prompt open in order for the bot to continue to post every two hours. Otherwise, the function is cancelled and ended.

I built this using these two githubs as tutorials: https://github.com/dariusk/examplebot

https://github.com/nisrulz/twitterbot-nodejs

The Twitter developer site is also a great resource!

Follow my bot (https://twitter.com/botisdoingok) for its cute, wholesome posts! (also because I like the validation)
