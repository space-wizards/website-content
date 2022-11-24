+++
title = "Progress Report #38: Lobby & Bobby"
author = "DrSmugleaf & ike709"
date = 2022-11-30
categories = [
    "Progress Report"
]
reddit = ""
thumbnail = "pr_38" TODO
+++
TODO - This is where the short description goes, it'll be shown under each blog post on the list of blog posts. Don't touch the `<!--more-->` tag, that's important.
<!--more-->

<!-- Useful tags: 
Section splitter: {{< newsection >}}
Picture: {{< imgw "/images/post/pr_38/picture_name" >}}
Autoplay video (no audio): {{< video-auto "/video/pr_38/file_name.mp4" >}}
Paused vid (can do audio): {{< video-audio "/video/pr_38/file_name.mp4" >}}

Don't forget to run optipng on the pics then the script to convert them to webp.
-->

{{< newsection >}}
## Content
### UI Refactor
*Contributed by Jezithyr, DrSmugleaf, & wrexbe*

The UI system has been *massively rewritten*. This lays the groundwork for easier-to-make and better-looking UIs, as well as improved support for UI themes and other niceties. Unfortunately there's not really any player-facing changes to show off (even though the entire HUD was rewritten too), but the next section will showcase a wonderful new UI that wasn't possible before.

{{< newsection >}}
### Oldchat/BYOND Chat/SS13 Chat
*Contributed by vulppine*

Oldchat, the ~~objectively better~~ oft-requested HUD layout from Space Station 13, is finally here! It's disabled by default, but players can pick their preferred HUD layout in the Graphics settings.

There's still some room for improvement, but it's off to a great start! And yes, you can resize the width of it.

{{< imgw "/images/post/pr_38/oldchat" >}}

{{< newsection >}}
### Element Picker
*Contributed by DrSmugleaf*

Another UI goodie is the new Element Picker, which allows developers to look at all of the different components of a UI. This'll make debugging and making new UIs a lot easier!

{{< video-audio "/video/pr_38/picker.mp4" >}}

{{< newsection >}}
### Tomb of the Unknown Employee
*Contributed by Carbonhell*

{{< imgw "/images/post/pr_38/tomb" >}}

*Here rests an unknown employee*
*Unknown by name or rank*
*Whose acts will not be forgotten*

On a serious note, the Tomb of the Unknown Employee was added to Space Station 13 in honor of a contributor who died in a car accident. It now stands as a monument to all of the contributors who have given a piece of themselves to make these games special and who have since passed away.

It can now be found in Space Station 14 at Central Command.

{{< newsection >}}
### Night at the Orchestra
*Contributed by EmoGarbage404*

A shipment of instruments intended for the Nanotrasen Symphony Orchestra somehow ended up in Cargo, where the Quartermaster promptly traded them to the Head of Personnel for an emitters crate. The HoP ~~requests~~ demands that every crewmember who can play an instrument report to the Chapel to practice for his new musical production.

Here's a look at all of the available instruments:

{{< imgw "/images/post/pr_38/instruments" >}}

{{< newsection >}}
### Plant Genetics
*Contributed by notafet*

After once again rediscovering the twice-lost works of Gregor Mendel, the Botanist is proud to report that plants do, in fact, have genes. New guidelines are being disseminated on how to mutate and cross-pollinate plants. A variety of new genetic plant traits have also been discovered, such as _Seedless_, _Sentient_, or _Bioluminescent_. Happy harvesting!

Hopefully bioluminescence is self-explanatory, but here's a visual aid:

{{< imgw "/images/post/pr_38/genes" >}}

{{< newsection >}}
### Containment Field Rework
*Contributed by keronshb*

After a bit of tinkering, the Chief Engineer was able to make some improvements to Lord Singuloth's containment field generators. New improvements include only needing four generators, being able to contain a level 4 singularity (DANGER: Only if there's room), and more!

{{< imgw "/images/post/pr_38/singuloth" >}}

{{< newsection >}}
### Chef Content Update
*Contributed by notafet*

To celebrate three consecutive shifts without a mass-casualty event, Central Command has sent a new recipe book to the Chef. There's now a wider variety of food to cook, more items in Dinnerware vendors, new seeds for Botany, and more! Let's get cooking!

{{< imgw "/images/post/pr_38/chef" >}}

