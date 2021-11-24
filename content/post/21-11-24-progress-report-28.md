+++
title = "Progress Report 28: Atmosia Rising"
author = "Timrod"
date = 2021-11-24
categories = [
    "Progress Report"
]
reddit = ""
thumbnail = "pr_28"
+++
The last couple of months have been a huge step forward for Space Station 14, with a total of 315 contributions made to the SS14 codebase between September 29th and November 3rd, and nearly 700 commits to SS14 and the RobustToolbox engine.
<!--more-->
During the last bi-weekly playtests, the servers were filled by an average of over 30 players, reaching peak counts of 60! To better distribute players across our servers, we put in a player cap.

This month, we've got everything from gun/trumpet hybrids and pneumatic cannons to small things.. like a complete overhaul of the game's sprite base and massive engine changes to allow for better shuttle movement. This report's contributions include:

---

## Content
### /tg/ Resprite

*Contributed by Swept*

No, it's not just the mystery juice Chemistry's been force-feeding you: Space Station 14 has switched sprite bases from CEV-Eris to /tg/, including walls, airlocks, tables and more. Saltern has been updated to this new, flatter look. Any reports of lights mysteriously appearing in walls are probably the mystery juice.

{{< imgw "/images/post/pr_28/resprite" >}}

---

### Grilles

*Contributed by Zumorica*

Returning with the changeover to the /tg/ spritebase are grilles, everyone's favorite easily-destroyed lattice of metal rods. Grilles can be found under windows all over Saltern, or in the hallways if the assistants get their hands on metal rods.

{{< imgstack "/images/post/pr_28/grilles" "/images/post/pr_28/maze" >}}

---

### Atmos

*Contributed by Zumorica and moony*

moony undertook the Herculean task of mapping in Atmos on Saltern, using the pipes and vents contributed by Zumorica. moony also contributed a system for coloring pipes when mapping to allow Engineering to more efficiently light the station on fire. Life expectancies aboard Space Station 14 have never been lower.

{{< imgw "/images/post/pr_28/atmos_fire" >}}

{{< imgw "/images/post/pr_28/gas_miners" >}}

---

### Solars

*Contributed by 20kdc*

20kdc fixed up the station's solars and mapped them in on Saltern, giving the station a clean new power source and the Chief Engineer another thing to yell about over the radio.

{{< imgw "/images/post/pr_28/solars" >}}

---

### Damage Visualizers

*Contributed by vulppine*

{{< imgw "/images/post/pr_28/thats_alot_of_damage" >}}

vulppine added damage visualizers, so that Security can tell for sure when someone is dead and is therefore safe to arrest for the crime of being dead.

---

### Improvised Pneumatic Cannons

*Contributed by mirrorcult*

{{< video-auto "/video/pr_28/pneumatic_cannons.mp4" >}}

Built from a gas tank, some pipes, a wire, and a pneumatic cannon, everyone's favorite school science project is now available to craft after finally being added to the codebase since the last progress report. Just keep them away from the Clown.

---

### Armor

*Contributed by mirrorcult*

Armor found throughout the station now actually reduces incoming damage, giving Security a bit more time to react before being overwhelmed by the grey tide.

{{< imgstack "/images/post/pr_28/armor_1" "/images/post/pr_28/armor_2" >}}

---

### Electrocution, Stuttering, and Jittering

*Contributed by Zumorica*

{{< video-auto "/video/pr_28/shocking.mp4" >}}

Wires now shock anyone who touches them without insulated gloves. They can also be placed under grilles to electrify them. Nanotrasen reminds you that they do not condone the use of electrified grilles as the walls of so-called "rage cage" style fighting arenas.

In addition, Zumorica added stuttering and jittering, so anyone passing by will be able to tell from the convulsions that you just touched a high-voltage wire and are not, in fact, dead.

{{< imgw "/images/post/pr_28/rage_cage" >}}

---

### Adminhelp Interface

*Contributed by 20kdc*

20kdc built a basic adminhelp interface, complete with the *bwoink* noise, for reporting issues aboard the station that require the intervention of a server admin. Speaking of which...

