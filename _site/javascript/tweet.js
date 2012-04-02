// $(document).ready(function() {
// 
//     // set your twitter id
//     var user = 'travisberry';
// 
//     // using jquery built in get json method with twitter api, return only one result
//     $.getJSON('http://twitter.com/statuses/user_timeline.json?screen_name=' + user + '&count=1&callback=?', function(data)      {
// 
//         // result returned
//         var tweet = data[0].text;
// 
//         // process links and reply
//         tweet = tweet.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function(url) {
//             return '<a href="'+url+'">'+url+'</a>';
//         }).replace(/B@([_a-z0-9]+)/ig, function(reply) {
//             return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
//         });
// 				var strng = '<div class="media text-media"><div class="media-wrapper"><div class="media-container"><div class="twitter"><blockquote><p><a href="http://twitter.com/zlwise">@zlwise</a> Lovely! And the transitions are nicely paced.</p></blockquote> <a href="https://twitter.com/alykat/status/164184609519697920" alt="link to original tweet" title="link to original tweet"><span class="created-at"></span> </a><div class="vcard author"><a class="screen-name url" href="https://twitter.com/alykat" data-screen-name="alykat"><span class="avatar"><img src=" http://a0.twimg.com/profile_images/28267962/aly-aim_normal.gif" alt=""></span><span class="fn">Alyson Hurt</span><span class="nickname">@alykat</span></a></div></div></div></div></div>'
//         // output the result
//         $("#tweet").html(tweet);
//     }); 
// 
// });
JQTWEET = {

    // Set twitter username, number of tweets & id/class to append tweets
    user: 'travisberry',
    numTweets: 1,
    appendTo: '#tweet',

    // core function of jqtweet
    loadTweets: function() {
        $.ajax({
            url: 'http://api.twitter.com/1/statuses/user_timeline.json/',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                screen_name: JQTWEET.user,
                include_rts: true,
                count: JQTWEET.numTweets,
                include_entities: true
            },
            success: function(data, textStatus, xhr) {

                 var html = '<div class="tweet">TWEET_TEXT<div class="time">AGO</div>';
									//html = html + "<div class='vcard author'><a class='screen-name url' href='https://twitter.com/#!/travisberry' data-screen-name='travisberry'><span class='avatar'><img src='https://si0.twimg.com/profile_images/1359025453/selfPicCrop_normal.png' alt=''></span><span class='fn'>Travis Berry</span><span class='nickname'>@travisberry</span></a></div>";
									$("#tweet-box").append("<div class='vcard author'><a class='screen-name url' href='https://twitter.com/#!/travisberry' data-screen-name='travisberry'><span class='avatar'><img src='https://si0.twimg.com/profile_images/1359025453/selfPicCrop_normal.png' alt=''></span><span class='fn'>Travis Berry</span><span class='nickname'>@travisberry</span></a></div>");
                 // append tweets into page
                 for (var i = 0; i < data.length; i++) {
                    $(JQTWEET.appendTo).append(
                        html.replace('TWEET_TEXT', JQTWEET.ify.clean(data[i].text) )
                            .replace(/USER/g, data[i].user.screen_name)
                            .replace('AGO', JQTWEET.timeAgo(data[i].created_at) )
                            .replace(/ID/g, data[i].id_str)
                    );
                 }                  
            }   

        });

    }, 


    /**
      * relative time calculator FROM TWITTER
      * @param {string} twitter date string returned from Twitter API
      * @return {string} relative time like "2 minutes ago"
      */
    timeAgo: function(dateString) {
        var rightNow = new Date();
        var then = new Date(dateString);

        if ($.browser.msie) {
            // IE can't parse these crazy Ruby dates
            then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
        }

        var diff = rightNow - then;

        var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;

        if (isNaN(diff) || diff < 0) {
            return ""; // return blank string if unknown
        }

        if (diff < second * 2) {
            // within 2 seconds
            return "right now";
        }

        if (diff < minute) {
            return Math.floor(diff / second) + " seconds ago";
        }

        if (diff < minute * 2) {
            return "about 1 minute ago";
        }

        if (diff < hour) {
            return Math.floor(diff / minute) + " minutes ago";
        }

        if (diff < hour * 2) {
            return "about 1 hour ago";
        }

        if (diff < day) {
            return  Math.floor(diff / hour) + " hours ago";
        }

        if (diff > day && diff < day * 2) {
            return "yesterday";
        }

        if (diff < day * 365) {
            return Math.floor(diff / day) + " days ago";
        }

        else {
            return "over a year ago";
        }
    }, // timeAgo()


    /**
      * The Twitalinkahashifyer!
      * http://www.dustindiaz.com/basement/ify.html
      * Eg:
      * ify.clean('your tweet text');
      */
    ify:  {
      link: function(tweet) {
        return tweet.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
          var http = m2.match(/w/) ? 'http://' : '';
          return '<a class="twtr-hyperlink" target="_blank" href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
        });
      },

      at: function(tweet) {
        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g, function(m, username) {
          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
        });
      },

      list: function(tweet) {
        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20}\/\w+)/g, function(m, userlist) {
          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/' + userlist + '">@' + userlist + '</a>';
        });
      },

      hash: function(tweet) {
        return tweet.replace(/(^|\s+)#(\w+)/gi, function(m, before, hash) {
          return before + '<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23' + hash + '">#' + hash + '</a>';
        });
      },

      clean: function(tweet) {
        return this.hash(this.at(this.list(this.link(tweet))));
      }
    } // ify


};
$(document).ready(function () {
    // start jqtweet!
    JQTWEET.loadTweets();
		//$("#tweet-box").append("<p>Test</p>");
});