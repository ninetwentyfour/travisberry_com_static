--- 
layout: post
title: Video Compression Show Down
wordpress_id: 845
wordpress_url: http://oldstatic.travisberry.com/?p=845
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic.travisberry.com/uploads/2010/03/videopixels.jpg"
summary: "Video compression is an absolutely critical component that has allowed online video to take off in recent years. Advancing from super pixelated 320x240 video, to rich and vibrant 1080p has required massive improvements in compression technology."
---
<article class="post clearfix">
  <h3>Video Compression Show Down</h3>
  <a href="http://www.flickr.com/photos/reckon/3262118500/" class="postImageLink"><img src="http://oldstatic.travisberry.com/uploads/2010/03/videopixels.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2010-03-11</h6>

Video compression is an absolutely critical component that has allowed online video to take off in recent years. Advancing from super pixelated 320x240 video, to rich and vibrant 1080p has required massive improvements in compression technology.

[Wikipedia](http://en.wikipedia.org/wiki/Video_compression): "Video compression refers to reducing the quantity of data used to represent digital video images, and is a combination of spatial image compression and temporal motion compensation. Most video compression is lossy - it operates on the premise that much of the data present before compression is not necessary for achieving good perceptual quality. For example, DVDs use a video coding standard called MPEG-2 that can compress around two hours of video data by 15 to 30 times, while still producing a picture quality that is generally considered high-quality for standard-definition video. Video compression is a tradeoff between disk space, video quality, and the cost of hardware required to decompress the video in a reasonable time. However, if the video is overcompressed in a lossy manner, visible (and sometimes distracting) artifacts can appear."

Uncompressed video, especially HD versions, can require gigabytes per minute of recording. These kinds of files require way too much bandwidth to be considered reasonable for the web. The best way to solve this problem is with compression.

There are numerous video compression softwares out there. They range in price from free, to thousands of dollars. Each one has strengths and weaknesses. I'm going to compare a couple of the more popular options.

These are:

- [Compressor](http://www.apple.com/finalcutstudio/compressor/)
- [Toast](http://www.roxio.com/enu/products/toast/titanium/overview.html)
- [Regular QuickTime export](http://www.apple.com/quicktime/tutorials/h264.html)
- [FFmpeg](http://ffmpeg.org/)

Some of these use the same basic underlying compression technology, but the options they allow to to set, or the way they use them does differ.

For the test, I ran a 1280x720 .mov with Animation compression. For those who don't know, Animation is a lossless codec, resulting in quite large files. For example, the source video at only 1 minute in length came out to 3.26 gigabytes. Ouch.

I compressed this massive file down to size, by setting the bit rate to only 400k and reducing the audio quality to 96k at 44.1 KHz. I also resized it to 640x360. I'm doing this quality test with the ever so excellent [H264](http://en.wikipedia.org/wiki/H.264) codec. 

Ugh, there's no real great place to interject this so I'll just do it now. For "best" results, you should resize video to sizes that are evenly divisible by 16. I didn't do that, I don't seem to notice a difference when you do. I tried both but at the end of the day, on my site, My videos need to be 640px wide. For the curious these are a few sizes that are divisible by 16. The reason for this is pretty technical and could warrant a giant post by itself, so just take my word that for "best" results, use one of these sizes.

256 x 144 

512 x 288 

768 x 432 

1024 x 576 

So anyway, here are the results.

Compressor: Size - 4.8 MB

<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="376" width="640"><param name="src" value="http://oldstatic.travisberry.com/videocompressiontests/demoforweb33fromcompressor.mov" /><param name="autoplay" value="true" /><param name="type" value="video/quicktime" height="376" width="640" /><embed src="http://oldstatic.travisberry.com/videocompressiontests/demoforweb33fromcompressor.mov" height="376" width="640" autoplay="false" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>
	
Toast: Size - 4.7 MB

<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="376" width="640"><param name="src" value="http://oldstatic.travisberry.com/videocompressiontests/demoforweb3fromtoast.mov" /><param name="autoplay" value="true" /><param name="type" value="video/quicktime" height="376" width="640" /><embed src="http://oldstatic.travisberry.com/videocompressiontests/demoforweb3fromtoast.mov" height="376" width="640" autoplay="false" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>
	
Regular QuickTime export: Size - 4.5 MB

<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="376" width="640"><param name="src" value="http://oldstatic.travisberry.com/videocompressiontests/demoforweb32fromqt.mov" /><param name="autoplay" value="true" /><param name="type" value="video/quicktime" height="376" width="640" /><embed src="http://oldstatic.travisberry.com/videocompressiontests/demoforweb32fromqt.mov" height="376" width="640" autoplay="false" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>
	
FFmpeg: Size - 3.7 MB

<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="376" width="640"><param name="src" value="http://oldstatic.travisberry.com/videocompressiontests/test11.mov" /><param name="autoplay" value="true" /><param name="type" value="video/quicktime" height="376" width="640" /><embed src="http://oldstatic.travisberry.com/videocompressiontests/test11.mov" height="376" width="640" autoplay="false" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>
	
The clear and obvious winner is [FFmpeg](http://ffmpeg.org/). Notice that is the smallest file size as well. The other compressors do decent jobs, don't get me wrong, but you need to double or triple the file size to reach the same quality.

The even better news, FFmpeg is free and open source. Wait did you catch that? It's **FREE**! One giant downside, it's command line based. This isn't huge to me, as I know how to use the command line, but for many, touching the command line is the last thing they are comfortable doing. However, it's not too hard to install if you go the [macports](http://www.macports.org/) route. Using it to it's best capabilities is nothing easy either.

So for simplicities sake I present to you my super awesome FFmpeg compression commands.

For a single pass render:

{% gist 1176952 example1.txt %}

For a two pass render:

{% gist 1176952 example2.txt %}

{% gist 1176952 example3.txt %}

Run the first command, then run the second for a two pass render. I used a two pass render in the test above.To better understand what all those setting mean, I recommend taking a look at this site[http://sites.google.com/site/linuxencoding/x264-ffmpeg-mapping](http://sites.google.com/site/linuxencoding/x264-ffmpeg-mapping)

Or the FFmpeg documentation at [http://ffmpeg.org/ffmpeg-doc.html](http://ffmpeg.org/ffmpeg-doc.html)

For lots of other examples on compressing to and from different formats, I recommend reading

[http://www.catswhocode.com/blog/19-ffmpeg-commands-for-all-needs](http://www.catswhocode.com/blog/19-ffmpeg-commands-for-all-needs)

So there you go. If you're looking for a way to reduce your bandwidth costs, or just want to save time in uploading them, consider checking out FFmpeg. Honestly though, if you're just dumping your videos on youtube, you may consider just bumping up the quality on another compressor and using that. Ease of use is definitely in the favor of the other options.

If you use FFmpeg and have some great command to share, let me know in the comments. Or if you use a compressor not listed and want to share results, let me know as well.

Oh, and if you noticed this conveniently compresses out to a HTML5 friendly format, good for you. You sharp cookie you. Well check back in the next week or so where I'll do the same thing for Ogg video. How exciting!
</article>