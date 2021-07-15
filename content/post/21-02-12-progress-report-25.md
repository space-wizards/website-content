+++
title = "Progress Report #25: Blowing Off Steam"
author = "Many people on Discord"
date = 2021-02-07
categories = [
    "Progress Report"
]
reddit = ""
+++

<!--more-->

## Playtest

We're proud to announce that Space Station 14 is [now available](https://store.steampowered.com/app/1255460/Space_Station_14/) through the new Steam Playtest feature. Originally we were planning to do a full release through Early Access, but we felt that a more limited release was a better match for the current state of SS14 development.

To gain access, simply visit the SS14 store page and click Request Access. You'll be added to the pool of people who are waiting, which we randomly draw from when we feel we could use more players.

[{{< imgw "/images/post/pr_25/playtest" >}}](https://store.steampowered.com/app/1255460/Space_Station_14/)

If you don't receive access immediately, just be patient! More users will be added over time.

We don't currently have a set date for a wider Early Access release, it depends on how well the playtests go and how quickly more content is added.

Much work went into last minute preparations to get ready for Steam; combined with exams, ~~the devs all playing Factorio~~, and the holidays, this progress report is relatively light. But we still have some new treats!

Of course, you can always download the non-Steam build from [our downloads page](/about/nightlies). Obviously it'll never be as convenient as Steam, but the option is always available.

## Progress!

### Botany
*Contributed by Zumorica*

Botany is in! This includes trays, seeds, planting, harvesting, nutriments, weeds, pests, and plenty more! Botanists can finally supply the station with ~~drugs~~ food, making the station even more self-sufficient. As a bonus, adding new plants is trivial and doesn't require writing any C# code.

{{< imgw "/images/post/pr_25/botany" >}}

### UI improvements

{{< imgw "/images/post/pr_25/newui" >}}

#### Action Hotbar
*Contributed by chairbender, building on earlier work by ShadowCommander*

We now have an actions hotbar! The idea is this hotbar will be used for all common actions you may need quick access to, from toggling your helmet light to wizard spells.

The layout of the hotbar can be re-arranged if you feel so inclined. There are some minor things that have to be added like allowing you to save layouts between round, but for the most part it's very solid already.

{{< imgw "/images/post/pr_25/hotbar" >}}
{{< imgw "/images/post/pr_25/actions" >}}

#### Alerts System and UI
*Contibuted by chairbender*

What was previously known as "status effects" has been expanded into a more general "alerts" system, which allows contributors to easily define and modify the alert icons and tooltips.

{{< imgw "/images/post/pr_25/alerts" >}}

#### Minor UI Things
* Improved top menu buttons *Contributed by chairbender*
* Improved Inventory / Hand Slots UI *Contributed by chairbender*
* Improved job preference menu *Contributed by Rockdtben & DrSmugleaf*

### Traitor Gamemode & Objectives
*Contributed by PaulRitter*

Added a general framework for antagonist objectives, and a basic implementation of the traitor gamemode. Traitors get objectives at roundstart and complete them over the course of the round, which can only end via a shuttle call. On roundend, all players will see who the traitors were, what objectives they had, and whether they completed their objectives.

Implemented objectives so far are:
- Steal the Captain's ID
- Die a glorious death
- Survive
- Kill a random person

{{< imgw "/images/post/pr_25/objectives" >}}

### Traitor Deathmatch Gamemode
*Contributed by 20kdc, with PDA redemption machine sprite by Tomeno*

Expanding upon the new traitor mode, this gamemode is essentially a free-for-all, but with traitor uplinks for everyone to spice things up.

### Improved Admin Menu
*Contributed by Exp111*

The admin menu was mentioned in the last progress report but it's gotten some new features added.

{{< video-auto "/video/pr_25/admin.mp4" >}}

### Magboots
*Contributed by PJB*

You now have magboots. They help you avoid getting thrown around the place by airflow.

{{< video-auto "/video/pr_25/magboots.mp4" >}}

### Gas tanks and Internals
*Contributed by Creadth and Zumorica*

You can now avoid dying in vacuums. At least from the oxygen loss.

{{< imgw "/images/post/pr_25/tanks" >}}

### Gas Canisters
*Contributed by clement-or, help from 20kdc and ike709*

Gas canisters now exist, ripe for plasma flooding.

{{< video-auto "/video/pr_25/canisters.mp4" >}}

### Mortician's Menagerie (All the crematorium stuff)
*Contributed by RemieRichards

The Traitor's ~~murderbone victims~~ targets won't be left littering the halls, because the morgue is now fully equipped with functioning morgue trays, body bags, and a crematorium.

{{< video-auto "/video/pr_25/mortician.mp4" >}}

### Trash Bags & Pickup Animations
*Contributed by RemieRichards*

Now you can pick up trash and steal any other valuables on the ground, in style!

{{< video-auto "/video/pr_25/trash.mp4" >}}

### Eris Power Cells
*Contributed by brndd*

Ports Eris-style power cells. They come in three distinct sizes, S, M and L, each size having more charge than the last and fitting into different kinds of devices.

{{< imgw "/images/post/pr_25/cells" >}}

### LORD SINGULOTH
*Contributed by unusualcrow, PaulRitter, and PJB*

We teased it last time, and now it's here! The singularity returns as the latest and arguably greatest engine, with the particle accelerator, containment field, and radiation collectors already implemented. It is capable of going through the station like a hot knife through butter, so beware of sabotage!

All hail Lord Singuloth!

{{< imgw "/images/post/pr_25/singularities" >}}

### Gibbing
*Contributed by Zumorica*

Humans can now be gibbed into a pool of blood, organs, and other fleshy goop.

### Upgradeable Machines
*Contributed by Zumorica*

Similar to SS13, there is now a general framework for upgradable parts in machines.

{{< video-auto "/video/pr_25/upgrade.mp4" >}}

### Disarming
*Contributed by Zumorica*

Tiders can now liberate harmbatons from Security Officers! Disarming has been added as an action to the new action hotbar.

{{< video-auto "/video/pr_25/disarm.mp4" >}}

### Cigarettes and Matches
*Contributed by Ygg01*

You can now roleplay as a hardboiled, chainsmoking noir detective.

{{< video-auto "/video/pr_25/cig.mp4" >}}

### Cargo Telepad
*Contributed by GraniteSidewalk*

Although shuttles loom on the horizon after the upcoming physics rework is finished, we thought it'd be nice to add a placeholder to Cargonia. Incoming cargo crates will now be beamed to a tele-pad adjacent to the computer, rather than just appearing out of thin air.

{{< video-auto "/video/pr_25/telepad.mp4" >}}

### Smoke and foam chemical reactions
*Contributed by Radrark*

Chemical reactions can now result in smoke or foam, just like in SS13.

{{< video-auto "/video/pr_25/reaction.mp4" >}}

### Instrument Improvements

*Contributed by Zumorica*

The instrument UI now has a slider that can be used to rewind or fast-forward the playback of the MIDI song you're playing. Also, other players' instruments should sound better now.

{{< imgw "/images/post/pr_25/instrument" >}}

## Tiny things

- Containment field emitters emit soft light now. *Contributed by 20kdc*
- Wall lights are now buildable. *Contributed by Macoron*
- Light bulbs are now destructible. *Contributed by ZeWaka*
- Kitchen knife and sliceable foods. *Contributed by mirrorcult*
- Rounds have time limits now. *Contributed by DrSmuglive*
- Disposal units flush air now. *Contributed by DrSmuglead*
- Cow tools have been added. *Contributed by PaulRitter*
- Now the options menu has a slider for master volume. *Contributed by ManelNavola*
- PDA now has a pen. *Contributed by exp111*
- Added suicide for Crematorium and Recycler. *Contributed by ManelNavola*
- Pulling and grabbing merged (pulling takes up a hand now). *Contributed by DrSmuglaught*
- Flashlights for hard hats and hardsuits. *Contributed by Macoron*
- Live preview for the character creator. *Contributed by metalgearsloth*
- More belts and welders. *Contributed by SweptWasTaken*
- Replaced the cev-eris maint airlocks. *Contributed by SweptWasTaken*
- Many crates have been filled. *Contributed by SweptWasTaken*
- Many lockers have been filled. *Contributed by DmitriyRubetskoy*
- Lockers now enforce access restrictions. *Contributed by brndd*
- Context Menu improvements. *Contributed by daniel-cr*
- Window breaking is now prettier and makes a sound. *Contributed by brndd & Macoron*
- You can now feel hypospray-supplied tiny pricks. *Contributed by PJB*
- You can now rig power cells to explode by injecting phoron. *Contributed by PJB*

## Technical stuff

### Mapping Merge Driver
*Contributed by 20kdc & DrSmugleaf*

We now have a merge driver to automatically resolve conflicts in map edits. This should make it easier to work on map files concurrently.

### XamlUI
*Contributed by PaulRitter*

We have laid the basic ground work for allowing UIs to be defined in XAML. Compiling XAML files to IL and generating necessary code behind is now possible, thanks to XamlIL and other various bits of code from [Avalonia UI](https://avaloniaui.net/).

### Sandboxing
*Contributed by PJB*

When you connect to a server, the launcher has to download code from that server to be able to execute the game. That code is now sandboxed so you can't just get malware by connecting to sketchy servers anymore.

Sandboxing is currently implemented by verifying the IL of all loaded assemblies and checking all referenced members against a massive whitelist.

## Patrons

Thanks to Acvisy, Altana, Anthony Fleck, arthropods, Await Future, Bobberunio, Christopher Marmentini, clyf, creadth, Crocs Enthusiast ., Curtis Pearson, Daniel Thompson, Darren Brady, dean, DramaBuns, Durp, Eric VW, Evan Armstrong, Jan Doodt, Joshington Awesomahee, Kerb 755, KrystalDisc, Kyle Hipke, Mathieu Déom, merklaw, MonkeePawl, Mono, NetGlitch, Nico Thate, queednyeb, Robert Reed, Robin Rottstock, Star Lord, ThatGuyGW, Third, Tomeno, vifs, Wolfiten, Zandario

## Credits

The contributors since the last progress report were: 20kdc, Acruid, AJCM-git, BananaFlambe, bhespiritu, brndd, chairbender, Clyybber, ColdAutumnRain, collinlunn, DamianX, daniel-cr, DmitriyRubetskoy, DmitriyZodiak, DrSmugleaf, DTanxxx, exp111, Git-Nivrak, GraniteSidewalk, ike709, JohnGinnane, juliangiebel, kira-er, komunre, LetterN, lzimann, Macoron, ManelNavola, Markek1, metalgearsloth, mirrorcult, moonheart08, namespace-Memory, Nukeuler123, PaulRitter, PJB3005, Radrark, RedlineTriad, Rember, RemieRichards, Rich-Dunne, rneuser, Rockdtben, SaphireLattice, ShadowCommander, SweptWasTaken, Tarlan2, tmtmtl30, Tomeno, Ygg01, ZeWaka, zionnBE, Zumorica

Many thanks to everybody who contributed. We couldn’t do this without you!
