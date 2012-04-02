--- 
layout: post
title: Setting Up Quicktime Streaming
wordpress_id: 39
wordpress_url: http://oldstatic.travisberry.com/?p=39
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic1.travisberry.com/wp-content/uploads/2009/12/seriesoftubes.jpg"
summary: "I usually use a third-party service such as vimeo to host and stream my video. However, after moving to my new awesome host, DreamHost, I discovered that they had an option to enable quicktime streaming. I poked around the support wiki and decided to test it out."
---
<article class="post clearfix">
  <h3>Setting Up Quicktime Streaming</h3>
  <a href="http://www.flickr.com/photos/mwichary/2319091169/" class="postImageLink"><img src="http://oldstatic1.travisberry.com/wp-content/uploads/2009/12/seriesoftubes.jpg" alt="" class="thumbnail alignleft" width=640  /></a>
  <h6>Published: 2009-11-14</h6>

I usually use a third-party service such as [vimeo](http://vimeo.com) to host and stream my video. However, after moving to my new awesome host, [DreamHost](http://www.dreamhost.com/), I discovered that they had an option to enable quicktime streaming. I poked around the support wiki and decided to test it out. <!--more-->

The process to setup is super simple. Click on the media streaming panel in your dashboard and pick a streaming sub domain. Give it a little while to setup and that's it.

DreamHost creates a folder on your server to upload your .mov files into. They also generate a new url that will look something like rtsp://your_streaming_subdomain.com:554/your_streaming_subdomain.com/movie.mov

You take this url and use an &lt;object&gt; code to embed the movie in a page.

The final code looks something like this

<div class="gistFallback">
{% gist 1176830 quicktime.html %}
</div>

Here is my first test at an embeded .mov file streamed off a quicktime server.

<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="376" width="640"><param name="src" value="http://oldstatic.travisberry.com/videos/Comp51_3.mov" /><param name="autoplay" value="false" /><param name="type" value="video/quicktime" height="376" width="640" /><embed src="http://oldstatic.travisberry.com/videos/Comp51_3.mov" height="376" width="640" autoplay="false" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/" /></object>

You may have noticed that this is in fact not embedded with the code above. I couldn't get it to work. I used this code -

<div class="gistFallback">
{% gist 1176830 quicktime2.html %}
</div>

This may be caused by numerous things. I will continue to update as I tinker around with a solution. However, a regular quicktime embed does seem to move a little faster but that could be in my head.

I'm up in the air as to stay with flash video or move to hosted quicktime. There are upsides and downsides to both. 

If you have any thoughts about which is the better way to go, let me know in the comments.
<article>