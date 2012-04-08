--- 
layout: post
title: Real-Time In Place Editing For Rails
image: "http://static-assets3.travisberry.com/post_images/juggernaut.jpg"
thumbnail: "http://static-assets3.travisberry.com/thumbnails/juggernaut_thumb.jpg"
summary: "Create real-time in-place editing with Best In Place and Juggernaut."
---
<article class="post clearfix">
  <h3>Real-Time In Place Editing For Rails</h3>
  <a href="http://marvel.wikia.com/File:Juggernaut_33.jpg" class="postImageLink"><img src="http://static-assets3.travisberry.com/post_images/juggernaut.jpg" alt="" class="thumbnail alignleft" width=640  /></a>
  <h6>Published: April 07, 2012</h6>

In an effort to make [Hospitium's](http://hospitium.co) interface easier to use, I removed the extra step of editing data in a standard form. Instead opting to use an [in place editing](https://www.ruby-toolbox.com/categories/rails_in_place_editing) solution.

Best in Place is the gem I used and it's pretty simple to set up. Instead of covering the details here, I'll let this [railscast](http://railscasts.com/episodes/302-in-place-editing) explain it. That episode is a little out of date so make sure to check out the [gem's README](https://github.com/bernat/best_in_place), the main change being **Controller response with respond\_with\_bip**.

> Best in Place is a jQuery based AJAX Inplace-Editor that takes profit of RESTful server-side controllers to allow users to edit stuff with no need of forms.

Getting in place editing working is easy, but one downside is multiple users can edit the same record without seeing each others changes. This could lead to confusion after a page reload and a users changes are completely wrong (at least different from what they expected). So the obvious solution is to push the changes to all users making the edits real-time.

<div class="clearfix"></div>

We could roll our own complete push state, but instead I'm going to offload the work to [Juggernaut](https://github.com/maccman/juggernaut).

> Juggernaut gives you a realtime connection between your servers and client browsers.

You can run Juggernaut locally for development, but I recommend just throwing it up on Heroku to make your life easier.

<div class="clearfix"></div>

<div class="gistFallback">
{% gist 1003748 juggernaut_heroku.md %}
</div>

Once you have Juggernaut up and running it's time to start publishing events from rails to juggernaut. The easiest way to do this is with model observers. For the rest of this post we'll assume we are working with a pretty typical User model.

First install the Juggernaut gem by including it in your gemfile. 

Create a new file _/app/models/user\_observer.rb_

<div class="gistFallback">
{% gist 2331242 user_observer.rb %}
</div>

All this does is listen for update actions to the user model. Which conveniently is the action best in place uses to update the model. The changed data is then published to the Juggernaut instance. 

The `ENV['JUGG_URL']` should be set to the `REDISTOGO_URL` from the Heroku setup steps above.

You will also need to initialize the observer by adding the following to _/config/application.rb_

<div class="gistFallback">
{% gist 2331242 application.rb %}
</div>

Now that the changes are being published, we need need to make the view listen for the changes.

In your application layout add

<div class="gistFallback">
{% gist 2331242 application.html.erb %}
</div>

Then in your user view add

<div class="gistFallback">
{% gist 2331242 show.html.erb %}
</div>

Now anytime a user changes a field with best in place, other users viewing the same page will see the updates real-time.

The real tricky part here is knowing the field ID to update with the changed value. Best In Place generates field IDs dynamically with no way to override them. Luckily they are fairly predictable and we can infer what field was updated by the field name and the model name/ID. That's what `$('#best_in_place_user_<%= @user.id %>_'+i)` is doing. `i` contains the model field name such as `username` or `last_login`.

There are also a few problems with this. One being any special formatting done to things like dates won't be formatted by the javascript. This can be worked around by formatting the value as needed though. The other problem is the way I passed the user info into the javascript is ugly. Here is a [railscast](http://railscasts.com/episodes/324-passing-data-to-javascript) with some ideas on how you could clean that up.

To see real-time editing in action, sign up for an account at [Hospitium](http://hospitium.co/users/sign_up).

</article>