+++
title = "Progress Report #30: A Short Freeze for Winter"
author = "Timrod"
date = 2022-01-17
categories = [
    "Progress Report",
    "update"
]
reddit = ""
thumbnail = "pr_30"
+++
Even with the winter holidays and a week-long feature freeze, December capped off a busy year for Space Station 14. In 2021, Space Station 14 had 2184 contributions, easily beating the 2020 contribution count of 1498.
<!--more-->

{{< newsection >}}
## Content
{{< newsection >}}
### Featurefreeze
December was marked by a week-long feature freeze in order to implement a massive engine change with the goal of increasing long-term performance and cleaning up the engine code.

{{< newsection >}}
### Christmas-Packedstation
*Contributed by Timrod*

Packed Station got into the holiday spirit this year with a special holiday version featuring trees, presents and snow. It ran from December 24th to December 26th, and will hopefully return next year with all of the new additions made in 2022. In case you weren't there, the highlights included Atmos getting coal under their tree and Security getting a new toilet.

{{< imgstack "images/post/pr_30/xmax_packed_1" "images/post/pr_30/xmax_packed_2" >}}

{{< newsection >}}
### Salvage
*Contributed by 20kdc, wrexbe, moony and Phantom-Lily*

20kdc and wrexbe added the first implementation of the Salvage department, which is currently part of Cargo on both Saltern and Packed Station. Using the salvage magnet located in Cargo, players can grab wreckage to explore - provided they're quick enough to get in and out before the magnet loses its grip.

moony and Phantom-Lily contributed wrecks for players to explore, including a bombed-out AI satellite and a ruined space bar.
{{< imgstack "images/post/pr_30/salvage_1" "images/post/pr_30/salvage_2" >}}
{{< newsection >}}

### Rollerbeds
*Contributed by Topy and metalgearsloth*

Topy and metalgearsloth added three new types of roller beds, which can fold into a carry-able state for easy storage and extend their wheels when a patient is put on them. Medbay personnel now have a much easier time moving all those corpses that keep piling up in their lobby to somewhere that they won't be as noticeable.
{{< imgw "/images/post/pr_30/rollerbed" >}}
{{< newsection >}}

### Posters
*Contributed by ACJM*

In another big win for mappers, AJCM added a large variety of posters to cover walls and make the station look slightly less grey. Posters have already been placed on Packed Station and will no doubt be used in maps to come.
{{< newsection >}}

### Suit Sensor and Crew Monitoring
*Contributed by Macoron*

The crew of Space Station 14 are now able to ignore the CMO complaining about suit sensors at the start of every round, thanks to Macoron adding both the sensors and the crew monitoring console they report to.

Suit sensors exist in most jumpsuits and can be set to broadcast varying amounts of information about the wearer's health and location to a crew monitoring console, which the doctors in Medbay will probably ignore.
{{< newsection >}}

### Guardians (Holoparasites)
*Contributed by metalgearsloth and CrudeWax*

metalgearsloth and CrudeWax added Guardians to the list of items available in traitor PDAs. Guardians are holographic entities that reside in their user's head and can be summoned at will to punch even the most robust of security into submission. Their only weakness lies in the fact that they are you, and you are them - while Guardians are highly resistant to damage, they split any damage they take with their user.
{{< imgstack "images/post/pr_30/holo_1" "images/post/pr_30/holo_2" >}}
{{< newsection >}}

### Accents
*Contributed by Pancake*

After repeated outbreaks of talking killer monkeys aboard the station, Pancake cracked down by implementing accents that filter chat for anyone playing as an animal. Hopefully, this will also cut down on reports by Atmos technicians of Ian telling them to light Atmos on fire.
{{< imgw "/images/post/pr_30/accents" >}}
{{< newsection >}}

### Singuloose Lobby Song
*Contributed by Schiene*

Schiene added a new song to the SS14 lobby music pool, titled "Singuloose". You can listen to it here: https://soundcloud.com/js_m/singuloose
{{< newsection >}}

### Ultravasculine, a New Advanced Antitoxin
*Contributed by Rane*

Rane added Ultravasculine, a chemical made from histamine and plasma that rapidly removes toxin damage at the cost of a small amount of brute damage. Watch out, though: overdoses may prove fatal.
{{< newsection >}}

### Zipties
*Contributed by Mithrandalf*

Deciding that Security doesn't already go through enough handcuffs, Mithrandalf added zipties - single-use handcuffs that can be used to secure a prisoner in a brig cell without the prisoner being able to use them against Security. They can be ordered from Cargo.
{{< newsection >}}

### Kangaroos
*Contributed by metalgearsloth*

metalgearsloth determined that the station didn't fill its yearly marsupial quota, and added kangaroos to the game - giving the admins yet another animal to fill the station with.
{{< imgw "/images/post/pr_30/kangaroo" >}}
{{< newsection >}}

