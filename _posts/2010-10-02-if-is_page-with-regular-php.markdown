--- 
layout: post
title: If is_page() With Regular PHP
wordpress_id: 1181
wordpress_url: http://oldstatic.travisberry.com/?p=1181
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic1.travisberry.com/wp-content/uploads/2010/10/paper_machine.jpg"
summary: "My article on WordPress' is_page() is one of the most popular articles on my site. One thing I receive questions about on a regular basis, is how to use is_page() in regular PHP. "
---
<article class="post clearfix">
  <h3>If is_page() With Regular PHP</h3>
  <a href="http://www.flickr.com/photos/14277117@N03/3865517102" class="postImageLink"><img src="http://oldstatic1.travisberry.com/wp-content/uploads/2010/10/paper_machine.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2010-10-02</h6>

My article on [WordPress' is_page()](http://oldstatic.travisberry.com/2010/01/use-wordpress-is_page-to-display-custom-content/) is one of the most popular articles on my site. One thing I receive questions about on a regular basis, is how to use is_page() in regular PHP. 
<div class="clearfix"></div>
Well the downside is, you can't. The upside is that you can still perform a similar check

<div class="gistFallback">
{% gist 1177074 example1.php %}
</div>

Not as smooth as is_page() but still a fairly simple way to check the page you are currently on. You can easily check if it is "=="/"!=", and add in as many "&&"/"||" conditions as you want.

As always, if you have a better way to do this, or use it in something cool, let me know in the comments.

</article>