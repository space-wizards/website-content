+++
title = "Progress Report #13: Permanent Public Server."
author = "PJB3005"
date = 2019-04-02
categories = [
	"Progress Report"
]
reddit = "https://www.reddit.com/r/ss14/comments/b8ns31/progress_report_13_permanent_public_server/"
+++

Working on a massive project like this can be quite daunting. "Remake SS13" is quite a clear goal but far from concrete. Having intermediate goals to work towards is important. So for now, my goal at least is to get a permanent public server running.

<!--more-->

## Permanent Public Server

The goal is simple. Get a public SS14 server running somewhere. Make it easy to connect to. Anybody can join at any time. Server auto updates and hopefully isn't too clunky about it either.

And I am pleased to say that the server is running permanently at `server.spacestation14.io`, right now! I will say though that it's *very* bare bones and absolutely not fit yet for messing around much yet, so don't get your hopes up that you can have a fun team deathmatch right now.

I will go over some things done to make this work and things to work on from here.

### Bare-bones Launcher

If you were to try SS14 previously you had to juggle zip files, launch client and server and all that and throw it all away when updating. Quite honestly even I was getting sick of it after the third time. Not to mention how painful it would be when you need to auto update along with the server. Yuck.

So I wrote a bare bones launcher. More info at the [nightlies page](/about/nightlies/). But basically it's just a dead simple console app to auto update the client and launch it. Not much else there.

In the future we will probably want to give it a fancy user interface and all that, and eventually it'd probably manage launching the client. But for now it's good enough to start the client and connect to the public server. Also cross platform good looking user interfaces are a royal pain to write, especially if you're not using C++ to use Qt.

The launcher has been tested on Linux and Windows. It has also been tested on macOS and shown to be broken. It's a good sign when the macOS launch system gives you "unknown internal error" when trying to launch the client. Thanks Apple.

### Main Menu Improvements

The main menu is kind of a temporary thing, since ideally the launcher would handle everything related to connecting. There'd be no need for a main menu to enter the server address into.

But as mentioned above, a proper launcher is still very far out. So we're kinda stuck with it for now. Won't stop us from making improvements to it, if ugly.

First of all, you can now specify your username before connecting, in the main menu. So now when connecting to the public server you won't connect to the body of another player 5 hours before you, named "JoeGenero" with increasing numbers at the end.

There is now also a highly convenient button to connect to the public server right there in the main menu, so you won't even have to type the server address in.

### TODO: Switching Between Sandbox/Game

Having the public server is nice. Of course, unlike a server you run on your own machine, not everybody is admin on the public server. Right now this doesn't matter *too* much but if we want people to use the public server for messing around to try SS14, then it's highly inadequate. If you die then... well... guess you'll have to refer to the "run your own server" instructions.

Ideally we would have the server in a sandbox mode OR a regular game mode, actual admins being able to switch between the two. Players can mess around with most admin powers like VV in one, or they get to duke it out with normal gameplay in the other.

### TODO: Authentication

For now, the server allows you to use any username and automatically solves conflicts by appending numbers to it if necessary. Ideally we would have an authentication system to prove people's identity so that people have consistent usernames, but it's a relatively big can of worms to implement.

As for how admins work, we have them enter a password in the console right now.

### TODO: Lay Out Control Scheme

We've had a few people try out the game before I'm writing this progress report and there's a lot of people who can't figure out the control scheme we laid out. And I can't blame them. Half our control scheme is "literally no thought has been put in" and the other is "good reason but still different from SS13 and we need this explained somewhere", so if you do try the game right now you'll be VERY confused at being unable to open backpacks. I promise it's possible though.

## The Map Keeps Looking Better

{{< imgw "/images/post/pr_13/newmap" >}}

Oh yeah, that's not even all of it anymore. It doesn't fit in a single screen now.

Once again was mapped entirely with in game tools (though I have to admit the experience could still be much better).
It could use a lot more details and content. Contributions welcome as always!

## Project Rename

So due to historical reasons, the engine was named Space Station 14, and the content (AKA, the actual code most people would expect) was named Space Station 14 *Content*. Now people kept downloading the wrong repo and all that so we renamed the projects on GitHub to avoid confusion. The engine is now called RobustToolbox and the main content repo is called Space Station 14.

Also silver did this rename without telling anybody he was going to do it RIGHT NOW and fixing all the build scripts and whatever was a fun experience.
