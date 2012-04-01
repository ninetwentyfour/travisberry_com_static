--- 
layout: post
title: Hubot Deploy
image: "http://static-assets3.travisberry.com/post_images/hubot-capistrano.jpg"
thumbnail: "http://static-assets3.travisberry.com/thumbnails/hubot-capistrano_thumb.jpg"
summary: "Use Hubot and Capistrano to deploy applications for you."
---
<article class="post clearfix">
  <h3>Robot Music Goodness</h3>
  <a href="#" class="postImageLink"><img src="http://static-assets3.travisberry.com/post_images/hubot-capistrano.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: March 01, 2012</h6>

I've been spending way too much time playing with Hubot lately.

The latest creation is a script to get Hubot and Play (the awesome music server) to add songs from soundcloud. When complete, we should be able to tell `hubot add to play SOUNDCLOUD_URL` and have the song added to Play.

Let's start with the simple Sinatra midlayer.

<div class="gistFallback">
{% gist 1952432 download.rb %}
</div>

</article>
