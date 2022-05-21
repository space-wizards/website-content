+++
title = "Progress Report #34: TODO"
author = "DrSmugleaf, ike709, and Timrod"
date = 2022-05-31
categories = [
    "Progress Report"
]
reddit = ""
thumbnail = "pr_34" TODO Thumbnail
+++
Tons of improvements to the SS14 experience, and more!
<!--more-->

<!-- Useful tags: 
Section splitter: {{< newsection >}}
Picture: {{< imgw "images/post/pr_34/picture_name" >}}
Autoplay video (no audio): {{< video-auto "/video/pr_34/file_name.mp4" >}}
Paused vid (can do audio): {{< video-audio "/video/pr_34/file_name.mp4" >}}
-->

{{< newsection >}}
## Content

### Delta Updates
*Contributed by PJB*

The launcher is now capable of only downloading new or changed files whenever a server updates. This means you won't have to sit through a 55 MB (at the time of writing) update whenever a single tiny feature gets added. The size of our game content has grown dramatically in the last couple months as more and more content keeps coming in, and with it the download times got much worse for everybody. I apologize to anybody with poor internet for not getting this done sooner.

Additionally, downloaded assets will now be shared between servers regardless of the code they're running. So if two different servers use the same floor sprites, for example, you'll only download them once. It just works. More details are available in the Technical section.

{{< newsection >}}
### Zstd Game State Compression
*Contributed by PJB*

PJB also added Zstd compression to game states, which is a complicated way of saying that the game should generally use less bandwidth now. Technically-inclined users can find more details in the Technical section.

{{< newsection >}}
### Machine Linking Improvements
*Contributed by DubiousDoggo & ElectroSR*

Linking machines on the station has never been easier, thanks to a new change that allows anyone with a multitool to apply a default link to blast doors, shutters, and anything else capable of linking. This will no doubt save the greyshirts trying to pop open the blast doors to EVA storage several clicks.

{{< imgw "images/post/pr_34/linking" >}}

{{< newsection >}}
### Artifact Container
*Contributed by Macoron*

The eggheads over in R&D have come up with a cure for premature activation... of xenoarcheology artifacts, that is. 

The new Artifact Container will safely contain any artifacts the salvage crew come across, thus enabling safe transportation to a more suitable testing environment.

{{< imgw "images/post/pr_34/artifact_container" >}}

{{< newsection >}}
### Grid Splitting
*Contributed by metalgearsloth*

Every station, shuttle, asteroid, et cetera can now be broken up into multiple unique grids. For example, if an asteroid smashed all the way through a shuttle mid-transit, you'd see the two halves fly off in different directions as the portion with the engines strapped to it continues accelerating. More technical details can be found in the Technical section, but here's a more direct visual aid:

Using the power of admin tools, I sawed this station in half!

TODO: Splitstation splitting video.

{{< newsection >}}
### Salvage Mining & Ore Processing
*Contributed by HoofedEar*

The salvage crews have made a shocking discovery: All of those asteroid rocks are full of valuable minerals! We're providing the station with a new Ore Processor to smelt all of it into usable materials.

{{< video-audio "/video/pr_34/salvage.mp4" >}}

{{< newsection >}}
### Syndicate Operative Outfit
*Contributed by Daemon*

Syndicate agents have a few new wardrobe choices, including the traditional black turtleneck worn by nuclear operatives and a pair of red magboots to really nail that operator look. 

{{< imgw "images/post/pr_34/operative" >}}

{{< newsection >}}
### C4 & Remote Explosives
*Contributed by Macoron, Snowni, and Rane*

Syndicate agents now have access to compound C4, a highly damaging plastic explosive capable of taking out almost anything it's attached to, including walls and airlocks. It can be detonated using an included timer, or remotely through the use of a signal trigger and remote signaler. Just remember, the explosion is limited to a single tile, so don't expect a big bang.

{{< video-audio "/video/pr_34/c4.mp4" >}}

{{< newsection >}}
### Agent ID Cards
*Contributed by Rane*

The second new tool from the Syndicate this month is the Agent ID Card, which can have its name and job set by the user - in addition to its ability to steal access from any ID card it touches. 

{{< video-audio "/video/pr_34/agent.mp4" >}}

{{< newsection >}}
### Pulling Improvements
*Contributed by metalgearsloth, ElectroSR, & ProfanedBane*

