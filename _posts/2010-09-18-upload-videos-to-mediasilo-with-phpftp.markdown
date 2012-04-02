--- 
layout: post
title: Upload Videos To MediaSilo With PHP/FTP
wordpress_id: 1094
wordpress_url: http://oldstatic.travisberry.com/?p=1094
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic3.travisberry.com/wp-content/uploads/2010/09/media_silo_pic.jpg"
summary: "In continuing with my last post on how to upload videos to Ooyala with PHP, here is one for MediaSilo. This ones a little different though in that it uses FTP as opposed to an API to upload the videos"
---
<article class="post clearfix">
  <h3>Upload Videos To MediaSilo With PHP/FTP</h3>
  <a href="http://www.flickr.com/photos/spiesteleviv/3654728245/" class="postImageLink"><img src="http://oldstatic3.travisberry.com/wp-content/uploads/2010/09/media_silo_pic.jpg" alt="" class="thumbnail alignleft" width=640  /></a>
  <h6>Published: 2010-09-18</h6>

In continuing with my last post on [how to upload videos to Ooyala with PHP](http://oldstatic.travisberry.com/2010/09/upload-a-video-to-ooyala-with-php/), here is one for [MediaSilo](http://www.mediasilo.com/). This ones a little different though in that it uses FTP as opposed to an API to upload the videos.
<div class="clearfix"></div>
Alright, so let's get to the code.

<div class="gistFallback">
{% gist 1177059 example1.php %}
</div>

The above code should be fairly easy to understand. The code just globs a folder of all files and loops through them, uploading each one. 

If you have any ideas on how to make this code better, or expand upon it, let me know in the comments.

(One caveat to using FTP to upload to MediaSilo is that you do need to have at least a “Hollywood” level account, which is going to set you back $100 a month)

</article>