+++
title = "Progress Report #6: Never say 'few'"
author = "PJB3005"
date = 2018-04-13
categories = [
	"Progress Report"
]
tags = [
	"Godot"
]
+++

The wait is over.

<!--more-->

## Godot's in

So yes, Godot is in. [I merged it 6 days ago](https://github.com/space-wizards/space-station-14/pull/545).

Woo!

You can try the new builds with Godot by downloading the latest nightlies. See [The this article for instructions](/about/nightlies/).

But what does this bring?

## The new stuff

First of all, Godot brougth all the changes mentioned in the previous progress report. [You can read about those here](/post/18_02_26_progress-report-5-waiting_for_godot/).

[Cluster has added weapons to the content repo.](https://github.com/space-wizards/space-station-14-content/pull/48) Right now the tools act like melee weapons, there's a projectile weapon and a laser weapon. It's basic stuff right now. Sadly, melee weapons don't have any visualization yet, but guns do:

<center><video src="/video/pr_6/godot-guns.webm" controls height=300></video></center>

(Yes we're aware the bullets aren't rotated)

Something else you might have heard is that we now have an [audio system!](https://github.com/space-wizards/space-station-14/pull/550). Before this PR there was literally 0 audio code in the game.

To render the laser beams, [Cluster coded an effects system to draw things without entity](https://github.com/space-wizards/space-station-14/pull/537). I had to re-do the rendering code thanks to Godot, but it was easy because Godot's canvas renderer is quite powerful. The laser beams are actually rendered without lighting applied, which is one of many effects we will make *much* use of later.
