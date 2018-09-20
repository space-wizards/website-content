+++
title = "Progress Report #8: Writing Some Content"
author = "PJB3005"
date = 2018-09-19
categories = [
	"Progress Report"
]
+++

It's pretty nice to get to a point where we can worry purely about content without having to juggle the engine around all the time. I think we're getting close to the point of reaching that now.

<!--more-->

## Making Things Look Nice

When you're knee deep in engine development, there's no a lot of point to pulling in sprites from SS13. Wall sprites wouldn't have mattered because wall sprites were always hidden behind shadow occluders. No point pulling clothes when you can't put them on.

Actually going "I want to implement this, and do it well" is always a good challenge to code new engine and content features necessary to get just that inch closer to something playable.

Let's compare. Here's a screenshot from the last progress report a few months ago.

![](/images/post/pr_7/stationstation.png)

And here's a screenshot from right now.

![](/images/post/pr_8/current.png)

Something that's probably gonna very quickly catch your eyes is the APC and SMES sprites. They (and a bunch of others) are taken from the codebase [**CEV-Eris**](https://github.com/discordia-space/CEV-Eris). You might not have heard of them yet, but god damn their Multi-Z ship looks amazing. The map layout is amazing and they just nailed the immersion. Check them out!

The APCs and SMES are fully animated and the indicator lights work properly. They look absolutely amazing because they ignore the lighting layer. They're also laid out purely client side. The server sends over some data like the charge % of the SMES, but the client is fully in charge of actually selecting sprite layers and such. Being able to take the load off the server for trivial things like this is great. The system for separating this data is also decently modular, so making a hybrid SMES + APC deal with its own sprite should be very doable. Definitely more doable than in SS13.

You'll also note that the walls are properly smoothwalled and shadows work properly now. Again, this is done purely client side!

You might be wondering if that client side code is difficult to develop for and adds significant mental overhead. I'm probably kinda biased because I'm decently experienced, but I'd say the client/server distinction isn't that difficult to work with. Growing pains of just the engine in general are probably much more significantl. The thing is you still *can* do purely server sided code, but when you can offload those stupid smoothwall calculations to the client, it's nice to just go for it.

Oh also I zoomed in the client 2x so things aren't tiny like before.

## APC UIs

There's many practical UX problems with SS13's focus on separate UIs. A lot of the reasoning behind them is due to BYOND being bad. For example, when you're operating a pump in atmospherics, do you really need a separate window for an on/off switch and pressure limiter? Especially having that window appear in the center of the screen, thus invoking lots of mouse movement?

That said, they're still pretty necessary for many things. You can't get around it with many of the complex UIs SS13 has. Also they're definitely very easy to implement, and we gotta walk before we can run. As such I decided to implement the APC interface.

![](/images/post/pr_8/APC.png)

Well, it's definitely not gonna win any design awards. Hell I even forgot to write out a window title and was too lazy to recompile the game to add one for the screenshot. Oh well.

It being ugly as all heck does bring me into the next point though...

## UI Theme

Prompted by the APC looking actually atrocious, I set out to make a basic UI theme that isn't just the stock Godot gradients.

![](/images/post/pr_8/UI_theme.png)

It's not yet finished and not even close to reaching usage in the repo, but I do think my existing work is pretty nice.

## Equipment & inhands

In the last progress report I mentioned that Cluster coded an inventory system. There was not a lot of point to it though when it does literally nothing.

Well look no further, because you can now actually *see* the clothing you put on and the items you pick up\*!

![](/images/post/pr_8/equipment.png)

Again, lots of sprites on there taken from CEV-Eris, seriously check them out.

<sup>\*: Provided some SS13 spriter actually made the inhands and I bothered to import the DMI states. This is not a reliable occurence.</sup>

## Map Editor, Admin Tools & View Variables

So one of the side effects of not using a game engine (Godot is for rendering) is that you get none of the tools made for you. Having a map editor done without hassle is definitely nice to start I will admit.

Have you ever tried to design something with the admin tools of SS13, mid round? It's an absolutely painful experience. Ideally you'd have all the power of the map editor but you have to deal with half finished hacks like build mode.

