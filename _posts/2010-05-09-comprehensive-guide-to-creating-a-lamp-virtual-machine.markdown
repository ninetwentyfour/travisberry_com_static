--- 
layout: post
title: How To Setup A LAMP Virtual Machine
wordpress_id: 977
wordpress_url: http://www.travisberry.com/?p=977
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://www.travisberry.com/wp-content/uploads/2010/05/oldcomp.jpg"
summary: "In an effort to develop in an environment closer to many production servers, many people have begun developing in virtual machines running on their host os. This article is a comprehensive guide to creating a LAMP virtual machine."
---
<article class="post clearfix">
  <h3>How To Setup A LAMP Virtual Machine</h3>
  <a href="http://www.travisberry.com/wp-content/uploads/2010/05/oldcomp.jpg" class="postImageLink"><img src="http://www.travisberry.com/wp-content/uploads/2010/05/oldcomp.jpg" alt="" class="thumbnail alignleft" width=640 height=280 /></a>
  <h6>Published: 2010-05-09</h6>

In an effort to develop in an environment closer to many production servers, many people have begun developing in virtual machines running on their host os. This article is a comprehensive guide to creating a LAMP virtual machine (plus a few other goodies).

First you need the virtual machine software. Download [VirtualBox](http://www.virtualbox.org/wiki/Downloads) and install it on your host os. Once installed go download the latest version of [Ubuntu](http://www.ubuntu.com/GetUbuntu/download). You want the desktop version, not the server. Save the .iso file to your desktop.

## VirtualBox Setup & Ubuntu Installation

Launch VirtualBox and create a new machine by clicking the button in the top left corner. Click next on the screen the comes up. Create a name for your new machine, and select Linux as your Operating System, and Ubuntu as you Version. Select a base amount of memory for the virtual machine to use. Use at least the default settings, but use as much as your system can spare. I recommend setting it to no more than 50% of your total RAM, unless you have lots to spare. Hit next. On the next screen select the option to create a new hard disk. This will launch the Create New Virtual Disk Wizard. Hit next. Select dynamically expanding storage and hit next. Select the size of the hard disk you want the virtual machine to have. This does take up real space on you computer. The default of 8 gigs should be sufficient for most. On the next screen hit finish. Then finish again.

Now with your new machine highlighted, click the start button. This will launch two new windows, one of them being the First Run Wizard. Hit next on the first screen. Select CD/DVD ROM Device. Then click the little folder next to the drop down list. Hit add and select the Ubuntu .iso file you save to your desktop. Highlight it and hit select. Hit next on the Select Installation Media page. Finish.

The Ubuntu .iso file will now start to run in the other window. When the install screen comes up select your language and hit the Install button, not the try button. On the next page select your time zone. Then pick your keyboard on the next screen. On the Prepare disk space page select the option to erase and use the entire disk then hit forward. Next fill out your user information. Make sure to set a password. On the next page hit install.

If you find you cant get your mouse back out of the virtual machine, look in the bottom right corner of the window. It should give you a short cut or a ket on your keyboard that when pressed will return your mouse to the host os.

When the installation is complete you will need to restart the computer. When it says, Please remove the disc and close the tray (if any) then press enter:, pull your mouse back out of the virtual machine and look at the bottom of the window. There should be an icon that looks like a CD. Click it and select unmount CD/DVD Device. Now click back in the Ubuntu window and hit enter. When the computer finishes restarting you will now have a working Ubuntu copy installed on your host os. 

You may or may not be able to connect to the internet through your virtual machine by default. Check by launching Firefox and seeing if you have a connection. If you do not. Close the virtual machine. You can select shutdown from the system options or just close the window and choose power down. In the virtual box window select your virtual machine from the list on the left hand side and select Settings. Select Network from the top menu. Under Adapter 1 make sure Enable Network Adapter is checked, but change the Attached To drop down list from NAT to bridged adapter. Hit OK and restart the machine. You should now be able to connect to the internet.

Now that Ubuntu is installed and working it's time to start installing the LAMP stack. For those who don't know, LAMP stands for [Linux](http://www.linux.org/), [Apache](http://www.apache.org/), [MySQL](http://www.mysql.com/), and [PHP](http://php.net/index.php). This is a common setup among web developers, but you could also install Ruby or any other language. This one will focus just on the LAMP stack. (which is what you want if you use, wordpress, joomla, drupal, cakephp, or any of the other fine php packages)

## Install Apache 2

Now open up Terminal (Applications > accessories > Terminal). Type in the following,

<script src="https://gist.github.com/1176993.js?file=example1.txt"></script>

Terminal will prompt for your password. Enter it in.(Terminal does not show your password as you type, so just type it in and hit enter).

## Install PHP 5

Apache should now be installed on your system. Now it's time to install PHP 5. In terminal type,

<script src="https://gist.github.com/1176993.js?file=example2.txt"></script>

## Install MySQL

Now you have PHP 5 installed. To install MySQL type,

<script src="https://gist.github.com/1176993.js?file=example3.txt"></script>

Enter in a password when the install prompts you to.

## Install phpMyAdmin

Now install [phpMyAdmin](http://www.phpmyadmin.net/home_page/index.php) by typing

<script src="https://gist.github.com/1176993.js?file=example4.txt"></script>

When phpmyadmin asks which server to use select apache. It will then ask to create a database. Tell it to do so and enter in the password you set when installing MySQL.

After installing all this you need to restart apache. To do so type

<script src="https://gist.github.com/1176993.js?file=example5.txt"></script>

## Test Installation

You should now have a working LAMP stack installed. To test everything is working, type in Terminal

<script src="https://gist.github.com/1176993.js?file=example6.txt"></script>

When the new window opens add

<script src="https://gist.github.com/1176993.js?file=example7.php"></script>

Save and close the window. Now open Firefox and go to http://localhost/

You should see "It Works!", if you do, apache is working, then go to http://localhost/info.php

If you see a long list of information about PHP 5 then it works as well.

Now everything is working as it should, but the default setup isn't the best thing. We're going to do a little bit more to make it a development dream come true.

## Fix Domain Name Error

First you may have noticed when we restarted apache that it gave an error about not being able to determine the fully qualified domain name. To fix this error open the terminal and type,

<script src="https://gist.github.com/1176993.js?file=example8.txt"></script>

Add to the file

<script src="https://gist.github.com/1176993.js?file=example9.txt"></script>

Save and exit. Now restart again. You should no longer see an error.

## Install mod_rewrite
Now lets add an important PHP 5 module. mod_rewrite. Many systems use this to turn ugly urls like,

example.com/?dkjfodocas223 

into 

example.com/about/

You can enable the module by typing in the Terminal

<script src="https://gist.github.com/1176993.js?file=example10.txt"></script>

## Enable PHP 5 Error Displaying

Another helpful feature not enabled by default is error displaying in PHP. Now on a production server it is good to turn these off, but when developing, they can be handy to have on. To enable type

<script src="https://gist.github.com/1176996.js?file=example11.txt"></script>

Make sure the following lines read as follows

<script src="https://gist.github.com/1176996.js?file=example12.txt"></script>

## Setup Virtual Hosts

After errors are turned on, let's setup an example virtual host. Virtual hosts are what allow you to host multiple websites on one server. This will allow example.com and test.com to point to two different sites.

To begin setting this up create two separate folders in /var/www/. Name one example.com and the other test.com. Create a simple index.html file in each, creating content that makes them easy to tell apart. Now cd to /etc/apache2/sites-enabled. Once there, type the following in Terminal

<script src="https://gist.github.com/1176996.js?file=example13.txt"></script>

Inside the file paste the following,

<script src="https://gist.github.com/1176996.js?file=example14.txt"></script>

Now create a link to the file in sites-available.

<script src="https://gist.github.com/1176996.js?file=example15.txt"></script>

Next let's create one for test.com

<script src="https://gist.github.com/1176996.js?file=example16.txt"></script>

Inside the file paste the following,

<script src="https://gist.github.com/1176996.js?file=example17.txt"></script>

Now create a link to the file in sites-available.

<script src="https://gist.github.com/1176996.js?file=example18.txt"></script>

Now your virtual hosts are ready to go, but first we need to tell the computer to listen for the addresses. To do that type the following,

<script src="https://gist.github.com/1176996.js?file=example19.txt"></script>

Then

<script src="https://gist.github.com/1176998.js?file=example20.txt"></script>

Create a new line under the first. In it add

<script src="https://gist.github.com/1176998.js?file=example21.txt"></script>

Create another line and this time add

<script src="https://gist.github.com/1176998.js?file=example22.txt"></script>

Save and close the file. Restart apache

<script src="https://gist.github.com/1176998.js?file=example23.txt"></script>

Now open Firefox and go to www.example.com. You should see your example.com index.html file. Now try www.test.com. If you see your test.com index.html file everything works as it should. Just repeat this process for any additional domains you would like to add.

If you want to be able to view your virtual machine sites in a browser on your host os you need to do a similar thing as the last step. First find the local IP address of the virtual machine. You can find this by going to System > Administration > Network Tools. Select your Network Device from the drop down and look for the Ipv4 IP Address. Let's say mine is 192.168.10.4

Now move back to your host os. Open a terminal session in it. Find your hosts file. In OSX it is /etc/ just like Linux. Now add lines like so,

<script src="https://gist.github.com/1176998.js?file=example24.txt"></script>

You should now be able to view your example sites in a browser on your host os.

## Change Webroot Permissions

Everything is starting to work quite well for development but there are still a few extras worth setting up. The first is changing permissions of your web root. To make you the owner of the /var/www directory type this in Terminal

<script src="https://gist.github.com/1176998.js?file=example25.txt"></script>

## Install Git

This will now allow your user to easily create new folders and files. Next lets install my favorite version control system [Git](http://git-scm.com/). To install type this into Terminal

<script src="https://gist.github.com/1176998.js?file=example26.txt"></script>

## Install FTP

You can now use git to control the code you develop on the machine. Next let's add ftp support to make moving files between your host and guest operating systems a little easier. To install ftp support type,

<script src="https://gist.github.com/1176998.js?file=example27.txt"></script>

You can now open your favorite ftp application in your host os and connect to your virtual machine. Just use the IP (mine in this example is 192.168.10.4) and enter in your user name and password. Ta-da!

***

There you go. You now have a complete and awesome new development virtual machine. If there are any questions, or if you know a better way to do something, please let me know in the comments.
</article>