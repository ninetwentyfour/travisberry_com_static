--- 
layout: post
title: Creating Navigation Highlights
wordpress_id: 17
wordpress_url: http://www.travisberry.com/?p=17
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://www.travisberry.com/wp-content/uploads/2009/12/Course_and_Bearing_Navigation.png"
summary: "When creating this site I decided I wanted to have the navigation bar have a different color highlight the current page. I dived in thinking it would be a simple problem. Turns out I was wrong."
---
<article class="post clearfix">
  <h3>Creating Navigation Highlights</h3>
  <a href="http://www.travisberry.com/wp-content/uploads/2009/12/Course_and_Bearing_Navigation.png" class="postImageLink"><img src="http://www.travisberry.com/wp-content/uploads/2009/12/Course_and_Bearing_Navigation.png" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2009-11-13</h6>
When creating this site I decided I wanted to have the navigation bar have a different color highlight the current page. I dived in thinking it would be a simple problem. Turns out I was wrong.<!--more-->

It's not impossible but it's not easy. As you can see above, I eventually got it to work. [This article](http://www.vanseodesign.com/wordpress/hightlight-current-page-wordpress/) was of immense help. Just follow along and hope for the best.

One final tip, if your home page is different from the blog page, use the is_page('originalpagename') not is_home() and use is_home() for the blog page. Update: This is the code I used for those interested.

<script src="https://gist.github.com/1176823.js?file=highlightedNav.php"></script>
</article>
