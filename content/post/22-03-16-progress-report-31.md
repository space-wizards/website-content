+++
title = "Progress Report #31: Duck, Duck, Weh"
author = "ike709"
date = 2022-03-16
categories = [
    "Progress Report"
]
reddit = ""
thumbnail = "pr_31"
+++
It's been a minute since the last Progress Report, and there's been so many changes that we had to break this one up into two parts! This part covers January 2022.
<!--more-->

{{< newsection >}}
## Content

### Two-Parter
There's been a long list of contributions since the last progress report, so this edition just covers January 2022. The February 2022 edition will follow in a week or so.

{{< newsection >}}
### Game Wiki

Space Station 14 now has a [wiki](https://wiki.spacestation14.io/wiki/Main_Page)! It's a one-stop shop for everything you need to know in order to get that greentext, and anyone with a Space Station 14 account is able to contribute.

{{< newsection >}}
### Automated Wiki Pages
*Contributed by moony and weaversam8*

What good is a wiki if everything is outdated? Thanks to the hard work of these contributors, the groundwork has been laid for automatically updating wiki pages whenever changes are made to the game!

The [Guide to Chemistry](https://wiki.spacestation14.io/wiki/Chemistry) already implements this new system and will auto-update whenever reagents or recipes are changed/added/removed.

{{< imgw "/images/post/pr_31/chemwiki" >}}

{{< newsection >}}
### Species
*Contributed by moony*

Moony has added support for a variety of new playable species, selectable from the character editor.

SS14 currently includes the following non-human races:

* Slimepeople - One of xenobiology's greatest accomplishments.
* Dwarves - Rock and stone!
* Lizards - Everyone's favorite SS13 janitor has made the jump to SS14. Not currently selectable until they're fully finished.

The options, mechanics, and roundstart availability are all subject to change.

{{< imgw "/images/post/pr_31/species" >}}

{{< newsection >}}
### Checkers
*Contributed by Capnsockless*

Capnsockless has added checkers to SS14's ever-expanding list of board games, so be sure to swing by Cargo and ask nicely for a board game crate!

{{< imgw "/images/post/pr_31/checkers" >}}

{{< newsection >}}
### Xenoarchaeology Artifacts
*Contributed by Macoron*

To spice things up on salvage maps, Macoron has added xenoarchaeology artifacts inspired by Baystation. These artifacts have random effects that you need to figure out how to activate. Seek fortune and glory, or blow yourself up trying.

{{< imgw "/images/post/pr_31/xenoarch" >}}

{{< newsection >}}
### Rootbeer, Ice Cream, & Rootbeer Floats
*Contributed by Plasmaguy*

Nanotrasen has decided to reward its hardworking employees with a special treat! Swing by the bar for some newly stocked 100% Real Icecream* or a rootbeer float made with the highest quality rootbeer available (on the station)!

{{< imgw "/images/post/pr_31/rootbeer" >}}

**Real Icecream™ is a registered trademark of Nanotrasen Inc. Individuals who have suffered a heart attack or have heart disease should not consume Real Icecream™*

{{< newsection >}}
### Lawyer & Librarian
*Contributed by Peptide90*

A foul evil has been detected aboard Space Station 14, it must be stopped before— Oh wait, it's just the lawyer. Better refresh yourselves on Space Law.

You can now also find the librarian hiding amongst the station's repository of knowledge and low-quality smut.

{{< newsection >}}
### Weh!
*Contributed by DogZeroX*

Weh!

{{< video-audio "/video/pr_31/weh.mp4" >}}

{{< newsection >}}
### Energy Swords
*Contributed by Mirino97*

Swish, swish, stab. It's a sword, dude, not a fighter jet.

{{< imgw "/images/post/pr_31/esword" >}}

{{< newsection >}}
### Duck!
*Contributed by Daemon and Mithrandalf*

The animal, not the act of ducking. Cargo can now order a whole crate full of ducks, just make sure you keep them away from the chef.

{{< imgw "/images/post/pr_31/ducks" >}}

{{< newsection >}}
### Mass Scanner
*Contributed by moony and mirrorcult*

Space Station 14 supports multiple maps/stations/ships floating around through space, so the mass scanner has been added to detect anything in nearby space. This will mainly be useful for future gamemodes (ship vs. ship, anyone?).

{{< imgw "/images/post/pr_31/scanner" >}}

{{< newsection >}}
### Fire Extinguisher Refactor
*Contributed by mirrorcult*

Fire extinguishes have been refactored and they can now spray people properly with any reagent, or be refilled from any reagent container.

{{< video-auto "/video/pr_31/firestarter.mp4" >}}

Watch out for homemade flamethrowers!

{{< newsection >}}
### Misc. Changes
* Glass tables can now shatter. *Contributed by mirrorcult*
* Players now move slower. *Contributed by the maintainer team*
* Disposals pipes can now be constructed. *Contributed by DubiousDoggo*
* Uplinks can now buy Syndicate Smokes. *Contributed by Rane*

{{< newsection >}}
## Technical

### Multi-grid Stations & Multi-station Maps
*Contributed by mirrorcult*

Space Station 14 now supports having multiple stations or stations comprised of multiple grids. Gamemodes can also specify what number and combination of maps to load, opening the door for interesting new gamemodes like Station Versus Station.

{{< newsection >}}
### Server Whitelist
*Contributed by mirrorcult*

Server hosts can now enable a whitelist using the `whitelist.enabled` cvar. Only players added with the command `whitelistadd <username>` will be able to join, and they can be removed with `whitelistremove <username>`.

If you want to enable it mid-round, you can use the `kicknonwhitelisted` command to give every unwanted player the boot.

{{< newsection >}}
### Map Renderer
*Contributed by DrSmugleaf, moony, and mirrorcult*

`Content.MapRenderer` has been added as a new project that can take a map file and render it as an image. It's extremely useful for development, updating the wiki, and more.

{{< imgw "/images/post/pr_31/bagelrender" >}}

{{< newsection >}}
## Credits
### Contributors Since Last Progress Report
*354 commits, authored by: metalgearsloth, Peptide90, Rane, Pancake, ShadowCommander, Moony, Lamrr, mirrorcult, wrexbe, Pieter-Jan Briers, Vera Aguilera Puerto, LittleBuilderJane, Alex Evgrashin, Michael Phillips, Morbo, Sam Weaver, Daemon, Delete69, ElectroJr, DubiousDoggo, Júlio César Ueti, Paul, ScalyChimp, BubblegumBlue, Charlese2, DrSmugleaf, E F R, Fishfish458, T-Stalker, Zymem, Aaron Mell, Acruid, Clyybber, Demetre Beroshvili, Flipp Syder, Julian Giebel, JustinTime, Matz05, Neith, Plasmaguy, TaralGit, Willhelm53, WlarusFromDaSpace, Ygg01, bloodrizer, keronshb, pointer-to-null, router, sewerpig*

### Patrons
*Phillip Inman, Zakanater 19, Jex N, Peter "Azmond" Newhouse, Seija, Tom Cruize, Corpus Inc., Hamcha, Oxyclean114, JustanAnus, NorthwoodTodd, Collin R Terrell, Cormos Lemming, grhmhome, Spiffyfishface, Callum Tubrett, Hydration, John Edward Hamilton Barchard, Wrexbe, Frege Beach, Austin Nelson, AquaDraco, Miniwoffer, hh, Nicholas Hillblom, Florian, Viridian, Daskata, Blaise M., Jack Rose, The Hateful Flesh, Will M., spinnermaster, Koyki, Valinov, Dan Griskardian, Robin Rottstock, Altana, Durp, Joshington Awesomahee, Eric VW, Evan Armstrong, Mono, Ethan Keller, DramaBuns, KrystalDisc, Darren Brady, Zandario, Anthony Fleck, vifs_vestige, Bobberunio, CPM311, ThatGuyGW, Farewell Fire, Daniel Thompson, Tomeno*
