+++
title = "Progress Report #23: We Didn't Want To Wait Until Atmos Was Done"
author = "Many people on Discord"
date = 2020-07-22
categories = [
    "Progress Report"
]
reddit = "https://spacestation14.io/post/20_07_22-progress-report-23/"
thumbnail = "pr_23"
+++

Sadly atmos is not done yet. A lot of other stuff is though!

<!--more-->

## New hardware, new server
We'd like to thank all our generous patrons for enabling us to acquire better hardware for our servers. If you would like to support Space Station 14, consider contributing to our [Patreon](https://www.patreon.com/spacestation14).

The collected money has been used to rent a much more powerful dedicated box for our new server, **EU West 2**.

We're still looking into hosting in the US and moving our infrastructure over; suggestions appreciated.

## Movement Prediction AKA Lag-B-Gone
*Contributed by PJB*

Movement prediction is now in. That means you will experience 0 lag when moving around the station, even if the server is on the other side of the planet. This even works with lower server tickrates thanks to sub-tick input handling.

**While I will post a video here, the impact of this feature doesn't communicate that well over one. Join one of our servers and experience it yourself. It’s glorious.**

{{< video-auto "/video/pr_23/prediction.mp4" >}}

It still needs a lot of work, of course. If you try to move through doors you will notice some jumping due to how the system works. These issues will be ironed out over time but some effort is needed to move the code to shared and have it fully supporting reconciliation (the doors use timer callbacks right now which are completely incompatible with netcode...)

In the future, far more interactions, ranging from stuff like inventory manipulation to most machines, would ideally be predicted. This will be work but it's very possible, especially with more experience working with the systems.

The architecture we're using for the prediction system is the same one as [described in the previous progress report](/post/20_06_07-progress-report-22/#client-side-prediction).

## New content!

### Unarmed Combat
*Contributed by ShadowCommander*

You can now punch people. What more is there to say?

{{< video-auto "/video/pr_23/unarmed.mp4" >}}

### Click-dragging
*Contributed by chairbender*

The framework for click-dragging has been implemented. Currently, it is only used for dumping a container and buckling. More behaviors will of course be added over time.

{{< video-auto "/video/pr_23/clickdrag.mp4" >}}

One of the core problems with clickdragging in SS13 is that it's both finnicky (pixel hunting...) and unclear *what* you can drag *where*. Of course, we aim to solve both of these issues. As you can see from the video, all objects you can drag *onto* are highlit now. For "figuring out that it can be dragged at all" we do have some plans but they're not concrete yet (hint: it involves the right-click menu).


### Buckling
*Contributed by DrSmugleaf*

You can now buckle yourself to a chair.

{{< video-auto "/video/pr_23/buckle.mp4" >}}

Please refrain from noclipping out of reality with them, thanks.

### Weapons Rework
*Contributed by metalgearsloth*

A large amount of weapon types, weapons, ammo types, and ammo have been added.

{{< imgw "/images/post/pr_23/weapons" >}}

{{< video-auto "/video/pr_23/weapons-1.mp4" >}}
{{< video-auto "/video/pr_23/weapons-2.mp4" >}}

### Power Rework
*Contributed by collinlunn*

Power has been reworked from the ground up, and functions a bit differently compared to SS13. The biggest difference between this new system and SS13 is that **APCs are not wireless anymore**. Don't worry, we have our reasons and will make sure it doesn't become a clunky mess.

Wireless APCs are problematic as they depend on "areas". If you're not aware, in SS13 the station is manually divided into "areas" at map creation time, and these areas subdivide the station for APC power, fire/air alarms, etc... This is an annoying inconsistency for gameplay because players often can not interact directly or nicely with these areas.

Our idea is that every room is filled with "LV" wires that define "the room". The room name (e.g. "Robotics") on the APC defines the room name every machine is in. This same cable network would be used for stuff such as vent control via air alarm, etc...

Obviously, we recognize that manually laying a cable to every individual powered device would be extremely tedious. In actuality the LV wires act similar to Rimworld's power cables: machines can still connect to them "remotely" from a couple tiles' range, and we'll draw a tiny sub-floor cable to indicate the connection.

We also intend to make every aspect of laying cables as smooth and hassle free as possible to solve any minor nuisances that might result from this, though that's for the future.

Outside of the "earth shattering gameplay redesigns", we intend to give the power grid a slightly nicer hierarchial grid of HV -> MV -> LV aswell. Who doesn't love seeing 5 different cable/pipelines running through maintenance?

The power rework has a well-grounded framework so future stuff like separate data networks and extra cable types should be an absolute breeze to add to the game.

### Construction/Deconstruction Improvements
*Contributed by Acruid*

Construction and deconstruction have been overhauled, and are being continually improved. Most things don't have unique deconstruction steps yet, but that'll be easy to change.

{{< video-auto "/video/pr_23/construction.mp4" >}}

### Antag and Latejoin Preferences
*Contributed by ike709*

Like in SS13, players can now set their preferences for all of the different antags. Players can also choose a job when they join a round that has already begun.

