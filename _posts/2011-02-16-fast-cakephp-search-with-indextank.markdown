--- 
layout: post
title: Fast CakePHP Search With IndexTank
wordpress_id: 1317
wordpress_url: http://oldstatic.travisberry.com/?p=1317
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic.travisberry.com/wp-content/uploads/2011/02/indextank.jpg"
thumbnail: "http://static-assets.travisberry.com/thumbnails/indextank_thumb.jpg"
summary: "This time I’m going to show you a much better method, mainly by offloading the work to people who really know how to do search."
---
<article class="post clearfix">
  <h3>Fast CakePHP Search With IndexTank</h3>
  <a href="http://commons.wikimedia.org/wiki/File:Marines-tank-Korea-19530705.JPEG" class="postImageLink"><img src="http://oldstatic.travisberry.com/wp-content/uploads/2011/02/indextank.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: February 16, 2011</h6>

I've previously posted my [ghetto CakePHP search function](http://oldstatic.travisberry.com/2010/06/create-a-ghetto-but-functional-search-function-for-cakephp/). This time I'm going to show you a much better method, mainly by offloading the work to people who really know how to do search. That's where [IndexTank](http://indextank.com/) comes in - they know how to do search. They power the search for Reddit, WordPress.com, and many others.

You simply hand them the documents you want indexed and the give you back the ability to query against it.

I'm not going to spend anytime explaining how IndexTank works, mainly because I barely understand it. Instead I will show you a simple way to get it to work with CakePHP.

The code in this example is built around the code for [Homkora](http://homkora.com) in which the main two Objects are Projects and Timers. So to start grab the IndexTank library from [https://indextank.com/documentation/php-client](https://indextank.com/documentation/php-client) this would be a good page to read as well just to get an idea of what's going on.

Take the file you downloaded (indextank_client.php in my case) and place it in app/vendors of your CakePHP application.

Now open up your app_controller.php and add these four functions

<div class="gistFallback">
{% gist 1177288 example1.php %}
</div>

These are the three functions that call to IndexTank directly and the one that creates the IndexTank client object. It imports the library and create a new $client object.

Each one is built to be passed the variables it needs to make a connection to IndexTank.

All the functions accept the $indexType variable which is where you set which index to perform actions against. In my case I have one for Projects and one for Timers.

So now lets add some documents to our index.

<div class="gistFallback">
{% gist 1177288 example2.php %}
</div>

I'm going to assume you having something similar in your controller. In this case it's in my add() function in the projects controller.

Let's add the code to call our addIndextank() function in the app controller.

<div class="gistFallback">
{% gist 1177288 example3.php %}
</div>

Let go over what's going on here.

<div class="gistFallback">
{% gist 1177288 example4.php %}
</div>

This line is setting the data that will be indexed. The 'text' field is one used by IndexTank by default and I recommend setting it to the type of query that will be preformed the most.

The key value pairs after 'text' can be whatever other data you would like to save and be able to query against.

<div class="gistFallback">
{% gist 1177288 example5.php %}
</div>

Simply sets the ID that is going to be used for the document ID in IndexTank. I figured it best to keep them the same as in the application database so this sets it as the last saved Project ID.

<div class="gistFallback">
{% gist 1177288 example6.php %}
</div>

This line is the call to the addIndextank function. The "HomkoraProjects" is what is passed as $indexType in the app_controller and is basically the name of the index. We then pass the ID and the data to be indexed too.

Now when you add a new Project you should also be adding a new document to IndexTank.

Now if you delete the Project it's best to delete to document in the index as well. So let's add some code to our projects controller delete() function.

Starting with

<div class="gistFallback">
{% gist 1177288 example7.php %}
</div>

We can add a simple call like

<div class="gistFallback">
{% gist 1177288 example8.php %}
</div>

Deleting documents requires a lot less information so we just have to pass it the $indexType and the ID (which should match between your app and IndexTank if you add documents using the above example)

Alright, now you can add and remove documents from your index, but what good are they without being able to search against them.

In my projects controller I added the following function

<div class="gistFallback">
{% gist 1177288 example9.php %}
</div>

<div class="gistFallback">
{% gist 1177293 example10.php %}
</div>

I pass the search term through a form and set it as the $query variable.

<div class="gistFallback">
{% gist 1177293 example11.php %}
</div>

Here I call our searchIndextank() function and pass it the $indexType again and the query to perform.

You'll notice in the searchIndextank() I return the data $res and in the search() function I set it to $res.

Once I get the results from IndexTank I can use them to search for the Projects in my database. Here I set them all the the $projects array and prepare them for display in the view.

I know you're thinking, if you are getting the data from the database anyway - why use IndexTank? 

Well with only a few records, you aren't going to get a much faster result, but with lots of records, IndexTank will return the results faster plus it allows you to cut down on your database calls. Their ability to rank results and search based on numerous factors is pretty good and better than what the average person can write in most cases.

I'm using a pretty bare bones searchIndextank() function but this should get you started. I'm quite impressed with the results so far and I'm continuing to find better ways to work with their index.

If you know a better way to set this up, or have questions, let me know in the comments.
</article>