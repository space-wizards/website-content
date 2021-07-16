+++
title = "Progress Report #11: UI & Animations"
author = "PJB3005"
date = 2019-03-17
categories = [
	"Progress Report"
]
reddit = "https://www.reddit.com/r/ss14/comments/b24x6i/progress_report_11_ui_animations/"
+++

The GUI system is much more complete now, so most interfaces work now.
I also decided to actually code something NEW instead of purely catching up to Godot.

<!--more-->

I originally planned to start doing more regular progress reports, but that kinda fell apart when a certain 0.17 of a certain game was released a few weeks ago. Oops. Still though 21 days is better than before.

So we have new stuff.

## GUI implementation.

I implemented a significant amount of GUI code. Most of the previous GUI code also worked without hassle. Just check the screenshot.

{{< imgw "/images/post/pr_11/screenshot" >}}

## Animations!

So just yesterday I decided to get rid of those ugly as hell doors on the map. Pulling in the airlock sprites from eris is pretty easy. Now what *wasn't* as easy was making the doors have open and close animations.

Really it was just a case of "there was no code for this, one day later there is". It was relatively easy to implement animations, and the animation system should be decently flexible.

{{< video-audio "/video/pr_11/door-animations" >}}

## Twitch Streams

I decided to start streaming SS14 development on Twitch, because why the hell not really.

You can find my Twitch channel right [here](https://www.twitch.tv/pjb3005). I have absolutely no schedule or anything and it basically comes down to me going "eh I'll be coding for the next few hours" and hitting start streaming on OBS, so I'm not gonna announce when I'm streaming on Discord or anything either.
