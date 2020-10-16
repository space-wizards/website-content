+++
title = "Progress Report #24: Atmos Sim Remake Now Simulates Atmos"
author = "Many people on Discord"
date = 2020-10-16
categories = [
    "Progress Report"
]
reddit = "PLACEHOLDER for Reddit post."
+++

<!--more-->

## Barebones rounds!
Throughout the years, we've put a lot of work into developing the engine and framework necessary for Space Station 14 to have playable content. Last year, we transitioned to developing player-facing features and gameplay in earnest, and we've made a lot of progress in that short timespan!

SS14 now has playable, albeit **barebones**, rounds. As we add more features the number of complex interactions grows, and so does the need for testing the game with real players. Help us by joining our [Discord](https://discord.gg/nGMK9jX) to get the Tester role, and we'll notify you whenever we put a bunch of people together for a playtest!

## Clarification about the Steam release
We're all excited for SS14's [upcoming Steam release](https://store.steampowered.com/app/1255460/Space_Station_14/), and we're grateful for the community's enthusiasm, but we also want to temper some unrealistic expectations. SS14 isn't finished, and won't be any time soon. **We're launching on Steam mainly as a way to make it easier to discover, download, and play the game.** The Steam release doesn't mean the game's done, or that it has most of the features you'd expect in a remake. Don't forget that we're only releasing into **Early Access**.

So while SS14 is [already "playable"](https://spacestation14.io/about/nightlies/), **we don't expect or encourage players to jump from SS13 to SS14 yet**, nor do we expect our servers to be populated outside of playtesting events. And if you'd like to help playtest, ask for the Tester role over on our discord.

Anyway, let's see the new features we've added!

## New content!

### Atmospherics
*Contributed by Zumorica*

<video src="/video/pr_24/fire.mp4" autoplay muted loop playsinline></video>
<video src="/video/pr_24/gasmixing.mp4" autoplay muted loop playsinline></video>
<video src="/video/pr_24/depressurization.mp4" autoplay muted loop playsinline></video>

The atmospherics simulator remake finally has atmospherics! It's inspired by [monstermos](https://github.com/yogstation13/extools/tree/master/byond-extools/src/monstermos), and we're calling it *zumos*, in honor of its developer, Zumorica. It performs much better than SS13's LINDA and ZAS atmospherics systems - you can burn down the entire station without grinding gameplay to a halt.

Here's a **non-exhaustive** highlight reel of what SS14's atmos currently entails (contributed by Zumorica unless otherwise noted):

- Explosive decompression, gas spreading/mixing, and space wind.
- Pressure damage and spacesuits.
- A variety of gasses with different effects and reactions (tritium fires, anyone?).
- Fire, fire damage, and heat conduction through walls.
- Firelocks. They also prevent decompression.
- Gas analyzer. *exp111*
- Pipenet, pipes, and pumps. *collinlunn*
- Breathing, oxygen tank, and mask. *Credath*
- Fire extinguishers and cabinets. *SoulSloth and Zumorica*

### Antimatter engine
*Contributed by ancientpower*

<video src="/video/pr_24/ame.mp4" autoplay muted loop playsinline></video>

While it still needs some polish, the classic building block engine is now in the game as the second power source (after solars). Just like in SS13 it can be expanded indefinitely to produce more power. It even comes with fancy lighting effects!

### Pulling
*Contributed by InquisitivePenguin and DrSmugleaf*

You can now pull objects and players, just like in SS13.

<video src="/video/pr_24/pulling.mp4" autoplay muted loop playsinline></video>

### Pointing
*Contributed by DrSmugleaf*

You can now direct other players' attention by pointing at things.

<video src="/video/pr_24/pointing.mp4" autoplay muted loop playsinline></video>

### Mob improvements
*Contributed by DrSmugleaf and GlassEclipse*

We laid the groundwork for a more comprehensive medical system, with mob code receiving an extensive variety of improvements. Three of the biggest changes are mob presets, body parts, and mechanisms: mob presets make it easy to add nonhuman species, body parts are their own entities that players can perform surgery on, and mechanisms represent organs or other devices within the body, each of which has its own custom behaviour.

### More hands
*Contributed by DrStupidIdiotLeaf*

Mobs can have more than two hands.

{{< imgw "/images/post/pr_24/hands" >}}

### More construction improvements
*Contributed by Zumorica*

We completely reworked the backend system for construction. This makes it [much easier](https://hackmd.io/@ss14/docs/%2FGP3vTF_QSp-oLOJuhobsPg) for contributors to add construction steps to things, as well as making construction steps more versatile and providing more detailed feedback to players.

{{< imgw "/images/post/pr_24/construction" >}}
<video src="/video/pr_24/construction.mp4" autoplay muted loop playsinline></video>

### Climbing
*Contributed by nüke*

You can now click and drag yourself (or others) onto a table or other climbable object. Tables will never be the same.

<video src="/video/pr_24/tableclimbing.mp4" autoplay muted loop playsinline></video>

### Stripping menu
*Contributed by Zumorica*

You can now strip items from other players. The current UI is a placeholder, but a new inventory-like UI is currently a work-in-progress. Combined with the newly added handcuffs, Security can now keep the greytide in check!

<video src="/video/pr_24/stripmeup.mp4" autoplay muted loop playsinline></video>

### Handcuffs
*Contributed by nüke*

We added handcuffs and makeshift cable cuffs to the game. To handcuff someone, you and the target both need to stand still with no interruptions for a short while. It takes less time to cuff stunned players, and you're gonna need extra cuffs for people with more than two arms.

<video src="/video/pr_24/handcuffing.mp4" autoplay muted loop playsinline></video>

### Station events
*Contributed by metalgearsloth*

Random events can now occur on the station, or be triggered by admins directly. At the moment only a powergrid failure, bolts-down event, and radiation storm have been implemented though the system is in place to easily add more.

### Disposals
*Contributed by DrSmugleaf and juliangiebel*

You can now dump trash as a janitor, mail parcels as cargo, or provide the clown with expedient transit out of the captain's office using the disposals system. We also have conveyor belts!

{{< imgw "/images/post/pr_24/disposalgui" >}}
<video src="/video/pr_24/mailing.mp4" autoplay muted loop playsinline></video>
<video src="/video/pr_24/routing.mp4" autoplay muted loop playsinline></video>

### Admin menu
*Contributed by exp111*

{{< imgw "/images/post/pr_24/admin" >}}

Our admins have been itching to inflict abuse on innocent players, and we're fulfilling their darkest wishes with this button pressing UI. The visuals aren't final, but we can't say the same about the tyrannical bans that the admins will inflict.

### do_after
*Contributed by metalgearsloth*

You know the task bar from SS13 that appears when you're cuffing someone, or vaulting a table, or welding a door shut? Known as "do_after" from SS13 code, it's an important part of many upcoming features involving interruptable tasks, and we finally got around to implementing it in SS14.

### Machine linking
*Contributed by ShadowCommander*

Machines can now be easily linked together. A practical example of this would be linking conveyors to a conveyor switch.

### Cloning
*Contributed by SoulSloth*

If you thought death was going to let you escape a round of SS14, you'll have to try harder, as our new cloning machines will drag you back to life against your wishes.

<video src="/video/pr_24/cloning.mp4" autoplay muted loop playsinline></video>

### Handheld radio and headsets
*Contributed by Bright0*

A basic (and non-final) implementation of telecomms has been added, with both handheld radios and headsets. Currently, Common is the only channel.

<video src="/video/pr_24/radios.mp4" autoplay muted loop playsinline></video>

### Accent system
*Contributed by exp111*

Speech can now be automatically modified for things like slurred speech while drunk, lizardpeople hissing, etc.

{{< imgw "/images/post/pr_24/accent" >}}
{{< imgw "/images/post/pr_24/cursedaccent" >}}

### Spray bottles
*Contributed by exp111 and Zumorica*

The ~~Clown~~ Janitor now has another tool in their arsenal, and can now spray things with chemicals.

<video src="/video/pr_24/cloning.mp4" autoplay muted loop playsinline></video>

### Lantern, flashlight improvement, emergency lights
*Contributed by SoulSloth and juliangiebel*

The lantern has been added, featuring a soft yellow glow. Flashlights will now flicker when their battery is going out. Emergency lights will now be activated when the station loses power.

<video src="/video/pr_24/elights.mp4" autoplay muted loop playsinline></video>
<video src="/video/pr_24/flashlights.mp4" autoplay muted loop playsinline></video>

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

<video src="/video/pr_24/rcd.mp4" autoplay muted loop playsinline></video>

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
{{< imgw "/images/post/pr_24/crayon" >}}

### Space-Villain-Game
*Contributed by PaulRitter*

A simple game to kill time in the bar.

{{< imgw "/images/post/pr_24/svarcade" >}}

### Nanotrasen Block Game™
*Contributed by PaulRitter*

<video src="/video/pr_24/blockgame.mp4" autoplay muted loop playsinline></video>

Nanotrasen Block Game™ is a wacky new game for employees to play during their break. There are separate leaderboards for the current round and all-time\*. Challenge your compatriots and become the best NBG player in the star system.

\*Persistent highscores are not currently guaranteed to persist due to potential database changes.

### More furniture
*Contributed by SweptWasTaken*

{{< imgw "/images/post/pr_24/furniture" >}}

## Tiny things

- Closed soda cans spill if you throw them around too much. *DrSmugleaf*
- Cursed lockers that teleport you to other lockers on the station. *Zumorica*
- Examine window feedback for a construction's next step and for when things are powered. *Kmc2000 and exp111*
- Slipping moves you forward some tiles now. *DrSmugleaf*
- AI mobs now have simple visual health states like critical and dead. *metalgearsloth*
- Item status for all weapons. *exp111*
- SSS gamemode improvements, like a HUD button that displays your role and allies, all airlock access... *DrSmugleaf, Visne and more?*
- You can weld doors now. *metalgearsloth*
- Memory leek. *Swept*
- You can now use mouse-click for melee attacks. *Zumorica*
- The lobby now shows which players are ready. *exp111*
- Inventory slots show if current held item fits. *StrawberryMoses*
- Ported additional Security outfits. *StrawberryMoses*
- More simple mobs. Ian, space carp, etc. *Swept*
- Added factions to AI mobs. *metalgearsloth*
- Examining a container with reagent(s) in it will now have colored text that has a physical description of the substance. *nüke*

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