A plethora of improvements have been made to pulling, both to fix bugs like handcuffed players being able to escape being pulled and also a general reduction in jankiness.

Additionally, it is now possible to pull objects around corners:

{{< video-audio "/video/pr_34/pulling.mp4" >}}

{{< newsection >}}
### Chaplain Familiars
*Contributed by Rane*

Nullrods are *so* SS13. Here at Space Station 14, the Chaplain has better ~~gimmicks~~ tools to save the eternal souls of the crew. The Chaplain can now summon a ghost-controlled Familiar, which is a bit like a pet but more ephemeral. Don't worry though, they can return a few minutes after dying.

{{< imgw "images/post/pr_34/familiar" >}}

{{< newsection >}}
### Improved Singularity Shader
*Contributed by ElectroSR*

Lord Singuloth has gotten another facelift with several improvements to the shader:

- Singularities no longer have a sudden pop-in
- Multiple singularities can be on-screen at once
- Tweaked the visuals a bit

{{< video-auto "/video/pr_34/singuloth.mp4" >}}

{{< newsection >}}
### Emaggable Vending Machines
*Contributed by Rane*

The Syndicate have released an update to the cryptographic sequencer: It can now emag Nanotrasen vending machines to unlock new, restricted contents. 

Currently only the PietyVend takes advantage of this; it offers occult items to any Chaplains that have... fallen from grace.

{{< newsection >}}
### Station Map Posters
*Contributed by Emisse*

Most existing stations now have map posters, which give a tiny overview of the station's general layout. They can be found in various places on supported stations. The colors represent departments, such as red for security and blue for medical.

{{< imgw "images/post/pr_34/posters" >}}

{{< newsection >}}
### Atmospheric Technician
*Contributed by Emisse*

Space Station 14 has a new job from SS13 this month in the form of the Atmospheric Technician, an engineer dedicated to working with the maze of pipes and gas pumps that make up the station's atmospheric system. 

{{< imgw "images/post/pr_34/atmos" >}}

{{< newsection >}}
### Merge ID Accesses
*Contributed by 20kdc*

In a recent survey, frustration among Heads of Personnel has been down across the board after a change to the way access works. Doors and windoors now check all of the spots an ID could be in before denying you access - meaning that the Head of Personnel can now open the windoor to their desk and hand an ID card across without having to drop it on the floor first.

{{< newsection >}}
### Vehicles
*Contributed by Rane, & Veritius*

A shipment of vehicles have arrived at the station, and security has already received several reports of traffic violations. Stop running over the Clown before we have a lawsuit on our hands.

Here's a list of every vehicle you can find or order so far:

- ATVs
- Janicart
- Secways
- Syndicate Segways

{{< video-audio "/video/pr_34/secway.mp4" >}}

{{< newsection >}}
### Mime Powers
*Contributed by Rane*

The Mime now sports the uncanny and somewhat disturbing ability to create a temporary invisible wall, blocking the passage of objects and station personnel as well as a regular wall.

However, like all superheroes, the Mime must have a weakness. The Mime now starts with a vow of silence and loses their wall ability if the vow is broken. 

{{< video-audio "/video/pr_34/mime.mp4" >}}

{{< newsection >}}
### Beds, Stasis Beds, and Beyond
*Contributed by Rane*

A new study shows that a bit of bedrest can do wonders for a crewmember's health, and medical beds are even better. Additionally, science can research new stasis beds that will greatly slow down the metabolism of any occupants. Now you can make your bad trip last even longer!

{{< newsection >}}
### Zombies
*Contributed by EmoGarbage404*

BRAAAAAAAAAAAAAAINS...

{{< imgw "images/post/pr_34/zombies" >}}

{{< newsection >}}
### Admin Notes
*Contributed by DrSmugleaf*

Admin notes are the latest tool from SS13 in our anti-greytide arsenal, allowing admins to record players' heinous deeds on their permanent record. Be careful, just because you don't get banned doesn't mean your actions aren't being noted!

{{< video-audio "/video/pr_34/notes.mp4" >}}

{{< newsection >}}
### Salvage Mob Ghost Roles
*Contributed by mirrorcult*

Ghosts now have even more things to keep them occupied. They can take control of (almost) all hostile mobs found throughout the various salvage maps and ruin the day of some unsuspecting crewmember.

