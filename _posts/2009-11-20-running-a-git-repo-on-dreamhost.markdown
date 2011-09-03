--- 
layout: post
title: Running A Git Repo on DreamHost
wordpress_id: 179
wordpress_url: http://oldstatic.travisberry.com/?p=179
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://oldstatic.travisberry.com/wp-content/uploads/2009/11/gitlogo.jpg"
summary: "Git is freaking awesome. I’m not sure how I lived without it. For those who don’t know, Git is a version control system."
---
<article class="post clearfix">
  <h3>Running A Git Repo on DreamHost</h3>
  <a href="http://git-scm.com/" class="postImageLink"><img src="http://oldstatic.travisberry.com/wp-content/uploads/2009/11/gitlogo.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2009-11-20</h6>

[Git](http://git-scm.com/) is freaking awesome. I'm not sure how I lived without it. For those who don't know, Git is a version control system.
<div class="clearfix"></div>

<blockquote>
[From Wikipedia](http://en.wikipedia.org/wiki/Revision_control): Revision control (also known as version control, source control or (source) code management (SCM)) is the management of changes to documents, programs, and other information stored as computer files. It is most commonly used in software development, where a team of people may be changing the same files. Changes are usually identified by a number or letter code, termed the "revision number", "revision level", or simply "revision". For example, an initial set of files is "revision 1". When the first change is made, the resulting set is "revision 2", and so on. Each revision is associated with a timestamp and the person making the change. Revisions can be compared, restored, and with some types of files, merged.
</blockquote>

Simply put a version control system allows you to track changes to files, and merge them in multiple locations.

There are numerous websites that host git repos, the largest being [github](http://github.com/), but most either require being public or paying for hosting. Well I already pay for a host so why pay for another? Especially when they seem to cost as much as my regular host.

So to set up a git repo on [DreamHost](http://www.dreamhost.com/) you have to enable [webDAV](http://en.wikipedia.org/wiki/WebDAV) on a folder on your server. You can accomplish this by going to your DreamHost webpanel and going to "goodies" - ".htaccess/webDAV".

Go through the on screen instructions to setup the webDAV in a folder. I named mine /git/. If you need help with this, follow this [walk-through](http://wiki.dreamhost.com/WebDAV)

After an hour or so the folder will be setup. You can test by logging in. In OSx hit command k and enter in the url to your folder. something like http://yoursite.com/git . You will be prompted for the user name and password you assigned when you setup the webDAV. If all goes well, a folder should appear in your finder with the folder on your server shown.

Now create a blank folder on the desktop. Name it whatever you want. I'll call mine, "gittest" .

Initiate a blank repository by running

{% gist 1176861 command1.txt %}

Now tell the repository where it will live

{% gist 1176861 command2.txt %}

Once you have that done, upload the folder into the "git" folder on your webDAV server.

Now create the folder you want to use as your local files folder. It can be named whatever you want. Inside create a couple html files. Save them.Now do the typical git initialization and commit the files.

{% gist 1176861 command3.txt %}

Now configure your remote master repo.

{% gist 1176861 command4.txt %}

The "yourusername" is the user name you use to login to the webDAV folder. Now try to push to the remote.

{% gist 1176861 command5.txt %}

After you hit enter on the code above it will prompt your for the password for the account.

That should push all your local files to the git remote repo. Now don't panic when you can't see the html files in your webDAV server. Git doesn't need them to track your changes and files.

You can test that it works by creating a new folder somewhere on your computer. Now clone your project to it.

{% gist 1176861 command6.txt %}

If everything is working you should now be able to see the html files in the new folder.

So that's it really. You now have a self-hosted git repo. The only other thing left to do is to add a [web interface](http://git.or.cz/gitwiki/InterfacesFrontendsAndTools#WebInterface) if you want, however, I haven't been able to get one to work. As I continue to mess with it, if I find a solution, I will post it here.

Helpful articles:

- [DreamHost support wiki](http://wiki.dreamhost.com/Git)
- [Keeping git repositories on Dreamhost using SSH](http://casperfabricius.com/site/2008/09/21/keeping-git-repositories-on-dreamhost-using-ssh/)
- [Setting up a new remote git repository](http://toolmantim.com/articles/setting_up_a_new_remote_git_repository)
- [A web-focused Git workflow](http://joemaller.com/2008/11/25/a-web-focused-git-workflow/)
- [git repository setup](http://ikiwiki.info/rcs/git/)

Any tips to smooth out this process? Leave them in the comments.

</article>