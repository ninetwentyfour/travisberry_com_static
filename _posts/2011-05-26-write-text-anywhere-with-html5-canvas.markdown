--- 
layout: post
title: Write Text Anywhere With HTML5 Canvas
wordpress_id: 1360
wordpress_url: http://oldstatic.travisberry.com/?p=1360
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic1.travisberry.com/wp-content/uploads/2011/05/canvas.jpg"
thumbnail: "http://static-assets.travisberry.com/thumbnails/canvas_thumb.jpg"
summary: "When working on a project recently I came across the need to be able to add some text to a canvas element."
---
<article class="post clearfix">
  <h3>Write Text Anywhere With HTML5 Canvas</h3>
  <a href="http://www.flickr.com/photos/paurian/3683348208/" class="postImageLink"><img src="http://oldstatic1.travisberry.com/wp-content/uploads/2011/05/canvas.jpg" alt="" class="thumbnail alignleft" width=640  /></a>
  <h6>Published: May 26, 2011</h6>

When working on a project recently I came across the need to be able to add some text to a canvas element. This by itself wasn't particularly hard, as there are several examples of creating text editor apps with canvas, but those all forced the text into a row style grid like a text editor. What I needed was a little more freeform in that I wanted the user to click and the text to show at that point.

After a little hacking around I came up with something that handled my needs and hopefully may help someone else in the future.

(This doesn't look the best in the end, but you can easily add some css styles to make it look better)

[Click Here To See Demo](http://oldstatic.travisberry.com/demos/canvas-text-demo/index.html)

So first we need to create a canvas element

<div class="gistFallback">
{% gist 1177318 example1.html %}
</div>

Now we have the canvas element all set up we can start having some fun.

Well not quite. First we need to set some dimensions for the canvas element. Without them, it doesn't have any way to know where to place our "drawings".

Add this into a css file

<div class="gistFallback">
{% gist 1177318 example2.css %}
</div>

Now we can start adding drawings. One thing we are going to need for this is a text entry box. I debated trying to "type" directly into the canvas but decided against it. (for complexity reasons)

The method I chose was to add a textarea to the position of the click in the canvas. The user will enter their text into the textarea popup and hit save. This will then draw the text to the screen.

Let's go ahead and create a javascript function to handle the click and add the textarea and save button.

<div class="gistFallback">
{% gist 1177318 example3.js %}
</div>

There’s nothing too crazy in here. It does do a check and destroy the textarea if one is already displayed while the user clicks the canvas again.

<div class="gistFallback">
{% gist 1177318 example4.js %}
</div>

These are setting the position of the mouse click so we can use them to set the position to display the textarea at. It takes into account any offsets the canvas element may have as well.

The rest is just appending the textarea to the main element in the page. The save button has an onclick event that we will deal with in a bit. 

Now we have to actually draw the entered text to the screen.

<div class="gistFallback">
{% gist 1177318 example5.js %}
</div>

So this is fairly intense. It also uses a little library file from Jim Studt that you can find <a href="http://www.federated.com/~jim/canvastext/">here</a>. Though I have modified mine a bit because of some conflicts it was causing me. You can grab my copy at <a href="https://github.com/ninetwentyfour/Video-Canvas/blob/master/js/text.js">https://github.com/ninetwentyfour/Video-Canvas/blob/master/js/text.js</a>

A few important parts in that code are

<div class="gistFallback">
{% gist 1177318 example6.js %}
</div>

This is going to another function that we will write in a minute. Basically it is solving the problem of canvas text not having any idea how to word wrap. It will blow right off the page without this.

<div class="gistFallback">
{% gist 1177318 example7.js %}
</div>

This intializes the text library file.

<div class="gistFallback">
{% gist 1177318 example8.js %}
</div>

This is the block that actually draws the text to the screen. It takes each entry in the phraseArray and draws it to the screen moving it down by a line each time.

The code to control the width of the text looks like this

<div class="gistFallback">
{% gist 1177318 example9.js %}
</div>

This takes the canvas variable the original text and the width you want to limit it to then returns an array of pharses limited to the length you pass.

Once you have all this done you should have a working example. My final code looks like this.

<div class="gistFallback">
{% gist 1177318 example10.html %}
</div>

This is a pretty basic and is missing a few things that would make it more helpful but it should give you a good start. Please feel free to leave questions or advice on better ways to do this in the comments.

</article>