{{< newsection >}}
### Drains
*Contributed by Rane*

After countless OSHA complaints, Rane has added drains to help clean up spills in certain oft-slippery parts of the station. Chefs, rejoice!

{{< video-audio "/video/pr_34/drain.mp4" >}}

{{< newsection >}}
### New Hardsuits, Toggleable Helmets, & Armor Rebalance
*Contributed by Emisse & ElectroSR*

The Materials Science Division™ have tweaked the armor of most armored clothing. They've also developed a new integrated hardsuit helmet and removed the need to carry a helmet around with you.

Finally, they have some new hardware for Paramedics and the salvage crew:

{{< imgw "images/post/pr_34/suits" >}}

{{< newsection >}}
## Mapping
### NT Barratry
*Contributed by EmoGarbage404*

The NT Barratry has been added as a medium-sized station with a grungy and destroyed aesthetic. Engineers and Janitors should have plenty of things to keep themselves occupied fixing up this old rust bucket.

{{< imgw "images/post/pr_34/barratry" >}}

{{< newsection >}}
### Atlas Ship
*Contributed by Emisse*

Atlas is a new low-pop map inspired by the Goonstation map of the same name, but with some changes to make it more viable in SS14.

{{< imgw "images/post/pr_34/atlas" >}}

{{< newsection >}}
### Admin Pirate Ship
*Contributed by Emisse*

Yarr, a pirate ship for admins to ~~abuse~~ use for ~~their~~ your amusement. Now we just need to figure out how to make people walk the plank in space.

{{< imgw "images/post/pr_34/pirates" >}}

{{< newsection >}}
## Minor Changes
Due to length constraints, not everything can get a dedicated section in the progress report and instead will be found listed here. This list is non-exhaustive but covers the most blatant player-facing changes.

### New Features

- Changed the default game mode from suspicion to traitor. *Contributed by Zumorica*
- Added stamps, for paperwork enthusiasts. *Contributed by Fishfish458 & Veritius*
- Added an airlock painter. *Contributed by Soupstraw*
- Added three new brass instruments. *Contributed by EmoGarbage404*
- Added hugging. *Contributed by Mirino97*
- Added the `midipanic` command. It will clear all MIDI sounds if they somehow broke. *Contributed by Zumorica*
- Added the round ID to lobby info & round end summary. *Contributed by ShadowCommander*
- Added suit storage for air tanks. *Contributed by Daemon*
- Added a number identifier to all non-player mobs. *Contributed by Peptide90*
- Pills can now be grinded to identify the chemical contents. *Contributed by UKNOWH*
- Modular grenades can now be crafted into flashbangs. *Contributed by UKNOWH*
- You can now cuff yourself. *Contributed by freeman2651*
- Hypopens now fit into PDA pen slots. *Contributed by KaiShibaa*
- Added crafting recipes for spike racks, signal switches, and buttons. *Contributed by Peptide90*
- Added rainbow crayons. *Contributed by vulppine*

### Fixes, Tweaks, and Balancing

