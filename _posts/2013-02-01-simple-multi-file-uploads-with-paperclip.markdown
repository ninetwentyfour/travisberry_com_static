--- 
layout: post
title: Simple Multi-File Uploads With Paperclip
image: "http://static-assets3.travisberry.com/post_images/paperclip.jpg"
thumbnail: "http://static-assets3.travisberry.com/thumbnails/paperclip_thumb.jpg"
summary: "Upload all the files!"
---
<article class="post clearfix">
  <h3>Simple Multi-File Uploads With Paperclip</h3>
  <a href="http://pixabay.com/pt/paperclips-colorido-anexar-4479/" class="postImageLink"><img src="http://static-assets3.travisberry.com/post_images/paperclip.jpg" alt="" class="thumbnail alignleft" width=640  /></a>
  <h6>Published: February 1, 2012</h6>

I needed to add multi-file uploads to a rails application recently and was looking for a solution that didn't involve using [swfupload](https://code.google.com/p/swfupload/) or anything like that. I was already using [paperclip](https://github.com/thoughtbot/paperclip) and I wanted something that was super easy to get running so I went with HTML5 multi-uploads.
<div class="clearfix"></div>
_I use a dedicated Document model, depending on how paperclip is setup on your models, you may get different results, or this might not work for you._

First add a new file form field.

<div class="gistFallback">
{% gist 4695134 form.erb %}
</div>

Then in the controller create action you can do.

<div class="gistFallback">
{% gist 4695134 documents_controller.rb %}
</div>

It will handle single files or multiples just fine. 

That should be pretty much all you need to get started. Of course you can improve it by adding some validation to allowed file types, setting a flash message to let the user know if the file was uploaded or not, or anything else you may need.

</article>