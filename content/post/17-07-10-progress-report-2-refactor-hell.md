+++
title = "Progress report #2: Refactor Hell"
date = 2017-07-10
author = "PJB3005"
categories = [
	"Progress Report"
]
+++

The progress report took a bit to get here, because I uploaded #1 two days too late, and not a lot of substance for a report happened between then and when #2 should've happened. Not the case anymore though, got plenty to write about this time!

<!--more-->

Not all work on a project like SS14 is direct coding. Sure it's the most important, but we still have to organize the project, make contributions easy, write these reports and discuss how we're gonna discuss things lest we turn into BYOND.

## Organization

On the organizational side of things, I've organized the [Waffle board](https://waffle.io/space-wizards/space-station-14). I'll explain how it works and how we're using it:

The board is organized into a few columns. Each column can have issues on GitHub in it. That's the general gist of it. The system we're using is simple. We have 5 columns:

* Backlog: for new issues that cannot be worked on, yet.
* Design and Discussion: for things that we're discussing before going "this is ready to be implemented".
* Ready: issues that can be worked on, but nobody is yet. Generally if you're wondering "how can I help", you can pick an issue from this list and work on it. Be sure to tell us when you do so we can assign it as ...
* Work in Progress: All issues that somebody is working on are moved here.
* Done: things that are done. We keep this list around so we can review what was done since last progress report, and then flush it when the report is written.

Hopefully this'll make it more clear what we're working on, and if you ever need something to work on we have a "what can I work on" column right there. It also makes my job (or maybe somebody else's) with the progress reports much easier.

## Discussions

I'm not expecting most of you to watch GitHub closely, so I'm gonna make a summary of some important discussions that were had or are going on and *you* might want to chip into. Don't be shy! Constructive criticism's always welcome!

* [`#248`: Establishing a good API for content](https://github.com/space-wizards/space-station-14/issues/248). Being able to write content on at least a simple level is the big target for us to enter the "alpha" phase. We're working on establishing a good API for things, such as common functions and types that are needed to write game logic.
* [`#261`: Tooling scripting language & build dependency](https://github.com/space-wizards/space-station-14/issues/261). Being a complicated project makes it hard to just go "download project and hit compile". We need scripts and alike to automate some build tasks. We nominated Python 3 for this seeing it's cross platform and not exactly hard to install.
* [`#254`: Client / server replication](https://github.com/space-wizards/space-station-14/issues/254). BYOND's a thin client which is nice because being able to ignore netcode is nice. Problem is it's also impratical because then you get a poorly responsive game like SS13. We need a well designed way to interact with the network that's not too difficult or punishing.
* [`#256`: Our own DMI format](https://github.com/space-wizards/space-station-14/issues/256). BYOND's DMI format is surprisingly comfortable. It's also proprietary and designed by a monkey, so is our own take on the concept a good idea?

## The Alpha Target

The current target for alpha is as follows: **a decent base we can build content on, like interaction, combat and other such basic SS13 features**. We've set the end of July as the target for this. For this we've made a tracking milestone on GitHub [here](https://github.com/space-wizards/space-station-14/milestone/1). A short list of a few important things we need to do for this:

* [`#254`: Client / server replication](https://github.com/space-wizards/space-station-14/issues/254). See above.
* [`#251`: Replace SFML](https://github.com/space-wizards/space-station-14/issues/251). Replace SFML and replace it with a custom rendering library. I can't even start the client because it crashes by simply corrupting the process memory.
* [`#248`: Establishing a good API for content](https://github.com/space-wizards/space-station-14/issues/248). See above.
* [`#74`: Strip all traces of game content code from the engine](https://github.com/space-wizards/space-station-14/issues/74). It's just a maintenance hell and it'll be moved into the content repo.
* [`#90`: Contribution guide](https://github.com/space-wizards/space-station-14/issues/90). We want it to be easy to write content for new people, because the content isn't writing itself.
* [`#194`: Map format](https://github.com/space-wizards/space-station-14/issues/194). Having an actually nice station to shoot eachother in is a must.
* [`#150`: A decentralized grid system](https://github.com/space-wizards/space-station-14/issues/150). Basically 2D space engineers, have every station and ship be an independent, free floating grid (that can totally be rammed into eachother. Now that's one way to steal the disk.)

## Code Progress

And finally we get to the most important bit of the report, what we *actually* did. I can bore you enough with what we *want* to do, but dreams aren't exactly useful if we can't put the work in. But we're trying to prove we can. Nothing exciting yet though, just *refactor hell*.

* [`#204`: Lidgren update, IPv6](https://github.com/space-wizards/space-station-14/pull/204). The age old version of the networking library we were using has been updated and we now have IPv6 support!
* We've refactored IoC another couple times, in steps. We're at the point where I feel it's pretty good for keeping the place organized. IoC is the very core of our project and it's allowing us to organize everything.
* [`#253`: Unified config](https://github.com/space-wizards/space-station-14/pull/253). The config system has been reworked entirely and changed to use TOML, a config file format that can be described as "a better INI".
* [`#269`: Network System](https://github.com/space-wizards/space-station-14/pull/269). Acruid's been reworking the networking system, abstracting the network messages to make it so that the parsing and reading of network packets is in one place. This makes things much less error prone and easier to work with.
* Silver has been continuing work on RobustEngine. He gave himself a target for the end of the month for when we should be able to integrate it, which is nice.
* ~~[`#271`: Fixes the license](https://github.com/space-wizards/space-station-14/pull/271). Not sure whether we should be proud or not of the infamous goofball trying to shitpost on our repo already.~~

That's all for this week. Stay tuned for next week at which point we'll probably have the content repo at least semi functional.
