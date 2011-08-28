--- 
layout: post
title: Making display:none; Javascript Accessible
wordpress_id: 365
wordpress_url: http://www.travisberry.com/?p=365
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://www.travisberry.com/wp-content/uploads/2009/12/javascript.jpg"
---
[![javascript](http://www.travisberry.com/wp-content/uploads/2009/12/javascript.jpg "javascript")](http://www.flickr.com/photos/dmitry-baranovskiy/)When creating a collapsible navigation for a client, I came across the problem of having my navigation remaining hidden if someone has javascript disabled. Needless to say, this was a big problem. There is no secondary navigation on the site, so without it, there is NO navigation.<!--more-->The problem came from the fact that the element is set to ``.menu_body{display:none;}``Which is fine and dandy if you have javascript enabled. If you don't, all you see is a list of headers.Luckily there is an easy solution. Create another css file. I named mine, nojs.cssIn the css file add this, (Change the selector to which ever one you have set to display:none;)``.menu_body {display:inline !important;}``Place the file somewhere on your server and move back to your html.Add a &lt;noscript&gt; tag and in between create a link to the new css file.That's it. Your navigation should now show if someone has javascript disabled.Any other simple accessibility solutions I left out? Let me know in the comments.
