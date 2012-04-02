--- 
layout: post
title: Remove WordPress' NoFollow Without A Plugin
wordpress_id: 1214
wordpress_url: http://oldstatic.travisberry.com/?p=1214
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic2.travisberry.com/do_follow.jpg"
summary: "And even better, do so without modifying the WordPress core files. It’s really quite simple."
---
<article class="post clearfix">
  <h3>Remove WordPress' NoFollow Without A Plugin</h3>
  <a href="http://www.siliakatung.com/exhibition.htm" class="postImageLink"><img src="http://oldstatic2.travisberry.com/do_follow.jpg" alt="" class="thumbnail alignleft" width=640  /></a>
  <h6>Published: 2010-10-03</h6>

And even better, do so without modifying the WordPress core files. It's really quite simple.
<div class="clearfix"></div>
In your templates functions.php file add 

<div class="gistFallback">
{% gist 1177082 example1.php %}
</div>

Then in your comments.php file, find and replace any mention of

<div class="gistFallback">
{% gist 1177082 example2.php %}
</div>

With

<div class="gistFallback">
{% gist 1177082 example3.php %}
</div>

This simply replaces the core files "comment_author_link()" function with one of our own. The original has

<div class="gistFallback">
{% gist 1177082 example4.php %}
</div>

as the link. We simply remove the rel attribute and change it to

<div class="gistFallback">
{% gist 1177082 example5.php %}
</div>

and it removes the nofollow attribute from your comments. No modifying of the core files, and one less plugin to deal with.

If you have tips for removing other plugins and using your own solution, let me know in the comments.

</article>