- Welding masks are now flash immune. *Contributed by juliangiebel*
- Doors now close on immovable entities like tables. *Contributed by ShadowCommander*
- Fixed not needing both a pressure suit & helmet to survive hazardous pressure. *Contributed by ElectroSR*
- Stun batons now need more frequent recharging. *Contributed by Leander-0*
- Added extra steps to reinforced window deconstruction. *Contributed by Mirino97*
- Fixed grenade penguin AI & buffed explosion damage. *Contributed by EmoGarbage404*
- Dead people can no longer suicide again. *Contributed by keronshb*
- Fixed emags working on bolted/unpowered doors. *Contributed by Rane*
- Emags no longer work on ID consoles. *Contributed by Rane*
- Rebalanced the uplink's explosives. *Contributed by Rane*
- Space carp no longer destroy reinforced windows. *Contributed by mirrorcult*
- Fixed using multiple salvage magnets. *Contributed by moony*
- Increased the dead zone for click dragging. *Contributed by ElectroSR*
- Flying animals no longer slip. *Contributed by Saakra*
- Fixed minibombs to be a small but powerful explosion again. *Contributed by ElectroSR*
- Fixed removing tile decals (tile paint). *Contributed by metalgearsloth*
- Fixed some salvage maploading issues. *Contributed by moony*
- Energy sword light color now updates with blade color changes. *Contributed by ElectroSR*
- Fixed hardsuit lights and helmets. *Contributed by ElectroSR*
- Fixed SMES & Substation construction. *Contributed by Zumorica*
- Improved (un)anchoring prediction. *Contributed by ElectroSR*
- Fixed the RGBee. *Contributed by ElectroSR*
- Added no-slip to advanced magboots. *Contributed by Emisse*
- Fixed magboot prediction. *Contributed by ElectroSR*
- Fixed disarm. *Contributed by ElectroSR*
- Fixed seeds not spawning. *Contributed by mirrorcult*
- Fixed several issues with the explosion refactor. *Contributed by ElectroSR*
- Fixed various grammatical issues. *Contributed by Veritius*
- Duffle bags now carry more but slow you down slightly. *Contributed by Emisse*
- Area-of-Effect reactions no longer occur in space. *Contributed by ElectroSR*
- Guns are now more accurate on the first shot, but tap-firing is worse. *Contributed by Rane*
- Fixed bees being able to disarm. *Contributed by Mirino97*
- Wall deconstruction welding time is 5x longer. *Contributed by Rane*
- Xenos & carp no longer slip. *Contributed by Veritius & keronshb*
- Buffed suspicious toolbox contents. *Contributed by Emisse*
- Fixed not being able to pry windoors. *Contributed by Macoron*
- Fixed various synthesizer, MIDI, and instrument-related bugs. *Contributed by Zumorica*
- Fixed the singularity shader in compatibility mode. *Contributed by ElectroSR*
- Added a delay to using signal transmitters. *Contributed by ElectroSR*
- Fixed some map loading issues. *Contributed by moony*
- Buffed flare duration. *Contributed by Fishfish458*
- Fixed banners not having an interaction outline. *Contributed by DogZeroX*
- Rebalanced weapon weights, firesuits, and hardsuits. *Contributed by Emisse*
- Several crash fixes and performance optimizations. *Contributed by several people*

{{< newsection >}}
## Technical

### Delta Updates (Technical)
*Contributed by PJB*

Delta updates has taken quite a lot of on-and-off pondering and work to reach the current state. To begin, an overview of how the previous updating system worked:

