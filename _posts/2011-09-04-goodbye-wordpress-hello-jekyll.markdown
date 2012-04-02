--- 
layout: post
title: Goodbye WordPress - Hello Jekyll
image: "http://static-assets.travisberry.com/post_images/jekyll.jpg"
thumbnail: "http://static-assets.travisberry.com/thumbnails/jekyll_thumb.jpg"
summary: "I got 99 problems but a server ain't one."
---
<article class="post clearfix">
  <h3>Goodbye WordPress - Hello Jekyll</h3>
  <a href="http://www.flickr.com/photos/oldeyankee/2698654569/sizes/o/" class="postImageLink"><img src="http://static-assets.travisberry.com/post_images/jekyll.jpg" alt="" class="thumbnail alignleft" width=640  /></a>
  <h6>Published: September 04, 2011</h6>

I ran WordPress for a couple years. There's nothing particularly wrong with it. It is still a powerful CMS with a huge community behind it. So why did I leave?

Really I was just looking for something else to do. That and running this site on a cheap little host wasn't cutting it anymore. Even with all the WordPress performance tweaks my site was still running slow and running out of memory. 
<div class="clearfix"></div>

I bounced around a bit on what to replace it with. I looked real hard at [Locomotive CMS](http://www.locomotivecms.com/) and I still really like it, but in the end I figured I would get the best performance out of an entirely static site. And with s3 offering support for static sites, I could run without a server.

Once I decided on a static site, my options got a lot smaller. The big ones I looked at were [Stasis](http://stasis.me/), [Jekyll](http://jekyllrb.com/), and [Cactus](https://github.com/koenbok/Cactus). All have their strengths but in the end I chose Jekyll since it's ruby based and has a fairly large community. Stasis does some cool things with a controller, but it's a little too new for me.

I'm not going to walk through everything I did to set this up. There are several good tutorials on the web already and you can always check out the source of this site on [github](https://github.com/ninetwentyfour/travisberry_com_static).

These are a few of the sites that helped me get Jekyll up and running.

- [Blogging Like A Hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html) - Article from the creator of Jekyll.

- [Gist Tag For Jekyll](http://brandontilley.com/2011/01/30/gist-tag-for-jekyll.html) - Use gists for code blocks with noscript fallback.

- [Jekyll Plugins](https://github.com/kinnetica/jekyll-plugins) - List of plugins to extend Jekyll

- [How To WordPress To Jekyll](http://paulstamatiou.com/how-to-wordpress-to-jekyll) - Good article on moving from WordPress

- [Installing and Using Jekyll](http://vitobotta.com/how-to-migrate-from-wordpress-to-jekyll/#installing-and-using-jekyll) - Covers a lot of little things that are easy to miss during setup.

Overall I like the new setup. The simple interface and speed of the finished site are two big bonuses. However, Jekyll is far from the simple to use software the WordPress is. If you don't feel like messing with the internals of your blog software, I would recommend you stick with WordPress. If you like tinkering and love fast sites, then give Jekyll a test run.


</article>
