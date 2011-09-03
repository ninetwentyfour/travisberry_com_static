--- 
layout: post
title: Use WordPress' is_page() To Display Custom Content
wordpress_id: 527
wordpress_url: http://oldstatic.travisberry.com/?p=527
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic.travisberry.com/wp-content/uploads/2010/01/wordpressnotebook.jpg"
summary: "Something that comes up on a regular basis is how to display certain content on different pages or if certain conditions are met."
---
<article class="post clearfix">
  <h3>Use WordPress' is_page() To Display Custom Content</h3>
  <a href="http://www.flickr.com/photos/nbachiyski/2186228674/" class="postImageLink"><img src="http://oldstatic.travisberry.com/wp-content/uploads/2010/01/wordpressnotebook.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2010-01-11</h6>

Something that comes up on a regular basis is how to display certain content on different pages or if certain conditions are met. One way to accomplish this would be to create separate templates for each page. However, if you have a bunch of pages this can quickly become a pain. The other way to accomplish this would be to use WordPress' is_page() function to display content when you want.

First let's take a look at what the function is. According to the codex 

<blockquote>
This Conditional Tag checks if Pages are being displayed. This is a boolean function, meaning it returns either TRUE or FALSE.
</blockquote> 

Ok, that's not the most helpful description ever. A simpler explanation would be that the tag checks the name of the page and returns TRUE or FALSE. This means you can put a nice little echo in there and have it display whatever you want.

So let's say you have one page.php file. This is the template you use on every page on your site. On your about page you would like to add a secondary navigation. I don't know why you want to, let's just say you do. This navigation sits above the content area, so you can't just add it into your page through the WordPress wysiwyg editor. Again, you could create a new template for the page, but that is boring. Instead, where you want the second navigation to be, enter this into your page.php file.

{% gist 1176883 example1.php %}

The code is asking if the page is named "about", if it is, it echo's the div "secondnav". If the page isn't called "about" then it echo's nothing and nothing is displayed. It's that simple. If you want the nav to display on the "about"and "contact"page add this

{% gist 1176883 example2.php %}

One place I find myself using this a lot is loading javascript only on pages that need it. One problem of adding javascript links to your footer.php file is that they are called on everypage whether you need them or not. The simple way to call them only when need is to add them like this

{% gist 1176883 example3.php %}

This works well for pages, but for your blog page and single posts you will need a different function.

For your blog page use ``is_home()`` 

For your single posts use ``is_single()`` 

WordPress provides a slew of other tags as well including 

``is_home(), is_front_page(), is_search(), is_404(), is_singular(), is_page(), is_attachment(), is_local_attachment(), is_single(), is_sticky(), is_archive(), is_category(), is_tag(), is_author(), is_date(), is_year(), is_month(), is_day(), is_time(), is_admin(), is_preview(), is_paged(), is_page_template(), is plugin active(), is_plugin_page(), is_new_day(), is_feed(), is_trackback(), is_comments_popup(), comments_open(), pings_open(), is_taxonomy(), is_taxonomy_hierarchical(), is_term(), is_user_logged_in(), is_blog_installed(), is_active_sidebar(), is_dynamic_sidebar(), is_active_widget()``

As you can see, you can target pretty specific events and conditions. So have fun experimenting with conditional tags and if you come up with something cool, let me know in the comments.

**Edit:** To use regular PHP and not WordPress to include content, see [my post here](http://oldstatic.travisberry.com/2010/10/if-is_page-with-regular-php/).

</article>