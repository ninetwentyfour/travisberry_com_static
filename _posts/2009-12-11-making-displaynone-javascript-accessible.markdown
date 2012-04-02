--- 
layout: post
title: Making display:none; Javascript Accessible
wordpress_id: 365
wordpress_url: http://oldstatic.travisberry.com/?p=365
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic3.travisberry.com/wp-content/uploads/2009/12/javascript.jpg"
summary: "When creating a collapsible navigation for a client, I came across the problem of having my navigation remaining hidden if someone has javascript disabled. Needless to say, this was a big problem"
---
<article class="post clearfix">
  <h3>Making display:none; Javascript Accessible</h3>
  <a href="http://www.flickr.com/photos/dmitry-baranovskiy/" class="postImageLink"><img src="http://oldstatic3.travisberry.com/wp-content/uploads/2009/12/javascript.jpg" alt="" class="thumbnail alignleft" width=640  /></a>
  <h6>Published: 2009-12-11</h6>
<p>
When creating a collapsible navigation for a client, I came across the problem of having my navigation remaining hidden if someone has javascript disabled. Needless to say, this was a big problem. There is no secondary navigation on the site, so without it, there is NO navigation.<span id="more-365"></span></p>
<p>The problem came from the fact that the element is set to</p>
<p><div class="gistFallback">{% gist 1176865 example1.css %}</div></p>
<p>Which is fine and dandy if you have javascript enabled. If you don&#8217;t, all you see is a list of headers.</p>

<p>Luckily there is an easy solution. Create another css file. I named mine, nojs.css</p>
<p>In the css file add this, (Change the selector to which ever one you have set to display:none;)</p>
<p><div class="gistFallback">{% gist 1176865 example2.css %}</div></p>
<p>Place the file somewhere on your server and move back to your html.</p>
<p>Add a &lt;noscript&gt; tag and in between create a link to the new css file.</p>

<p>That&#8217;s it. Your navigation should now show if someone has javascript disabled.</p>
<p>Any other simple accessibility solutions I left out? Let me know in the comments.</p>
</article>