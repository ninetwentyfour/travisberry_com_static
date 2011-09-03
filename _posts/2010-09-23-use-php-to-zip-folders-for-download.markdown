--- 
layout: post
title: Use PHP To Zip Folders For Download
wordpress_id: 1144
wordpress_url: http://oldstatic.travisberry.com/?p=1144
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic.travisberry.com/zip_files.jpg"
summary: "Uploading files with PHP is covered to death on the internet. The other side of that, downloading files, is not covered nearly as much."
---
<article class="post clearfix">
  <h3>Use PHP To Zip Folders For Download</h3>
  <a href="http://www.flickr.com/photos/striatic/443918201/" class="postImageLink"><img src="http://oldstatic.travisberry.com/zip_files.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2010-09-23</h6>

Uploading files with PHP is covered to death on the internet. The other side of that, downloading files, is not covered nearly as much. 
<div class="clearfix"></div>
When a user uploads say, hundreds of images to a folder, and they want to download them all later, it can turn into a giant time sink making them download the files one at a time.

A better alternative would be to offer the files individually and with a "Download All As Zip" link.

I found a solution [here](http://www.trash.net/~ck/ontheflyzip/), but it required putting the php file in every directory you would like to zip. Not exactly the best solution. So I tweaked it to be a bit more dynamic.

This code is based on the assumption that there is a folder called something like _user_uploads_ with a sub-folder for each user, something like _Travis_Berry_

{% gist 1177068 example1.php %}
	
Save this code as zip_folders.php

Then when you want to provide a link to download a users uploads as a zip file, you link to it like,

{% gist 1177068 example2.html %}

That will cause a download prompt to appear for the user when clicking on the link.

You'll notice I use the [system Zip command](http://linux.about.com/od/commands/l/blcmdl1_zip.htm) as opposed to the [PHP Zip extension](http://www.php.net/manual/en/book.zip.php). For more complex Zipping needs, it looks like it would be a better alternative. For something simple like this, I find the system call sufficient.

If you find this post useful, or have any PHP Zip tips, let me know in the comments.
</article>