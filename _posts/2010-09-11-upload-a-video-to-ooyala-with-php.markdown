--- 
layout: post
title: Upload A Video To Ooyala With PHP
wordpress_id: 1057
wordpress_url: http://oldstatic.travisberry.com/?p=1057
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic.travisberry.com/ooyala_upload.jpg"
summary: "Ooyala is a fairly popular video hosting platform. We have started using them where I work, and they seem to be doing a really good job so far."
---
<article class="post clearfix">
  <h3>Upload A Video To Ooyala With PHP</h3>
  <a href="http://www.cl.cam.ac.uk/Relics/archive_photos.html" class="postImageLink"><img src="http://oldstatic.travisberry.com/ooyala_upload.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2010-09-11</h6>

**EDIT**: [You can find a better/updated Ooyala class here](https://github.com/ninetwentyfour/Ooyala-Uploader).

[Ooyala](http://www.ooyala.com/) is a fairly popular video hosting platform. We have started using them where I work, and they seem to be doing a really good job so far. One of the advantages of Ooyala is their nice API. They have some [example code](http://www.ooyala.com/support/docs/backlot_api#example) for you to use, but one feature that was lacking was uploading. They also have a widget that does do uploading but it is handled through Flash, something I wanted to avoid.

This example builds on top of their existing PHP code. Here is the final code. (You're really going to want to copy paste this into a real code editor, my code tag makes me really mess with my formatting. Apologies.)

{% gist 1177051 example1.php %}

Essentially, you want to create an upload form, and post the values to the publish() function. From there you should be good to go.

I’m sure there is an easier way to do this, so if you know how to improve this, please let me know in the comments.

</article>