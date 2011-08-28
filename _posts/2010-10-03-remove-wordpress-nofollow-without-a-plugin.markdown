--- 
layout: post
title: Remove WordPress' NoFollow Without A Plugin
wordpress_id: 1214
wordpress_url: http://www.travisberry.com/?p=1214
categories: 
- title: Uncategorized
  slug: uncategorized
  autoslug: uncategorized
tags: []
image: "http://content.travisberry.com/do_follow.jpg"
---
[![](http://content.travisberry.com/do_follow.jpg "do_follow")](http://www.siliakatung.com/exhibition.htm)And even better, do so without modifying the WordPress core files. It's really quite simple.<!--more-->In your templates functions.php file add [cc lang="php"]function comment_author_link_mine( $comment_ID = 0 ) {    echo get_comment_author_link_mine( $comment_ID );}function get_comment_author_link_mine( $comment_ID = 0 ) {    /** @todo Only call these functions when they are needed. Include in if... else blocks */    $url    = get_comment_author_url( $comment_ID );    $author = get_comment_author( $comment_ID );    if ( empty( $url ) || 'http://' == $url )        $return = $author;    else        $return = "[$author]($url)";    return apply_filters('get_comment_author_link', $return);}[/cc]Then in your comments.php file, find and replace any mention of[cc lang="php"]<?php comment_author_link(); ?>[/cc]With[cc lang="php"]<?php comment_author_link_mine(); ?>[/cc]This simply replaces the core files "comment_author_link()" function with one of our own. The original has [cc lang="php"]$return = "[$author]($url)";[/cc]as the link. We simply remove the rel attribute and change it to[cc lang="php"]$return = "[$author]($url)";[/cc]and it removes the nofollow attribute from your comments. No modifying of the core files, and one less plugin to deal with.If you have tips for removing other plugins and using your own solution, let me know in the comments.<script>utmx_section("contact1")</script><div id="contactme"><div class="avatar">![](http://www.gravatar.com/avatar/c9e8248c1237949b66a735bed64ae841?s=32&d=identicon&r=G)</div>I'm just a guy interested in all things design and web related. You should [contact me](http://www.travisberry.com/contact/) about about this article, for freelance work, or for any reason.</div>
