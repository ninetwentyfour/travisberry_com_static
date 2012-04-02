--- 
layout: post
title: On HTML5 Video
wordpress_id: 812
wordpress_url: http://oldstatic.travisberry.com/?p=812
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic3.travisberry.com/wp-content/uploads/2010/02/Train_Wreck.jpg"
summary: "Hey! Have you heard? HTML5 video is going to revolutionize the way we use video on the web."
---
<article class="post clearfix">
  <h3>On HTML5 Video</h3>
  <a href="http://commons.wikimedia.org/wiki/File:Train_Wreck_1922.jpg#file" class="postImageLink"><img src="http://oldstatic3.travisberry.com/wp-content/uploads/2010/02/Train_Wreck.jpg" alt="" class="thumbnail alignleft" width=640  /></a>
  <h6>Published: 2010-02-25</h6>

Hey! Have you heard? [HTML5 video](http://en.wikipedia.org/wiki/HTML5_video) is going to revolutionize the way we use video on the web. No more dealing with Flash or Quicktime embeds. Video will now be as simple as adding an image. Ummm, no. It's not. It's not even close. That's not to say it's all bad, but boy howdy does it have a long way to go.

Before I get to the bashing let's talk about what is good about HTML5 video.

Well first off, it is in theory as easy as adding an image.

<div class="gistFallback">
{% gist 1176926 example1.html %}
</div>

Holy crap that is simple. Unfortunately your code will not end up looking like that. More on it in a bit.

Another HUGE benefit is not having to use Flash. Anyone who has experience with Flash video knows how horrible it is. The embed codes are a nightmare and of course you're dealing with plugins that the user may or may not have.

All around, HTML5 video should be a big improvement. Only problem is, it could be worse than the methods used today. Here's why.

Codecs, codecs, codecs...

Ugh, this is one of the biggest pains to deal with. Guess what, different browsers use different video codecs for HTML5 video. Firefox uses [Ogg Theora](http://en.wikipedia.org/wiki/Theora) and Safari uses [H.264 MP4](http://en.wikipedia.org/wiki/H.264/MPEG-4_AVC). So in order for you to have a video play in multiple browsers **you need to make at least two versions**. 

That simple code above now turns into

<div class="gistFallback">
{% gist 1176926 example2.html %}
</div>

Not so simple anymore is it? Not horrible but not the elegant solution we were promised. 

This battle of the codecs has got to end. The argument boils down to the fact that H.264 and MP4 are proprietary of the [MPEG](http://en.wikipedia.org/wiki/Moving_Picture_Experts_Group) consortium and Ogg Theora are open source. 

I get Mozilla's argument that they only support open standards, thus the use of Ogg in FireFox, but there is a giant elephant in the room that nobody is mentioning. 

It's that Ogg Theora as a codec is in it's infancy compared to H.264 and really kind of sucks in comparison. You can compare the two on my page, [travisberry.com/copyright-and-the-internet/](http://oldstatic.travisberry.com/copyright-and-the-internet/) 

View it in FireFox and then in Safari. Notice the WAY smoother video in the Safari version. Yeah, me too.

The solution I would really like to see (but I'm not holding my breath) is for MPEG to step up and realize that they have the opportunity to seize the online video market and release H.264 into the open source community. **Drop all the dumb-ass licensing arrangements and give H.264 away.**

That is the first main issue with HTML5 video. The other huge issue is legacy browsers. Unless you are using the newest versions of FireFox, Chrome, or Safari, you probably can't see HTML5 video. So this causes us to have to add more code to make sure people can still see our content. This involves some kind of fallback to Flash video. The thing we were trying to avoid in the first place.

I'll write this again for importance. **You still have to include Flash video** if you want your video to play across all browsers. Damn it!

So now that super simple code to embed videos now looks like this to make sure it handles all browsers nicely. Note, this still won't show anything in FireFox 2 but it will show in IE. Most FF users tend to update on a regular basis so it's no huge deal.

<div class="gistFallback">
{% gist 1176926 example3.html %}
</div>

Notice instead of adding a flash video I added a youtube embed. I was tired of crunching out different codecs by this point so I said screw it and let youtube handle some of the work. (I also added an iPhone version so the code is a little longer than necessary, but not by much)

Ok, so my super simple code has grown kind of large and unwieldy but no biggie, it works so I could live with this.

Time to watch this bad boy in some browsers. Wait, WTF is going on? Why are my videos autobuffering in Chrome and Safari. This is bad. Real bad. What if I have 4 or 5 videos on one page? It's going to buffer all of them at once!?

Yes it will. For reasons unknown, Chrome and Safari have decided to ignore the autobuffer attribute. **They will autobuffer your video come hell or high water.**

Again, we can work around this using a javascript method. Daring Fireball has a [good example](http://daringfireball.net/misc/2009/12/user_guide_demos) (view source to see how it works). Only problem with it is that in FireFox I was experiencing double audio when using the javascript solution. So that didn't work for me.

The half-assed solution I came up with was to go ahead and let the video autobuffer. I used to have all of my example videos on one page. That was not cool with autobuffering. Now I have a navigation menu linking to each video on it's own page. Now when it autobuffers, it's not such a huge deal. (I figure if they clicked through to the video, at this point they are trying to watch)

So in the end I was able to implement HTML5 video. It isn't pretty and far from perfect but it is possible. For now, I am going to continue to recommend most people go with a Flash video solution. It's just not worth the hassle for the average user. Let's hope the people in charge can save the &lt;video&gt; tag, it could be great, it's just not there yet.

Have you tried to use HTML5 video? Let me know how it went in the comments.

**Edit:**After some tweaking of the encode settings, I managed to get a decent output in Ogg. So I recant a bit on it being horrible, but it's still not quite as good as H.264

Here are several other good resources that explore the use of HTML5 video.

- [Ogg objections](http://hardwarebug.org/2010/03/03/ogg-objections/)
- [Ogg timestamps explored](http://hardwarebug.org/2008/11/17/ogg-timestamps-explored/)
- [HTML5 video for everyone!](http://code.google.com/p/html5media/)
- [The video element](http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#video)
- [HTML5 video markup, compatibility and playback](http://www.niallkennedy.com/blog/2010/02/html5-video-markup.html)
- [Video on the Web](http://diveintohtml5.org/video.html)
- [Why the HTML5 "Video" Element Is Effectively Unusable, Even in Browsers Which Support It](http://daringfireball.net/2009/12/html5_video_unusable)
</article>