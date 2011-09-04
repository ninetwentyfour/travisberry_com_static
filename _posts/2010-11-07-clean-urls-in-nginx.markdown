--- 
layout: post
title: Clean URL's in Nginx
wordpress_id: 1249
wordpress_url: http://oldstatic.travisberry.com/?p=1249
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic.travisberry.com/soap.jpg"
summary: "Quick post to let everyone know of a good trick I just figured out. Most clean URL's are created through a rewrite and query page that does all the work."
---
<article class="post clearfix">
  <h3>Clean URL's in Nginx</h3>
  <a href="http://www.flickr.com/photos/wwworks/612350664 /" class="postImageLink"><img src="http://oldstatic.travisberry.com/soap.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: November 07, 2010</h6>

Quick post to let everyone know of a good trick I just figured out. Most clean URL's are created through a rewrite and query page that does all the work. Sometimes though you just want to have a couple php scripts that you can link to like http://oldstatic.travisberry.com/example

In Apache this is trivial. In Nginx, you can spend a couple days trying to get right. 

Turns out the solution is simple. If you use a block of code like this

{% gist 1177191 example1.txt %}

to turn on PHP, just replace the location with

{% gist 1177191 example2.txt %}

and comment out

{% gist 1177191 example3.txt %}

Your code block should now look like

<script src="https://gist.github.com/1177191.js?file=example4.txt"></script>

Now instead of linking to /example.php, you can save the file with no extension, put it on your server, and link to /example

Nginx will now handle files without and extension as PHP files. This is a solution that will only fit a limited number of use cases, but compared to writing a rewrite wrapper, this is quick and easy.

</article>