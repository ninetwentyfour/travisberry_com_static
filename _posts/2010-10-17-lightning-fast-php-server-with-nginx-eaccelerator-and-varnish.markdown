--- 
layout: post
title: Lightning Fast PHP Server With Nginx, eAccelerator, and Varnish
wordpress_id: 1233
wordpress_url: http://oldstatic.travisberry.com/?p=1233
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic3.travisberry.com/wp-content/uploads/2010/10/nginx_server.jpg"
summary: "Just because Apache has large numbers, doesn’t mean it’s the best in terms of performance."
---
<article class="post clearfix">
  <h3>Lightning Fast PHP Server With Nginx, eAccelerator, and Varnish</h3>
  <a href="http://www.flickr.com/photos/jurvetson/10438860/" class="postImageLink"><img src="http://oldstatic3.travisberry.com/wp-content/uploads/2010/10/nginx_server.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2010-10-17</h6>

In the word of servers, Apache is still the undisputed king. It’s extendability and ability to run anything you can throw at it has led to it being the number one most used server in the world. Just because it has large numbers though, doesn’t mean it’s the best in terms of performance.

When running a site with lots of traffic, Apache can quickly grow into a large beast. This can be overcome by throwing more machines (and money) at the problem, but for many companies and people, that simply isn’t an option. Instead why not squeeze every piece of performance that you can out of your existing tech.

Enter Nginx. "Nginx is known for its high performance, stability, rich feature set, simple configuration, and low resource consumption." In other words, it will run faster and more efficiently than Apache.

Installing Nginx on Ubuntu is fairly simple.

A simple

<div class="gistFallback">
{% gist 1177105 example1.txt %}
</div>

will get you started. 

Now edit the file in _/etc/nginx/sites-available/default_

change it to

<div class="gistFallback">
{% gist 1177105 example2.txt %}
</div>

This assumes your root web folder is _/var/www_. You’ll also notice I have it set to listen on port 8080 and not the normal 80. This comes into play later when we setup of Varnish, so just go with me for now.

Now we need to get PHP installed so we can actually serve PHP files.

As usual start with

<div class="gistFallback">
{% gist 1177105 example3.txt %}
</div>

then

<div class="gistFallback">
{% gist 1177105 example4.txt %}
</div>

You may have to add _deb http://php53.dotdeb.org stable all_ to your packages list for php5-fpm and php5-cgi to show up.

Before configuring PHP let’s install eAccelerator. "eAccelerator is a free open-source PHP accelerator & optimizer. It increases the performance of PHP scripts by caching them in their compiled state, so that the overhead of compiling is almost completely eliminated. It also optimizes scripts to speed up their execution. eAccelerator typically reduces server load and increases the speed of your PHP code by 1-10 times."

First

<div class="gistFallback">
{% gist 1177105 example6.txt %}
</div>

then

<div class="gistFallback">
{% gist 1177105 example7.txt %}
</div>

Now cd into _/tmp/_

<div class="gistFallback">
{% gist 1177105 example8.txt %}
</div>

Now edit _/etc/php5/fpm/php.ini_

and right under the [PHP] block add

<div class="gistFallback">
{% gist 1177105 example9.txt %}
</div>

Now restart PHP

<div class="gistFallback">
{% gist 1177110 example10.txt %}
</div>

Then restart Nginx

<div class="gistFallback">
{% gist 1177110 example11.txt %}
</div>

Now if you hit http://localhost:8080/index.php you should see your site.

The only thing left to setup at this point is Varnish.

"Varnish store web pages in memory so the web servers don’t have to create the same web page over and over again. The web server only recreate a page when it is changed. Additionally Varnish can serve web pages much faster then any application server is capable of – giving the website a significant speed up."

Install with

<div class="gistFallback">
{% gist 1177110 example12.txt %}
</div>

After install run

<div class="gistFallback">
{% gist 1177110 example13.txt %}
</div>

to make sure it’s not running while we configure it.

Now run

<div class="gistFallback">
{% gist 1177110 example14.txt %}
</div>

Varnish should now be running. Check by typing

<div class="gistFallback">
{% gist 1177110 example15.txt %}
</div>

If you see a series of lines then Varnish should be working.

You can run one more test by going to your browser and reloading the page.

If you see results like

<div class="gistFallback">
{% gist 1177110 example16.txt %}
</div>

Then Varnish is correctly intercepting your requests. Varnish is getting the requests on port 80 forwarding them to Nginx if needed through port 8080, which is why we set it to 8080 earlier. You can set the port to foward in /etc/varnish/default.vcl. You can learn more about the setup and optimization of Varnish here.

You should now have a lighting fast PHP server. This setup is a pretty basic configuration so I’m sure by tweaking each individual component to your needs would get even more performance out of it. Compared to a base Apache config, though, this is fantastic.

If you have some optimization techniques, or have any questions, let me know in the comments.

</article>