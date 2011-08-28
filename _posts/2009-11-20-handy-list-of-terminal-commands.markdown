--- 
layout: post
title: Handy List of Terminal Commands
wordpress_id: 194
wordpress_url: http://www.travisberry.com/?p=194
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://www.travisberry.com/wp-content/uploads/2009/11/terminalcap.jpg"
summary: "This list is more for my personal reference than anything but you may find some useful information here."
---
<article class="post clearfix">
  <h3>Handy List of Terminal Commands</h3>
  <a href="http://www.travisberry.com/wp-content/uploads/2009/11/terminalcap.jpg" class="postImageLink"><img src="http://www.travisberry.com/wp-content/uploads/2009/11/terminalcap.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2009-11-20</h6>

This list is more for my personal reference than anything but you may find some useful information here.
<div class="clearfix"></div>

Restart .profile
``. ~/.profile``Stop default Apache on OSx``sudo /usr/sbin/apachectl stop``

Restart Apache
``sudo /opt/local/apache2/bin/apachectl restart``

Start mysql
``sudo mysqld_safe5``

Change database privileges
``grant all privileges on "databasename".* to 'name'@'localhost' identified by 'name'``

Dump database
``mysqldump db_name > backup-file.sql``Import database``mysql db_name < backup-file.sql``

Initialize git repository
``git init``

Configure git remote server
``git repo-config remote.origin.url http://yourusername@www.yoursite.com/git/gittest/``

Push git changes to remote
``git push origin master``

Clone repository
``git clone http://yourusername@www.yoursite.com/git/gittest/``

Pull changes to local branch
``git pull http://yourusername@www.yoursite.com/git/gittest/``

Connect to remote with ssh
``ssh yourusername@yoursite.com ``

Copy file contents directly to clipboard
``cat ~/filelocation | pbcopy``

Sync MacPorts
``sudo port selfupdate``

Display installed ports
``port installed``

List outdated ports
``port outdated``

Upgrade outdated ports
``port upgrade outdated``

Compress video with h264
``ffmpeg -i example.mov -vcodec libx264 -vpre hq -b 1300k -s 640x360 -acodec libfaac -ar 44100 -ab 128k -threads 6 -f mp4 example.mp4 ``

Compress video to Ogg
``ffmpeg2theora -V 700 -A 96 -H 44100 -K 24 -x 640 -y 360 --two-pass --optimize --speedlevel 0 --seek-index --soft-target --pp vdeblock:10/hdeblock:10 example.mov ``

This post will continue to grow as I update it with new handy terminal commands.

Any commands you can't live without? Let me know in the comments.
</article>