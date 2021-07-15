+++
title = "Progress Report #14: Content & More Server"
author = "PJB3005"
date = 2019-04-22
categories = [
	"Progress Report"
]
reddit = "https://www.reddit.com/r/ss14/comments/bfvml3/progress_report_14_content_more_server/"
+++

This time on SS14: neat features and neat server features.

<!--more-->

## Locker Stuff (contributed by PrPleGoo)

Pushing things in SS13 sucks. That's why we're making it better.

<video src="/video/pr_14/locker-push.webm" autoplay loop></video>

Also you can now go into lockers.

<video src="/video/pr_14/locker-enter.webm" autoplay loop></video>

We already did have lockers implemented, but they acted more like chests in other games like Minecraft than what you were used to in SS13. While the idea is neat, we did decide to go back to the old SS13 ways, since they're actually quite a neat bit of emergent behavior.

## Tooltip Examine

I might've already mentioned this before in these reports, but we want to remove the need for the chat window for most things. We do still want a chat log of course, but you shouldn't need to look at the chat for most things.

Examining things is annoying. You click on something and the result is halfway across your monitor. God forbid having fast moving chat. Another problem is that it's often poorly structured. So for a lot of things it's flavor text, for a bunch of others it's VERY useful information that's hard to dig up from the text dump.

We can smack two birds with one stone here. I'll just show you the screenshot:

{{< imgw "/images/post/pr_14/examine_tooltip" >}}

So first of all, examining is now done with a tooltip instead of dumping it into your chat log. This keeps the info right where your eyes already are. Second of all, information such as fuel is now sanely formatted so it's easy to tell at a glance. For reference, the examine message on TG is "It contains 50 units of fuel out of 50." I'd say our brief and colored "Fuel: 49​/50" is *much* better.

To address some concerns people might have:

* We probably will eventually make it semi-transparent, though that's surprisingly *involved* to implement correctly so I held off on that for now.
* Somebody also raised the concern about no longer having a log. We will probably still provide an examine log in some tab on the chat box later, but again, only as a *log*, not as the only way of examining things. That said, I personally feel that the idea of not having any sort of permanent log could be quite an interesting concept to explore, but perhaps it's too exotic for now.

## Footsteps

You can now hear the gentle sound of your fat feet on the floor.

<video src="/video/pr_14/footsteps.webm" controls loop></video>

They're definitely not very loud (not that they should be!) so you might have to turn your volume up a little to hear them.

## Discord-OOC Chat Relay

So I rewrote the chat system we use to be more flexible. At the moment there aren't a lot of visible changes, but it did make chat easier to expand on.

One nice advantage of not being handicapped to a language that can't even do HTTP sanely is that interacting with the server via other things like the Discord bot is *much* easier. Something I've always thought would be neat would be linking OOC to a Discord channel. After all, no real reason to separate the two, is there?

The `#server` channel on Discord is now connected to OOC on the public server!

{{< imgw "/images/post/pr_14/ooc_link" >}}

I also plan to get round status messages in here (like "the round has started") but we're not quite there yet.

## Light Tubes (Contributed by Zumorica)

You can now actually take lights from light tubes and put them back in. A little thing, but still neat.

## Discord Rich Presence Support (Contributed by occune)

We got Discord Rich presence now, so people can fancily see that you're playing SS14 now.

{{< imgw "/images/post/pr_14/rich_presence" >}}

Clearly part of our viral marketing strategy.

Also for those people worried about privacy or whatever: it is very easy to disable with a quick config file change. Most of us use Discord so I have no problem with adding support for it, but we do understand that people might want to turn it off for privacy concerns.