{{< newsection >}}
### Nuclear Operative Win Conditions
*Contributed by vulppine*

Central Command has reached an agreement with the Syndicate to produce new guidelines for incidents involving nuclear operatives. The newly-expanded victory conditions are as follows:

#### Syndicate Major Victory
- The nuclear bomb explodes on the station.
- The crew escapes, but the nuclear bomb was armed when they escaped.
- The nuclear bomb was delivered to Central Command.
#### Syndicate Minor Victory
- The crew escapes, but leaves all nukies alive.
- The crew escapes, and some nukies are alive, but they don't bring the disk with them.
#### Neutral Victory
- The nuclear bomb explodes off-station.
#### Crew Minor Victory
- The crew escapes, and some nukies are alive, but they manage to secure the disk.
#### Crew Major Victory
- All nuclear operatives die.
- The crew manages to blow up the nuclear operative outpost.

{{< newsection >}}
### Station Records
*Contributed by vulppine*

Engineering reports that they've finally had a breakthrough restoring the station records database after the H.O.N.K. Virus incident of 2561. The crew records are back online and can now be viewed at any Station Records Computer. Medical and Security records, however, are still missing.

{{< imgw "/images/post/pr_38/records" >}}

{{< newsection >}}
### SS14 Sign
*Contributed by EmoGarbage404*

Engineering reports that they finally found a machinist that can count to 4, and the new Space Station 14 sign has been completed and installed.

{{< imgw "/images/post/pr_38/sign" >}}

{{< newsection >}}
### Biomass
*Contributed by Rane*

The eggheads over in Research & Development raised a fuss about how cloning pods producing clones from nothing violates the "conservation of mass" and a variety of other technobabble. To shut them up, Medical has agreed to start using biomass to build new clones. A new Biomass Reclaimer has been installed to produce it.

{{< newsection >}}
### Revenants
*Contributed by EmoGarbage404*

The Chaplain asks all crewmembers to be on alert for evil spirits haunting the station. Revenants are evil ghosts with a variety of ways to ~~be annoying~~ cause mischief and disrupt the normal functioning of the station.

{{< imgw "/images/post/pr_38/revs" >}}

{{< newsection >}}
### Chameleon Clothing & Voice Masks
*Contributed by Macoron & vulppine*

Central Command alerts all Security personnel that Syndicate infiltrators now have access to sophisticated disguises that can alter their clothing and voice at-will.

If you witness anyone wearing chameleon clothing or singing with Elvis's voice, shoot first and clone later.

{{< video-auto "/video/pr_38/chameleon.mp4" >}}

{{< newsection >}}
### Pneumatic Valve
*Contributed by notafet*

The Council of Atmosian Elders, the elite few Atmos Techs who treat the laws of physics as more of a polite suggestion, have announced a new atmospherics device. The Pneumatic Valve will transfer gas from an inlet port to an outlet port, but only if the third control port is connected to a pipe with sufficient pressure.

This seemingly simple device is receiving so much attention because atmospherics is now Turing-complete and could theoretically compute anything. We eagerly await the horrors this will inevitably produce.

To jumpstart this process, we'll give you a hint. Here's an unlabeled diagram of a NAND gate that works from left to right: 

{{< imgw "/images/post/pr_38/nand" >}}

{{< newsection >}}
### Gas Recyclers
*Contributed by notafet*

To improve the station's self-sustainability, Central Command has provided schematics for a new Gas Recycler. These machines take carbon dioxide or nitrous oxide, and produce oxygen or nitrogen respectively. The only caveat is that the inputted gas must have a pressure of at least 3 MPa and a temperature of at least 300 Celsius. That means any gasses coming out of it won't be safe for human consumption without further processing.

TODO: Make a pic since the PR pic has drawings on it.

{{< newsection >}}
### Eye Damage
_Contributed by Rane_

Due to budget cuts, Medical reports that they can no longer afford to supply the crew with indestructible eyeballs. Engineers need to be extra cautious, as welding without protection will now damage their vision.

Crewmembers experiencing blurry vision are advised to report to medical for a dose of oculine or a pair of prescription glasses.

TODO: Pic of blurry vision?

{{< newsection >}}
### Machine Upgrades Overhaul
*Contributed by EmoGarbage404, Rolfero, 0x6273, and possibly others*

