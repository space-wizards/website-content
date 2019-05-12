+++
title = "Progress Report #15: Bye Godot"
author = "PJB3005"
date = 2019-05-12
categories = [
	"Progress Report"
]
+++

Godot is finally dead, but it will always be there in our hearts.

<!--more-->

## Godot Is Dead

I have bitten the bullet and officially killed off support for launching the game via Godot.
"Supporting" Godot was getting more and more painful by the day, because the further I got to making changes to things such as the UI system, the more Godot got in the *way*.

I would basically have had to completely throw out a lot of current Godot code and switch to implementing a flexible renderer on top of Godot's inflexible one to keep supporting it. This was not happening. It's the same reason I wrote Clyde in the first place: Godot didn't provide what we need and we'd basically be implementing our own renderer, on top of a worse one.

Anyways, this brings some quite nice improvements, and makes future changes much easier.

## Lathes (Contributed by Zumorica)

![](/images/post/pr_15/lathe.png)

We have an autolathe now, it can build stuff. Quite simple really. While the UI could use some improvement, it's definitely a start.

## UI Scaling

As you may or may not know, nowadays people have these fancy 4K screens, which have quite a lot of pixels. The result is that you can't just simply go and say "this margin should be 4 pixels wide". Sure that might be fine on a 1080p screen, but try that on a 4k screen and the size is way off.

This is of course why UI systems should support correct scaling. Just display all the UI 2x or more as large on a 4K display.

As you may or may not have been able to guess.. Godot doesn't do a good job of this. The UI system doesn't provide an obvious way to do this. While the editor does support fractional scaling, it's implemented as a quite bad hack and has some annoying layout inconsistencies. So not being tied to Godot means we can implement this *properly!*.

The system works quite well now. We could still use some higher resolution UI textures, but that's another problem.

A problem I *didn't* tackle yet is scaling of the game itself. This is annoying because fractional scaling looks *really bad*. That said, I actually found that BYOND of all things (!) has a really nice upscaling algorithm for this. Sure having integer nearest-neighbor is always better than fractional, but BYOND's upscaling algorithm looks *really* good either way, so it's not all bad.

## Localization

BYOND's support for other anything except ASCII is basically nonexistant. Which is fine if you speak English, but I'm sure the Russian community hates it with a passion. Did you know that BYOND reserves 0xFF for control codes? Yeah, with Windows-1251 (the encoding Russians have to use with BYOND) this is the я, now I don't know how to speak Russian but I'm pretty sure they need that letter.

Even if that were fixed, it's still extremely painful to actually *translate* the game. There is no way to actually translate it sanely.

So as you can guess, we're putting effort into making sure the game can be localized with relative ease. The first of this is already in.

![](/images/post/pr_15/lasser.png)

(I'm using Dutch because I know Dutch and needed something to test the code, I'm not gonna develop Ruimte Station 14)

A couple notes about this though. We do not intend for it to be possible to connect to an English server with your client set to Russian, and then be able to see everything except like chat in Russian. It would be too much effort to implement, and since SS13 is already a VERY text heavy game with chat, so I don't think it's a big loss.

For this reason we're not actively gonna look for ways to get translations contributed yet. There actually have to be other servers to use these translations, so their communities can work on the translations. Of course that doesn't mean I'm against upstreaming them, but still.

This is the part of our EEE plan to get the entire Russian community to join us.

## Launcher Supports macOS!

I got the launcher to work on macOS, so all the people using it should have a painless experience launching the latest client now. Check the [downloads](/about/nightlies) page for more info
