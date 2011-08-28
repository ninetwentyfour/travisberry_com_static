--- 
layout: post
title: If is_page() With Regular PHP
wordpress_id: 1181
wordpress_url: http://www.travisberry.com/?p=1181
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://www.travisberry.com/wp-content/uploads/2010/10/paper_machine.jpg"
---
[![](http://www.travisberry.com/wp-content/uploads/2010/10/paper_machine.jpg "paper_machine")](http://www.flickr.com/photos/14277117@N03/3865517102)My article on [WordPress' is_page()](http://www.travisberry.com/2010/01/use-wordpress-is_page-to-display-custom-content/) is one of the most popular articles on my site. One thing I receive questions about on a regular basis, is how to use is_page() in regular PHP. Well the downside is, you can't. The upside is that you can still perform a similar check<!--more-->[cc lang="php"]<?php$baseurl = 'http://www.example.com'; //set the base url of the site$pageYouWant = $baseurl."/the-rest-of-the-url"; //add the rest of the url you want to check against$currentPage = $baseurl.$_SERVER['REQUEST_URI'];// this gets the current page urlif($pageYouWant==$currentPage) {    //do something}?>[/cc]Not as smooth as is_page() but still a fairly simple way to check the page you are currently on. You can eaisly check if it is "=="/"!=", and add in as many â€œ&&â€/â€œ||â€ conditions as you want.As always, if you have a better way to do this, or use it in something cool, let me know in the comments.<script>utmx_section("contact1")</script><div id="contactme"><div class="avatar">![](http://www.gravatar.com/avatar/c9e8248c1237949b66a735bed64ae841?s=32&d=identicon&r=G)</div>I'm just a guy interested in all things design and web related. You should [contact me](http://www.travisberry.com/contact/) about about this article, for freelance work, or for any reason.</div>
