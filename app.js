var Twitter = require('twitter');

// Create an app to get your twitter key
// Link: https://apps.twitter.com/
var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

function searchUserTweets(keyword) {
    var params = {
        screen_name: keyword
    };

    // Asynchronous
    client.get('statuses/user_timeline', params, function (error, tweets) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                var tweet = tweets[i];
                console.log('---------------------------------');
                console.log('---------------------------------');
                console.log('---------------------------------');
                console.log('---------------------------------');
                console.log('Author: ', tweet.user.screen_name);
                console.log('About User: ', tweet.user.description);
                console.log('Followers: ', tweet.user.followers_count);
                console.log('Tweet: ', tweet.text);
                console.log('Source: ', tweet.source);
                console.log('Name: ', tweet.user.name);
                console.log('Created: ', tweet.created_at);
            }
        }
    });
}


searchUserTweets('nodejs'); // search from users  Tweets


function tweetSomethingToYourAccount(message) {
    var params1 = {
        status: message
    };

    client.post('statuses/update', params1, function (err, data) {
        if (err) {
            // TODO
            // Handle errors
            return
        }
        console.log('Successfully added');
        console.log('Data: ', data);
    });
}

var message = 'I love Twitter';
tweetSomethingToYourAccount(message); // Tweet to your Twitter account