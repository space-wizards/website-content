+++
title = "Progress Report #33: Delta Variant"
author = "DrSmugleaf, ike709, and Timrod"
date = 2022-04-24
categories = [
    "Progress Report"
]
reddit = ""
thumbnail = "pr_33"
+++
There's so many changes we couldn't figure out how to cover them all!
<!--more-->

<!-- Useful tags: 
Section splitter: {{< newsection >}}
Picture: {{< imgw "images/post/pr_33/picture_name" >}}
Autoplay video (no audio): {{< video-auto "/video/pr_33/file_name.mp4" >}}
Paused vid (can do audio): {{< video-audio "/video/pr_33/file_name.mp4" >}}
-->

{{< newsection >}}
## Progress Report Tweaks
We've had a hell of time trying to figure out what to do about the *huge* number of features, fixes, and tweaks that happened in March. As a result we're going to be experimenting with some formatting changes over the course of the next few Progress Reports to determine the best way of presenting the large quantity of information.

{{< newsection >}}
## Content
### April Stress Test
On April 9th we hosted a stress test with as many players as possible to see how well the server could handle it, peaking at 250 players! Normally April events would go in the April progress report, but we're including it here while it's hopefully still fresh in all of the participants' minds.

Space Station 14 was able to run with 200 players without any server slowdown. The stress test peaked at ~250 players and we predict that it could have surpassed ~350 without slowdown. However, although the server can handle it, we noticed some networking issues that can cause rubberbanding with this many players. The probable cause has been identified and efforts to fix it are underway.

