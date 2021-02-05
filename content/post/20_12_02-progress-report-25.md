+++
title = "Progress Report #25: TITLE PENDING"
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

*Video of someone doing botany stuff

Botany is in! This includes trays, seeds, planting, harvesting, nutriments, weeds, pests, and plenty more! Botanists can finally supply the station with ~~drugs~~ food, making the station even more self-sufficient. As a bonus, adding new plants is trivial and doesn't require writing any C# code.

### UI improvements
*Screenshot of all the UI, including the context menu*



#### Action Hotbar
*Contributed by chairbender, building on earlier work by ShadowCommander*

We now have an actions hotbar, along with a window for searching available actions to put into the hotbar. Actions can be granted to the player, or be provided via items. They will automatically populate the hotbar when granted, and can be rearranged by dragging or removed via right click. The system currently supports instant, targeted, and toggle actions. Right now, we have a sceam and disarm action as well as item actions for toggling internals and lights.

There is still additional functionality planned for it, such as saving your layouts between rounds and allowing you to configure how actions auto-populate into it, but this is enough to allow us to start adding more fun and useful actions!

{{< imgw "/images/post/pr_25/hotbar" >}}
{{< imgw "/images/post/pr_25/actions" >}}

### Alerts System and UI
*Contibuted by chairbender*

What was previously known as "status effects" has been expanded into a more general "alerts" system, which allows contributors to easily define and modify the alert icons and tooltips. They also use significantly less bandwidth.

As shown below, the corresponding UI was improved to closely match our UI mockups. Alert tooltips now have formatted text and color, and the alerts live in an improved grid container which can dynamically expand as more alerts appear.

{{< imgw "/images/post/pr_25/alerts" >}}

### Traitor objectives
*Contributed by PaulRitter*

*Picture of objectives / someone completing them

### Improved Admin Menu
*Contributed by Exp111*

<video src="/video/pr_25/admin.mp4" autoplay muted loop playsinline></video>

### Gas tanks and masks
*Contributed by Zumorica*

<video src="/video/pr_25/tanks.mp4" autoplay muted loop playsinline></video>
{{< imgw "/images/post/pr_25/tanks" >}}

### Mortician's Menagerie (All the crematorium stuff)
*Contributed by RemieRichards

<video src="/video/pr_25/mortician.mp4" autoplay muted loop playsinline></video>

### Prettier window breaking
*Contributed by brndd & Macoron*

Windows make a sound when damaged and destroyed and drop glass shards, which can be refined back into sheets using a welder.

<video src="/video/pr_25/windows.mp4" autoplay muted loop playsinline></video>

### Power cells
*Contributed by brndd*

Ports Eris-style power cells. They come in three distinct sizes, S, M and L, each size having more charge than the last and fitting into different kinds of devices.

{{< imgw "/images/post/pr_25/cells" >}}

### LORD SINGULOTH <!-- We teased it last time but now it's in -->
*Contributed by unusualcrow and PaulRitter*

### Cigarettes and Matches
*Contributed by Ygg01*

**Insert a picture of a smoking detective?**

You can now roleplay as a hardboiled, chainsmoking noir detective.

### Cargo Telepad
*Contributed by GraniteSidewalk*

Although shuttles loom on the horizon after the upcoming physics rework is finished, we thought it'd be nice to add a placeholder to Cargonia. Incoming cargo crates will now be beamed to a tele-pad adjacent to the computer, rather than just appearing out of thin air.

<video src="/video/pr_25/telepad.mp4" autoplay muted loop playsinline></video>

### Smoke and foam chemical reactions
*Contributed by Radrark*

**Insert the video of space cleaner in action.**

Chemical reactions can now result in smoke or foam, just like in SS13.

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

## Technical details.

### Shaders Development Interface
*Contributed by TylerIN and *Whoever picks this up**

{{< imgw "/images/post/pr_25/shader" >}}

### Sandboxing
*Contributed by PJB*

### Perfomance improvements
*Contributed by Zumorica*
-SIMD atmos
-.NET 5.0
*Contributed by PJB*
-Map load speed

### Maybe talk about the removal of default grids and why it was a problem?

## Patrons

Thanks to acvisy, ancientpower, Big_McLarge_Huge, Bobberunio, Cakey, Calicifer, chairbender, Clusterfack, Creadth, Cyberate, Dean, Diklyquill, Dongle, Enzoman12, Krystal Disc, Mario, Micadurp, MrCroa, ninj4, November = Christmas, Quonn, ThatGuyGW, Tomeno, Secret Flowers, Showgun, Third, vifs_vestige, Wolfiten, Xenon Dragon, Zandario and NetGlitch for their monetary contributions.

## Credits

The contributors since the last progress report were: 20kdc, BananaFlambe, brndd,  chairbender, collinlunn, ColdAutumnRain, DrSmugleaf, DamianX, DTanxxx, exp111, FirinMaLazors, GlassEclipse, juliangiebel, Macoron, Markek1, ManelNavola, metalgearsloth, moonheart08, namespace-Memory, Nivrak, PaulRitter, PJB3005, RemieRichards, Rember, RedlineTriad, Rich-Dunne, ShadowCommander, StrawberryMoses, Swept, Tomeno, Ygg01, Zumorica, zionnBE.

Many thanks to everybody who contributed. We couldn’t do this without you!
