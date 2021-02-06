+++
title = "Progress Report #25: Tired of Waiting"
author = "Many people on Discord"
date = 2020-12-02
categories = [
    "Progress Report"
]
reddit = ""
+++

<!--more-->

## Playtest

We're proud to announce that Space Station 14 is [now available](https://store.steampowered.com/app/1255460/Space_Station_14/) through the new Steam Playtest feature. Originally we were planning to do a full release through Early Access, but we felt that a more limited release was a better match for the current state of SS14 development.

To gain access, simply visit the SS14 store page and click Request Access. We set the number of players that we want to grant access to, and Steam handles the rest. If you don't receive access immediately, just be patient! More users will be added over time.

We don't currently have a set date for a wider Early Access release, it depends on how well the playtests go and how quickly more content is added.

Much work went into last minute preparations to get ready for Steam; combined with exams, ~~the devs all playing Factorio~~, and the holidays, this progress report is unusually light. But we still have some new treats!

## New Content!

### Botany
*Contributed by Zumorica*

Botany is in! This includes trays, seeds, planting, harvesting, nutriments, weeds, pests, and plenty more! Botanists can finally supply the station with ~~drugs~~ food, making the station even more self-sufficient. As a bonus, adding new plants is trivial and doesn't require writing any C# code.

{{< imgw "/images/post/pr_25/botany" >}}

### UI improvements

{{< imgw "/images/post/pr_25/newui" >}}

#### Action Hotbar
*Contributed by chairbender, building on earlier work by ShadowCommander*

We now have an actions hotbar, along with a window for searching available actions to put into the hotbar. Actions can be granted to the player, or be provided via items. They will automatically populate the hotbar when granted, and can be rearranged by dragging or removed via right click. The system currently supports instant, targeted, and toggle actions. Right now, we have a sceam and disarm action as well as item actions for toggling internals and lights.

There is still additional functionality planned for it, such as saving your layouts between rounds and allowing you to configure how actions auto-populate into it, but this is enough to allow us to start adding more fun and useful actions!

{{< imgw "/images/post/pr_25/hotbar" >}}
{{< imgw "/images/post/pr_25/actions" >}}

#### Alerts System and UI
*Contibuted by chairbender*

What was previously known as "status effects" has been expanded into a more general "alerts" system, which allows contributors to easily define and modify the alert icons and tooltips. They also use significantly less bandwidth.

As shown below, the corresponding UI was improved to closely match our UI mockups. Alert tooltips now have formatted text and color, and the alerts live in an improved grid container which can dynamically expand as more alerts appear.

{{< imgw "/images/post/pr_25/alerts" >}}

#### Top Menu Improvements
*Contributed by chairbender*

Updated the look and feel of the top menu and added a button for the new actions window. Additionally, all of the hotkey reminders underneath each menu item will now update if you rebind them to other keys.

{{< imgw "/images/post/pr_25/topbar" >}}

#### Improved Inventory / Hand Slots UI
*Contributed by chairbender*

Among a few visual tweaks to the active hand / item action highlight and the item status indicators, the new bottom layout brings all the item slots closer together in the center, which should make it easier to move the mouse between the slots.

{{< imgw "/images/post/pr_25/bottombar" >}}

#### Job Preference improvements
*Contributed by Rockdtben*

{{< imgw "/images/post/pr_25/pref" >}}

### Traitor Gamemode & Objectives
*Contributed by PaulRitter*

Added a general framework for antagonist objectives, and a basic implementation of the traitor gamemode. Traitors get objectives at roundstart and complete them over the course of the round, which can only end via a shuttle call. On roundend, all players will see who the traitors were, what objectives they had, and whether they completed their objectives.

Implemented objectives so far are:
- Steal the Captain's ID
- Die a glorious death
- Survive
- Kill a random person

The objectives are built upon a robust system, enabling the quick and easy addition of more objectives in the future. These can be thought of as a proof-of-concept.

### Traitor Deathmatch Gamemode
*Contributed by 20kdc, with PDA redemption machine sprite by Tomeno*

Expanding upon the new traitor mode, this gamemode is essentially a free-for-all, but with traitor uplinks for everyone to spice things up.

### Improved Admin Menu
*Contributed by Exp111*

The admin menu was mentioned in the last progress report but it's gotten some new features added.

<video src="/video/pr_25/admin.mp4" autoplay muted loop playsinline></video>

### Gas tanks and Internals
*Contributed by Creadth and Zumorica*

<video src="/video/pr_25/tanks.mp4" autoplay muted loop playsinline></video>
{{< imgw "/images/post/pr_25/tanks" >}}

### Gas Canisters
*Contributed by 20kdc, clement-or, and ike709*

Gas canisters have been added for all implemented gasses, plus the classic yellow toxins canister for all of your mixing needs!

<video src="/video/pr_25/canisters.mp4" autoplay muted loop playsinline></video>
*Editor's note, these tank sprites have been replaced with tgstation's sprites.

### Mortician's Menagerie (All the crematorium stuff)
*Contributed by RemieRichards

