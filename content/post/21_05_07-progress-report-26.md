+++
title = "Progress Report #26: Lītigium In Forīs"
author = "Many people on Discord"
date = 2021-05-05
categories = [
    "Progress Report"
]
reddit = ""
+++

<!--more-->

## Official Forums

{{< imgw "/images/post/pr_26/forum" >}}

Space Station 14 now has an [official forum](https://forum.spacestation14.io/)! You can login to it with your SS14 account.

The forum will mainly be used for ban appeals and other administrative stuff so it's pretty barebones for now. If it gets enough activity we'll add more general forums and stuff.

Please read [the rules](https://forum.spacestation14.io/index.php?/topic/5-global-forum-rules/) before posting.

## Content

### Physics Rework <!-- It should have a non-technical section too for the commoners -->
*Contributed by metalgearsloth and Acruid.*

A huge thanks to metalgearsloth for slaving over a complete physics rework for SS14. If you want to see the technicalities of it he's done a detailed write-up in the technical section but here's a few examples to demonstrate the advantages of the rework.

#### Circle colliders for players (This means you won't need to be pixel-perfect when going through airlocks and doorways).
<video src="/video/pr_26/circle.mp4" autoplay muted loop playsinline></video>

#### Items can rotate when thrown and bounce.
<video src="/video/pr_26/throw.mp4" autoplay muted loop playsinline></video>

#### Pushing is less jittery.
<video src="/video/pr_26/pushing.mp4" autoplay muted loop playsinline></video>

Again, this physics update is huge and most of it won't be noticed by players so send metalgearsloth and Acruid hugs and kisses.

### New Chatbox
*Contributed by chairbender and ike709*

<video src="/video/pr_26/chat.mp4" autoplay muted loop playsinline></video>

A myriad of improvements have been made to the chatbox:
- It's resizable now!
- Rather than using message prefixes for channels, you now cycle channels with Tab or the channel's hotkey.
- Chat channels can now be filtered, allowing you to opt out of hearing whines of "i ded pls restrt" and "ick ock".

### Viewport Improvements <!-- It should have a non-technical section too for the commoners -->
*Contributed by 20kdc, Zumorica, and PJB3005*

<video src="/video/pr_26/viewport.mp4" autoplay muted loop playsinline></video>

These improvements to the viewport will eliminate the advantage people with bigger monitors got. Essentially it scales the view of the game so that everybody can see exactly the same amount of tiles.

### HUD Inventory and Themes
*Contributed by Swept and ike709*

<video src="/video/pr_26/hud.mp4" autoplay muted loop playsinline></video>

The inventory popup window has been replaced with an on-HUD inventory inspired by Goonstation. The ID and storage slots are always visible, while the top row of the inventory is toggleable with `I`.

With the addition of the HUD inventory (and much bikeshedding) comes the addition of HUD themes, which currently only changes the inventory icons. Current themes include:
- Default: A color-shifted version of Goon's HUD icons
- Classic: SS13's classic Midnight HUD, for those who fear change
- Modern: A modernized take that more closely matches the rest of SS14

### Firey Stuff

<video src="/video/pr_26/fire.mp4" autoplay muted loop playsinline></video>

You can now spray yourself with flammable chemicals and ignite yourself using a welding tool or an igniter.

### Materials
*Contributed by Swept*

{{< imgw "/images/post/pr_26/hotbar" >}}

### In-game Changelog
*Contributed by PJB3005*

<video src="/video/pr_26/changelog.mp4" autoplay muted loop playsinline></video>

Added an in-game changelog, so you can view new features in realtime! The changelog button will notify you whenever there are unread changes.

### Info Window - Rules/Tutorial
*Contributed by Swept*

<video src="/video/pr_26/rules.mp4" autoplay muted loop playsinline></video>

All fun has been removed from the game and replaced with rules, which are viewable in the information window, accessed with F1.

These rules only apply to the official servers; community servers are welcome to moderate themselves however they see fit. Bans from official servers do not apply to community servers, nor vice-versa.

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

{{< imgw "/images/post/pr_26/ghost" >}}

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

### Rollerbeds
*Contributed by Topy*

<video src="/video/pr_26/rollerbeds.mp4" muted autoplay loop playsinline></video>

Rollerbeds have been added allowing better transport of injured station personnel.

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

<video src="/video/pr_26/vote.mp4" muted autoplay loop playsinline></video>

Players can now vote to restart the round (i ded) or change the next round's gamemode.

### Better Admin Panel
*Contributed by lzimann, DrSmugleaf and metalgearsloth*

{{< imgw "/images/post/pr_26/admin" >}}

You can now kick, ban and teleport to players from the admin panel.

### Health Overlay
*Contributed by DrSmugleaf*

<video src="/video/pr_26/health.mp4" autoplay loop playsinline></video>

A simple command which displays health-bars over players heads. Useful for testing and admins.

### Vending Machine Advertisements
*Contributed by Visne*

<video src="/video/pr_26/ad.mp4" muted autoplay loop playsinline></video>

Commercial vending machines will now advertise their products every once in a while.

## Tiny things
- Holiday system added. The game can now run special events on certain dates and give messages like "Merry Christmas". *Contributed by Zumorica*
- Gas leak event. *Contributed by metalgearsloth*
- Patreon linking. Many SS13 servers allow donators to receive a fancy chat color in OOC, and now SS14 does too! *Contributed by PJB3005*
- Inflatable walls. *Contributed by ShadowCommander*
- Stacked sprites now can be visualized. *Contributed by Ygg01*
- Additions to banning system like hardware ID bans. *Contributed by PJB3005*
- Admin menu now can set temperature and add gases. *Contributed by metalgearsloth*
- Airlock construction .*Contributed by ShadowCommander*
- Extended gamemode. *Contributed by Zumorica in less than 2:30 minutes*
- You can customize your eyes color now. *Contributed by Rember*
- There is now a toilet on the station. *Contributed by Macoron*
- Clown cannon. *Contributed by Zumorica*
- Unified the server/client consoles. *Contributed by Acruid*
- You now spill whatever is in your hand when falling. *Contributed by Clyybber* <!-- We need a video of someone falling with a potassium and water beakers in hand -->
- Latejoins are now announced via radio. *Contributed by ike709*
- Verb icons. *Contributed by Swept*
- Ghosts can now spook players by flickering lights. *Contributed by Macoron*

## Technical details

### Fluent Localization
*Contributed by RemieRichards*

We replaced our localization system's backing library, NGettext (a .NET gnu `gettext` port), with a .NET implementation of [Project Fluent.](https://projectfluent.org/)

Project Fluent is Mozilla's modern localization system, which allows for among other things, asymmetrical localization; Asymmetrical localization is important if we want to fully support languages with grammar that differs greatly from english.

Something like `gettext` simply swaps out a source message with a translated message, this isn't very scalable outside of simplistic examples ("Hello" -> "こんにちは"). This can unfortunately lead to source grammar and source concepts leaking into target languages, which at best leads to unnatural translations and at worst complete gibberish.

One major consequence of this change is that **all** localized text is now stored outside of C# code, *including the source language, english*.
This shouldn't be a major obstacle as generally localization is a write-once affair and for ease of contribution localization can be temporarily skipped,  simply passing through source text verbatim, while also displaying a warning in the game's log so we know to come back to it later.

We've also got plans to build some roslyn analyzers to make working with localization even easier, with things to look forward to like automatic scanning for missing translations in a particular language (imagine english implements the message `hello-world` as "Hello World!", but the french translation files have no entry for `hello-world`)

Check out our [localization guide](https://hackmd.io/@ss14/localization) and have a play on project fluent's interactive [playground!](https://projectfluent.org/play/)

### Physics rework
*Contributed by metalgearsloth*

Our previous physics iterations were notoriously unstable so we went to the effort of integrating Box2D into the engine (specifically basing it off of the Farseer dotnet port).

We've also taken pieces from Box2D itself and forks of Farseer (Velcro and Aether2D). The reason for this is to take the best pieces of each for the engine to suit SS14's needs.

In the future we'll also look at multi-threading critical parts for further performance increases.

It is by no means finished yet but the features currently include:
* Circle colliders for players
* Items now have collision without tanking server performance
* Items can rotate when thrown and bounce
* Weightlessness rubberbanding is fixed
* Pushing is less jittery
* Running along walls is slightly less jittery (more work to be continued)
* Preliminary work for driving the station performantly

We'll be doing work to make the physics system more performant so it will continue to get faster over time.

This also allows us to remove a lot of cruft with controllers as previously velocity was being reset every frame so if you wanted a body to continually move you'd have to manually push it; now you can just apply an impulse once and the system will take care of it without requiring bookkeeping every time.

### Serialization v3
*Contributed by PaulRitter and DrSmugleaf*
<!-- Documentation: https://hackmd.io/@ss14/serialization -->

Our serialization system has been revamped to make it easier for developers to create new components and prototypes and add content to the game.
Previously, each property needed at least one line of code (or at worst more than a dozen) to be written for them to be read from and written to YAML files.
Now, the same can be done by writing `[DataField("propertyId")]` above each of them. Everything else is handled in the background automatically, and more performantly than before.
This also enables us to lint our YAML files for errors, typos and invalid data, avoiding unnecessary bugs that were cumbersome to spot manually.
It also makes a YAML/prototype editor possible if needed in the future, as you can easily access and validate each property used by a component, prototype, or any other kind of data definition.

### Pseudo Airlock Prediction
*Contributed by tmtmtl30*

Essentially with prediction and airlocks you used to just teleport to the other side of an airlock when going through it. Now you just go through effortlessly and it looks great!

### YAML Hot Reloading
*Contributed by DrSmugleaf and InquisitivePenguin*
<!-- https://github.com/space-wizards/RobustToolbox/pull/1571 -->

https://youtu.be/5QrNRLp5miM

Entities (stuff like walls, objects, players etc.) are composed of a set of components (stuff that defines if it's a food, tool, etc.). Our entities/prototypes are defined in YAML while the components are coded in C#. With YAML hot-reloading, we can modify things in the files for anything that's defined in YAML (Pretty much everything) and have it auto-update in game. Kinda like Garry's Mod.

This is super cool and will cut down on development time even more, since before you'd have to rebuild and restart the server if you messed up one line of YAML.

In SS13 coding terms, this is like reloading an item dm file while the server is running and seeing the effects immediately.

### RobustToolbox improvements for other games
*Contributed by Zumorica*

{{< imgw "/images/post/pr_26/pong" >}}

RobustToolbox, the game engine that SS14 uses, has been improved in a variety of areas to better support other games that may want to make use of it. For example, it now supports singleplayer games!

To aid development of new games, [singleplayer](https://github.com/space-wizards/RobustToolboxTemplateSingleplayer) and [multiplayer](https://github.com/space-wizards/RobustToolboxTemplate) templates have been created. Making use of these, we've created [Robust Pong](https://github.com/space-wizards/RobustToolbox-Examples-Pong), an example online game for anyone looking to learn how to use the engine. You can even try it out yourself by connecting to it on the hub!

We want to make RobustToolbox a game engine that allows you to **B**uild **Y**our **O**wn singleplayer or **N**etworked **D**ream games, and as such we will continue improving it in order to bring it to higher standards.

## Patrons

Thanks to Hunter James, Valinov, Nemmay, Jordan, Dan Griskardian, S.C., '-Y-, Jubal the Wizard, clyf, Kerb 755, Robin Rottstock, Altana, Wolfiten, Durp, Joshington Awesomahee, Eric VW, Evan Armstrong, Jan Doodt, Christopher Marmentini, Curtis Pearson, Mono, Star Lord, creadth, DramaBuns, KrystalDisc, Darren Brady, Zandario, vifs, Bobberunio, CPM311, ThatGuyGW, dean, Await Future, Daniel Thompson, Acvisy, Tomeno

## Credits

The contributors since the last progress report were: 20kdc, Acruid, AJCM-git, BingoJohnson, bryce0110, BulletGrade, chairbender, Clyybber, collinlunn, daniel-cr, drongood12, DrSmugleaf, Elijahrane, Fortune117, GraniteSidewalk, ike709, Injazz, komunre, lzimann, Macoron, ManelNavola, MehimoNemo, metalgearsloth, mirrorcult, NIXC, Nukeuler123, PaulRitter, Peptide90, PJB3005, PJBot, Rember, RemieRichards, ShadowCommander, Silvertorch5, SweptWasTaken, TaralGit, tmtmtl30, UnderscoreX5, Visne, WlarusFromDaSpace, Ygg01, Zumorica

Many thanks to everybody who contributed. We couldn’t do this without you!

And Geoff
