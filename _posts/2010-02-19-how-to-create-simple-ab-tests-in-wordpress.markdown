--- 
layout: post
title: Create Simple A/B Tests In WordPress
wordpress_id: 679
wordpress_url: http://oldstatic.travisberry.com/?p=679
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic.travisberry.com/uploads/2010/02/abtest1.jpg"
summary: "One of the best things you can implement in your site right now is A/B testing."
---
<article class="post clearfix">
  <h3>Create Simple A/B Tests In WordPress</h3>
  <a href="http://www.flickr.com/photos/jurvetson/133261764/" class="postImageLink"><img src="http://oldstatic.travisberry.com/uploads/2010/02/abtest1.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2010-02-19</h6>

One of the best things you can implement in your site right now is A/B testing. According to good old [Wikipedia](http://en.wikipedia.org/wiki/A/B_testing), A/B testing is;
<div class="clearfix"></div>
<blockquote>"A/B testing, split testing, or bucket testing is a method of marketing testing by which a baseline control sample is compared to a variety of single-variable test samples in order to improve response rates"</blockquote>

It's a method to test different versions of things and compare their effectiveness against others. 

In web design they are often used to test the effectiveness of converting users in some way. Whether it is selling them something, getting them to sign up for something, or just getting them to go to another page. As with all design there are a million ways to say or lay something out. A/B testing allows you to try multiple versions and find the one that works best for your goals.

So, setting up an A/B test isn't all that hard. First thing to do is come up with your test materials. I would recommend starting with simple text changes to get the hang of A/B testing. For this example I'm going to create an author box that goes at the end of my posts.

Next figure out what your goal is. The easiest to use are pages you want the client to reach. These can be landing pages after someone fills out a form, or it can be the form page itself. I want people to end up on my contact page.

Now write several versions of your author text, with wording that encourages people clicking through to your contact page. Go a head and do it now, I'll wait.

Ok, with all your text ready to go we can now start setting up the experiment. Go to [www.google.com/websiteoptimizer](http://www.google.com/websiteoptimizer) and sign up for an account. I used my gmail account with all my other services attached to it to make things a little easier. 

![](http://oldstatic.travisberry.com/wp-content/uploads/2010/02/Website-Optimizer_1266539675736.jpg "Website-Optimizer_1266539675736")

Once your all signed up you'll end up at a page like this,

![](http://oldstatic.travisberry.com/wp-content/uploads/2010/02/Website-Optimizer_1266536670466.jpg "Website-Optimizer_1266536670466")

Here click the **Create another experiment** link near the top left. Yours may say **Create a new experiment** depending if you've ever done this before or not. As you can see in the pics, I've done this a few times already. 

![](http://oldstatic.travisberry.com/wp-content/uploads/2010/02/Website-Optimizer_1266536889392.jpg "Website-Optimizer_1266536889392")

On the next page you can choose between an â€œ**A/B Experiment - The simplest way to start testing fast**" or a **Multivariate Experiment - The most robust way to test lots of ideas**".

Choose **Multivariate Experiment - The most robust way to test lots of ideas**".

![](http://oldstatic.travisberry.com/wp-content/uploads/2010/02/Website-Optimizer_1266536999518.jpg "Website-Optimizer_1266536999518")

Check the box on the next page and click **create**

![](http://oldstatic.travisberry.com/wp-content/uploads/2010/02/Website-Optimizer_1266537040200.jpg "Website-Optimizer_1266537040200")

Now we're getting somewhere. Here name your experiment in the first text box. Name it something easy to remember and understand. I'm calling mine "contactbox" 

In the next box put the url of the page that the author box is going to be one. Mine is "http://oldstatic.travisberry.com/2010/02/10-easy-solutions-for-contact-forms/"

The box below is the url of the goal page. Mine is "http://oldstatic.travisberry.com/contact/"

![](http://oldstatic.travisberry.com/wp-content/uploads/2010/02/Website-Optimizer-contactbox2_1266537264751.jpg "Website-Optimizer---contactbox2_1266537264751")

Click **You will install and validate the JavaScript tags** on the next page.

The next page will look like this

![](http://oldstatic.travisberry.com/wp-content/uploads/2010/02/Website-Optimizer-contactbox2_1266537309676.jpg "Website-Optimizer---contactbox2_1266537309676")

You can leave it alone for a second and instead open up a new tab. Download the **Google Website Optimizer** plugin from [http://wordpress.org/extend/plugins/google-website-optimizer-for-wordpress/](http://wordpress.org/extend/plugins/google-website-optimizer-for-wordpress/)

Install and activate it in your WordPress install.

Hang in there, we're getting closer. 

Now, go and edit the post or page you listed as your starting point. 

![](http://oldstatic.travisberry.com/wp-content/uploads/2010/02/BerryWordPress_1266537527627.jpg "BerryWordPress_1266537527627")

Notice there is now a new section added below the wysiwyg editor. Switch back to your google tab and copy the **Control Script**. Move back to your WordPress admin area and paste the code in the **Control Script** box. Repeat for the **Tracking Script**. 

DO NOT put the "Conversion Script" on this page. Instead go to your goal page, contact in my case, and paste the **Conversion Script** code there. You don't need to bother with the "Control"or "Tracking Script" on this page.

Now go back and edit your post again. Scroll to where you want your author box to be in your post. Once there paste the code

<script src="https://gist.github.com/1176915.js?file=example1.html"></script>

Followed by the text you want to use in you author box. Only put one version in at this point.At the end of the text paste this

<script src="https://gist.github.com/1176915.js?file=example2.html"></script>

Now change the "**Insert your section name here**" to something easy to deal with.Once you have everything in WordPress go back to the google tab.

Scroll to the bottom and click **Validate Pages**. If everything went well you should get confirmation and be allowed to click **Continue**.

![](http://oldstatic.travisberry.com/wp-content/uploads/2010/02/Website-Optimizer-contactbox2_1266538416866.jpg "Website-Optimizer---contactbox2_1266538416866")

This page is where we get to start adding the variations. Click **Add new variation** and enter in your second variation you wrote back in the beginning. Keep adding until you've added everything you wrote, then hit **Save and Continue**

![](http://oldstatic.travisberry.com/wp-content/uploads/2010/02/Website-Optimizer-contactbox2_1266538830910.jpg "Website-Optimizer---contactbox2_1266538830910")

From here you can launch the experiment and watch as your traffic is split and analyzed. Results will take a while depending on your level of traffic, but expect to wait at least a day before you can see anything.

Well that about covers it. See I told you it was simple. A/B test can be used to learn some surprising things about the nature of your audience. 

If you have experience with A/B testing and want to share some results, post them in the comments.
</article>