{{< imgw "/images/post/pr_28/dead_clowns" >}}

---

### Bar Content

*Contributed by Daemon*

Deciding that the station did not yet have enough ways to get drunk, Daemon added some new drinks and went back to fix existing ones. In unrelated news, Fourteen Loko is now legal to consume and serve after being banned galaxy-wide.

{{< imgw "/images/post/pr_28/bar" >}}

---

### Bluespace Artillery

*Contributed by moony*

Centcom's Bluespace Artillery has been re-armed.

{{< video-auto "/video/pr_28/explode.mp4" >}}

---

### Pinpointers

*Contributed by Macoron*

Macoron added in the Pinpointer, giving the Captain an exciting new way to ignore the location of the nuclear disk.

{{< imgstack "/images/post/pr_28/pinpointer_1" "/images/post/pr_28/pinpointer_2" >}}

---

### Power-Reading Multitools

*Contributed by 20kdc and Efruit*

Efruit made a basic interface for reading power with multitools, which was finalized and implemented by 20kdc. Multitools can now tell you where all that power is going, and when the station's power grid is violating the laws of physics.

{{< imgw "/images/post/pr_28/multitool" >}}

---

### Shutters and Blast Doors

*Contributed by Mirrorcult*

Mirrorcult added shutters and blast doors, coming soon to a superheated burn room near you.

{{< imgstack "/images/post/pr_28/burn_chamber_1" "/images/post/pr_28/burn_chamber_2" >}}
{{< imgw "/images/post/pr_28/papers_please" >}}

---

### Gunpet

*Contributed by Mirrorcult*

Mirrorcult also added the Gunpet. I think that's really all we need to say here.

{{< imgw "/images/post/pr_28/gunpet" >}}

---

### Personal AIs

*Contributed by 20kdc*

20kdc brings back an SS13 favorite in the form of the pAI, your silicon friend who is like a regular AI, but without the ability to open doors on command or use their army of heavily-armed cyborgs to purge the station.

{{< imgw "/images/post/pr_28/pai" >}}

---

### Shuttle Rotation

*Contributed by metalgearsloth*

{{< video-auto "/video/pr_28/whens_rotation.mp4" >}}

metalgearsloth added a full rotation system for shuttles, allowing anyone with access to a shuttle console the ability to give the entire crew motion sickness.

{{< imgw "/images/post/pr_28/fighter_shuttle" >}}

---

### APC Device Networks and Light Switches

*Contributed by juliangiebel*

Julian added a method for linking devices through the APC power cables connected to them, and then implemented the first linked device in the form of light switches that toggle all lights connected to an APC. No longer will the Mime have to smash all the lights on the station to achieve total darkness and construct a mime nest.

{{< imgstack "/images/post/pr_28/mime_on" "/images/post/pr_28/mime_off" >}}

---

### Reinforced Plasma Windows

*Contributed by SethLafuente*

Seth added reinforced plasma glass windows to keep the toxins in the burn room instead of all over the station.

{{< imgw "/images/post/pr_28/rplasma" >}}

---

## Engine Updates and Backend Changes

### ECS Verbs Menu

* Contributed by ElectroJr*

ElectroJr updated the verbs menu to the Entity-Component-System (ECS) standard, allowing assistants to break into Engineering with more efficient and readable code.

{{< imgw "/images/post/pr_28/verbs" >}}

---

### RSI Diff Bot

*Contributed by Mirrorcult*

Mirrorcult created and ported a bot to detect changes to RSI files used for sprites. While not something most users will see, it's a major change for contributors looking to add or modify sprites.

{{< imgw "/images/post/pr_28/rsi_diff" >}}

---

### Construction Graph Language 2

*Contributed by Zumorica*

Zumorica updated the way SS14 handles crafting and construction, expanding the type of actions construction can ask for beyond "Use this tool" or "Insert this material" and making construction steps that weren't previously shown in the menu (such as inserting machine parts) show up properly in the construction recipe.

---

### Badmin Query Language

*Contributed by moony*

Moony added BQL, or Badmin Query Language. It's like SQL, except you can use it to turn all the station's walls into bananas.. or electrified grilles.