### Lighters
*Contributed by Mithrandalf*

Mithrandalf added yet another way for hapless Engineers to "accidentally" light the station on fire by placing lighters in the station's cigarette vending machines.
{{< newsection >}}

### Orb
*Contributed by Pancake*

Pancake added an orb for pondering. It can also be used as a puzzle solution in a pinch.
{{< newsection >}}

### Backgammon
*Contributed by Fishfish458*

Fishfish458 added SS14's third board game in the form of Backgammon, which joins Chess and Parchis in a new board games crate in Cargo. SS14 can now add "Competitive Backgammon Simulator" to its list of achievements.
{{< newsection >}}

### T-Ray Scanners
*Contributed by vulppine*

The days of Engineering running up and down the halls prying up floor tiles to figure out why half the station is suddenly unpowered are over, thanks to the handheld T-Ray scanners added by vulppine.
{{< newsection >}}

### Railings
*Contributed by StanberyTrask*

StanberyTrask added railings, a favorite of both workplace safety enthusiasts and mappers looking for something to fill that 18-tile-wide hallway running through the center of their custom station map. Of course, no amount of railings will ever make certain parts of the station safe...
{{< imgstack "images/post/pr_30/railings_1" "images/post/pr_30/railings_2" >}}
{{< newsection >}}

## Technical
{{< newsection >}}

### Open Access Hub
If you've opened SS14's launcher in the past couple of weeks, you might've noticed a bunch of new servers on the server browser. That's because SS14's server hub is now open to unofficial servers, including two new Russian-language servers and a multilingual server in the UK. Anyone interested in opening their own server can learn how to do so here:

https://docs.spacestation14.io/en/getting-started/hosting

{{< newsection >}}

### Mid-Game Prototype Loading
*Contributed by moony*

moony added a way for admins to load new items into the game on the fly, allowing for horrible things like banana peels that create new banana peels any time anyone slips on them or kudzu that spawns monkeys instead of kudzu.

{{< newsection >}}

### Gamemodes Refactor
*Contributed by Zumorica*

Zumorica overhauled the code for game modes. While there aren't any immediate changes to the game modes that already exist, this makes it easier to create new ones and allows for a few new functions that didn't already exist, like creating dynamic game modes.

{{< newsection >}}

### Conditional Maps
*Contributed by moony*

It's a well-known fact that all games are legally required to have holiday events, and moony helped ensure Space Station 14's compliance by adding the ability for the game to load different maps based on certain conditions - such as the winter holiday version of Packed Station that ran from December 24th to December 26th.

{{< newsection >}}

### Ahelp Relay
*Contributed by PaulRitter*

Paul created a relay that automatically sends admin help requests to Discord, allowing the admin team to read them even when they're not in game themselves and reducing the amount of times people had to ping the admins on Discord for help.

{{< imgw "/images/post/pr_30/ahelp_relay" >}}

{{< newsection >}}

## Credits
### Contributors Since Last Progress Report
*552 commits, authored by: AJCM-git, Acruid, Alex Evgrashin, Bingo Johnson, Caj Jones, Charlese2, CrudeWax, DrSmugleaf, EFR, Fishfish458, Flipp Syder, FoLoKe, Insineer, JustinTime, Júlio César Ueti, Leon Friedrich, Mariner102, Matz05, MeltedPixel, Mith-randalf, Moony, Morbo, Neith, Pancake, Paul Ritter, Peptide90, Pieter-Jan Briers, Rane, ShadowCommander, Schiene, Stanbery Trask, T-Stalker, TaralGit, TemporalOroboros, TimrodDX, Venomii, Vera Aguilera Puerto, Wrexbe, ZorenZal, buletsponge, localcc, metalgearsloth, mirrorcult, pointer-to-null, shaeone, wrexbe, zlodo*

### Patrons
A Yaj, Alex Tempest, Altana, Anthony Fleck, AquaDraco, Austin Nelson, Await Future, Blaise M., Bobberunio, Callum Tubrett, Christoph, Citizen Battle, clyf, Collin R Terrell, Cormos Lemming, CPM311, Daniel Thompson, Darren Brady, Daskata, DramaBuns, Durp, Eric VW, Ethan Keller, Evan Armstrong, Farewell Fire, Florian, Frege Beach, grhmhome, Hydration, Jack Rose, John Edward Hamilton Barchard, Joshington Awesomahee, Kerb 755, KrystalDisc, Miniwoffer, Mono, Nicholas Hillblom, NorthwoodTodd, Robin Rottstock, Ross Hawkins, S.C., Spiffyfishface, spinnermaster, ThatGuyGW, The Hateful Flesh, Tomeno, Valinov, vifs_vestige, Viridian, Voltinho, Will M., Wrexbe, Zandario