{{< imgw "/images/post/pr_23/latejoin" >}}

### Slips, banana peels, and soap
*Contributed by Zumorica*

The Clown now has everything they need to ~~annoy~~ entertain the crew with ~~lame~~ hilarious pranks.

{{< video-auto "/video/pr_23/slip.mp4" >}}

### Janitor Gameplay
*Contributed by metalgearsloth, DrSmugleaf, ike709*

Puddles, trash, the mop. The janitor will feel right at home!

{{< video-auto "/video/pr_23/janitor.mp4" >}}

### ChemMaster 4000 and pills
*Contributed by ike709*

Added the ChemMaster 4000. Chemists will now be able to separate a beaker's contents and produce pills and bottles. Their reagents will be metabolized, which paves the way for medicine, poison, drugs, and more goodies.

{{< imgw "/images/post/pr_23/chemmaster" >}}

### New Utility AIs
*Contributed by metalgearsloth*

Last time we talked about the WIP utility AIs, now the system is done and we implemented some as examples, like xenomorphs and mimics.

{{< video-auto "/video/pr_23/utility-ais-1.mp4" >}}
{{< video-auto "/video/pr_23/utility-ais-2.mp4" >}}

### Flash
*Contributed by TheDracheX*

Security has a new method of subduing criminal scum: Flashes.

{{< video-auto "/video/pr_23/flash.mp4" >}}

### RCD
*Contributed by Kmc2000*

Added the RCD. It can only build walls at the moment because it was added before deconstruction, but that'll be fixed soon.

{{< video-auto "/video/pr_23/rcd.mp4" >}}

### Neck slot, cloaks and bedsheets
*Contributed by Swept*

The neck slot has been added, as well as cloaks.

{{< imgw "/images/post/pr_23/neck" >}}

### Airlocks Bolts & Wires
*Contributed by exp111*

Airlock bolts and a few other wires like safety and AutoClose have been implemented. Don't get crushed!

{{< imgw "/images/post/pr_23/airlock_bolts" >}}

### Fancier Cooldown Circles
*Contributed by Tomeno, Zumorica*

The item cooldowns are now even fancier than before, changing color during their progress and flashing white when they're done.

{{< video-auto "/video/pr_23/cooldown.mp4" >}}

They also apply to status effects at the right of the screen now, so you get a nice visual indicator of how long your stun lasts.

{{< video-auto "/video/pr_23/stun_cooldown.mp4" >}}

### Improved Click Detection
*Contributed by PJB3005*

Click detection on objects in the world has been significantly improved by basing it off the texture of the object. This is similar to how BYOND does things, but we'd be fools to copy it blindly. Everybody is familiar with the absolute pain of clicking on things like cable coils in SS13. So we have two solutions for this problem:

1. Actual sampling of pixels has a bit of a wider range, so you can be a pixel or two off and still click on the object.
2. Additional click-box overrides are provided for certain entities to make picking them up less finicky. Cable coils are an example of this.

### In-Game Credits

Want to get immortalized in a shitty 2D spacemans game? Join SS14 today, your name will be piled on with the rest of the contributors in our new credits window!

{{< imgw "/images/post/pr_23/credits" >}}

~~Maybe you'll even be the one to contribute a proper fill layout option for `RichTextLabel` so that list looks less awful.~~

### Minor things
- Fuel tanks explode now when interacted with a lit welding tool. *Contributed by Jackw2As.*

- Admins have their own chat channel. *Contributed by ike709.*

- Headbutt sound when you try to open an airlock without hands *Contributed by DrSmugleaf*

- Toys, carvings and fluff items *Contributed by Swept*

{{< imgw "/images/post/pr_23/toys" >}}

## Future content
Right now we have many important features in the works like atmospherics, disposals, authentication, the action hotbar, pulling, pointing and more all coming soon(TM).

Here's a teaser:

{{< video-auto "/video/pr_23/atmos.mp4" >}}

## Technical details.

### Grafana and Stats
*Contributed by Redline & PJB3005*

The server now supports logging various metrics that can be turned into some very fancy graphs:

{{< imgw "/images/post/pr_23/grafana" >}}

P.S.: I hate Docker.

### Clyde Refactors
*Contributed by PJB*

Work is undergoing to make it possible for the renderer to display multiple viewports at the same time. What does this allow us to do? See for yourself:

{{< video-auto "/video/pr_23/viewport.mp4" >}}

## Credits
The contributors since the last progress report were: *Acruid, aeosynth, AJCM-git, bhespiritu, Bright0, chairbender, Clyybber, collinlunn, ComicIronic, DamianX, DeanHU, DrSmugleaf, exp111, F77F, GlassEclipse, Hugal31, ike709, InquisitivePenguin, Izimann, Jackw2As, Kmc2000, MemeProof, metalgearsloth, meuser, PJB3005, RemieRichards, remove32, ScumbagDog, ShadowCommander, SoulSloth, SweptWasTaken, Tomeno, Tyler-IN, Visne, zamp, Zumorica.*

Many thanks to everybody who contributed. We couldn't do this without you!
