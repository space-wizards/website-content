+++
title = "Progress Report #21: Colonial Marines, lighting, features"
author = "Many people on Discord"
date = 2020-02-24
categories = [
	"Progress Report"
]
reddit = "https://www.reddit.com/r/SS13/comments/f8x1kk/ss14_progress_report_21_colonial_marines_lighting/"
+++

We have big news for everyone who enjoys slaying meat sacks as a xenomorph, futilely hiding in a locker as a survivor, or being eaten alive as a marine...

<!--more-->

## Summary

[The Colonial Marines SS13 server](https://cm-ss13.com/forums/) dev team is planning on transitioning their codebase to the SS14 engine! They ran a stress-test on an SS14 server, and their results surpassed many expectations. They're planning another test very soon, and some of their devs are already up to speed and contributing to the project.
CM has the largest playerbase in SS13, with an average server population of 200 players. Their announcements have made our discord nearly double in size, and we're getting much more contributions as a result.

We've also had great progress in many fields like: Realistic shadows and FOV, chemical reactions, explosions shockwaves, jobs and more.

Finally, we've also been accepted by Steam (we'll still keep the game free and accessible outside of Steam) and now have [a new, publicly viewable wiki on HackMD](https://hackmd.io/@ss14/docs).

## Colonial Marines stress-test

{{< imgw "/images/post/pr_21/friendly_fire" >}}

On February 8th, Colonial Marines ran a stress test of the game with their community, with a mere 3 days warning. We knew it wasn't going to go great. Despite that, it still went way better than we expected (Not a single crash!)

As soon as we got the warning, we scrambled to quickly patch various areas of the game to avoid complete disaster. For example, it wasn't possible to disable placement until like 1 hour before the test, so someone could absolutely have spawned in 10k "#1 mug" items with the block placement tool and just hang the game.

**PJB's highlights of the CM Test** were the following:

* People coped with the lack of guns by running straight to engineering and throwing cable coils at each other. Throwing uses only one item in a stack, and throw force isn't based on the item itself yet, so people spammed throws with stacks of items as improvised machine guns.
* We had hilarious fun spawning in a few guns in a crowd of marines and watching them all gravitate to them at 10 fps like moths to lights.

The most heartening result of the test was CM running a poll on their Discord on how much to focus on developing [CM-SS14 (now open source)](https://gitlab.com/cmdevs/CM-SS14), and these were the results:

{{< imgw "/images/post/pr_21/cm_vote" >}}

I don't know if CM is intent on 100% following up on option 4, but either way we're honored to be chosen and look forward to working together. Regardless, we've definitely worked on optimizing the code to hopefully have the next stress test not run as poorly.

Read further for the "technical" end of the CM stress test.

## Shadows & FOV

{{< video-auto "/video/pr_21/fancy_lights.mp4" >}}

We have shadow casting and field of vision now! While I do think there is a lot that could be improved, like soft shadow edges, I'm still quite pleased with the results.

For the technical people in the crowd, I made a [writeup on how the lighting system works](https://hackmd.io/@ss14/lighting-fov).

## Explosions throw stuff (contributed by Injazz)

<video src="/video/pr_21/explosion_throw.mp4" autoplay muted loop controls playsinline></video>

## Jobs have been filled out (contributed by ike709)

{{< imgw "/images/post/pr_21/clown_is_dead" >}}

All the jobs have basic equipment defined now!

## TG ID cards (contributed by AJCM)

{{< imgw "/images/post/pr_21/ids" >}}

ID Cards from TG have been ported. Every job has its own ID card sprite now. Cool!

## Tutorial has a new coat of paint. (contributed by Moneyl)

{{< imgw "/images/post/pr_21/tutorial" >}}

The tutorial has been given a fresh coat of paint. All of the controls are now nicely formatted for easy reference.

I also followed up on this by properly fetching the keyboard names of things based on your keyboard layout: the controls now actually make sense if you're not on a US QWERTY keyboard, like DVORAK:

{{< imgw "/images/post/pr_21/dvorak" >}}

## Chemistry improvements (contributed by Moneyl)

<video src="/video/pr_21/chemistry_improvements.mp4" autoplay muted loop controls playsinline></video>

Moneyl has been continuing work on chemistry. You can now pour stuff between beakers, and syringes and the blood stream have been implemented. No metabolization reactions have been defined yet, though.

## The combat mode control issue has been solved

If you've read the previous progress reports you're probably familiar with combat mode. It's our replacement for intents and it's "in combat mode or not".

The problem we had is that many interactions are something you want to do both inside and outside combat mode. For example, picking up the gun the guy that was dropped by the guy you just disarmed.

We weren't quite sure how to handle these though. Since clicking in combat mode is "attack", what if you try to attack somebody who is standing on a pile of paper and you accidentally pick up the paper? It's not great and I figured we could do better.

The solution is as follows. Inside combat mode, you have to hold your mouse for a split second before you can do "full arc" attacks like we've shown off two progress reports ago. Otherwise, for single clicks, the behavior is more similar to SS13 (hit people, shoot people, but also pick stuff up/use tools where applicable).

At the moment this small period of left click is visualized by your cursor turning into a red toolbox. Yes that's the closest thing I could think of to symbolize true violence in SS13 short of drawing a proper crosshair or something.

I'm also pleased to say that internally the game still tracks separate keybinds for these actions. So if you're an advanced player with a 10 button mouse you could have one mouse button bound to "full swing attack" and the other to the more SS13-like behavior.

Just to be clear, this isn't some sort of "you have to charge up your attack" balancing thing like in other games. It's purely a way to solve the controls issue.


## Click to rotate (contributed by SpaceManiac)

{{< video-auto "/video/pr_21/click_rotate.mp4" >}}

A simple but nice feature of SS13, now back in SS14.

Bonus points: you can actually use this while holding guns. Just make sure you're not in combat mode!

## Pen & Paper (contributed by Zth--)

{{< video-auto "/video/pr_21/writing.mp4" >}}

It's basic, but it works. Rendering rich text is hard, ok?

## Introducing HackMD as a public dev wiki

You can now view the [Space Station 14 Dev Wiki](https://hackmd.io/@ss14/docs/)! You will find various bikeshedding gameplay discussions, technical design and documentation, contribution guides, incomplete/nonsense pages, and much more!

It's relieved a lot of our previous frustrations with documentation. We'd been using discord, google docs, and github issues to organize information, but there were too many disadvantages to doing so:

* Discord is great for brainstorming and live discussions between developers, but all of the content gets scattered across many messages, lost, or outright forgotten. A lot of time was wasted because of how hard it was to access the information buried in previous discussions.
* Google Docs had some promise, but you can't edit without a google account, leading to revealing your own name, and it really doesn't scale well as a "wiki".
* GitHub Issues and the GitHub Wiki also had similar flaws of not being live editable, cooperative, or easy to organize.

It's like Google Docs, but with Markdown, a navigation pane, easy history view and backups, access control, and much more. Basically, we can have multiple SS14 contributors collaboratively live-edit the same page of documentation at the same time, attach that new page to our "wiki", and download a backup of the entire wiki, with almost no inconvenience.

I'm actually writing this progress report on it right now! What's even more convenient is that both HackMD and the SS14 website use [Markdown](https://github.com/space-wizards/website-content/blob/master/content/post/20_01_24-progress-report-20.md), so I don't need to change any of the formatting to post this article. When I tried Google Docs to allow people to check my work, I had to manually re-apply all of the markup to post it, which was too much of a chore.

Using HackMD has been such a resounding success so far that we're even deprecating the GitHub Wikis in favor of it! It's just that much more convenient.

Also, we're not sponsored by HackMD or anything - they're some Chinese company that probably somehow manages to harvest your organs when you use them, but thankfully there are slightly less-featured open-source, self-hosted alternatives that we can use if anything goes wrong.

## Steam update

We've been accepted into Steam!

Now, before you panic, there are absolutely no plans to make the game Steam-exclusive. We will always support downloading and playing the game without a Steam account. The main reasons for us to get on Steam have been covered in [the previous progress report](https://spacestation14.io/post/20_01_24-progress-report-20/#planning-for-a-steam-release). TL;DR, it's more convenient for both us and you.

Anyway, we've just been accepted, so we don't *yet* have a public store page. We still have to get a bunch of art together, string together a description, get it all reviewed by Valve, etc... but you can expect an Early Access store page to be public soon, and being able to download the game via Steam in a few weeks after that.

## CM stress test: the technical problems

There were a lot of problems, of course. Apparently Lidgren, our networking layer, has its own maximum connection count variable set in `NetPeerConfiguration`. We didn't realize this, so there was an implicit 32 player cap. We had to recompile the server mid-test to patch it. Whoops.

Then, the server started slowing down to a crawl as more people came online. We quickly figured out the problem: a copy-paste mistake in `NetManager` that made it always reliably send very large game states, which flooded Lidgren's queue and slowed everything down. We didn't really notice this kinda bug in local testing because, well, magic perfect localhost connection. This one was pretty easy to track down when we got profiling info.

As we mentioned before, we asked CM to trace the game server while the test was going on, so that we'd know what to profile. Sadly, the profile CM gave us got corrupted, but we still managed to get good profiling info from our own public server, which had a decent player count of its own due to being easily visible in the launcher.

Launcher distribution was also a pain in the ass. We ship the .NET Core runtime that we use with the launcher, so that you don't have to install anything else. This requires us to have a dummy batch script, which launches the launcher, pointed at the correct `DOTNET_ROOT`. Simple enough, right?

Here's some of the issues we ran into with the launcher:
* The launcher doesn't work if extracted onto the Desktop, but works fine in other locations (???).
* The batch script sometimes just won't do anything. The fix is to run `bin/SS14.Launcher.exe` directly. Predictably, this fails unless you already have .NET core installed, but for some reason it magically makes the batch script work! (???)
* And, of course, the classic anti-virus overreaction: it hasn't seen your program before, so *obviously* it must be malware!

We did manage to smooth some of these issues out by replacing the batch script with a tiny `.exe`  to do the bootstrapping. Still, god damn is it a pain. Steam will hopefully solve all of this.

## Netcode optimizations

Until the CM stress test, we didn't do much optimizing of the netcode. It works fine over localhost, by virtue of localhost being a magic perfect connection.

Most of the network performance issues in the CM stress test were amplified by the poorly optimized bandwidth usage of the netcode.

[e#978](https://github.com/space-wizards/RobustToolbox/pull/978) by me reduced the amount of redundant data sent on initial entity creation significantly. This helps a lot with initial load times.

[e#983](https://github.com/space-wizards/RobustToolbox/pull/983) by Tyler-IN implements PVS, also known as bubbling. The idea is that we only send updates for entities close to your player, so that somebody moving around on the other end of the station doesn't cost additional network bandwidth. It's still a bit buggy but it's a very necessary optimization.

Tyler-IN was also working on a more efficient serializer than we're currently using, along with various other improvements like better string table handling. I also believe Acruid was experimenting with taking advantage of bit packing. Both changes will easily cut down bandwidth usage even more when they're done and well integrated.

Another big thing we should work on is making it possible for the game server to reasonably run at a lower framerate than the client via good interpolation and such. SS13 is not *that* latency prone compared to, say, CS:GO, so running the game at a framerate of like 20 ticks per second server side should be totally feasible, and significantly reduce server CPU load.

## Collision performance improvements (contributed by Tyler-IN).

[e#951](https://github.com/space-wizards/RobustToolbox/pull/951) and [e#955](https://github.com/space-wizards/RobustToolbox/pull/955) ported a proper broad-phase collision handler from Box2D. This is an amazing performance improvement over the old system (that was spending like 30% of client CPU time inside the "which entity is under mouse" code). I'm glad we managed to get this in just before the CM stress test because if not it'd have been an even worse disaster.

## Considering a "Robust Film Maker"

Making these skits and clips for the progress reports / Reddit is kind of annoying right now. I have to run multiple clients, keep one recording and do stuff with the other, hide the UI, etc...

The ["clown is dead"](https://www.youtube.com/watch?v=oiuyhxp4w9I) one above could be much better, by having it be an actual video. Juggling 6 clients to time the messages correctly is near impossible. I edited the code real quick to make speech bubbles last 2 minutes, so I could manually posses all of the humans and make them say something, which is why it's a static image and the continuity can be kinda hard to figure out.

Also, I had to manually respawn like 15 times and change the job in my character preferences to get all the jobs spawned in. Then the server crashed midway through, because it's the unstable debug build, and I had to do it all over *again*.

**Let me know if there is any interest in a "Robust Film Maker"** that can be used to make skits like these? It'd definitely be convenient for me writing the progress report but I can probably get by doing a bunch of hacky code scripting to make them if I feel like it. If other people are interested in this kinda stuff I could maybe try to spend a little bit more effort on it.

## Contributors this month

We've seen a lot of new contributors join the project since the last progress report and the CM stress test. We're absolutely grateful for the fresh help!

Because getting every minor bug fix and such into the progress report can be kinda hard, I just want to list off all the contributors we've had this month (GitHub usernames):

4dplanner, acvzy, Acruid, AJCM-git, DamianX, ike709, Injazz, Moneyl, PJB3005, ProfanedBane, py01, Quantomicus, Qustinnus, renodubois, ShadowCommander, SpaceManiac, Tyler-IN, Unusualcrow, Zth--, Zumorica

And of course special thanks to many of the people hanging out on Discord and GitHub providing feedback, bug reports and other things. Kinda hard to track though.
