--- 
layout: post
title: Haml, Sass, Markdown, and CakePHP - Oh My!
wordpress_id: 1302
wordpress_url: http://oldstatic.travisberry.com/?p=1302
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic3.travisberry.com/wp-content/uploads/2011/01/haml-sass.jpg"
thumbnail: "http://static-assets.travisberry.com/thumbnails/haml-sass_thumb.jpg"
summary: "I've recently begun using Haml and Sass instead of good ol' HTML and CSS. "
---
<article class="post clearfix">
  <h3>Haml, Sass, Markdown, and CakePHP - Oh My!</h3>
  <a href="http://oldstatic.travisberry.com/wp-content/uploads/2011/01/haml-sass.jpg" class="postImageLink"><img src="http://oldstatic3.travisberry.com/wp-content/uploads/2011/01/haml-sass.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: January 11, 2011</h6>

I've recently begun using [Haml](http://haml-lang.com/) and [Sass](http://sass-lang.com/) instead of good ol' HTML and CSS. If you haven't heard of them, "Haml is a refreshing take that is meant to free us from the shitty templating languages we have gotten used to", and "Sass makes CSS fun again". The conciseness and power of Haml and Sass are what really made me make the switch. There was just one downside, both are designed for use with Ruby.

While I don't have anything against Ruby, it's not my language of choice. I use PHP for just about everything backend and most of my apps and sites are built upon CakePHP, my favorite framework.

Luckily there are ports of Haml and Sass for use with PHP. There are several out there, but I went with PHamlP mainly because it has a CakePHP plugin available for download.

The install instructions for the plugin are greatly lacking, or at least I couldn't get them to work out of the box, so I decided to document how I went about getting it working and rocking out.

Oh, and as a bonus, we are going to setup [Markdown](http://daringfireball.net/projects/markdown/) too.

So to start [grab a copy of PHamlP](http://code.google.com/p/phamlp/downloads/list) and find a CakePHP project you would like to add it to. Unzip the file and you should be looking at a Installation.txt, license.txt, vendors, views, and webroot folders.

Copy the files in each folder to their corresponding folders in /app in your Cake project. (e.g. vendors => vendors | views => views | webroot => webroot)

Now for all the wonderful configuring.

**HAML**

Let's start with getting just Haml working for the time being.

Open up your app_controller.php and add the following line

<div class="gistFallback">
{% gist 1177229 example1.php %}
</div>

Now open up /config/core.php and scroll to the bottom. Add

<div class="gistFallback">
{% gist 1177229 example2.php %}
</div>

The first option is telling Haml which HTML or XHTML version to compile into. I use HTML5 for everything these days so that's what I picked. The second option tells the app where to find the Haml filter that starts the process of compiling Haml to HTML. If you put the filters folder inside your views folder, this is the path you need.

Now open up the haml.php file you added to views. Find the line that says

<div class="gistFallback">
{% gist 1177229 example3.php %}
</div>

and change it to

<div class="gistFallback">
{% gist 1177229 example4.php %}
</div>

This assumes you copied the vendors contents to vendors in CakePHP.

After that, you should have Haml up and running. I find the best way to test without changing all you layouts and views is to test with a page, then move on to replacing the rest of your views.

**SASS**

Let's tackle the Sass.

One important decision to make right off the bat is if you want to use the older .sass format or the newer .scss version. Now according to the docs, it shouldn't matter, you just create whatever type you want and it handles the rest. Well I didn't find this to work, and I had to change some code to support .scss files. So for the purpose of this tutorial I will show how to get those to work, but I'll flag the step to skip if you want to use the older .sass

With that out of the way, time to start the config.

Open the core.php file back up and go to the Haml code we added earlier. Under that add

<div class="gistFallback">
{% gist 1177229 example5.php %}
</div>

The first line sets the output style of the css. I use compressed as it saves a little filesize, you can pick whatever you would like though. The second line tells Cake to filter the files with the sass.php you put in webroot.

Now open up sass.php and find the line that looks like
<div class="gistFallback">
{% gist 1177229 example6.php %}
</div>

Replace it with

<div class="gistFallback">
{% gist 1177229 example7.php %}
</div>

After that you should be able to start putting .sass files into your css directory and they will compile to css.

However, at least in my case, I lost my gzip on the css files. To add it back, replace the section that sets the headers, looks like

<div class="gistFallback">
{% gist 1177229 example8.php %}
</div>

with

<div class="gistFallback">
{% gist 1177229 example9.php %}
</div>

Then add a line to the bottom of the file with this

<div class="gistFallback">
{% gist 1177233 example10.php %}
</div>

Your compiled css files should now transfer gzipped.

Now lets add support for the newer .scss file. If you want to use .sass you can skip this part.

Find the line

<div class="gistFallback">
{% gist 1177233 example11.php %}
</div>

and replace it with

<div class="gistFallback">
{% gist 1177233 example12.php %}
</div>

You can now use .scss files instead of .sass

Haml and Sass should be up and running now.

**MARKDOWN**

However, some people make the argument that you shouldn't use Haml to style the content of your page. By content, they are referring to the main text of the page. The "meat" so to speak. For a good read on the subject, check out this post. http://chriseppstein.github.com/blog/2010/02/08/haml-sucks-for-content/

Well one great alternative to using HTML to markup you text, is to use Markdown. To use Markdown with Haml you use something similar to

<div class="gistFallback">
{% gist 1177233 example13.php %}
</div>

inside your Haml files. To get support for this, you need to download the latest Markdown PHP port from http://michelf.com/projects/php-markdown/

Make sure to grab the EXTRA's version.

Add a folder to vendors called markdown. Place the download files into it.

Now open up the HamlMarkdownFilter.php inside the views/filters folder.

Change

<div class="gistFallback">
{% gist 1177233 example14.php %}
</div>

To

<div class="gistFallback">
{% gist 1177233 example15.php %}
</div>

Now open up the _HamlMarkdownFilter.php file inside /vendors/haml/filters

Change

<div class="gistFallback">
{% gist 1177233 example16.php %}
</div>

To

<div class="gistFallback">
{% gist 1177233 example17.php %}
</div>

also change

<div class="gistFallback">
{% gist 1177233 example18.php %}
</div>

To

<div class="gistFallback">
{% gist 1177233 example19.php %}
</div>

Now throw some Markdown into you Haml files and prepare to be amazed.

I'm not sure why I had to change so much to get this setup to work. If you compare the Installation.txt to this post, you will see mine takes much more work. Don't take that as a dig on the developers though, there could be many reasons their instructions didn't work for me. I just figured if I had this hard of a time, someone else may run into similar issues and I could save them some time with this write up.

If I am an idiot and there is a way simpler way to get this working, let me know in the comments. You can also view a project I've set this up with on [github](https://github.com/ninetwentyfour/Homkora).
</article>