The Research & Development team have released a plethora of schematics for upgrading all sorts of machinery across the station to take advantage of better capacitors, scanning modules, et cetera. Scientists have been seen scurrying through the corridors hauling Rapid Part Exchange Devices (RPEDs) and sacks of fancy parts.

Virtually every important machine that has upgradeable components will now benefit from having them upgraded.

{{< newsection >}}
### Cargo Economy Balance
*Contributed by metalgearsloth*

Central Command's ~~expert~~ adequate team of economists have revised Cargo's pay scale. Cargo's passive income has been reduced by 80% in exchange for significantly bigger payouts when selling crates. The shuttle can also be called more frequently to facilitate this increased workload.

{{< newsection >}}
### Generic Stats Windows
*Contributed by metalgearsloth*

To help facilitate the Cargo economy rebalance, support for generic stats windows has been added to help developers quickly compare a value across all items for balancing purposes.

Here's what it looks like for Cargo sell prices:

{{< imgw "/images/post/pr_38/sale" >}}

{{< newsection >}}
### NPC & Pathfinding Refactor
*Contributed by metalgearsloth*

People who have been following SS14 for a long time may remember that advanced NPCs were implemented all the way back in 2020 during [Progress Report 22](https://spacestation14.io/post/20-06-07-progress-report-22/#utility-ai-still-wip). Ever since then they've largely been untouched and left to rot as the rest of the project evolved around them, but not anymore!

NPC AI and pathfinding have been completely rewritten to bring it up to par with everything else. There's not much to visually showcase, but there are some notable improvements:

- Pets no longer try to run away when buckled/pulled
- Space Carp now try to follow Space Dragons
- Automated turrets now exist
- NPCs should get stuck less when pathfinding
- Pathfinding is now multi-threaded
- Pathfinding now supports things like windoors and portals
- Pathfinding now accounts for scenarios like needing to pry doors or break walls to get somewhere
- NPCs now need line-of-sight to acquire a target

{{< newsection >}}
### Radiation Refactor
*Contributed by Macoron*

Radiation spreading has been reworked. It can now be blocked by structures like walls, shutters, or airlocks and will lose intensity over distance. As an added bonus it has also been significantly optimized.

Here's a developer debug view of what radiation spreading looks like, note that the radiation source is the tile below the scrubber:

{{< imgw "/images/post/pr_38/rads" >}}

{{< newsection >}}
### Wizard's Den Roleplaying Rules
*Contributed by a bunch of people*

One of the hallmarks of Space Station 13 is the wide variety of roleplaying servers with different expectations and standards for how players should behave. To facilitate this in SS14, we've written a new, stricter roleplaying-focused ruleset. It's now live on the server Salamander, which is now denoted in the server list as `[US West RP]`. This will not replace the existing rules on our other servers, nor the custom rulesets of community servers.

TODO: Screenshot of RP rules page on Salamander.

{{< newsection >}}
### Extended Rework & Ramping Event Scheduler
*Contributed by mirrorcult*

The Extended mode has been reworked into a new Survival mode. No antagonists exist at roundstart, but the midround shenanigans and chaos will get more frequent and more severe as time goes on. This is somewhat similar to Space Station 13's Dynamic gamemode, but with a distinct implementation.

{{< newsection >}}
### Playtime Tracking & Role Restrictions
*Contributed by PJB3005*

Total playtime and job playtime are now tracked. The most notable change associated with this is that various jobs are now restricted based on either total playtime requirements or specific job/department playtime requirements. This is to force newer players into easier roles like department interns while limiting roles with more authority to more experienced players.

All of this information is conveyed through the newly updated UI for job selection:

TODO: I don't have much playtime post-tracking so I can make a short vid of the UI

{{< newsection >}}
### Melee Refactor
*Contributed by metalgearsloth*

A variety of changes and improves have been made to melee combat:

- Light attacks happen on click and strike at wherever your mouse is.
- Heavy attacks happen after a wind-up on right click. These are wide attacks that do extra damage but with a higher stamina cost.
- Disarm is now on right click when you have a free hand.
- The context menu is now disabled in combat mode.
- Attack swings are now predicted, meaning you shouldn't see a delay. The damage effect still only occurs when the server confirms a successful hit.
- The server will now try to adjust for network lag when deciding if your attack is a hit or a miss, which should result in less cases of attacks missing when it looks like they should hit. Or to explain it another way, the server now tries to do a better job of considering where targets were from your perspective when you attacked.

{{< newsection >}}
### New Inventory Stripping UI
*Contributed by ElectroSR*

The UI for interacting with other players' inventories has been completely remade; instead of a list of buttons, it now resembles the UI from Space Station 13 where you can view all of the slot contents of players (minus their pocket contents, of course).

{{< video-auto "/video/pr_38/strip.mp4" >}}

{{< newsection >}}
### Character Setup UI Tweaks
*Contributed by vulppine*

The character setup UI has been changed to be part of the lobby UI, rather than a separate screen.

{{< imgw "/images/post/pr_38/setup" >}}

{{< newsection >}}
## Mapping
### Kettle Station
*Contributed by Cheackraze*

Kettle Station is now in service as the latest mid-high population map.

{{< imgw "/images/post/pr_38/kettle" >}}

{{< newsection >}}
## Credits
### Contributors Since Last Progress Report
<!-- Use the script in SS14's tools dir. Make sure any subsection authors have their names replaced if they have an override in the script. -->
*1430 pull requests, authored by: 0x6273, 20kdc, Ablankmann, Acruid, AJCM-git, aklos, asperger-sind, BasedUser, biometricPsychography, brainfood1183, Carbonhell, Checkraze, ChilbroBaggins, civilCornball, corentt, Daemon, DeathCamel58, DerSheppard, DoctorBeard, DogZeroX, DrSmugleaf, eclips_e, ElectroSR, Emisse, EmoGarbage404, estacaoespacialpirata, exincore, Flareguy, FunkySphere, GTRsound, HoidC, igorsaux, ike709, Illiux, Interrobang01, Jackrost, jessicamaybe, Jezithyr, jproads, juliangiebel, JupiterFive, JustinTrotter, KaiShibaa, keronshb, kognise, lapatison, LarryRussian, Level10Cybermancer, LordEclipse, Macoron, martin69420, Mervill, metalgearsloth, Mirino97, mirrorcult, moony, Morb0, Myctai, Nairodian, NoobyLegion, notafet, och-och, OctoRocket, OldDanceJacket, Pangogie, PaulRitter, Peptide90, PJB3005, PJBot, PrPleGoo, Rane, Rapidgame7, Rinkashikachi, rolfero, Scribbles0, ShadowCommander, SirDragooon, Slyfox333, SpaceManiac, Stealthbomber16, TaralGit, TekuNut, theashtronaut, themias, tomasalves8, tsp01, Veritius, Visne, Vordenburg, vulppine, Willhelm53, WPRobson, wrexbe, YanehCheck, Ygg01, ZeroDiamond, Zumorica*

### Patrons
<!-- Just bully PJB for these -->
*Alex Fry, Altana, Anthony Fleck, AquaDraco, Arthur Norris, Austin Nelson, Bobberunio, BokChoy, Brandon Campbell, BrittaQueenBee, Callum Tubrett, Carbonhell, clyf, Cormos Lemming, CPM311, Dan, Dan Griskardian, Daniel Thompson, Darren Brady, Daskata, DramaBuns, Durp, Eric VW, Ethan Keller, Evan Armstrong, Farewell Fire, Florian, Gothryd, Greggo Austin, grhmhome, Hamcha, hh, Jacob Schramm, James Andrew Peoples Jr, Jeremy Hernandez, Jex N, John Edward Hamilton Barchard, Joshington Awesomahee, Kai k, KevKev, Koyki, Kris Piper, lapatison, Late Fox, liltenhead, Matouš Hrdlička, Matthew C Miklaucic, Mikhail, Mitchell Marry, Mono, Nathan Zaldivar, Nicholas Hillblom, Nicholas Williamson, osborn, Oxyclean114, Pasemi, Peter "Azmond" Newhouse, Phillip Inman, Ramiro Agis, Rasmus Cedergren, Robin Rottstock, Serianas, spinnermaster, SpydAxe, ThatGuyGW, The Hateful Flesh, Tomeno, Uinseann, Unknown Kiwi, vifs_vestige, Viridian, Will M., Wrexbe, Zandario*
