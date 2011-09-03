--- 
layout: post
title: "Use WordPress' is_page() To Exclude Content"
wordpress_id: 582
wordpress_url: http://oldstatic.travisberry.com/?p=582
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic.travisberry.com/uploads/2010/01/wordpressnotebookcircle.jpg"
summary: "After my last post involving including custom content, I've received questions about doing the reverse, excluding content on certain pages. As with everything there are several ways to accomplish this. I'll cover some of the easiest."
---
<article class="post clearfix">
  <h3>Use WordPress' is_page() To Exclude Content</h3>
  <a href="http://www.flickr.com/photos/nbachiyski/2186228674/" class="postImageLink"><img src="http://oldstatic.travisberry.com/uploads/2010/01/wordpressnotebookcircle.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2010-01-30</h6>

After my last post involving including custom content, I've received questions about doing the reverse, excluding content on certain pages.

As with everything there are several ways to accomplish this. I'll cover some of the easiest.
<div class="clearfix"></div>
The first way is the same as [including custom content](http://oldstatic.travisberry.com/2010/01/use-wordpress-is_page-to-display-custom-content/). The only difference is you have to list every page besides the ones you don't want it to show on. This can be quite consuming if you have a large number of pages. On a small portfolio site though, this is totally useful.

{% gist 1176902 example1.php %}

If you had three pages; 'work', 'contact', and 'blog', the above code would display the div 'secondnav' on every page but 'blog'.

Another way is to use the above method but target it to the page you want excluded. So,

{% gist 1176902 example2.php %}

Can be used to exclude a section of content. Let's say you still don't want to show the 'secondnav' div on the blog page. So create a new .css file. Name it whatever you like and put it where ever you like. Just replace the url in the example with a link to the new file.Inside the new .css file put this;

{% gist 1176902 example3.css %}

The 'secondnav' div will no be invisible on the 'blog' page.

One final, less conditional way of doing this would be to create a new template for the page. Create a file called, 'nonav.php'.

Copy and paste everything from your normal 'page.php' file and paste it into 'nonav.php'. Find the part you want removed and delete it from the file. Move to the very top of the 'nonav.php' file. Paste this into the file.

{% gist 1176902 example4.php %}

Save the file and upload it to your current theme directory.

Now in the WordPress admin area, edit the page you don't want the 'secondnav' div in. On the right side of the screen, there is a place that allows you to pick a template. Select the drop down menu and select your new template. Hit the update post button, and your page should no longer have the 'secondnav' div.

There you go, a few way's to exclude content from certain pages. The best way to decide between excluding or including content is to go with whichever is the shortest. If you have 100 pages and 1 doesn't need something, exclude. If the 1 needs something, and the 100 don't, include.

If you have other solutions, or any questions, let me know in the comments.

**Edit:**[kylegetsspam](http://www.reddit.com/user/kylegetsspam) over on reddit pointed out another simple way of doing the same thing. Add,

{% gist 1176902 example5.php %}

To your body tag. Then add this to your main style sheet.

{% gist 1176902 example6.css %}

**Edit 2:** To use regular PHP and not WordPress to exclude content, see [my post here](http://oldstatic.travisberry.com/2010/10/if-is_page-with-regular-php/).
</article>