Hang on, hold that thought.

What if we just didn't make a separate map editor. In reality, you'd just be building maps in the regular game, as an admin ghost or whatever, and saving them. We have all the infrastructure already there, and all of it can be re-purposed later down the line for admin tools and such! I mean sure we're NIH-ing a map editor and our current method of editing maps is even worse than Dream Maker but it's not like we have anything we need a map for anyways.

This was kinda the thought I came to while working on APCs. I wanted to cut their click bounding box so they wouldn't take the full tile (they used to), but I had no good way to preview those changes. Initially I wanted to make some stupid one-off tool, but then it dawned on me. We need VV.

VV is the second most powerful tool admins have at their disposal (the #1 is undeniably SDQL. Period.)
It allows you to view & modify all the variables of an object and mess with them ~~until you crash the server~~.

It took a lot of architecturing to get the code to not be terrible and be decently extensible, but I'm pretty damn happy with how it turned out:

![](/images/post/pr_8/VV_1.png)

![](/images/post/pr_8/VV_2.png)

There are of course many rough edges to refine about it, but it has already proven to be a great tool for development.
It works server & client side (you can edit remote objects). Also that preview of my mob updates live. Neat huh.

## Construction & Info Accessibility

Kind of fitting into the above, construction is still a royal pain as a player in SS13. Have you ever tried to build your own station? It takes actual hours to get anything done, especially if you want to make the bloody thing look good and have functional piping & power. It's just slow as hell to build something.

Another annoying thing is that it can be very annoying for new players to figure out just *how* to build something. Sure for walls and such "click on the material stack to show your options" is decently simple. You see "wall girder" and.. what now? We all know you have to hit it with metal again, but that's still something we all had to look up on the wiki at least once. This kinda info *can* and *should* be accessible easily to new & old players in the game itself. How many of us have just slapped tools into something to find the next tool because we didn't know what it was? Should I go into the worst case scenarios like how to build a bloody stun prod or whatever before TG's crafting menu?

So we're building on TG's crafting menu and taking it to the next level. Sitting around and having recipes in a menu is... pretty dull. Crafting times are an easy way to balance things but also excruciatingly boring. Slap crafting had its charm and it was infinitely more involved than the systems of old.

So we decided to combine both. All construction recipes are centralized in an organized window:

![](/images/post/pr_8/construction.png)

But you still have to slapcraft your way to victory. We just make the steps extremely obvious. For things like walls which have to be placed, it actually lets you place client-side wall ghosts first, so you can plan out everything.

<video src="/video/18_09_19-construction.mp4" controls>

In the future we'll probably experiment with live tooltips showing you just what step you need, so it's not just limited to the interface. Of course, baby steps.

But seriously, we want to make this game accessible to people. When people say the interface is atrocious they're sadly right, and it's such a shame because SS13 has so much potential. We believe it's possible to make this game extremely accessible to anybody interested in anything but 2D games, and we damn well are gonna try our hardest.

## Persistent Logins

We’ve long decided that we will never rely on a third party service like Steam to handle logins. Of course, the game will probably still end up on Steam eventually, but you’ll always be able to download a non-steam version too. We’ll probably end up having a centralized authentication server run by us or a future member of the community.

Well nobody’s gonna bother hosting such an authentication server yet, and it’d definitely be a pain to work with when you need to debug something on a local computer. At the same time we still want to be able to log in and out of the same body right now, so we need some way to keep track of clients.

What we decided on is to, right now, just have the client be able to submit any username to the server. The server can still re-assign it to allow you to login multiple times with the same username (very useful for development!). It works quite well and paves the road quite nicely to a centralized authentication system, which would still be username based.

So yes, you actually can log in and out and keep the same body. We even track data like a simplistic form of minds now. If you’re not familiar, minds in SS13 are a representation of your IC “knowledge”. Used primarily to track whether you’re still an antag, because you stay antag through being cloned, borged, unborged, and turned into a cat beast.

## Quick Note About Nightly Builds

The builds server is currently down due to hard drive failiure. Don't worry we've got backups. Sorry about that though.