{{< imgw "/images/post/pr_28/bql" >}}

---

### Warning Fixes and XAML UI

*Contributed by Visne*

Visne contributed a ton of stuff behind the scenes, including fixing 300 compiler warnings and changing many of the pop-up UIs (including paper, the Gravity Generator, APCs and the research console) into XAML.

---

### A Whole Bunch of Refactors and Code Quality fixes

*Contributed by metalgearsloth*

metalgearsloth fixed a number of important things on the back-end, including making grid bounds more accurate and fixing grid collisions. No longer will your custom-made shuttle phase right through the station instead of ramming into it at full speed.

Also contributed were a number of process optimizations to reduce server allocations.

---

## Notable Bug Fixes

### Gender Restoration

*Fixed by vulppine*

vulppine fixed a bug that stole the station's genders. No longer will crew members be referred to as an "it", unless the Captain raids Botany's secret stash again.

---

### Name and Job Restrictions

*Fixed by metalgearsloth and ike709*

ike709 restricted character names to alphanumeric characters, while metalgearsloth added length restrictions to both names and jobs to prevent players from changing their job title to the entire text of *Moby Dick*. Now, you'll just have to stick to being called Ishmael.

---

### Rotation and Sound Position Fixes

*Fixed by ShadowCommander and Paul Ritter*

In space, no one can hear you honk. At least, they could - until ShadowCommander and Paul fixed sound positions so that every sound being made on the station wasn't being broadcast into deep space.

---

### Admin Locker Capture

*Fixed by Zumorica*

Zumorica fixed a bug that allowed players to capture an admin ghost inside a locker, though really.. if the admin got captured in the first place, do they deserve to get out?

---

## [OpenDream](https://github.com/wixoaGit/OpenDream/tree/RobustToolbox)

As if powering a remake of Space Station 13 wasn’t enough, the RobustToolbox engine is also being used to power OpenDream, a new project that aims to be a free and open-source alternative to BYOND itself. BYOND is very dated as an engine, and OpenDream aims to improve many aspects of it such as performance, new features, and so on. Even if SS14 exists, being able to run and maintain existing SS13 codebases off-BYOND is always important for reasons such as preservation and nostalgia.

OpenDream uses the RobustToolbox engine as a starting point, including its existing networking, UI and rendering code and will integrate the SS14 launcher and account system - allowing players to connect to OpenDream-hosted SS13 servers using the same launcher they already use for SS14. RobustToolbox is particularly well-suited for the task because it has already integrated features inspired from Space Station 13 and other BYOND games.

OpenDream aims to eventually improve and extend BYOND itself. This means that eventually, games making use of OpenDream’s new features will not be able to run on BYOND itself. It also does not aim to allow you to connect to OpenDream server with the official BYOND client or vice versa. In the future, SS13 servers will be able to make the switch to OpenDream.

You can find the [Discord server for OpenDream here](https://discord.gg/wBKPVXXKty).

---

## Credits

### Contributors Since Last Progress Report
20kdc, Alex Evgrashin, Bingo Johnson, CrudeWax, DrSmugleaf, Efruit, Fortune117, Galactic Chimp, JasperJRoth, ElectroSr, Mid-randalf, PJB, Paul Ritter, PetMudstone, Saphire, SethLafuente, ShadowCommander, StStevens, Swept, Timrod, Visne, Watermelon914, Ygg01, Daemon, Zumorica, ike709, juliangiebel, metalgearsloth, mirrorcult, moony, vulppine

### Patrons

Alex Tempest, Altana, Anthony Fleck, Await Future, Blaise M., Bobberunio, Citizen Battle, clyf, CPM311, Dan Griskardian, Daniel Thompson, Darren Brady, Daskata, DramaBuns, Durp, Eric VW, Ethan Keller, Evan Armstrong, Farewell Fire, Florian, Jack Rose, Joshington Awesomahee, Kerb 755, KrystalDisc, Michael Land, Mono, Robin Rottstock, S.C., spinnermaster, ThatGuyGW, The Hateful Flesh, Tomeno, Valinov, vifs_vestige, Viridian, Will M.
