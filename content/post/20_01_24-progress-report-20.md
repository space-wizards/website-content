+++
title = "Progress Report #20: 2020 Resolution Failed"
author = "PJB3005"
date = 2020-01-24
categories = [
	"Progress Report"
]
reddit = "https://www.reddit.com/r/SS13/comments/etai5o/ss14_progress_report_20_2020_resolution_failed/"
+++

Writing progress reports is hard. Usually it isn't even writing the progress report itself, it's making the content we've added presentable.

<!--more-->

So I *started* writing this progress report with the intent of getting it published around christmas. That then turned to "finish it around new year, with the new year's resolution being actually getting something done on time". Failed that too.

Obviously we still have a ton of great work from various contributors done in the last 3 months. Why did it take 3 months? Because I keep getting distracted with coding things *while* writing the progress report! Cue another couple days of coding something / cleaning something up when I said on Discord I would "write the progress report".

I *really* want to get this progress report out the door now so as a result, **a lot of things will be way less polished than usual**. For example *normally* I'd go and edit the map to add all the new features added... at this point if I did I'd consider it a failure on my part, because that means this progress report would be even *more* delayed.

Anyways uh, onto the progress.

## Contributions welcome!

If you've been thinking about contributing, now is an amazing time to start! There's a lot of stuff to polish up / add and **we'd be glad to have you!**. A lot of these tasks are relatively simple so, **I've made a [bunch of new issues on GitHub tagged with the Junior Job label](https://github.com/space-wizards/space-station-14/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22Junior+Job%22), if you want something to work on.** I'll make sure to include you in the next progress report!

## Item status

The Hot New Unique Feature™️ coming to SS14 this progress report is Item Status:

{{< imgw "/images/post/pr_20/item_status" >}}

Tooltips so you can instantly tell important status information about what you're holding!

So simple textual tooltips were the initial idea. Then I got a bit *creative*...

<video src="/video/20_01_11-flashlight-item-status.mp4" autoplay muted loop playsinline></video>

Then I just went all out.

<video src="/video/20_01_11-gun-item-status.mp4" autoplay controls muted loop playsinline></video>

**Unmute the above for sound**

Also it displays the chambered bullets separately, so we can use this in the future to show things like "is the current shell spent" for shotguns. No more unecessarily cycling shells because you're unsure the current one is fired or loaded!

If you're wondering, this is what it looks like for guns with significantly more ammo:

{{< imgw "/images/post/pr_20/item_status_big_guns" >}}

Yes I'm aware the realistic bullet shapes don't actually match the shape in the interface. Spriting is hard. But hey if you'd like that, we'll be happy to have your contributions!

Ideally, most items in the game that aren't as simple as a crowbar would have this kind of status tooltip. They're relatively simple to add and make the UI just that tid bit better.

### Cooldown status

Similar to the above, you can now see the cooldown on melee weapons (and the bike horn)!

<video src="/video/20_01_21-item-cooldown.mp4" autoplay muted loop playsinline></video>

## Player preferences, slots, jobs (contributed by DamianX & ZelteHonor)

{{< imgw "/images/post/pr_20/character_setup" >}}

*UI under construction, bear with us.*

DamianX has been hard at work implementing player preferences. Most of this work is now done! Not all appearance options are available yet but the most important ones like hair are available.

Jobs were implemented by ZelteHonor and have been integrated as well.

{{< imgw "/images/post/pr_20/jobs" >}}

*UI under construction, bear with us.*

We got the standard high/medium/low/never priority system you're probably familiar with. For the time being we cut out many jobs like Detective, Atmospheric Technician, etc... that won't get much content in the foreseeable future. It allows us to focus on less things so that we can maybe have a real round going sooner. Obviously we do intend to bring all these jobs back when we've got more content.

For the technical details, preferences are currently stored in SQLite via Entity Framework. Adding new preferences should be fairly trivial even if you don't know anything about SQL. We do intend to make the public server eventually use something like PostgreSQL instead, but SQLite is more than good enough for now.

## New launcher

{{< imgw "/images/post/pr_20/launcher" >}}

We finally have a launcher that isn't a poorly hacked together pile of duct tape. It's got a server list, account management, and so on.

The new launcher is written in Avalonia, so it should be decently performant and not make your GPU run while minimized (like the old one). All in all I'm quite pleased with Avalonia for cross platform GUI now that I've used it some more.

## Icon & logo switch

I really wanted to get rid of the old logo. I mean this one:

{{< imgw "/images/post/pr_20/old_logo" >}}

There were a few problems with it:

* Basically impossible to actually recognize when it's at a small size like 32x32 like in your browser's tab bar. Too much small text for a small window icon and such.
* The image was drawn by somebody at the amazing size of *drumroll please* 135x135. This makes it completely impossible to sanely upscale/downscale to common sizes like 128x, 256x, etc as commonly used in desktop environments. We would've had to re-draw it in vectors anyways.
* I just didn't like it. ¯\\\_(ツ)\_/¯

There was, of course, another logo we were using in a few places. Which you might've seen if you launched the game before:

{{< imgw "/images/old_logo" >}}

This logo was based on the logo used by the original SS13 remake ([spacestation13.com](https://spacestation13.com)) and "duct taped up" by Silver. I really did love this one because it looked both hilarious and unironically good. It still had the issue of "only had it in an akwardly sized PNG form" though and that tape wouldn't vectorise well.

Took a bit of work but I modified the original's vector art to change the 13 into a 14:

![](/images/new_logo.svg)

I also made a more "flat" form of the logo that is laid out slightly more horizontally, as to not waste too much vertical space in the launcher and website. You've already seen it twice because it's in the above launcher screenshot and at the top of this page now, but oh well:

![](/images/newer.svg)

There was still one issue remaining though, **what do we do with the icon**? With this I mean the small icon you have as window icon and in your task bar and such.

So initially I tried to use the same circle-based icon as present in the original remake's vector files, which looked like this:

![](/images/post/pr_20/icon_bad.svg)

Honestly though, nobody was really warm on it but I also could't think of a better alternative.

Luckily, **unusualcrow** came up with the current icon, and it looks great:

![](/images/icon.png)

This is the icon we will be using from now on for stuff like window icons, the websites favicon (in your tab bar) and so on.

## Outlines change color when in range

This is a pretty minor change. You can now see based on the outline whether you're in interaction range!

<video src="/video/20_01_11-interaction-range-outline.mp4" autoplay muted loop playsinline></video>

Because SS14 is no longer tile based, it may not always be perfectly clear whether you can pick something up at a certain range. This should help solve any doubts you have.

## More sprite importing (Contributed by metalgearsloth)

{{< imgw "/images/post/pr_20/gloves_shoes" >}}

Just like last time, more sprites have been imported from Eris and such.

Still just a fraction of them in that screenshot. The spawn panel no longer hangs when opening though!

## Hunger & Thirst (Contributed by metalgearsloth)

{{< imgw "/images/post/pr_20/food" >}}

Don't starve!

## Basic cargo system (Contributed by ShadowCommander)

{{< imgw "/images/post/pr_20/cargo" >}}

We didn't actually map a cargo shuttle yet, so the things you order just appear on top of the computer right now. Oh well.

## Windows!

{{< imgw "/images/post/pr_20/windows" >}}

These beautiful window sprites are one of the best things about Eris' perspective wall sprites, in my opinion. I'm glad to have them correctly rendered now.

## To autoplay video or not to autoplay video.

I'm exprimenting with having some of the videos in the progress report autoplay (obviously muted). The problem is that this causes quite a disparity with videos that *do* have audio. Especially ones where the primary thing being shown isn't audio but having audio is still quite nice while watching them.

For now, I decided to autoplay videos without audio. If audio is relevant in the clip I'll make it possible to unmute and note it. Videos that are all about audio will keep not being autoplay (of course).

**Let me know** if you have any serious opinions here / think this is confusing.

## Planning for a Steam release

We're looking at signing up for Steam and getting the game on there. Steam provides many advantages for both us (developers) and you (players):

* **Convenience.** No need to register a separate account, install is trivial, everything's in your Steam library.
* **Automatic updates of the launcher.** Changing the launcher is inevitable and annoying. We do have a method for telling the current launcher "you are outdated, refuse to work" but you still have to manually download a new one. Setting up automatic updating mechanisms on all platforms is an annoying pain so if we don't have to do it that'd be great.
* **Using Steam's CDN** for distribution (of the launcher). Means faster installation for you and us not having to pay for bandwidth.
* Bypassing "security" features like code signing on platforms like Windows and macOS. As mentioned in the last progress report, Apple is dead set on making it impossible for us to distribute sanely-runnable binaries without paying them. On Windows this isn't as bad but there's still potential pain points. Steam solves this because games are trusted. No need to have admin privileges to install the game (as soon as Steam is installed).
* Ensuring consistent runtime environments. You might've seen the "requires VC++ 2015 Redist" line under the Windows download. Steam would allow us to get rid of things like that. Way less hassle for us to guarantee it works for you.

This does require a bit of effort and organization:

* $100 fee for Steam Direct. Not the biggest deal in the world, I was planning to just foot the bill from my pocket. Otherwise there are no direct monetary costs.
* Figuring out legal information like who "owns" the Steamworks account, and also tax information and such. I was planning on just registering myself as the owner but there is also the option of doing an LLC which might be best for various reasons. I haven't quite decided yet so this is the big blocker.
* Need to actually make a Steam page that looks decent.

I do hope we can at least get initial Steamworks registration done by the time the next progress report is out, however. (After you "onboard" with Steamworks it still takes a month or so to actually get a functional store page open, oh well, can't blame em.)

**Edit:** I do want to point out that **you will always be able to run the game *without* Steam.** Obviously it'll be more convenient for most people to use Steam, but if you don't want to use it you won't have to.

## The technical details

### The move to .NET Core

[As described in Progress Report #18](/post/19_08_24_progress-report-18/#net-core-support), we wanted to move to .NET Core. This provides better performance, more consistant tooling, and newer language/runtime features. Good stuff.

This move is now completed. The game no longer runs on legacy Framework, it's Core all the way. We're already taking advantage of some of the new features for both performance and convenience.

The launcher ships a complete .NET Core 3 Runtime now, on all platforms. This does make it a bit large, but oh well. This means Linux/macOS players no longer need to install Mono to get the game to run, Windows players should see no change.

This also meant windowing is now handled by GLFW (compared to the old OpenTK 3 implementation). This should allow us to do some things like FINALLY re-implement OS mouse cursors and such.

It also means we can use C# 8 now which is already proving to be quite nice (god bless default interface methods).

### Make sprite animations direction-independent

The custom sprite format we use (it's just a bunch of PNGs + a JSON file) allows for different amounts of animation frames for each direction. This is in contrary to BYOND where an icon state has to have a single amount of animations. This is of course convenient for spriters. Not so much for coders.

We already had a constraint that the total length of the animation has to be equal across all directions. This is to solve the problem of "what do you do with an in-progress animation when you turn an entity". Honestly none of the solutions are as pretty as "add another constraint".

There was still the problem that actually *playing* animations on an entity required knowing that entity's orientation **relative to the camera**. Playing back animations requires a bit of state, namely frame index + animation time, so if this data is direction specific... we won't be able to show an entity at different orientiations on the same frame.

This caused bug [c#474, Bullet casings rotate in your hand with your player rotation](https://github.com/space-wizards/space-station-14/issues/474), and furthermore would make it impossible to have things like showing views of the game (from say cameras) shown.

The way I solved it was to ["fold" the animation delays across all directions into a single set of animation delays](https://github.com/space-wizards/RobustToolbox/blob/7a77fa59e2fea69e0d4ff8a8682c004a322dbeb5/Robust.Client/ResourceManagement/ResourceTypes/RSIResource.cs#L178). If the delays don't match between direction you can duplicate states and calculate the delays correctly so the visual end result is the same.

Because this makes animations independent of the actual direction being faced, we can now show entities at different orientations! It should now be totally possible to do something like show the view camera inside a UI window without glitches.

### Grid entities (Contributed by Acruid)

Grids are things like the station, the shuttle, etc... If it's made out of tiles and people can stand on it it's a grid.

These were always "separate" things in the engine from all other entities. This resulted in quite a bit of snowflaky code and inflexibility all over the place.

This is now gone and they're full blown entities. This allowed us to do stuff like this practically overnight:

<video src="/video/20_01_24-moving-shuttle.mp4" controls></video>

As you can clearly tell I did not put too much effort into recording this. But hey, this is the "thanks for getting this far" reward for people who read the entire progress report. So  thank you!
