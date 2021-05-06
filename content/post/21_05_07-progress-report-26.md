+++
title = "Progress Report #26: Tons of Progress"
author = "Many people on Discord"
date = 2021-05-05
categories = [
    "Progress Report"
]
reddit = ""
+++

<!--more-->

## Official Forums

Space Station 14 now has an [official forum](https://forum.spacestation14.io/)! You can login to it with your SS14 account.

The forum will mainly be used for ban appeals and other administrative stuff so it's pretty barebones for now. If it gets enough activity we'll add more general forums and stuff.

Please read [the rules](https://forum.spacestation14.io/index.php?/topic/5-global-forum-rules/) before posting.

## Progress!

### New Chatbox
*Contributed by chairbender and ike709*

A myriad of improvements have been made to the chatbox:
- It's resizable now!
- Rather than using message prefixes for channels, you now cycle channels with Tab or the channel's hotkey.
- Chat channels can now be filtered, allowing you to opt out of hearing whines of "i ded pls restrt" and "ick ock".

### Viewport Improvements <!-- It should have a non-technical section too for the commoners -->
*Contributed by 20kdc, Zumorica, and PJB3005*

<video src="/video/pr_26/viewport.mp4" autoplay muted loop playsinline></video>

### HUD Inventory
*Contributed by ike709*

The inventory popup window has been replaced with an on-HUD inventory inspired by Goonstation. The ID and storage slots are always visible, while the top row of the inventory is toggleable with `I`.

### Firey Stuff

<video src="/video/pr_26/fire.mp4" autoplay muted loop playsinline></video>

You can now spray yourself with flammable chemicals and ignite yourself using a welding tool or an igniter.

### Materials
*Contributed by Swept*

{{< imgw "/images/post/pr_26/hotbar" >}}

### HUD Themes
*Contributed by Swept and ike709*

With the addition of the HUD inventory (and much bikeshedding) comes the addition of HUD themes, which currently only changes the inventory icons. Current themes include:
- Default: A color-shifted version of Goon's HUD icons
- Classic: SS13's classic Midnight HUD, for those who fear change
- Modern: A modernized take that more closely matches the rest of SS14

### In-game Changelog
*Contributed by PJB3005*

<video src="/video/pr_26/changelog.mp4" autoplay muted loop playsinline></video>

Added an in-game changelog, so you can view new features in realtime! The changelog button will notify you whenever there are unread changes.

### Physics Rework <!-- It should have a non-technical section too for the commoners -->
*Contributed by metalgearsloth*

### Patreon Linking
*Contributed by PJB3005*

Many SS13 servers allow donators to receive a fancy chat color in OOC, and now SS14 does too!

### Info Window - Rules/Tutorial
*Contributed by Swept*

<video src="/video/pr_26/rules.mp4" autoplay muted loop playsinline></video>

All fun has been removed from the game and replaced with rules, which are viewable in the information window, accessed with F1.

These rules only apply to the official servers; community servers are welcome to moderate themselves however they see fit. Bans from official servers do not apply to community servers, nor vice-versa.

### Robust Banning System
*Contributed by PJB3005*

The ban system for SS14 is being reinforced with hardware bans.

### Slimepeople & Vox
*Contributed by Zumorica and PJB3005*

{{< imgw "/images/post/pr_26/species" >}}

As a proof-of-concept for future codebases, slimepeople and vox have been added. However, these are currently unplayable and will remain so for the forseeable future. While we wish to support whatever kinds of species other servers want, we have no desire to include "human reskin" species on our servers that are not significantly different from a gameplay perspective.

### Food
*Contributed by Swept*

{{< imgw "/images/post/pr_26/food" >}}

All the food in the codebase was ripped out, reimplemented and reorganized. This added a ton more food content but also makes adding recipes much easier.

NOTE: As of this progress report, lots of recipes for this food are still unimplemented.

### Ghost Roles
*Contributed by Zumorica*

Ghost roles have been added, allowing unrobust players to return as a mouse or a CentCom Official. For moderation purposes ghost roles are currently created solely by admins.

### Station Ambience
*Contributed by tmtmtl30*

<video src="/video/pr_26/ambience.mp4" autoplay loop playsinline></video>

SS13's background hum has been added to SS14. It can be disabled in the settings.

### Lobby Music
*Contributed by Swept and ike709*

Our new mixtape just dropped, with the hottest license-compliant beats available. Here's a list:
- [Sector11](https://www.newgrounds.com/audio/listen/312622) (thunderdome.ogg) by MashedByMachines
- [Endless Space](https://www.newgrounds.com/audio/listen/67583) by SolusLunes
- [Space Asshole](https://www.youtube.com/watch?v=9FCF2Y4lIWk) by [Chris Remo](https://chrisremo.bandcamp.com/)
- [Absconditus](https://bandcamp.zhaytee.net/track/absconditus) by ZhayTee
- [Amnesia MMX](https://youtu.be/LP4Ojrrp7AQ) by [kliksphillip/2kliksphillip/3kliksphillip](https://www.youtube.com/channel/UC0a8nteER_pU4Aj6hmEyJAQ)

### Map Changes
- Added a library *Contributed by ike709*
- Hardened chemistry with reinforced walls *Contributed by Swept*
- Hardened the station exterior with reinforced walls *Contributed by Swept*
- Added a bar backroom *Contributed by BulletGrade*

### Airlock Construction
*Contributed by ShadowCommander*

### More Smokeables
*Contributed by Swept*

{{< imgw "/images/post/pr_26/smokeables" >}}

You can now grow weed and cannabis and roll it into joints/cigarettes! There's also a lot more cigarette types in vending machines.

### Context Menu Improvements
*Contributed by daniel-cr*

{{< imgw "/images/post/pr_26/context" >}}

The context menu has been improved, making large stacks of items easier to manage.

### Votes
*Contributed by PJB3005*

Players can now vote to restart the round (i ded) or change the next round's gamemode.

### Better Admin Panel
*Contributed by lzimann, DrSmugleaf and metalgearsloth*

{{< imgw "/images/post/pr_26/admin" >}}

You can now kick, ban and teleport to players from the admin panel.

### Health Overlay
*Contributed by DrSmugleaf*

<video src="/video/pr_26/health.mp4" playsinline></video>

A simple command which displays health-bars over players heads. Useful for testing and admins.

## Tiny things
- Holiday system added. The game can now run special events on certain dates and give messages like "Merry Christmas" *Contributed by Zumorica*
- Gas leak event *Contributed by metalgearsloth*
- Inflatable walls *Contributed by ShadowCommander*
- Stacked sprites now can be visualized *Contributed by Ygg01*
- Admin menu now can set temperature and add gases *Contributed by metalgearsloth*
- Extended gamemode *Contributed by Zumorica in less than 2:30 minutes*
- You can customize your eyes color now *Contributed by Rember*
- Unified the server/client consoles *Contributed by Acruid*
- You now spill whatever is in your hand when falling. *Contributed by Clyybber* <!-- We need a video of someone falling with a potassium and water beakers in hand -->
- Latejoins are now announced via radio *Contributed by ike709*
- Verb icons *Contributed by Swept*
- Ghosts can now spook players by flickering lights *Contributed by Macoron*

## Technical details

### Fluent Localization
*Contributed by RemieRichards*

### Lighting Optimizations
*Contributed by PJB3005*

### Physics rework
*Contributed by metalgearsloth*

Our previous physics iterations were notoriously unstable so we went to the effort of integrating Box2D into the engine (specifically basing it off of the Farseer dotnet port).
It is by no means finished yet but the features currently include:
* Circle colliders for players
* Items now have collision without tanking server performance
* Weightlessness rubberbanding is fixed
* Pushing is less jittery
* Running along walls is slightly less jittery
* Throwing is more realistic
* Preliminary work for performantly driving the station

We'll be doing work to make the physics system more performant so it will continue to get faster over time.

This also allows us to remove a lot of cruft with controllers as previously velocity was being reset every frame so if you wanted a body to continually move you'd have to manually push it; now you can just apply an impulse once and the system will take care of it.

### Serialization v3
*Contributed by PaulRitter and DrSmugleaf*
<!-- Documentation: https://hackmd.io/@ss14/serialization -->

### Viewport Improvements
*Contributed by PJB3005, 20kdc and Zumorica*

### Analyzer [REMOVE?] <!-- which analyzer is this referring to? -->
*Contributed by PaulRitter*

### Pseudo Airlock Prediction
*Contributed by tmtmtl30*

### YAML Hot Reloading
*Contributed by DrSmugleaf and InquisitivePenguin*
<!-- https://github.com/space-wizards/RobustToolbox/pull/1571 -->

https://youtu.be/5QrNRLp5miM

### RobustToolbox Singleplayer Support
*Contributed by Zumorica*

### Network View Bubble
*Contributed by Acruid*

## Patrons

Thanks to Acvisy, Altana, Anthony Fleck, arthropods, Await Future, Bobberunio, Christopher Marmentini, clyf, creadth, Crocs Enthusiast ., Curtis Pearson, Daniel Thompson, Darren Brady, dean, DramaBuns, Durp, Eric VW, Evan Armstrong, Jan Doodt, Joshington Awesomahee, Kerb 755, KrystalDisc, Kyle Hipke, Mathieu Déom, merklaw, MonkeePawl, Mono, NetGlitch, Nico Thate, queednyeb, Robert Reed, Robin Rottstock, Star Lord, ThatGuyGW, Third, Tomeno, vifs, Wolfiten, Zandario

## Credits

The contributors since the last progress report were: 20kdc, Acruid, AJCM-git, BananaFlambe, bhespiritu, brndd, chairbender, Clyybber, ColdAutumnRain, collinlunn, DamianX, daniel-cr, DmitriyRubetskoy, DmitriyZodiak, DrSmugleaf, DTanxxx, exp111, Git-Nivrak, GraniteSidewalk, ike709, JohnGinnane, juliangiebel, kira-er, komunre, LetterN, lzimann, Macoron, ManelNavola, Markek1, metalgearsloth, mirrorcult, moonheart08, namespace-Memory, Nukeuler123, PaulRitter, PJB3005, Radrark, RedlineTriad, Rember, RemieRichards, Rich-Dunne, rneuser, Rockdtben, SaphireLattice, ShadowCommander, Swept, Tarlan2, tmtmtl30, Tomeno, Ygg01, ZeWaka, zionnBE, Zumorica

Many thanks to everybody who contributed. We couldn’t do this without you!
