--- 
layout: post
title: Improve YSlow Score With .htaccess
wordpress_id: 449
wordpress_url: http://oldstatic.travisberry.com/?p=449
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic.travisberry.com/wp-content/uploads/2009/12/warpspeed.jpg"
summary: "How fast your site loads is a huge factor in how many visits you get. One of the biggest names in performance testing is YSlow. A high score on YSlow is a good indicator that your site is performing well."
---
<article class="post clearfix">
  <h3>Improve YSlow Score With .htaccess</h3>
  <a href="http://www.flickr.com/photos/markjsebastian/3114597691/" class="postImageLink"><img src="http://oldstatic.travisberry.com/wp-content/uploads/2009/12/warpspeed.jpg" alt="" class="thumbnail alignleft" width=640  /></a>
  <h6>Published: 2009-12-20</h6>

How fast your site loads is a huge factor in how many visits you get. One of the biggest names in performance testing is [YSlow](http://developer.yahoo.com/yslow/). A high score on YSlow is a good indicator that your site is performing well. Many of the scores can be improved with a little bit of tweaking to your .htaccess file.
<div class="clearfix"></div>
Add this snippet to the top of your .htaccess file.

<div class="gistFallback">
{% gist 1176878 example1.txt %}
</div>

Now for a little breakdown of what each part does.

This part disables [E-Tags](http://en.wikipedia.org/wiki/HTTP_ETag) so not to cause conflicts.

<div class="gistFallback">
{% gist 1176878 example2.txt %}
</div>

This [gzips](http://en.wikipedia.org/wiki/Gzip) your css and javascript files resulting in a smaller transfer size.

<div class="gistFallback">
{% gist 1176878 example3.txt %}
</div>

This adds a [far future Expires header](http://www.askapache.com/htaccess/apache-speed-expires.html) to most static files you will have. 

<div class="gistFallback">
{% gist 1176878 example4.txt %}
</div>

With these few changes your score in YSlow should dramatically improve. Any other .htacces tricks? Let me know in the comments.
</article>