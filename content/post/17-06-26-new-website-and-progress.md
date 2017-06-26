+++
title = "Progress Report #1: Revive"
author = "PJB3005"
date = 2017-06-26
categories = [
	"Progress Report"
]
tags = ["website"]
+++

You're reading this on the new website for SS14! After [lots of hard work with CSS](https://i.imgur.com/Q3cUg29.gif), the website is ready to recieve progress reports and other news.

<!--more-->

The website is hosted entirely from GitHub pages, which means it's fast, reliable <!--Citation Needed, GitHub goes down more than I'd like to. --> and secure, with zero cost to us (except for designing and writing it). It's completely static server side, and generated with [Hugo](https://gohugo.io), an excellent tool for making static sites like this. Adding a page is as simple as making a new markdown file with title, and date and building it. Easy as that!

The code for the website can be found [here](https://github.com/space-wizards/space-wizards.github.io-content). Which is also where commits will go for new blog posts.

## Progress!

Now, since this is the first blog post on the site, I want to give a quick run down of the status of SS14 since the [last progress report made in March by Silvertorch5 on /r/ss14](https://www.reddit.com/r/ss14/comments/5yd7fh/march_2017_update/).

The project has been revived pretty heavily. We've already refactored everything over a couple times by now. There's a whole bunch of new developers (including me!) and we're ready to take this remake on head first.

We're retargeting the main repo to be a more "bare engine" sort of deal. There will not be a lot of content in it (excluding debug content). All of this content will be loaded from an external set of files that can be loaded on a per server basis, thus ensuring that players only need one client for every server. We've made a repo for a "base" set of content that other repos can branch off [here](https://github.com/space-wizards/space-station-14-content). In general most of the work is focused on getting this functional so we can start hitting clowns with toolboxes.

Lots of assorted refactors that touch the entire project have been made to allow us to pave the way for a more easy development environment, content *and* main engine. The repo was pretty bad organizational a few weeks ago, but a couple large refactors later and it's already lots more manageable, and we can actually start putting in serious work now.

For example, previously the project was a giant mess that didn't even conform to the same programming paradigms, this:

* `SS14.Client`
* `SS14.Client.Graphics`
* `SS14.Client.Services`
* `SS14.Client.GameObjects`
* `SS14.Client.Interfaces`
* `SS14.Server`
* `SS14.Server.Services`
* `SS14.Server.GameObjects`
* `SS14.Server.Interfaces`
* `SS14.Shared`
* `SS14.Shared.GameObjects`
* `SS14.Shared.IoC`

This was a giant mess in more ways than I can explain with that small list. Now it looks like this:

* `SS14.Client`
* `SS14.Client.Graphics`, but Silver is in the process of removing this one too.
* `SS14.Server`
* `SS14.Shared`

Hooray for clean up!

And that's just the biggest elephant in the room! We're fixing systems, discussing design targets, documented the code that's undocumented. We're working on setting up a proper project management board to allow us to easily delegate tasks and go "here's a list of things we can work on right now. Pick something you like!". This is still a bit off, but when it's done it'll be in the next progress report I guarantee you. This project management board will be extremely helpful to allow us to make these progress reports more easily in the future, too!

So for more stuff to report:

* Sood has been working on IPv6 networking and updating the years out of date version of Lidgren.Network in our code. Sadly Lidgren isn't being updated anymore, but it's still highly reliable. We are talking about moving to an alternative, LiteNetLib, as a very long term goal, because of obvious maintenance issues with Lidgren (IPv6 support is through an unmerged old PR on the Lidgren repo.)
* Sood helped redo all the EOLs to be LF (UNIX). I now have the most line changes of any single person on the repo and I don't deserve it.
* Silvertorch5 continues working on RobustEngine, the name we debubbed for the rendering engine that will be powering the client. As much as it is demotivating, SFML was a giant terrible mistake, a BYOND level mistake, but giving up isn't the solution, shit happens.
* A fancy splash screen, a joint project between me, Silver and PsyKzz. [Check it out](/images/splash.png)
* All around performance improvements.
* Tons of general bug fixes for things that get in the way even when you're developing the engine.
* Set up automatic code anlysis to catch bugs and yell at us.
* Better support for non-Windows operating systems all around.
* Acruid is moving the config system to TOML, a proper config file format, instead of XML.
* On the front end "developer experience" side of things, we've decided on a new YAML prototyping system for entities. Code will still be in C# (but dynamically loaded). The result is it'll still be extremely fast, type safe, and easy to develop on both client and server. See [this file](https://github.com/space-wizards/space-station-14/blob/939f14eba7e49c207b9de46037f8717e20bf76cc/SS14.Server/Prototypes/Containers.yml) for an example of what it looks like now.

However picking a fine line between these and other PRs is kind of hard, so if you want to see every PR merged recently, [here you go](https://github.com/space-wizards/space-station-14/issues?utf8=%E2%9C%93&q=is%3Amerged%20).

**I can assure you: SS14 is not dead. And we're gonna finish this.**
