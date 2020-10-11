+++
title = "Progress Report #24: Atmos"
author = "SS14 Coders"
date = 2020-08-16
categories = [
    "Progress Report"
]
reddit = "PLACEHOLDER for Reddit post."
+++

Sadly atmos is not done yet. A lot of other stuff is though!

<!--more-->

## Barebones rounds!
The majority of SS14’s development time has been spent on creating the engine and the framework necessary for future content. Development of player-facing features and gameplay only began in earnest in the last year, but we’ve made substantial progress in that short timespan!

Playable (albeit barebones) rounds are now feasible. We’re officially entering the regular testing phase. Join our [Discord](https://discord.gg/MwDDf6t) and ask a Badmin for the Tester role and be notified whenever we get a bunch of people together for playtesting!

## Clarification about the Steam release
Everyone is excited for SS14's [upcoming Steam release](https://store.steampowered.com/app/1255460/Space_Station_14/), but we wanted to make a few things clear. SS14 is *not* finished, nor will it be finished any time soon. This has never been our goal for the Steam release; **the purpose of the Steam release is to make SS14 more accessible to players.** We are, after all, releasing the game into **Early Access**.

Much like SS13, SS14 is continually evolving and improving, and is in fact [already "playable"](https://spacestation14.io/about/nightlies/). So even though a basic gameplay loop is already in, please keep in mind that we're not at the point where we expect players to make the jump from SS13 to SS14, nor do we expect the servers to remain populated outside of playtesting events (for which we recommend you hang around on our Discord and request the Tester role).

## New content!

### Atmospherics
*Contributed by Zumorica*

<video src="/video/pr_24/fire.mp4" autoplay muted loop playsinline></video>
<video src="/video/pr_24/gasmixing.mp4" autoplay muted loop playsinline></video>
<video src="/video/pr_24/depressurization.mp4" autoplay muted loop playsinline></video>

The remake of the atmospherics simulator finally has atmospherics! It is inspired by [monstermos](https://github.com/yogstation13/extools/tree/master/byond-extools/src/monstermos) and we called it *zumos* after the dev who contributed it. It is significantly more performant than SS13's LINDA or ZAS atmospherics; you can burn down the entire station without any lag.

Here's a **non-exhaustive** highlight reel of what SS14's atmos currently entails (contributed by Zumorica unless otherwise noted):

- Explosive decompression, gas spreading/mixing, and space wind.
- Pressure damage and spacesuits.
- A variety of gasses with different effects and reactions (tritium fires, anyone?).
- Fire, fire damage, and heat conduction through walls.
- Firelocks. They also prevent decompression.
- Gas analyzer. *Contributed by exp111*
- Pipenet, pipes, and pumps. *Contributed by collinlunn*
- Breathing, oxygen tank, and mask. *Contributed by Credath*

### Antimatter engine
*Contributed by ancientpower*

<video src="/video/pr_24/ame.mp4" autoplay muted loop playsinline></video>

While it still needs some polish, the classic building block engine is now in the game as the second power source (after solars). Just like in SS13 it can be expanded indefinitely to produce more power. It even comes with fancy lighting effects!

### Pulling
*Contributed by InquisitivePenguin and DrSmugleaf*

REFUSE TO MAKE VIDS FOR THIS UNTIL SOMEONE MERGES PULLING PRED

Objects and other players can now be pulled, just like in SS13.

### Pointing
*Contributed by DrSmugleaf*

You can now direct other players' attention by pointing at things.

<video src="/video/pr_24/pointing.mp4" autoplay muted loop playsinline></video>

### Mob improvements
*Contributed by DrSmugleaf and GlassEclipse*

The groundwork has been laid for a comprehensive medical system, with mob code receiving an extensive variety of improvements. Mob presets are in, paving the way for nonhuman species. Bodyparts are now their own entities and players can perform basic surgery on them.

### More hands
*Contributed by DrStupidIdiotLeaf*

Mobs can have more than two hands.

### More construction improvements
*Contributed by Zumorica*

Construction's backend has been completely reworked. It's [much easier](https://hackmd.io/@ss14/docs/%2FGP3vTF_QSp-oLOJuhobsPg) for contributors to add construction steps to things, construction steps can be much more versatile, and they can easily provide more detailed feedback to players.

### Climbing
*Contributed by nüke*

You can now click and drag yourself (or others) onto a table or other climbable object. Tables will never be the same.

<video src="/video/pr_24/tableclimbing.mp4" autoplay muted loop playsinline></video>

### Stripping menu
*Contributed by Zumorica*

You can now strip items from other players. The current UI is a placeholder, but a new inventory-like UI is currently a work-in-progress. Combined with the newly added handcuffs, Security can now keep the greytide in check!

<video src="/video/pr_24/routing.mp4" autoplay muted loop playsinline></video>

### Handcuffs
*Contributed by nüke*

Handcuffs and makeshift cablecuffs are now in the game. Handcuffing someone requires that both parties stand still with no interruptions for a short duration. If you stun someone, the time to handcuff them is shortened. People with more than 2 arms are also taken into consideration, so if you want to stop people with 4 arms from picking stuff up you will need 2 sets of cuffs.

<video src="/video/pr_24/handcuffing.mp4" autoplay muted loop playsinline></video>

### Station Events
*Contributed by metalgearsloth*

Random events can now occur on the station, or be triggered by admins directly. At the moment only a powergrid failure, bolts-down event, and radiation storm have been implemented though the system is in place to easily add more.

### Disposals
*Contributed by juliangiebel*

{{< imgw "/images/post/pr_24/disposalgui" >}}

### Conveyors
*Contributed by juliangiebel*

<video src="/video/pr_24/mailing.mp4" autoplay muted loop playsinline></video>
<video src="/video/pr_24/routing.mp4" autoplay muted loop playsinline></video>

### Admin menu
*Contributed by exp111*

{{< imgw "/images/post/pr_24/disposalgui" >}}

Admins now have a menu with a variety of buttons for ~~admin abuse~~ moderating the game. Like most of SS14's UIs, the visuals are non-final.

### do_after
*Contributed by metalgearsloth*

This was a blocker preventing many systems from being fully implemented, but it is now finally in. This is the progress bar that appears above your character for interruptable timed actions such as: stripping characters, handcuffing, vaulting tables, etc.

### Machine linking
*Contributed by ShadowCommander*

Machines can now be easily linked together. A practical example of this would be linking conveyors to a conveyor switch.

### Click attacks
*Contributed by Zumorica*

You can now attack things by clicking them while in combat mode. You can still perform wide attacks using spacebar, though.

### Cloning
*Contributed by SoulSloth*

We have transcended death, medbay can now clone corpses.

### Handheld radio and headsets
*Contributed by Bright0*

A basic (and non-final) implementation of telecomms has been added, with both handheld radios and headsets. Currently, Common is the only channel.

### Accent system
*Contributed by exp111*

{{< imgw "/images/post/pr_24/accent" >}}

Speech can now be automatically modified for things like slurred speech while drunk, lizardpeople hissing, etc.

### Spray bottles
*Contributed by exp111 and Zumorica*

The ~~Clown~~ Janitor now has another tool in their arsenal, and can now spray things with chemicals.

### Fire extinguisher
*Contributed by SoulSloth and Zumorica*

We didn't start the fire. Fire extinguishers have been added, and should be pretty self-explanatory.

### Lantern, flashlight improvement, emergency lights
*Contributed by SoulSloth and juliangiebel*

The lantern has been added, featuring a soft yellow glow. Flashlights will now flicker when their battery is going out. Emergency lights will now be activated when the station loses power.

<video src="/video/pr_24/elights.mp4" autoplay muted loop playsinline></video>

### Glowsticks and flares
*Contributed by nüke*

Glowsticks and flares have been added. Glowsticks last a long time with a weaker glow, while flares last a shorter duration but are much brighter. As a bonus, it's now easier for contributors to define lighting effects for items.

<video src="/video/pr_24/elights.mp4" autoplay muted loop playsinline></video>
<video src="/video/pr_24/flares.mp4" autoplay muted loop playsinline></video>

### Signs and plaques
*Contributed by Swept*

Signs have been added to the Saltern directing you to the various departments.

{{< imgw "/images/post/pr_24/signs" >}}

### RCD improvements
*Contributed by ike709*

The RCD now has feature parity with SS13, minus the radial menu. Walls, floors, and airlocks can now all be created or destroyed by the RCD. Try not to immediately vent the station.

### Cream pies
*Contributed by Zumorica*

The Clown can now ~~assault~~ entertain crewmembers by throwing pies at them.

### LORD SINGULOTH
*Contributed by unusualcrow and PaulRitter*

The singularity engine has found its way into SS14: Emitters, containment field generators, and a fully constructable particle accelerator. And yes, it can eat a hole through the station. All hail Lord Singuloth!

{{< imgw "/images/post/pr_24/singulo" >}}
{{< imgw "/images/post/pr_24/particle" >}}

### Crayons
*Contributed by exp111*

Bringing the classic acts of vandalism (and sometimes even art) to SS14! Now with a proper UI and pixel-based placement.

{{< imgw "/images/post/pr_24/yiffinhell" >}}

### Arcade Machines
*Contributed by PaulRitter*

Added some arcade games:

#### Space-Villain-Game
A simple game to kill time in the bar.


#### Nanotrasen Block Game™

{{< imgw "/images/post/pr_24/nbg" >}}

Nanotrasen Block Game™ is a wacky new game for employees to play during their break. There are separate leaderboards for the current round and all-time\*. Challenge your compatriots and become the best NBG player in the star system.

\*Persistent highscores are not currently guaranteed to persist due to potential database changes.

## Tiny things

- Closed soda cans spill if you throw them around too much. *Contributed by DrSmugleaf*
- Cursed lockers that teleport you to other lockers on the station. *Contributed by Zumorica*
- Examine window feedback for a construction's next step and for when things are powered. *Contributed by Kmc2000 and exp111*
- Slipping moves you forward some tiles now. *Contributed by DrSmugleaf*
- AI mobs now have simple visual health states like critical and dead. *Contributed by metalgearsloth*
- Item status for all weapons. *Contributed by exp111*
- SSS gamemode improvements, like a HUD button that displays your role and allies, all airlock access... *Contributed by DrSmugleaf, Visne and more?*
- You can weld doors now. *Contributed by metalgearsloth*
- Memory leek. *Contributed by Swept*
- The lobby now shows which players are ready. *Contributed by exp111*
- Inventory slots show if current held item fits. *Contributed by StrawberryMoses*
- Ported additional Security outfits. *Contributed by StrawberryMoses*
- More simple mobs. Ian, space carp, etc. *Contributed by Swept*
- Added factions to AI mobs. *Contributed by metalgearsloth*
- Examining a container with reagent(s) in it will now have colored text that has a physical description of the substance. *Contributed by nüke*

## Technical details

### Authentication
*Contributed by PJB*

We now have a proper system for user accounts and authentication for those user accounts. Everything is basically working, *except* that we're still waiting on Silver to get back to us about noreply emails so that we can send out email confirmations to allow you to actually register accounts.

Because of this, no auth server is currently up and the official game servers are still on "auth-optional" mode for the time being.

Authentication also brought along various other improvements like proper bans (both IP range and user ID) and proper encrypted game server connections (when you're authenticated properly).

And no, we're not sending your password to the game servers like BYOND does.

<small><small>Nobody tell Mojang I ~~stole~~ was heavily inspired by the authentication sequence used by Minecraft.</small></small>

### OpenGL ES2 Support
*Contributed by 20kdc*

The game can now run targeting OpenGL ES2 as graphics API, optionally via ANGLE on Windows. This basically means that it'll run on literally any potato laptop made in the last decade and a half, probably.

## Credits

The contributors since the last progress report were: *20kdc, Acruid, AJCM-git, ALMv1, AlphaQwerty, ancientpower, Bright0, clement-or, collinlunn, creadth, DrSmugleaf, DTanxxx, exp111, FirinMaLazors, ike709, j-giebel, janekvap, juliangiebel, Kmc2000, lajolico, MemeProof, metalgearsloth, nuke-makes-games, Nukeuler123, PaulRitter, peptron1, PJB3005, Qustinnus, Rember, RomanNovo, sentient-ai, ShadowCommander, SoulSloth, StrawberryMoses, SweptWasTaken, TheCze, unusualcrow, Visne, Zumorica*.

Many thanks to everybody who contributed. We couldn’t do this without you!
