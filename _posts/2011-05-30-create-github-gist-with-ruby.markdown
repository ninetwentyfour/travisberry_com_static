--- 
layout: post
title: Create GitHub Gist With Ruby
wordpress_id: 1381
wordpress_url: http://oldstatic.travisberry.com/?p=1381
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic2.travisberry.com/wp-content/uploads/2011/05/gists.jpg"
thumbnail: "http://static-assets.travisberry.com/thumbnails/gists_thumb.jpg"
summary: "One of my favorite github features is gists. Gists are a simple code pasting and sharing service."
---
<article class="post clearfix">
  <h3>Create GitHub Gist With Ruby</h3>
  <a href="http://oldstatic.travisberry.com/wp-content/uploads/2011/05/gists.jpg" class="postImageLink"><img src="http://oldstatic2.travisberry.com/wp-content/uploads/2011/05/gists.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: May 30, 2011</h6>

If you didn't know already, [GitHub](https://github.com/) is freaking awesome. One of my favorite features is gists. Gists are a simple code pasting and sharing service. Also perfect for displaying code in blog posts.

I've grown tired of dealing with libraries to make my code examples look good. Some don't work that well, changes aren't revisioned, and they all around kind of suck to mess with. So in an effort to fix all that, I have decided to start using gists for my code examples. 

I'm in the process of converting my site over to running [Locomotive CMS](http://www.locomotivecms.com) instead of WordPress, so I needed to create a way to add gists through the admin interface and simply return the embed code.

<div class="gistFallback">
{% gist 998389 gist_helper.rb %}
</div>

It's pretty simple and works like a champ for me. Obviously I had to write a lot more stuff to integrate with Locomotive CMS, but that is for another post.

If you have questions or a better example, let me know in the comments.
</article>