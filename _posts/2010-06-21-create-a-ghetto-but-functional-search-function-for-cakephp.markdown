--- 
layout: post
title: Create A Ghetto, But Functional, Search Function For CakePHP
wordpress_id: 1012
wordpress_url: http://oldstatic.travisberry.com/?p=1012
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic.travisberry.com/portalcake2.jpg"
summary: "Recently I needed to add a search function for a CakePHP application I am building. After googling the bejeezus out of it, I never found a solution that worked."
---
<article class="post clearfix">
  <h3>Create A Ghetto, But Functional, Search Function For CakePHP</h3>
  <a href="http://store.steampowered.com/app/400/" class="postImageLink"><img src="http://oldstatic.travisberry.com/portalcake2.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2010-06-21</h6>

Recently I needed to add a search function for a [CakePHP](http://cakephp.org/) application I am building. After googling the bejeezus out of it, I never found a solution that worked. Some required the use of a search table, which then needed to index all of your content, other's just didn't work at all.

After much hacking around I came up with a solution that works for me. This may or may not solve your particular problem, but it may help get you started in the right direction.

I'll be using a fairly standard User MVC for this demo.

First, I started in the view. Instead of using the built in cakephp form helpers, I hand coded my inputs. You could easily use the form helpers though. Just make sure to set the value on certain inputs.

<div class="gistFallback">
{% gist 1177028 example1.php %}
</div>
	
The code is fairly straight forward. In the form tag I declared which action in the controller to use. The input tags are really straight forward. The only thing to note is in the search type radio buttons, the value is set to the Model.fieldname. This is important later on. But make sure to set them to the models you intend to search.

Now in the controller, it's time to add the search action.

<div class="gistFallback">
{% gist 1177028 example2.php %}
</div>

It's really a pretty standard find all but the key lies in the conditions. They are set to variables that are posted through the form. So if you selected Order ID as the type and entered 1 in the search box. Your condition would be array('Order.id' => %1%) One last thing is to create the search.ctp

<div class="gistFallback">
{% gist 1177028 example3.php %}
</div>
	
It's just a simple loop through the results. I also added the search box to the top of this page, so the user can run another search if they want.

So it may not be the cleanest solution in the world, but it works well, and is flexible enough so you can tweak it to many different situations. If you have a better way to search with CakePHP, please let me know in the comments. Or feel free to ask any questions.
</article>