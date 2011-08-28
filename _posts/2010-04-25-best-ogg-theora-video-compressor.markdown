--- 
layout: post
title: Best Ogg Theora Video Compressor
wordpress_id: 917
wordpress_url: http://www.travisberry.com/?p=917
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://content.travisberry.com/oggpixels.jpg"
---
[![](http://content.travisberry.com/oggpixels.jpg "oggpixels")](http://www.flickr.com/photos/lancesh/2162074087/)A while back I did a [comparison of the popular mp4 compressors](http://www.travisberry.com/2010/03/video-compression-show-down/). Specifically ones used to convert videos for HTML5 playback. Well here is a follow up, this time around though, we're comparing compressors for Ogg Theora.I try to make my content cross browser compatible, but for this one I have no choice. **You must use Firefox or Chrome to fully view this post.** The newer the version the better.<!--more-->Anyway, back to the post. I started with a small clip from the 720p version of [Elephants Dream](http://orange.blender.org/). It's a cool little short and I suggest going and watching it if you haven't already.So with this clip in hand I ran it through 6 different compressors. <br /><br />[ffmpeg2theora](http://v2v.cc/~j/ffmpeg2theora/) (6.10 MB)- lots of settings
- smallest file
- moderate quality
- moderate ease of use
<video width="640" height="360" id="video" controls="true">  <source src="http://content.travisberry.com/uploads/oggoutputs/2theora.ogv" type="video/ogg; codecs=\"theora, vorbis\"" /></video><br /><br />[FFmpeg](http://www.ffmpeg.org/) (6.19 MB)- same as ffmpeg2theora
- no sound (can have sound if you encode separately and then combine) 
- has to be a size divisible by 16
<video width="640" height="360" id="video" controls="true">  <source src="http://www.travisberry.com/html5video/oggoutputs/ffmpeg.ogg" type="video/ogg; codecs=\"theora, vorbis\"" /></video><br /><br />[FireFogg](http://firefogg.org/) (18.87 MB)- decent settings
- fairly easy to use
- good quality at large size
<video width="640" height="360" id="video" controls="true">  <source src="http://content.travisberry.com/uploads/oggoutputs/firefogg.ogv" type="video/ogg; codecs=\"theora, vorbis\"" /></video><br /><br />[Miro Video Converter](http://www.mirovideoconverter.com/) (22.20 MB)- largest size
- best quality
- easy to use
- can't resize
- no settings for anything
<video width="640" height="360" id="video" controls="true">  <source src="http://www.travisberry.com/html5video/oggoutputs/miro.ogv" type="video/ogg; codecs=\"theora, vorbis\"" /></video><br /><br />[QuickTime](http://xiph.org/quicktime/) (17.37 MB)- good quality large size
- same export as any other qt
- moderate amounts of video settings, no audio settings
<video width="640" height="360" id="video" controls="true">  <source src="http://content.travisberry.com/uploads/oggoutputs/qt.ogg" type="video/ogg; codecs=\"theora, vorbis\"" /></video><br /><br />[VLC](http://www.videolan.org/vlc/) (21.94 MB)- large size
- serious streaming issues
- small amount of settings
<video width="640" height="360" id="video" controls="true">  <source src="http://www.travisberry.com/html5video/oggoutputs/vlc.ogg" type="video/ogg; codecs=\"theora, vorbis\"" /></video>and for comparison <br /><br />h264 (6.22 MB)<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="376" width="640"><param name="src" value="http://www.travisberry.com/html5video/oggoutputs/h264.mov" /><param name="autoplay" value="true" /><param name="type" value="video/quicktime" height="376" width="640" /><embed src="http://www.travisberry.com/html5video/oggoutputs/h264.mov" height="376" width="640" autoplay="false" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/">In the end I would recommend ffmpeg2theora. If you're comfortable with the command line that is. Otherwise, everything except VLC would work for you. For the curious here are the commands I used.FFmpeg</embed>``ffmpeg -i Elephants_Dream.mov -vcodec libtheora -b 700k -s 512x288 -acodec libvorbis -ab 96k -threads 6 test.ogg``ffmpeg2theora``ffmpeg2theora -V 700 -A 96 -H 44100 -K 24 -x 640 -y 360 --two-pass --optimize --speedlevel 0 --seek-index --soft-target --pp vdeblock:10/hdeblock:10 Elephants_Dream.mov``If you have any suggestions for improving these please let me know in the comments. <script>utmx_section("contact1")</script><div id="contactme"><div class="avatar">![](http://www.gravatar.com/avatar/c9e8248c1237949b66a735bed64ae841?s=32&d=identicon&r=G)</div>I'm just a guy interested in all things design and web related. You should [contact me](http://www.travisberry.com/contact/) about about this article, for freelance work, or for any reason.</div></object>
