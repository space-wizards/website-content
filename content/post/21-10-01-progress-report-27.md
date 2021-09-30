+++
title = "Progress Report #27: Transported to the Chess Dimension"
author = "Space Wizards"
date = 2021-10-01
categories = [
    "Progress Report"
]
reddit = ""
thumbnail = "pr_27"
+++

<!--more-->

## Website Upgrade

<!-- Title Suggestions: Transported to the Chess Dimension, Not an Urban Legend, Hunting down Heisenbug,  -->

As you may have noticed, our official website has gotten a major facelift thanks to PJB. We also commissioned some nice new background art from AsPev as our old one was a little crusty. You can download a full resolution of it [here](https://cdn.discordapp.com/attachments/800430554662436944/873764090676379688/Commission_Swept_3.png).

<!--
TODO: Update this link with one from the website - update the website background - add comparison of the new website.
-->

## New Developer Docs

<!-- Talk about why we switched, how the Wiki.js Docs are gonna be more refined, etc.

Also mention how we'll likely have a content wiki in the future. -->

## Content

### Pneumatic Cannons
*Contributed by mirrocult*

Load [INSERT ITEM]. Shoot [INSERT ITEM] at people. Profit?

{{< video-auto "/video/pr_27/pneumatic.mp4" >}}

### Board Games
*Contributed by Visne and Vera*

Bored by the lack of content? Why not sit down and play a nice relaxing game of Chess! This feature is highly extensible and should be thought of like a 2D Tabletop Simulator inside of Space Station 14.

{{< video-auto "/video/pr_27/chess.mp4" >}}

Vera further improved upon Visne's code making it easy to add different tabletop games, adding the game of parchís in the process!

{{< imgw "/images/post/pr_27/sorry" >}}

### Alt-Clicking
*Contributed by ElectroSR*

Alt+E, Alt+Z and Alt+Left-Mouse keybindings can trigger alternative interactions on entities. Some existing context-menu actions are now considered "alternative interactions", for example ejecting IDs/beakers/magazines or locking & unlocking lockers can be done via these new keybindings.

{{< imgw "/images/post/pr_27/alt" >}}

### Upgraded Canister UI
*Contributed by Vera*

{{< imgw "/images/post/pr_27/canisterui" >}}

### Wielding
*Contributed by mirrocult*

You can now wield (two-hand) some weapons like the fire-axe which will increase the damage per swing. The fire-axe has also received a buff against windows and wooden objects.

{{< video-auto "/video/pr_27/wielding.mp4" >}}

### Ambient sounds
*Contributed by metalgearsloth, Swept*

Ambient sounds can now play from objects around the station for improved immersion. APCs hum, vending machines whirr, and so on.

<!-- Insert video of multiple different ambient sounds quick flash  -->

### Vending Machine Ads
*Contributed by Moses and Visne*

{{< imgw "/images/post/pr_27/ads" >}}

### Clothing Storage Visualizers!

*Contributed by Ygg01 and Swept*

Certain items when placed in belts show a sprite on the belt icon itself.

{{< video-auto "/video/pr_27/belts.mp4" >}}

A lot of belts have gotten sprites for this feature, as well as the botany belt being added to give botanists a helping hand.

TODO: Write this part better I am so tired and also add in a bit about certain items being restricted in belts.

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

{{< video-auto "/video/pr_27/cellexamine.mp4" >}}

### Multiple Viewports
*Contributed by PJB*

Moving this to here so we can prepare stuff like camera demos or chat window demos to really sell this feature.

### Windoors
*Contributed by mirrorcult*

NanoTrasen has finally found space in the budget to install windoors around the station, increasing security and safety!

{{< imgw "/images/post/pr_27/windoors" >}}

<!--### Surgery

NanoTrasen skimped on the surgery budget.-->

### Security barriers
* Contributed by Macoron*
PR is https://github.com/space-wizards/space-station-14/pull/4458

<!-- Insert image -->

### Meteor events
Meteors can now crash into the station.

<!-- Insert video -->

### Shuttles
*Contributed by metalgearsloth, Acruid, and more*

<!-- Insert sick ass shuttle video to make people cum -->

AT THIS RATE ROTATING SHUTTLES WILL BE IN BEFORE THE PR IS DONE

The first iteration of shuttle driving has made it into the game. Currently it allows you to drive them around in a strafing manner, with rotation planned once the technical blockers have been overcome in the coming months.

Their design is still subject to change over time we nail down how we want them to work in Space Station 14.

Video here or something here plz swept idk

### Upgraded Canister UI
*Contributed by Vera*

{{< imgw "/images/post/pr_27/canisterui" >}}

### Ducky Slippers
*Contributed by Swept*

{{< video-auto "/video/pr_27/duckyslippers.mp4" >}}

## Map Changes

<!-- TODO: Fill this out. -->

*Contributed by Timrod, 20kdc, Seth, Swept etc.*

<!-- Put significant map changes to Saltern here so that "Tiny Things" isn't spammed too much with it. -->

## Tiny Things

<!-- Possibly want to group many contributions by the same person so every line isn't ended
with *Contributed by* -->

- Significant network bubbling performance improvements which should greatly increase the number of players we can have on a server. *Contributed by Acruid*
- Updated Botany tool sprites. *Contributed by Swept*
- Fixed y-sorting so it uses the bottom of the sprite and not the centre. *Contributed by metalgearsloth*
- Physics multi-threading. *Contributed by ?*
- Throwing now feels more realistic as it comes to a sudden stop at the end of the throw. *Contributed by metalgearsloth*
- Thrown bags of flours and tomatoes will now splat and spill their contents. *Contributed by Swept*
- You can now cycle channels while typing. *Contributed by Clyybber*
- Lerping has been fixed and pulling lerping has been implemented. In English: Movement feels *much* better. *Contributed by metalgearsloth*
- New technologies and balanced/added recipes for the lathes. *Contributed by Seth*
- Global ghost hearing. *Contributed by ShadowCommander*
- Battery charge indicator for substations and APCs. *Contributed by 20kdc*
- Jumpskirt for Captain. *Contributed by Swept*
- Several simple medicines. *Contributed by scaly-chimp*
- Claymore. *Contributed by TaralGit*
- Examine now shows what people have in their hands. *Contributed by T-Stalker*
- Gas tanks can be inserted into canisters. *Contributed by Vera*
- Vox plushie. *Contributed by T-Stalker*
- Simple spells for pie and item spawning. *Contributed by CrudeWax*
- Dual-Port air vent. *Contributed by Vera*
- Integer scaling option. Turn it off to get rid of black bars at the cost of less crisp scaling *Contributed by Visne*
- Crayon and Toolbelt sprites now dynamically show their contents. *Contributed by Ygg01*
- Crematorium makes a sound during cremation and burns quicker. *Contributed by Swept*
- Adds and updates a ton of inhands for items across the codebase. *Contributed by Swept*
- Announcements now play the announcement sound. *Contributed by Swept*
- Admin ghosts can interact with stuff. *Contributed by Swept*
- Some engineering items now play sounds when landing. *Contributed by metalgearsloth*
- Smoking actually makes you inhale nicotine/THC reagents and you can snuff them out. *Contributed by Vera*
- More context menu icons and two new actions (open inventory & eject items from disposal unit). *Contributed by ElectroSR*

## Technical

### Section about OpenDream and extrapolate on Space Wizards involvement in the project.

### Shuttles again
metalgearsloth: How long do we want this to be? I would mainly just rant about having to deal with cross-broadphase shenanigans was CBT which was the only reason I didn't do it sooner (that and box2d made it way easier)

### Section about PJB's power system.

<!-- You could probably just cut some interesting parts from https://hackmd.io/@ss14/lowpower to write this part better. It could also go in content with a nice video. -->

Rewrote most of the power system.

All power supplying objects now have a built-in ramping system. If a large amount of extra power is suddenly needed, engines and batteries on the grid need a bit of time to "ramp up" to match.

Power is passed through batteries immediately. This means that APCs are basically on standby until engine power or such cuts out. When the engine cuts out, heavy electrical grids will be underpowered for a second or two until backup batteries can spin up to fill the gap.

## Patrons

Thanks to Blaise M., Jack Rose, The Hateful Flesh, Prof. Omii, mksky, Alex Tempest, Rat Fungus, Will M., spinnermaster, Valinov, Dan Griskardian, S.C., "'-Y-", Jubal the Wizard, clyf, Kerb 755, Robin Rottstock, Altana, Durp, Joshington Awesomahee, Eric VW, Evan Armstrong, Enzoman12, Mono, Ethan Keller, DramaBuns, KrystalDisc, Darren Brady, Zandario, Anthony Fleck, vifs_vestige, Bobberunio, CPM311, ThatGuyGW, Farewell Fire, Await Future, Daniel Thompson, and Tomeno.

## Credits

The contributors since the last progress report were: 20kdc, Acruid, AJCM-git, boiled-water-tsar, clyfordv, ColdAutumnRain, DrSmugleaf, ElectroJr, Fiftyllama, Fogapod, GalacticChimp, ike709, Jaskanbe, Macoron, metalgearsloth, michaelcooke, mirrorcult, PaulRitter, PJB3005, plinyvic, scaly-chimp, scrato, SethLafuente, ShadowCommander, Silvertorch5, Swept, TimrodDX, Visne, Ygg01 and Vera.

Many thanks to everybody who contributed. We couldn’t do this without you!
