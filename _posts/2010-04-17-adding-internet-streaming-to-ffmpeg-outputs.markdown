--- 
layout: post
title: Adding Internet Streaming To FFmpeg Outputs
wordpress_id: 908
wordpress_url: http://www.travisberry.com/?p=908
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://www.travisberry.com/wp-content/uploads/2010/04/qtindexswapper.jpg"
---
![QTindexswapper](http://www.travisberry.com/wp-content/uploads/2010/04/qtindexswapper.jpg "qtindexswapper")Just a quick post. After deciding that FFmpeg was my video compressor of choice, I ran into a small problem. The videos that are outputted don't begin playing immediately when embedded in a web page. This is a pretty big setback.<!--more-->Luckily there is a small AIR application that can solve the problem for us. [QTIndexSwapper](http://renaun.com/blog/2008/08/14/262/) is a small application that prepares .h264 encoded video for internet streaming. It does this by rearranging the index file. It's simple and fast, and from what I've seen so far, adds no quality loss to your video. So if you've tried the code I posted for compressing video with FFmpeg, but have had trouble streaming them on the web, try this application. <script>utmx_section("contact1")</script><div id="contactme"><div class="avatar">![](http://www.gravatar.com/avatar/c9e8248c1237949b66a735bed64ae841?s=32&d=identicon&r=G)</div>I'm just a guy interested in all things design and web related. You should [contact me](http://www.travisberry.com/contact/) about about this article, for freelance work, or for any reason.</div>
