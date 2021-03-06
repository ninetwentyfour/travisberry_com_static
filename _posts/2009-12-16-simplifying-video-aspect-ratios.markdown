--- 
layout: post
title: Simplifying Video Aspect Ratios
wordpress_id: 415
wordpress_url: http://oldstatic.travisberry.com/?p=415
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic2.travisberry.com/wp-content/uploads/2009/12/brokentv.jpg"
summary: "Video aspect ratio can be a confusing beast. Is it 4:3 or 16:9? Are the pixels square or some sort of rectangle? All of these things are important to consider when creating video files and assets for video."
---
<article class="post clearfix">
  <h3>Simplifying Video Aspect Ratios</h3>
  <a href="http://www.flickr.com/photos/janramroth/1298370325/" class="postImageLink"><img src="http://oldstatic2.travisberry.com/wp-content/uploads/2009/12/brokentv.jpg" alt="" class="thumbnail alignleft" width=640  /></a>
  <h6>Published: 2009-12-16</h6>

Video aspect ratio can be a confusing beast. Is it 4:3 or 16:9? Are the pixels square or some sort of rectangle? All of these things are important to consider when creating video files and assets for video. Make a mistake and all of a sudden that circle is more of an oval. So I'm here to help you simplify and make heads from tails in video aspect ratio.

First the easy part. 4:3 vs 16:9. This is the difference between old school "square" (not really square but close) televisions and the new fancy "widescreen" televisions. 4:3 is the size of the screen that standard definition uses. 16:9 is for HD content. As a matter of fact, 16:9 is the only consistent component to HD video. Which is why you have the mess of 480p, 480i, 720p, 1080p, etc.

Basically if you shoot in standard definition you'll be using 4:3, if you're shooting HD, you'll be using 16:9.

Once you have your composition aspect ratio worked out, it's time to deal with pixel aspect ratio. Pixels are the little dots that combine to make up the image. Most of you are familiar with this concept on computers. Here pixels live in nice even rows and are nice and square. Square is good. Square is easy to understand.

Now let's look at standard definition television. The history of television in the US is a clusterf#@k. The technology has been built and expanded upon old and broken technology, leading to many compromises in ease of use to support old technology. For instance, the frame rate of TV is a nice and even 29.97 frames per second. Wait, what? How the fuck is that convenient? Wouldn't an even number be much easier to work with? Well, yes it would, but that would be too simple. See when color TV came out there needed to be a way to add the color information into the signal without ruining the TV of people who already had one. So a compromise was made to add the signal to the existing tech and make the frame rate, an unbearable 29.97 fps.

Another compromise to come out of the history of television is the .9:1 aspect ratio of pixels. This means, that on a standard definition television, the pixels are slightly taller than they are wide. This leads to creating a circle on a computer, and all of a sudden it's an oval on a TV. That's not what we want.

The simple solution is to convert everything to square pixels for use on the computer. To create images that will look right when moved to a standard definition television create your compositions at 648 X 480 with square pixels. When moved to the TV the stretching compensates for the pixel aspect ration, and things should look right.

HD video has suffered from a clusterf#@k of formats more so than being built to accommodate legacy technology. Every camera and television maker wants desperately to be the standard for HD, but unfortunately having so many competing formats and no winner creates problems in post.

The most common problem again is keeping pixel aspect ratios consistent. The easiest way to solve the problem is to force square pixels on everything. The correct size for 720 video is 1280x720 square pixels, and for 1080 video it is 1920x1080 square pixels. So if you have a problem of pulling footage from Final Cut Pro into After Effects and having it appear 4:3 instead of 16:9 double check that you are using square pixels with the correct dimensions. 

This is a little long winded but it's just the tip of the iceberg when it comes to video aspect ratio. 

If you have any tips or questions, feel free to add them in the comments.
</article>