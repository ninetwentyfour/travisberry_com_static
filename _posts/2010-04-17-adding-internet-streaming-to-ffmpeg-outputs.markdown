--- 
layout: post
title: Adding Internet Streaming To FFmpeg Outputs
wordpress_id: 908
wordpress_url: http://oldstatic.travisberry.com/?p=908
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic1.travisberry.com/wp-content/uploads/2010/04/qtindexswapper.jpg"
summary: "Just a quick post. After deciding that FFmpeg was my video compressor of choice, I ran into a small problem. The videos that are outputted don't begin playing immediately when embedded in a web page. This is a pretty big setback."
---
<article class="post clearfix">
  <h3>Adding Internet Streaming To FFmpeg Outputs</h3>
  <a href="http://oldstatic.travisberry.com/wp-content/uploads/2010/04/qtindexswapper.jpg" class="postImageLink"><img src="http://oldstatic1.travisberry.com/wp-content/uploads/2010/04/qtindexswapper.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2010-04-17</h6>

Just a quick post. After deciding that FFmpeg was my video compressor of choice, I ran into a small problem. The videos that are outputted don't begin playing immediately when embedded in a web page. This is a pretty big setback.
<div class="clearfix"></div>
Luckily there is a small AIR application that can solve the problem for us. 

[QTIndexSwapper](http://renaun.com/blog/2008/08/14/262/) is a small application that prepares .h264 encoded video for internet streaming. It does this by rearranging the index file. It's simple and fast, and from what I've seen so far, adds no quality loss to your video. 

So if you've tried the code I posted for compressing video with FFmpeg, but have had trouble streaming them on the web, try this application. 
</articles>