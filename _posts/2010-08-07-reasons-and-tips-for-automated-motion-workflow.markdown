--- 
layout: post
title: Reasons And Tips For Automated Motion Workflow
wordpress_id: 1031
wordpress_url: http://oldstatic.travisberry.com/?p=1031
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic.travisberry.com/wp-content/uploads/2010/08/assembly_line.jpg"
summary: "In many video projects there is some style of graphic, lower third, or bumper that is used numerous time throughout the piece, only requiring a text change."
---
<article class="post clearfix">
  <h3>Reasons And Tips For Automated Motion Workflow</h3>
  <a href="http://www.flickr.com/photos/whsimages/998243013/" class="postImageLink"><img src="http://oldstatic.travisberry.com/wp-content/uploads/2010/08/assembly_line.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2010-08-07</h6>

In many video projects there is some style of graphic, lower third, or bumper that is used numerous time throughout the piece, only requiring a text change. Or you will have clients that sell templatized videos, who just need someone to change the default text overlays inside the base video.

Both of these problems can be done by hand, wasting hours upon hours copy and pasting information. The better way would be to reduce the people down to some data entry and auto generate the rest.

Well we tried to do just that at work recently. Our job was to make a automated solution that would allow someone to upload a CSV to a web app and have a folder of videos at the end.

At first we came up with a solution that was way too complicated. We were going to create image files for the slates dynamically, then stitch them onto a base video. The system would have worked, but it was unwieldy and unnecessarily complex. Next we decided to use a solution using After Effects. We did get this one working, but like the previous idea, the system for using it was shoddy at best. One thing I did really like about this method was it taught me a whole lot about the .jsx format. Namely that it's just a wrapper for javascript. :)

Finally we realized Motion would be the perfect solution for our task. Not only is the rest of our workflow done through FCP and FCS, but it's ability to work without needing a bunch of hacked together parts was fantastic. The render speed was much greater than the other solutions thanks to the fact that we could use our already existing Qmaster cluster.

A quick overview of our system is

1.  Editors create Motion template files and upload them to our system.
2.  User hits a web app developed in CakePHP.
3.  The user hits generate videos and uploads a CSV.
4.  Our system parses the information in the CSV and matches it to the correct template Motion file.
5.  The system takes a template Motion file and duplicates it to a new folder with the slate text replaced with information from the CSV
6.  The output folder of the new Motion files is a watch folder for Compressor.
7.  Compressor grabs the Motion files and renders them out to a specified folder with encoding settings defaulted for the job.

After this you can continue on with your normal delivery process. If that involves uploading to a video platform, this should easily be automated as well.

Unfortunately I can't post any of the code we wrote for the project but I can point you to a few places we went for help.

[What is XML and what does it mean for Final Cut Studio users? ](http://www.kenstone.net/fcp_homepage/xml_hodgetts.html) 

[Motion XML Documentation](http://developer.apple.com/mac/library/documentation/AppleApplications/Conceptual/motion_XML_guide/About/About.html)

[CakePHP XML Parsing](http://book.cakephp.org/view/624/Xml-parsing)

[Import CSV to CakePHP](http://mrphp.com.au/code/importing-data-csv-cakephp)

[Creating a Watch Folder for Compressor 2](http://www.macworld.com/article/54083/2006/11/compressor_watch_folder_tip.html)

One thing we came across and spent many hours trouble shooting was the crashing of our outputted Motion files. Once they tried to run the compressor droplet, it would crash. No matter how we would diff the files we couldn't find any difference between the original and the output, apart from the replaced text.

We finally discovered the solution.

<div class="gistFallback">
{% gist 1177036 example1.xml %}
</div>

This is part of the Motion XML file. _Website_ is the text being replaced. Above that is a length set in styleRun. This is normally set to the length of the placeholder text. In this case it would be 7. If you replace the word with one that is longer you have no problem. The Motion file will render like a champ. If it's shorter all hell breaks loose. So the fix is as simple as changing them all to 1. No more crashing.

Other than that, the rest of the process was really straight forward. It has reduced the amount of time the editors need to spend on this client dramatically, leaving them open for other work.

Motion's packaging of XML makes automating it surprisingly simple. We plan to explore its capabilities and look for even more places where we can automate the workflow.

If you have tips, tricks, or stories of Motion automation, let me know in the comments.
</article>