The Traitor's ~~murderbone victims~~ targets won't be left littering the halls, because the morgue is now fully equipped with functioning morgue trays, body bags, and a crematorium.

<video src="/video/pr_25/mortician.mp4" autoplay muted loop playsinline></video>

### Prettier window breaking
*Contributed by brndd & Macoron*

Windows make a sound when damaged and destroyed and drop glass shards, which can be refined back into sheets using a welder.

<video src="/video/pr_25/windows.mp4" autoplay muted loop playsinline></video>

### Power cells
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

<video src="/video/pr_25/upgrade.mp4" autoplay muted loop playsinline></video>

### Disarming
*Contributed by Zumorica*

Tiders can now liberate harmbatons from Security Officers! Disarming has been added as an action to the new action hotbar.

<video src="/video/pr_25/disarm.mp4" autoplay muted loop playsinline></video>

### Cigarettes and Matches
*Contributed by Ygg01*

You can now roleplay as a hardboiled, chainsmoking noir detective.

<video src="/video/pr_25/cig.mp4" autoplay muted loop playsinline></video>

### Cargo Telepad
*Contributed by GraniteSidewalk*

Although shuttles loom on the horizon after the upcoming physics rework is finished, we thought it'd be nice to add a placeholder to Cargonia. Incoming cargo crates will now be beamed to a tele-pad adjacent to the computer, rather than just appearing out of thin air.

<video src="/video/pr_25/telepad.mp4" autoplay muted loop playsinline></video>

### Smoke and foam chemical reactions
*Contributed by Radrark*

Chemical reactions can now result in smoke or foam, just like in SS13.

<video src="/video/pr_25/reaction.mp4" autoplay muted loop playsinline></video>

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
- Magboots. *Contributed by PJB*
- Context Menu improvements. *Contributed by daniel-cr*

## Technical stuff

### Mapping Merge Driver
*Contributed by 20kdc based on work by DrSmugleaf*

How a merge driver is supposed to work:

There are two "finished" branches to merge, and the "common base".
The goal of the merge driver is to apply the changes made by both branches from the common base, inferring what those changes are, exactly, from the data in the common base.

For example, given these two hypothetical strings that you are supposed to merge:
A:`ABCDEF`
and
C:`ABCXDG`
you can't reliably merge these without ignoring any deletions that were intentionally made in one branch and not another.
But if you know of the common base string, B:`ABCDE`, then you know that A adds F, while C removes D and adds X and G.
Therefore, you know the correct answer is `ABCXEFG` or `ABCXEGF`.
This is the basic principle behind why a merge driver must receive 3 sources - it uses the common base to determine what changes each branch made.

### XamlUI
*Contributed by PaulRitter*
- XamlIL
Compiles Xaml-Resources into IL-Code and weaves it into the Assembly to allow us to now model our UI (almost) entirely in XAML. In short, it converts Xaml-UI-Definitions into Code-UI-Definitions.
Using a framework like XamlX for this allows us to later add many more IL-Emitters to automatically do things like insert `Loc.GetString()`-Calls etc.
- Code-Behind
You are able to name controls which will then be turned into properties of your corresponding C#-Class. This way you can directly access the UI you defined in XAML in your Code.

- Sandboxing *Contributed by PJB*
- Perfomance improvements *Contributed by Zumorica*
- SIMD atmos *Contributed by Zumorica*
- .NET 5.0 *Contributed by Zumorica*
- Map load speed *Contributed by PJB*
- Damage rework *Contributed by DrSmugleaf*

## Patrons

Thanks to acvisy, ancientpower, Big_McLarge_Huge, Bobberunio, Cakey, Calicifer, chairbender, Clusterfack, Creadth, Cyberate, Dean, Diklyquill, Dongle, Enzoman12, Krystal Disc, Mario, Micadurp, MrCroa, ninj4, November = Christmas, Quonn, ThatGuyGW, Tomeno, Secret Flowers, Showgun, Third, vifs_vestige, Wolfiten, Xenon Dragon, Zandario and NetGlitch for keeping the lights on.

https://imgur.com/66NENcl

## Credits

The contributors since the last progress report were: 20kdc, Acruid, AJCM-git, BananaFlambe, bhespiritu, brndd, chairbender, Clyybber, ColdAutumnRain, collinlunn, DamianX, daniel-cr, DmitriyRubetskoy, DmitriyZodiak, DrSmugleaf, DTanxxx, exp111, Git-Nivrak, GraniteSidewalk, ike709, JohnGinnane, juliangiebel, kira-er, komunre, LetterN, lzimann, Macoron, ManelNavola, Markek1, metalgearsloth, mirrorcult, moonheart08, namespace-Memory, Nukeuler123, PaulRitter, PJB3005, Radrark, RedlineTriad, Rember, RemieRichards, Rich-Dunne, rneuser, Rockdtben, SaphireLattice, ShadowCommander, SweptWasTaken, Tarlan2, tmtmtl30, Tomeno, Ygg01, ZeWaka, zionnBE, Zumorica

Many thanks to everybody who contributed. We couldn’t do this without you!
