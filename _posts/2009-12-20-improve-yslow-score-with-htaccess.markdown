--- 
layout: post
title: Improve YSlow Score With .htaccess
wordpress_id: 449
wordpress_url: http://www.travisberry.com/?p=449
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://www.travisberry.com/wp-content/uploads/2009/12/warpspeed.jpg"
---
[![warpspeed](http://www.travisberry.com/wp-content/uploads/2009/12/warpspeed.jpg "warpspeed")](http://www.flickr.com/photos/markjsebastian/3114597691/)How fast your site loads is a huge factor in how many visits you get. One of the biggest names in performance testing is [YSlow](http://developer.yahoo.com/yslow/). A high score on YSlow is a good indicator that your site is performing well. Many of the scores can be improved with a little bit of tweaking to your .htaccess file.<!--more-->Add this snippet to the top of your .htaccess file.``Header unset ETagFileETag None&lt;FilesMatch "\.(css|js)$"&gt;               SetOutputFilter DEFLATE               &lt;/FilesMatch&gt;               &lt;FilesMatch "\.(mov|otf|eot|ttf|ico|pdf|flv|jpg|jpeg|png|gif|js|css|swf)$"&gt;               Header set Expires "Thu, 15 Apr 2010 20:00:00 GMT"               &lt;/FilesMatch&gt;``Now for a little breakdown of what each part does.This part disables [E-Tags](http://en.wikipedia.org/wiki/HTTP_ETag) so not to cause conflicts.``Header unset ETagFileETag None``This [gzips](http://en.wikipedia.org/wiki/Gzip) your css and javascript files resulting in a smaller transfer size.``&lt;FilesMatch "\.(css|js)$"&gt;               SetOutputFilter DEFLATE               &lt;/FilesMatch&gt;``This adds a [far future Expires header](http://www.askapache.com/htaccess/apache-speed-expires.html) to most static files you will have. ``&lt;FilesMatch "\.(mov|otf|eot|ttf|ico|pdf|flv|jpg|jpeg|png|gif|js|css|swf)$"&gt;               Header set Expires "Thu, 15 Apr 2010 20:00:00 GMT"               &lt;/FilesMatch&gt;``With these few changes your score in YSlow should dramatically improve. Any other .htacces tricks? Let me know in the comments.
