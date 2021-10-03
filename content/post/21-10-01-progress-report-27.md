+++
title = "Progress Report #27: Transported to the Chess Dimension"
author = "Space Wizards"
date = 2021-09-29
categories = [
    "Progress Report"
]
reddit = ""
thumbnail = "pr_27"
+++

<!--more-->

## Website Upgrade

As you may have noticed, our official website has gotten a major facelift thanks to PJB. We also commissioned some nice new background art from AsPev as our old one was a little crusty. You can download a full resolution of it [here](https://cdn.discordapp.com/attachments/800430554662436944/873764090676379688/Commission_Swept_3.png).

<!--
TODO: Update this link with one from the website - update the website background - add comparison of the new website.
-->

## New Developer Docs

<!-- Talk about why we switched, how the Wiki.js Docs are gonna be more refined, etc.

Also mention how we'll likely have a content wiki in the future. -->

## Content

### Pneumatic Cannons
*Contributed by mirrorcult*

Load [INSERT ITEM]. Shoot [INSERT ITEM] at people. Profit?

{{< video-auto "/video/pr_27/pneumatic.mp4" >}}

### Board Games
*Contributed by Visne and Zumorica*

Bored by the lack of content? Why not sit down and play a nice relaxing game of Chess! This feature is highly extensible and should be thought of like a 2D Tabletop Simulator inside of Space Station 14.

{{< video-auto "/video/pr_27/chess.mp4" >}}

Zumorica further improved upon Visne's code making it easy to add different tabletop games, adding the game of parchís in the process!

{{< imgw "/images/post/pr_27/sorry" >}}

### Alt-Clicking
*Contributed by ElectroSR*

Alt+E, Alt+Z and Alt+Left-Mouse keybindings can trigger alternative interactions on entities. Some existing context-menu actions are now considered "alternative interactions", for example ejecting IDs/beakers/magazines or locking & unlocking lockers can be done via these new keybindings.

{{< imgw "/images/post/pr_27/alt" >}}

### Upgraded Canister UI
*Contributed by Zumorica*

{{< imgw "/images/post/pr_27/canisterui" >}}

### Wielding
*Contributed by mirrorcult*

You can now wield (two-hand) some weapons like the fire-axe which will increase the damage per swing. The fire-axe has also received a buff against windows and wooden objects.

{{< video-auto "/video/pr_27/wielding.mp4" >}}

### Ambient sounds
*Contributed by metalgearsloth, Swept*

Ambient sounds can now play from objects around the station for improved immersion. APCs hum, vending machines whirr, and so on.

<!-- TODO: Align Left -->
{{< video-audio "/video/pr_27/ambience.mp4" >}}

### Vending Machine Ads
*Contributed by Moses, Visne and Zumorica.

{{< imgw "/images/post/pr_27/ads" >}}

### Clothing Storage Visualizers!

*Contributed by Ygg01 and Swept*

Certain items when placed in belts show a sprite on the belt icon itself.

<!-- TODO: Align Left -->
{{< video-auto "/video/pr_27/belts.mp4" >}}

A lot of belts have gotten sprites for this feature, as well as the botany belt being added to give botanists a helping hand.

{{< imgw "/images/post/pr_27/belts" >}}

### Meth
*Contributed by scaly-chimp*

Scaly-chimp broke bad and added meth so aspiring chemists can recreate scenes from the hit TV show Big Bang Theory.

<!-- Insert video of someone high on meth -->

### UI for setting solution transfer amount
*Contributed by mirrorcult*

Entities likes beakers and bottles now have a verb that opens a UI which allows you to set the transfer amount.

{{< imgw "/images/post/pr_27/transfer" >}}

### Examineable Batteries
*Contributed by 20kdc*

When examining batteries you can see their specific charge value.

<!-- TODO: Align Left -->
{{< video-auto "/video/pr_27/cellexamine.mp4" >}}

### Multiple Viewports
*Contributed by PJB*

Moving this to here so we can prepare stuff like camera demos or chat window demos to really sell this feature.

### Windoors
*Contributed by mirrorcult*

NanoTrasen has finally found space in the budget to install windoors around the station, increasing security and safety!

{{< imgw "/images/post/pr_27/windoors" >}}

### Shuttles
*Contributed by metalgearsloth, Acruid, and more*

The first iteration of shuttle driving has made it into the game. Currently it allows you to drive them around in a strafing manner, with rotation planned once the technical blockers have been overcome in the coming months.

Their design is still subject to change over time as we nail down how we want them to work in Space Station 14.

Shuttles have been a major source of development focus and have contributed to lots of updates to our physics system. They'll be a feature in our next progress report.

### Upgraded Canister UI
*Contributed by Zumorica*

{{< imgw "/images/post/pr_27/canisterui" >}}

### Ducky Slippers
*Contributed by Swept*

<!-- TODO: Align Left -->
{{< video-auto "/video/pr_27/duckyslippers.mp4" >}}

## Map Changes

*Contributed by Timrod, 20kdc, Seth, Swept, mirrorcult etc.*

In addition to fixes and maintaining of Saltern, contributors made some significant changes.

Timrod took advantage of the windoors mirrorcult added and implemented them around Saltern. He also remapped Chemistry and Security.

{{< imgw "/images/post/pr_27/chemistry" >}}
{{< imgw "/images/post/pr_27/security" >}}

Mirrorcult did some tweaking to the station's lighting to make them fit more in line with the color temperature of fluorescents vs incandescents

{{< imgw "/images/post/pr_27/lighting-1" >}}
{{< imgw "/images/post/pr_27/lighting-2" >}}
{{< imgw "/images/post/pr_27/lighting-3" >}}

Seth made maintenance a little more interesting by adding two new closets to explore.

{{< imgw "/images/post/pr_27/maint" >}}

<!-- Put significant map changes to Saltern here so that "Tiny Things" isn't spammed too much with it. -->

## Tiny Things

- Significant network bubbling performance improvements which should greatly increase the number of players we can have on a server. *Contributed by Acruid*

<!-- TODO: Align Left -->
{{< video-audio "/video/pr_27/mvm.mp4" >}}

- More context menu icons and two new actions (open inventory & eject items from disposal unit). *Contributed by **ElectroSR***
- Global ghost hearing. *Contributed by **ShadowCommander***
- Battery charge indicator for substations and APCs. *Contributed by **20kdc***
- You can now cycle channels while typing. *Contributed by **Clyybber***
- Claymore. *Contributed by **TaralGit***
- Several simple medicines. *Contributed by **scaly-chimp***
- Security Barriers *Contributed by **Macoron***
- New technologies and balanced/added recipes for the lathes. *Contributed by **Seth***
- Integer scaling option. Turn it off to get rid of black bars at the cost of less crisp scaling *Contributed by **Visne***
- Crayon and Toolbelt sprites now dynamically show their contents. *Contributed by **Ygg01***
- Simple spells for pie and item spawning. *Contributed by **CrudeWax***

###### Contributed by metalgearsloth
- Fixed y-sorting so it uses the bottom of the sprite and not the centre.  
- Physics multi-threading.  
- Some engineering items now play sounds when landing.  
- Meteor event.
- Throwing now feels more realistic as it comes to a sudden stop at the end of the throw.
- Lerping has been fixed and pulling lerping has been implemented. In English: Movement feels *much* better.

###### Contributed by T-Stalker
- Examine now shows what people have in their hands.
- Vox plushie.

###### Contributed by Zumorica
- Gas tanks can be inserted into canisters.
- Smoking actually makes you inhale nicotine/THC reagents and you can snuff them out.
- Dual-Port air vent.

###### Contributed by Swept
- Crematorium makes a sound during cremation and burns quicker.
- Adds and updates a ton of inhands for items across the codebase.
- Updated Botany tool sprites.
- Announcements now play the announcement sound.
- Admin ghosts can interact with stuff.
- Centcom Official ghost role.
- Jumpskirt for Captain.
- Thrown bags of flours and tomatoes will now splat and spill their contents.

## Technical

### Shuttles again
Before we explain why shuttles were hard we need to explain some terminology up front:
* Entities - These are objects in-game such as a crowbar, a wall, a mob, etc.
* Maps - These are what other engines would call "Worlds" or similarly "Z-Levels". These are just discrete planes that stretch to infinity and the only way to go from one to another is via teleportation. For SS14 you'd typically only have 1 active at a time.

To implement shuttles into SS14 there were 3 main challenges that needed to be overcome:
1. When moving the shuttle we need to make sure that every entity on the shuttle doesn't need its positions updated.
2. We need to make sure that anything that collides with a shuttle correctly does collision
3. When the shuttle moves it needs to apply collision correctly with anything it drives over.

2 + 3 won't make sense until we explain the challenge in implementing 1 and how the solution gives rise to problems 2 + 3.
We have several internal data structures that store entity positions for fast queries, such as:
* What sprites intersect the viewport?
* What physics bodies am I colliding with?
* What lights intersect this point?

Previously, these were all stored relative to the *map*, which meant that whenever a shuttle moved every single entity on it also needed to be updated in our data structures. On our small station called Saltern we have over 5,000 entities on it so this was prohibitively expensive and would severely limit any server that wanted to have multiple moving ships.

The solution to this is store all of these entities relative to the *shuttle*, and then store the *shuttle* relative to the *map*.
This means that whenever the shuttle moves we only have to update the shuttle on the map. However, this gives rise to problems 2 + 3.

To explain further:
Say we have an entity on the map travelling towards a shuttle. As it is on the map it is only checking collisions on the map. Even if it intersects with the shuttle it's still not checking collision for any entities on the shuttle's data structure, because it's still on the map.
The solution to this is that whenever the entity moves we check all data structures it may potentially be intersecting, and then check collisions individually on each one. This is slower than if every entity were on the same data map but makes shuttle updates very easy.
This solves problem 2.
Problem 3 applies in reverse: Whenever a shuttle moves, we look for any entities we may be intersecting and then check these for collisions.

Since that was a bit of a word salad here's some videos of shuttles in various stages of development.

{{< video-auto "/video/pr_27/yeet.mp4" >}}
{{< video-auto "/video/pr_27/collisions.mp4" >}}
{{< video-auto "/video/pr_27/accurate.mp4" >}}
{{< video-auto "/video/pr_27/wee.mp4" >}}

### Section about PJB's power system.

Most of the power system has been rewritten.

All power supplying objects now have a built-in ramping system. If a large amount of extra power is suddenly needed, engines and batteries on the grid need a bit of time to "ramp up" to match.

Power is passed through batteries immediately. This means that APCs are basically on standby until engine power or such cuts out. When the engine cuts out, heavy electrical grids will be underpowered for a second or two until backup batteries can spin up to fill the gap.

## Patrons

Thanks to Blaise M., Jack Rose, The Hateful Flesh, Prof. Omii, mksky, Alex Tempest, Rat Fungus, Will M., spinnermaster, Valinov, Dan Griskardian, S.C., "'-Y-", Jubal the Wizard, clyf, Kerb 755, Robin Rottstock, Altana, Durp, Joshington Awesomahee, Eric VW, Evan Armstrong, Enzoman12, Mono, Ethan Keller, DramaBuns, KrystalDisc, Darren Brady, Zandario, Anthony Fleck, vifs_vestige, Bobberunio, CPM311, ThatGuyGW, Farewell Fire, Await Future, Daniel Thompson, and Tomeno.

## Credits

The contributors since the last progress report were: 20kdc, Acruid, AJCM-git, boiled-water-tsar, clyfordv, ColdAutumnRain, DrSmugleaf, ElectroJr, Fiftyllama, Fogapod, GalacticChimp, ike709, Jaskanbe, Macoron, metalgearsloth, michaelcooke, mirrorcult, PaulRitter, PJB3005, plinyvic, scaly-chimp, scrato, SethLafuente, ShadowCommander, Silvertorch5, Swept, TimrodDX, Visne, Ygg01 and Zumorica.

Many thanks to everybody who contributed. We couldn’t do this without you!