For a highlight reel of the chaos caused by 250 players, you can watch the YouTube video [here](https://www.youtube.com/watch?v=__5K6pWj1Ls).

<details>
    <summary>See here for a more technical breakdown of performance</summary>
    
There are two parts to how the game processes things: A unit of time called a "tick" during which the game simulates everything, and the "ticks per second (TPS)" which is the rate at which ticks occur. For example, 30 TPS means that one second is divided into 30 ticks of equal length and the game will attempt to update 30 times per second. More ticks per second means less time for each tick, and if the game isn't finished running the code by the time the tick ends then the game will lag. On the flip side, a higher TPS means the game will feel more responsive. Choosing the right TPS is a balancing act, and the upper limit mainly depends on how performant the game is.
    
Space Station 14 was able to run at our usual 30 TPS with over 200 players largely without issue. After lowering it to 20 TPS, which is what most SS13 servers use, the stress test peaked at ~250 players and continued to perform fine (aka everything was able to run during the allotted ticks).
</details>

tl;dr SS14 can definitely handle over 250 players and can probably handle over 350 players before the server starts to lag. Unless you do something wild like give everyone mechs with rocket launchers. Not too shabby, in my opinion.

{{< newsection >}}
### Explosion Refactor
*Contributed by ElectroSR*

Explosions have been completely refactored to be more visually and technically impressive. There's also a new UI for admins to create explosions and it comes with a very fancy preview of what will be annihilated.

{{< video-audio "/video/pr_33/explosions.mp4" >}}

{{< newsection >}}
### Modular Grenades
*Contributed by ElectroSR and Fortune117*

Fortune117 and ElectroSR added every Chemist's favorite tool - the modular grenade, which allows anyone with a screwdriver and some basic parts to create a grenade filled with anything from deadly acid smoke to healing chemicals.

TODO: Video?

{{< newsection >}}
### Map Rotation
*Contributed by moony*

For those who haven't been keeping track, SS14 currently supports ***nine***  different maps. To stop everyone from voting for the same map every round, moony has added map rotation. Map votes have been disabled and instead the server will cycle through the less recently played maps.

{{< newsection >}}
### Clothing Additions
*Contributed by Emisse*

Emisse has given you aspiring fashion models a plethora of new clothing options and accessories.

There's so many that we're just going to list them:
- Formal clothing for the Captain and HoS
- Atmospheric Technician firesuit
- Cloaks for admins and miners
- Mantles, an alternative to cloaks
- Medals, available in the lockers of the Captain and HoP
- Lawyer badge, available in LawDrobes
- Nuke Ops jumpsuits and Changeling armor
- Winter coats, available in applicable clothing vendors and the uniform printer

TODO: Pic with a bunch of the new clothing.

{{< newsection >}}
### Diseases
*Contributed by Rane*

Rane has done a ton of work to add all of the core systems, mechanics, and content for diseases. Now the unwashed masses can run around coughing and sneezing on each other to their heart's content, giving you the chance to experience a pandemic without having to go outside!

There's also a new plague doctor outfit courtesy of KaiShibaa.

TODO: Make a pic of a plague doctor diagnosing a sneezing person with cancer

{{< newsection >}}
### Multi-layer Clothing
*Contributed by ElectroSR*

During the last progress report cycle, ElectroSR added the ability for clothing sprites to have several layers, which enables more robust customization and visual effects. Flashlights and hardsuits now utilize this feature, and you can see it in action below:

{{< video-auto "/video/pr_33/layers.mp4" >}}

{{< newsection >}}
### Ghost Role Changes
*Contributed by DogZero, mirrorcult, HoofedEar*

Some ghost roles have been added and tweaked: 
- DogZeroX added the Onestar mech, an admin-spawned mech that can annihilate most things in its path. 
- HoofedEar made some tweaks to drones: One of their hands has been switched for a new Omnitool, in addition to other changes to their toolkit. 
- mirrorcult made it possible for mice to squeak, run under doors, and go under tables. Have fun leading the janitor on a wild chase through maintenance.

{{< video-audio "/video/pr_33/mecha_anime.mp4" >}}

{{< newsection >}}
### More Mapping Objects
*Contributed by metalgearsloth, Delete69, DogZeroX, moony, Peptide90, mirrorcult*

This month saw a significant increase in the number of objects available to mappers, including shuttle walls for the arrivals and escape shuttle as well as a number of trees and other flora ported over from /tg/. Also included are new signs and new decorations, including dressers and television sets. 

TODO: Pic with all of the new things

{{< newsection >}}
### More Animals & Grenade Penguins
*Contributed by Emisse, Snowni, mirrorcult, EmoGarbage404, Carou02*

The station now has a number of new and returning pets, thanks to a team of contributors who ported most of the existing animals from the /tg/ codebase - including foxes, ferrets, raccoons, opossums, dogs, and the Syndicate Grenade Penguin. I hope no one has allergies.

TODO: Pic of animals and/or vid of grenade penguin doing its thing

{{< newsection >}}
### Lobby Refactor & More Songs
*Contributed by Jezithyr, WTCWR68*

Jezithyr has completely rewritten the lobby UI and it now looks entirely different. As a bonus, it now supports lobby art so be on the lookout for that 👀.

Further improving the lobby experience, WTCWR68 has added four new lobby songs including two classics from SS13.

{{< imgw "images/post/pr_33/lobby" >}}

{{< newsection >}}
### Ambience Enhancements
*Contributed by moony*

Sitting in complete silence while surrounded by heavy machinery is a bit immersion-breaking, so moony went and added ambient sounds to lots of things.

These machines have new sound effects:
- Atmospherics machinery
- Hydroponics trays
- R&D servers
- Atmospherics pipes
- Electrical wires

{{< video-audio "/video/pr_33/ambience.mp4" >}}

{{< newsection >}}
### Traitor Additions
*Contributed by areitpog, EmoGarbage404, CrudeWax*

The Syndicate has found that corgi meat is a hot new commodity on the intergalactic black market, and may task their operatives with procuring some. To aid traitors in this nigh-impossible task, several changes have been made to the equipment available in Syndicate Uplinks.

The Syndicate have given their covert agents a new tool in the form of the Hypopen, a pen that doubles as a hypodermic syringe and can be used to discreetly administer drugs to unsuspecting station personnel. Additional chemical bottles can be purchased from a Syndicate Uplink that will stun injected victims.

Holoparasites have been significantly improved, and are now immune to most firearms and tasers.

TODO: Pic?

{{< newsection >}}
### Lizards
*Contributed by  metalgearsloth, Daemon, Macoron, DogZeroX, moony*

We've shown them off before, but the classic SS13 lizards are now officially playable in SS14 thanks to a bunch of work & fixes by several contributors. Lizard visuals and their unique accent are taken primarily from /tg/station 13.

TODO: Pic of janitor lizard showing off accent.

{{< newsection >}}
### New Plushies
*Contributed by DogZeroX and ZeroDayDaemon*

Four adorable new plushies have been added: Ratvar, Rouny, RGBee. and a space lizard.

TODO: Pic

{{< newsection >}}
### New Admin Features & Custom Resource Uploads
*Contributed by Vera*

Admins now have a variety of new tools to ~~abuse players~~ enhance the round, and a few minor changes have been made to the server rules. Here's the highlights:
- Admins can now play sounds to every player or specific players.
- Admins can now upload custom resources to the server, like new sprites.

{{< video-audio "/video/pr_33/admin_abuse.mp4" >}}

{{< newsection >}}
## Mapping
This progress report sees the addition of 3 new maps. There's also a pile of updates to all the other maps, but we don't have the time or space to cover them all here. As always, the most up-to-date images for maps can be found on our [wiki](https://wiki.spacestation14.io/wiki/Maps).

### Delta Station
*Contributed by Timrod*

Delta Station, one of the largest maps in SS13, has been ported to SS14. It's so large that it's bigger than any other two SS14 maps combined. This incarnation is a mixture of /tg/'s map, Citadel's map, and a few unique changes to better fit SS14 mechanics like a remapped security department and removal of the AI satellite.

{{< imgw "images/post/pr_33/delta" >}}

{{< newsection >}}
### Marathon Station
*Contributed by Emisse*

Marathon Station has been added as a heavily-modified and rechristened port of SS13's Pubby Station. Hopefully the handful of Pubby fans will feel right at home, once they figure out where some of the departments went.

{{< imgw "images/post/pr_33/marathon" >}}

{{< newsection >}}
### Split Station
*Contributed by Peptide90*

To show you the power of SS14, Peptide sawed this ~~boat~~ station in half!

Split Station is, as the name implies, split into two separate asteroids with a couple hallways connecting them. I sure hope nobody disconnects them and flies off with half of the station!

{{< imgw "images/post/pr_33/split" >}}

{{< newsection >}}
### New Salvage Maps
*Contributed by mirrorcult and retequizzle*

Several new salvage maps have been added for all of your lootin' and shootin' needs. Make sure you're on the lookout for some new hostile mobs in the area courtesy of EmoGarbage404.

Here's a look at one of the new salvage maps:

{{< imgw "images/post/pr_33/salvage" >}}

{{< newsection >}}
## Minor Changes
Due to length constraints, not everything can get a dedicated section in the progress report and instead will be found listed here.

### New Features

- Several structures now rotate with the grid they're on. *Contributed by InquisitivePenguin*
- Some clothing can now be torn into cloth, which can now be crafted into gauze. *Contributed by mirrorcult*
- Certain station announcements now have unique colors. *Contributed by HoofedEar*
- Trash bags now visually enlarge as you fill them. *Contributed by Macoron*
- Added Uniform Printers, a machine for making jumpsuits. *Contributed by Rane*
- You can now wear a guitar on your back. *Contributed by lapatison*
- Botany plant sizes now scale with potency. *Contributed by mirrorcult*
- Gas analyzers now work on pipes. *Contributed by Partmedia*
- Added health analyzers. Doctor PDAs also function as a slower health analyzer. *Contributed by Fishfish458 and Rane*
- Crafting a stackable item will attempt to merge it with the stack in your hand. *Contributed by ElectroSR*
- Stack merging is now predicted, making it easier to pick up several individual items. *Contributed by ElectroSR*

### Fixes, Tweaks, and Balancing

- Flashlights now last 3.75x longer, flares now last 3x longer. *Contributed by Fishfish458*
- Hardsuits no longer make you as slow and hardsuit helmets are no longer sufficient protection in a vacuum on their own. *Contributed by mirrorcult*
- Crayons are now deleted when used up. *Contributed by actually-reb*
- Xenos are now space-proof. *Contributed by DogZeroX*
- Greatly reduced insulated gloves drop rate in maintenance, added budget gloves in its place. *Contributed by Emisse*
- Several tweaks to shuttle movement to make them feel nicer to fly. *Contributed by Radrark*
- Fixed some issues with audio playing twice or popups appearing twice. *Contributed by ElectroSR*
- Fixed popups moving with the player. *Contributed by DrSmugleaf*
- Fixed buckling on rotated grids. *Contributed by metalgearsloth*
- Fixed flickering in the character editor. *Contributed by elthundercloud*
- Fixed scrubbers all sharing the same list of gases to scrub. *Contributed by vulppine*
- Fixed violating the laws of classical mechanics via pulling. *Contributed by metalgearsloth*

{{< newsection >}}
## Technical
### Explosion Refactor
*Contributed by ElectroSR*

The old explosion code has been completely replaced. Previously, explosions worked by using a simple raycast to check for obstructions and then dealt damage to exposed entities based on their distance to the epicenter. Not only was this actually quite slow for large explosions, it also meant that any explosion would only ever destroy a single layer of walls.

The new explosion code uses a grid-based algorithm that iteratively looks for neighboring tiles to add to the explosion. Airtight entities (i.e., walls) effectively delay the flood-fill in some directions, with a delay proportional to their health. The end result is that explosion can now properly penetrate multiple layers of walls, with each layer appropriately reducing the damage dealt to the next one. Additionally, the area that gets affected by an explosion is shaped by airtight obstacles. Explosions can now go around corners, and will deal more damage and travel further in confined areas.

The most convoluted part of the new explosion code is the need to support multiple rotated & translated shuttles and stations. It is challenging to have grid-based explosions that properly propagate onto and off of these grids, while also being blocked by airtight entities on those grids, and there are still some edge cases were explosions can skip past walls. Another challenge was ensuring that all the code is fast enough to allow for real-time nuking of the station. The biggest bottleneck is currently due to entity spawning and deletion, but there is also some physics slowdown due to having thousands of entities launched into space. Currently a station-destroying explosion still causes very noticeable stuttering, but there is still plenty of room for improvement.

{{< newsection >}}
### UI Scaling
*Contributed by Jezithyr*

TODO: Write this section

{{< newsection >}}
## Credits
### Contributors Since Last Progress Report
*439 commits, authored by: Alex Evgrashin, Carou02, Chris V, CrudeWax, Daemon, Delete69, DrSmugleaf, ElectroSr, Emisse, EmoGarbage404, Fishfish458, Flipp Syder, Jack Fox, Jane Lewis, Jezithyr, Julian Giebel, Kai Shiba, Kevin Zheng, Leeroy, Mith-randalf, Moony, Morbo, Pancake, Paul, Peptide90, Pieter-Jan Briers, Radrark, Rane, ScalyChimp, ShadowCommander, Silver, Snowni, T-Stalker, TaralGit, TimrodDX, Vera, Veritius, WTCWR68, Willhelm53, Zoldorf, actually-reb, areit, ike709, lapatison, metalgearsloth, mirrorcult, ninruB, retequizzle, router, wrexbe*

### Patrons
*Altana, Anthony Chicko, Anthony Fleck, AquaDraco, Austin Nelson, Blaise M., Callum Tubrett, Collin R Terrell, Cormos Lemming, CPM311, Dan Griskardian, Daniel Thompson, Darren Brady, Daskata, DramaBuns, Durp, Eric VW, Ethan Keller, Evan Armstrong, Farewell Fire, Florian, Frege Beach, grhmhome, Hamcha, hh, Jack Rose, James Andrew Peoples Jr, Jex N, Joel, John Edward Hamilton Barchard, Joshington Awesomahee, JustanAnus, Koyki, Kris Piper, KrystalDisc, Miniwoffer, Mono, Nicholas Hillblom, Oxyclean114, Peter "Azmond" Newhouse, Phillip Inman, Rafał Kowalewski, Robin Rottstock, Seija, Serathis, Shayne Haugen, Spiffyfishface, spinnermaster, Taylor, ThatGuyGW, The Hateful Flesh, Tom Cruize, Tomeno, Valinov, vifs_vestige, Viridian, Will M., Wrexbe, Zakanater 19, Zandario*