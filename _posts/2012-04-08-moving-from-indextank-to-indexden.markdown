--- 
layout: post
title: Moving From IndexTank To IndexDen
image: "http://static-assets.travisberry.com/post_images/indexden.jpg"
thumbnail: "http://static-assets.travisberry.com/thumbnails/indexden_thumb.jpg"
summary: "IndexTank is closing. Make an easy transition with IndexDen."
---
<article class="post clearfix">
  <h3>Moving From IndexTank To IndexDen</h3>
  <a href="http://s0.geograph.org.uk/geophotos/02/41/96/2419659_06c1d213.jpg" class="postImageLink"><img src="http://static-assets.travisberry.com/post_images/indexden.jpg" alt="" class="thumbnail alignleft" width=640  /></a>
  <h6>Published: April 08, 2012</h6>

A while back I did a post on [using IndexTank with CakePHP](http://www.travisberry.com/2011/02/fast-cakephp-search-with-indextank/). Since then IndexTank has been bought by LinkedIn and will be [shutdown](https://indextank.com/documentation/faq2).

Luckily there is a drop in replacement in the form of [IndexDen](http://indexden.com/). I was able to get [Homkora](http://homkora.com) switched over in about 30 minutes.

First signup for an account with IndexDen. Then create the indexes that you need. I recommend calling them whatever you called them in IndexTank, that way there is no need to change the code.

From the example in the original post

<div class="gistFallback">
{% gist 1177288 example1.php %}
</div>

All you have to change is `$API_URL = 'YOUR API URL HERE';` from the IndexTank URL to the IndexDen one.

That is technically all you need to do to start using IndexDen instead of IndexTank. However, you will notice that none of you records are in the new index.

A quick way to add them back in is with a simple loop. Staying with the last posts example, here is how I added the projects from Homkora.

<div class="gistFallback">
{% gist 2339198 projects_controller.php %}
</div>

I just added in this simple function, hit the URL once, then removed it. All the old records are in, and any new records will be added thanks to the code from the first post.

So if you need a quick fix for IndexTanks closure, give IndexDen a shot. I've been in contact with the CEO of the company and he seems like a really nice guy so if you have a more complex setup, contact them and I bet they can help you out.

</article>