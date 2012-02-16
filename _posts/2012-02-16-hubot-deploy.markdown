--- 
layout: post
title: Hubot Deploy
image: "http://static-assets.travisberry.com/post_images/elephant.jpg"
thumbnail: "http://static-assets.travisberry.com/thumbnails/elephant_thumb.jpg"
summary: "Use Hubot and Capistrano to deploy applications for you."
---
<article class="post clearfix">
  <h3>Hubot Deploy</h3>
  <a href="#" class="postImageLink"><img src="http://static-assets.travisberry.com/post_images/elephant.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: February 16, 2012</h6>
[Hubot](http://hubot.github.com/) is super badass. So is [Capistrano](https://github.com/capistrano/capistrano). Getting them working together is like syrup and bacon. So good.

I won't cover getting Hubot setup as there are plenty of [posts available](http://joeloughton.com/blog/uncategorized/installing-hubot-on-mac-os-x-10-7/) and it's not too terribly difficult. Just pick what service you want to hook into and fire it up. (We use hipchat)

I'm also not going to cover creating deploy scripts with Capistrano as again there are plenty of [other posts](https://github.com/capistrano/capistrano/wiki/2.x-Getting-Started) that can help.

We're going to jump in and assume you have Hubot running on a local machine and have at least one app setup to deploy. (Make sure the Hubot machine has access to run deploys)

To get Hubot to talk to the repos and deploy them we are using a simple Sinatra app as a middle layer.

Before that though, let's start with a quick overview of how the whole thing is going to work.

User tells Hubot "deploy _application_" -> Hubot passes the _application_ to a Sinatra API endpoint -> Sinatra runs the deploy script for the repo -> Hubot tells the user the app is deployed

So let's start with the Hubot script.

<div class="gistFallback">
{% gist 1847866 deploy.coffee %}
</div>

This is a pretty simple Hubot script. Hubot checks if the _application_ is one he knows and if so, hit the Sinatra API. There's also some fluff in there that tells the user something is happening and to be patient and a few gifs for added fun.

Add your _applications_ to the _repos_ array. One thing to note is the Sinatra URL, depending on your setup, this url may change for you.

Now that Hubot is listening for deploys, we can create the simple Sinatra app. 

<div class="gistFallback">
{% gist 1847866 deploy.rb %}
</div>

Again, really really simple. 

All the app does it take the name of the _application_ as a URL parameter and deploys that app. This is also where a little hackery comes in.

The key to this working correctly is the **names in the Hubot script need to be exactly the same as the repo folder names**. You must also keep a copy of the repos on the same machine that is running the Sinatra app and Hubot.

<blockquote>
names in the Hubot script need to be exactly the same as the repo folder names
</blockquote>

This allows the Sinatra app to cd into the repo, update the repo, then run Capistrano deploy. This example uses a deploy_repo folder on the Desktop to store all the repos. Change this as needed.

If everything is setup correctly you should now be able to tell Hubot "deploy _application_" and watch as Hubot does all the work.

There's a lot a room for expansion here too. Follow the same basic setup and you can add the ability to have Hubot rollback code incase of a problem.

</article>