All the client contents are combined into a simple zip file when the game is built. This zip is hashed (SHA-256) and this hash, together with data such as download URL, "Fork ID" and "Fork Version" is included with the server build. The server reports this information to the launcher via its HTTP API when you try to connect to it. The launcher downloads the zip to disk (if it doesn't have it yet), verifies the hash, and then runs the engine with this zip file mounted to run the actual game. The game server can optionally serve the zip itself to ease hosting in some cases, which is known as "Automated Client Zipping" (ACZ). 

The upside is that this system is quite simple. The engine can mount zip files natively, it's "just a single file to download", zip files are common and easy to work with, etc...
The downside is that the tiniest file change requires redownloading the whole 55 MB zip file again. Not everybody has a great internet connection. Oof.

**Step one** when tackling this problem was to get rid of zip files. We effectively used the SHA-256 hash of the zip as a way to identify the contents of the game server. While this is cryptographically secure, it is hard to work with: if you wanted to make a delta updating system, you'd need to exactly reproduce the zip file bytes, not just the contents inside it... So then hash said contents directly instead! The actual identity of the server contents are now represented via a manifest. The manifest looks like this:

```
Robust Content Manifest 1
938282D878C19E4EB88F854491B62E4D957ECFDB1AA840B7B8D3DA70F75E12DF Assemblies/Content.Client.dll
7936D72268E4151055928293BE752FC5984F114580460B55D881BB383C73B352 Assemblies/Content.Client.pdb
2F86ABCFAE9BF0733968C1D510F5CC3B907AB29F7C87E28888467ADBC12EDA4E Assemblies/Content.Shared.Database.dll
B9B9187203B0CADF6F444A7622DFF9EE9258017A0126C0D7BDD78840BE5CB10A Assemblies/Content.Shared.Database.pdb
9CB9D1C4E874A5A213A8EEF816A40D647F15CE57275122A4A9D3440AE7330394 Assemblies/Content.Shared.dll
7643D52D754207C085171B12CD190D2DD9C18FD91365794FB7C59B33DABF897C Assemblies/Content.Shared.pdb
2C391056F76A7E17EB43AFA6889C099751FCDF8DAE3DE8F90E4B9295730BB911 Audio/Ambience/Objects/buzzing.ogg
65D2D63FB71A4DEF0F764AC00DF5A60E357A5F78E89858001372F750D253386C Audio/Ambience/Objects/circular_saw.ogg
DD89F70FF4189AF34D1882EE8D6C939405864A7355007475CE08CD01DA8EE121 Audio/Ambience/Objects/drain.ogg
F877E13A467A8E38A310B9D6C15BCE05EE6C654846818FA1FBC22C86415A3B08 Audio/Ambience/Objects/emf_buzz.ogg
...
```

The manifest simply contains the BLAKE2b[^blake2b] hash and the file path for each file in the game. This manifest is then hashed itself, and this hash is used as the source of truth instead of the zip file. It's easy to generate programmatically and simple text.

**Step two** is for the launcher to store game files based on their hash, allowing us to deduplicate files if they are used by multiple servers[^minecraft]. We decided to store them in a simple SQLite WAL database: it's decently fast, transactional, and effectively guarantees data consistency. We call it ContentDB. When downloading zip files from servers that are not configured for manifest downloads (see below), we simply download the zip and ingest it into the DB. This requires us to reconstruct the manifest from scratch and at least decompress & hash all the files, but it's not that bad. Blobs inside the database can also be compressed with ZStd, saving a good chunk of disk space.

**Step three** is a new download protocol that allows us to only download new files we need. The protocol is very simple: The launcher first downloads the manifest from the CDN server (the game server if using ACZ), then the launcher requests a list of all blobs it is missing to said CDN server, which responds with them. All of this happens over HTTP. The blob download itself uses a single POST request with a binary request/response to minimize overhead.

If it's optimal, the CDN can provide individually pre-compressed blobs so the launcher can directly load them into the database without re-compression. When downloading large amounts of files however doing a compression over the whole stream gives better savings, so that is selected instead.

Outside of many Linux users initially having trouble due to library loading conflicts with ZStd, the new system seems to be working very nicely.

[^blake2b]: We decided to use BLAKE2b instead of SHA-256 going forward due to improved hashing speed. We use the implementation in Libsodium.

[^minecraft]: I believe the Minecraft launcher does something similar for game assets, which is where we got inspiration from.

#### Possible Improvements

There are a few areas of improvement to the system:

**Manifest sizes:** We have a lot of tiny files in the game due to the RSI format. This makes it so that manifests get really big (even when compressed, hashes don't compress by nature). A larger-than-I'd-like amount of data needs to be downloaded just for the initial manifest, even on the tiniest of possible updates. We intend to alleviate this by eventually packing RSIs together in game downloads. Another option is a more complex tree-based manifest format (and requesting protocol thereof) that would allow us to skip whole directories if their contents haven't changed.

**Active CDN:** The download protocol requires an active CDN server to be efficient. This allows us to optimize the actual bandwidth usage a lot (small protocol, optimal downloads) but this might be outweighed simply by not being able to use "standard" CDN servers.

A few days before rolling out the manifest downloading system, Veloren posted a [dev blog announcing their new incremental downloading system](https://veloren.net/devblog-165/#incremental-airshipper-updates-by-aweinstock). Veloren's model simply uses HTTP range requests over their pre-existing zip file downloads, allowing them to use a regular CDN. I can't say that if I was making the delta system from scratch now I wouldn't use this method instead, but it is what it is.

**Dictionaries**: ZStd has support for dictionaries, allowing you to pre-share some data for compression between multiple frames (files, basically). This could allow us to reduce download & disk size even more in many cases. Some questions we need to ponder about before implementing this though: Do we permanently pack a preset of dictionaries with the launcher, or do we allow servers to dynamically generate a set of dictionaries for their content? 

**Binary deltas**: We still can only send whole files when a file needs to be downloaded. The game's compiled assemblies easily weigh more than half a megabyte. Ideally we would be able to supply binary patches[^bsdiff] instead, to only transmit the changes from the previous file versions. A challenge here is that the `.dll` files don't diff well, but I believe that with a specialized tool to re-organize them internally we could get huge savings. 

**Interrupting and resuming downloads**: Right now the launcher needs to do a whole download in one go to actually store it to disk[^commit]. If you already have files and are just downloading an update this isn't a problem, but the hurdle of large initial downloads (fresh launcher, first ever connection) might prove problematic with people with poorer internet connections. Ideally the launcher could resume interrupted downloads with the files it already has.

**Improving ACZ load performance**: ACZ takes a long time to initialize on the server now. It's not too bad, but I would prefer if it were faster (<1 second). This is purely down to lackluster design on `System.IO.Compression.ZipArchive` making it impossible to efficiently handle zip files, nothing more. I couldn't be arsed to make my own non-terrible zip file library, at least not yet.

[^commit]: We do write stuff to SQLite as it comes in over the wire, but we only commit the transaction when it the download fully finishes.
[^bsdiff]: Let's just say we are... [familiar](/post/18-06-24-progress-report-7/#entity-netcode-optimizations-pjb).

{{< newsection >}}
### Zstd Game State Compression (Technical)
*Contributed by PJB*

As part of the above work on deltas I got a little familiar with Zstd, the modern compression algorithm used by it. I swapped out the old game state compressor with it for some speed ups.

We previously just used .NET's `DeflateStream` to do compression. The problem is that this API, like many, was not actually designed with any sort of performance in mind:
1. Because it's a stream-based API, it always incurs at *least* one wasted memory copy that could be avoided in many cases. This is at least minor.
2. You couldn't really re-use `DeflateStream` across multiple compressions. This means you would be *constantly* allocating and de-allocating native compression contexts and other garbage just to run a compression algo.

So switching from Deflate to Zstd did not only provide the advantage of using an algorithm that wasn't 28 years old, it also helped by allowing us to use a functional high-performance compression API. Hooray!

{{< newsection >}}
### Grid Splitting (Technical)
*Contributed by metalgearsloth*

Previously when you tried to saw a station in half there was no code detecting that a split had occurred which has now been added. Rather than checking every tile individually we group areas of tiles together as nodes and check those connections. This means that instead of potentially thousands of tiles we only check a handful of nodes to see if a split has occurred. The larger group of tiles is left as the original grid and the smaller group forms a new grid. Splitting off a solar array should be unnoticeable and sawing split station in half took ~250ms which we expect to get faster over time.

Here's what the `showgridnodes` debug command looks like:

{{< imgw "images/post/pr_34/nodes" >}}

{{< newsection >}}
### Custom MIDI Soundfont Support
*Contributed by vulppine*

MIDI sound fonts are now selectable by the end user in Robust Toolbox! They override any fonts loaded in by the server, and the default sound font used by your current system. This is beneficial for when you want to use other sound fonts in SS14 rather than the default one installed on your system, without having to replace any system files or deal with any configuration. In order to add any custom sound fonts to any Robust Toolbox game, you'll need to go into the user configuration folder related to the game in question, and add any sound fonts you want into the 'soundfonts' folder.

{{< newsection >}}
### Replaced Lidgren Encryption with Libsodium
*Contributed by PJB*

Since we added account authentication, communication with the game server has mostly been AES encrypted. This was built using Lidgren's `NetEncryption` system and, well, it worked. If you [check the code](https://github.com/space-wizards/SpaceWizards.Lidgren.Network/blob/11198c1c46ea721dbcbe99296570495ba9cd68a6/Lidgren.Network/Encryption/NetCryptoProviderBase.cs) and you know a little bit about AES however... Yeah it reuses IVs on CBC mode. Yeah that makes it automatically broken. Hooray!

Because I am not a cryptographic expert I decided that the best way to fix this was to simply replace this with Libsodium's [AEAD XChaCha20-Poly1305 API](https://doc.libsodium.org/secret-key_cryptography/aead/chacha20-poly1305/xchacha20-poly1305_construction). I trust that the crypto is not completely broken now. I also completely tore out Lidgren's encryption support in our fork (it was evidently broken and didn't integrate with the internals anyways).

There are some gotchas here though. The first thing is that .NET didn't have an existing non-terrible Libsodium binding, so I had to make a partial binding for the APIs I care about myself: [SpaceWizards.Sodium](https://github.com/space-wizards/SpaceWizards.Sodium). 

The second problem is that this change does have a noticeable increase on bandwidth usage. This is because proper encryption:tm: has more overhead in the form of AEAD and IV that has to be sent. Lidgren has a feature where it combines many net messages we send into fewer larger UDP packets. This is good, but the missed optimization here is that encryption runs *before* this combining. Ideally we would run encryption afterwards and only needing to encrypt single UDP packets, saving us some bandwidth. This would require deeper integration with Lidgren's internals however, so this is something for the future.

I do believe that this new encryption system is at least faster CPU wise though, by the simple fact that .NET's crypto API is pretty terrible and Libsodium's isn't. Just like the compression thing above!

It should be noted we've basically been maintaining Lidgren on our own for a while now, since upstream has stopped development. Our fork is [SpaceWizards.Lidgren.Network](https://github.com/space-wizards/SpaceWizards.Lidgren.Network).

{{< newsection >}}
### SpaceWizards.HttpListener

Continuing the trend of forking and doing things ourself, a problem that came up while developing deltas above is that `System.Net.HttpListener` was kinda bloody broken.

Let me back up for a second here. The .NET BCL has a type `System.Net.HttpListener` which is basically a lightweight HTTP server you can embed in your app. This is great! The problem is that it's basically completely abandoned by .NET in favor of "just use ASP.NET Core lol"[^kestrel] and is no longer being maintained. 

The type was originally designed to wrap the `http.sys` Windows API. Outside Windows, an implementation that originates from Mono is now used. This has some funny consequences:
1. The implementations are not consistent between Windows and Mac/Linux. 
2. On Windows, listening to this HTTP listener requires admin access.
3. On Mac/Linux, the implementation is extremely buggy.

To solve (1) and (2) we opted to manually compile the managed (Mac/Linux) version of the type and use it on Windows too. This already required us to copy the code into its own repo. This was done via a submodule though, so using it wasn't that convenient for other projects.

(3) however cropped up a *lot* while I was working on the delta-updates stuff, so I had to make multiple fixes myself to make this work. I didn't bother to upstream these since it's a ton of effort and there seems to be a lack of interest.

Because of this I decided to make a proper NuGet package and such for the effort, so it's easier to consume by others. Anyways uhhh, have [SpaceWizards.HttpListener](https://github.com/space-wizards/SpaceWizards.HttpListener/)!

[^kestrel]: We did actually use ASP.NET Core's Kestrel at some point for our HTTP-server-needs, but had to drop this since they stopped shipping individual components as NuGet packages. Yeah, it *used* to be an option but they dropped it...

{{< newsection >}}
## Credits
### Contributors Since Last Progress Report
*20kdc, Alainx277, AugustEymann, CrzyPotato, Daemon, Delete69, DogZeroX, DrSmugleaf, DubiousDoggo, ElectroSR, Emisse, EmoGarbage404, Fishfish458, freeman2651, HoofedEar, ike709, juliangiebel, KaiShibaa, keronshb, Leander-0, Macoron, metalgearsloth, Mirino97, mirrorcult, moony, Morb0, Pangogie, PaulRitter, Peptide90, PJB, ProfanedBane, Radosvik, Rane, Saakra, ShadowCommander, Snowni, Soupstraw, TaralGit, TimrodDX, UKNOWH, Veritius, vulppine, wrexbe, Zumorica*

### Patrons
*Alex Fry, Altana, Anthony Fleck, AquaDraco, Austin Nelson, Blaise M., Bobberunio, Callum Tubrett, Collin R Terrell, Cormos Lemming, CPM311, Dan Griskardian, Daniel Thompson, Darren Brady, Daskata, DramaBuns, Durp, Eric VW, Ethan Keller, Evan Armstrong, Farewell Fire, Florian, Frege Beach, grhmhome, Hamcha, hh, Jack Rose, James Andrew Peoples Jr, Jex N, Joel, John Edward Hamilton Barchard, Joshington Awesomahee, JustanAnus, Koyki, Kris Piper, KrystalDisc, liltenhead, Mikhail, Miniwoffer, Mono, Nicholas Hillblom, Oxyclean114, Peter "Azmond" Newhouse, Phillip Inman, Ramiro Agis, Robin Rottstock, Seija, Serathis, SnapKick, Spiffyfishface, spinnermaster, Taylor, ThatGuyGW, The Hateful Flesh, Tom Cruize, Tomeno, Valinov, vifs_vestige, Viridian, Will M., Wrexbe, Zandario*