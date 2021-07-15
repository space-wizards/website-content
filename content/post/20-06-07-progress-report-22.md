+++
title = "Progress Report #22: Full Steam Ahead"
author = "Many people on Discord"
date = 2020-06-07
categories = [
    "Progress Report"
]
reddit = "https://www.reddit.com/r/SS13/comments/gybe61/ss14_progress_report_22_full_steam_ahead/"
+++

It has been 3 months since the last post, we have a lot to tell you!

<!--more-->

## Space Station 14 is on Steam!

<center><iframe src="https://store.steampowered.com/widget/1255460/" frameborder="0" width="646" height="190"></iframe></center>

It's finally here. I can't express how much seeing that Steam store page pleases us.

It's quite baffling how difficult it was for us to write the descriptions on the store page. It took us multiple rewrites and a *lot* of discussion to get to the descriptions we have now, and I'd say they're basically perfect.

There's not *much* more to say about the Steam store page though, but here's a quick Q&A in case you have any, well, questions:

* **Will I need to use Steam to play SS14?** Nope! We will always keep supporting standalone versions of the game. While we do recommend you to use Steam for various reasons (auto updates, faster downloads, more convenient to install, no AV software problems), the option is fully up to you.
* **Will SS14 be free on Steam?** Yes, 100%!
* **Will the Steam release support multiple codebases?** We will try our best. While there is a chance that Steam's review team turns it down due to technical reasons, this is very unlikely due to our architecture being sanely sandboxed and such.
* **Why didn't you mention SS13 on the store page?** We tried to get partnered with Discord in the past for that sweet vanity URL and such. The problem is that Discord thought we were some silly fan game of SS13 and refused. We didn't want to risk *anything* of the sort with the Steam release so decided to play it safe for now. We may amend the description later to add it when we have people actually playing the game, though.
* **Why can't I download it yet?** When we wrote the previous progress report we said that you would be able to download the game immediately from Steam. After thinking about it a bit we decided to postpone the actual public Steam release until the game is "playable", i.e. you can have a full round of spessmens in it. Obviously the game will not be finished by then (it's tagged as Early Access for a reason) but we do intend for it to be playable.

We also commisioned some art for the Steam release, especially for the library. Because you can't see the library art unless you, well, have a beta testing key, we decided to post it here for you all to see:

<center> {{< imgw "/images/post/pr_22/SS14_library_capsule_resize_600x900" >}} </center>

Credits to [**wasteroforange**](https://wasteroforange.tumblr.com/) for the amazing art, she knocked it completely out of the park compared to our initial ideas for the art.

## We're on Patreon!

<a href="https://www.patreon.com/bePatron?u=27619661" data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>

Along with the Steam release, we also have a Patreon now!

We intend for the money coming from Patreon to mostly go to practical costs like hosting, artwork, and other such things that we can't just code in our free time. We'll have to see what to do with any leftover money. Bounties are one option, although none of us really are warm on the idea of having to manage those.

Some ground rules:
* We will be completely transparent about where every single penny goes.
* People that get to decide on bounties do not get to claim them, if/when we do them.

## In And Out

{{< video-auto "/video/pr_22/hacking-v2.mp4" >}}

Showing off some of the new content in this progress report, in a nice clip.

## New Content

### Proper map in-dev - Saltern
*Contributed by PJB3005, AJCM-git*

{{< imgw "/images/post/pr_22/saltern" >}}

We are working on a proper map that we intend to be suitable for full games. We decided to keep the map relatively small for now, figuring that we would have relatively low player count. This also means many departments like hydroponics do not exist, since we don't currently consider them to be a big priority gameplay wise.

The map is called Saltern, which we picked [after a lot of careful consideration (Discord message link)](https://discordapp.com/channels/310555209753690112/310555209753690112/701220883133366384).
<!-- Maybe change the discord link with an screenshot of the important messages?-->
<!-- it's too long -->

Development of the map was initially started because we needed a scene to take screenshots for the Steam store page. We figured we'd need a semi-logical place to take the screenshots and didn't have a map yet, so we just started making one!

### Basic Gamemodes
*Contributed by Zumorica*

We have added a new gamemode to the game, Suspicion on the Space Station, or SSS for short. This gamemode is similar to the infamous Trouble in Terrorist Town. We decided to work on this as a placeholder for a proper gamemode until we have more systems fleshed out, because real SS13 traitor gameplay isn't all that interesting if the crew has nothing to do *but* look for you.

{{< imgw "/images/post/pr_22/uplink" >}}

### Physics Rewrite & Gravity
*Contributed by InquisitivePenguin*

We've rewritten a large part of our physics engine! Expect more realism and smoother performance. The new engine correctly uses impulses and forces to do calculations, which opens the door to future systems like pulling which were not practical to implement with the old physics engine.

There is now also proper gravity, with fully breakable gravity generator and pushing off walls in zero-g.

{{< video-auto "/video/pr_22/gravity.mp4" >}}

### Stuns
*Contributed by Zumorica*

You can now stun those darn greytiders as a security officer with your trusty stunbaton!
When you get stunned, you can see how much time you'll be stunned for on the right.

{{< imgw "/images/post/pr_22/stuns" >}}

### Solar Panels
*Code contributed by 20kdc with suggestions by RemieRichards, ComicIronic, and PJB3005. Sprites imported from CEV-Eris.*

The current state of the station uses magical generators. They're definitely nice for testing, but they're also quite cheat-y. Luckily, SS13 does have a relatively easy-to-implement power source that isn't much in the way of a station liability: Solar panels.

There isn't much fancy to say about these, but the UI for the controller uses textfields rather than the relative +/- used by SS13.
Additionally, to the right there's a view of the position of the panel and sun.

{{< video-auto "/video/pr_22/solars.mp4" >}}

There are still some improvements to be made, like proper solar trackers, but those are waiting on a rewrite of the power system to allow better connectivity of this stuff.

### Wire Hacking Interface
*Contributed by PJB3005*

The new wire hacking interface has been completed. We previewed a mockup of this interface many months ago in PR #19, but it's finally done and in-game. It looks amazing and I'm very proud of it.

{{< video-auto "/video/pr_22/hacking_interface.mp4" >}}

### Fancy Right-Click Menus
*Contributed by PJB3005, Zumorica*

The right-click menu is something that every SS13 player hates. In general, it's extremely sluggish to use but also often the only option. This is not a trait specific to right-click menus; the problem lies solely with the inability to customize them to fit SS13 better. We are convinced that the classic right-click menu is far superior than trends such as radial menus, if implemented well (of course).

We now have a new & improved right-click menu that should be an absolute joy to use, and definitely so compared to BYOND. The previous one we had was an absolute placeholder, this one not anymore.

{{< imgw "/images/post/pr_22/right_click" >}}

There is of course more than meets the eye. You can now directly do various actions like clicking, activating, or examining the objects listed in the right-click menu by just pressing the same button in the entity list! This is incredibly useful and it basically merges the best of both worlds of the right-click menu and alt-click menu that many SS13 codebases have.

### Ghosts
*Contributed by Zumorica*

Ghosts have been finally added to the game, including the classic deadchat! You can even return to your body under certain conditions.
{{< imgw "/images/post/pr_22/ghosts" >}}

### Spess Bartending Action
*Contributed by Injazz*

{{< imgw "/images/post/pr_22/bartending" >}}

You can now create drinks with fancy sprites just by pouring right stuff with right proportions into drinking glass! Just like in SS13!
And now we're planning to port [way better bartending (my personal opinion) - from Goon!](https://hackmd.io/JnFmrcYfS7G_NYEq3yH3Zg)

### Kitchen Dept presents: Microwave
*Contributed by Memory*

{{< video-audio "/video/pr_22/wzhzhzh" >}}

There is now a microwave, and we are incredibly pleased with the sound it makes.

### Audio Occlusion
*Contributed by Clyybber*

{{< video-audio "/video/pr_22/occlusion" >}}

### Instruments and MIDI
*Team project by Zumorica, PJB, Q, and probably others*

Ever wanted to connect your keyboard to the computer and play soothing music to your fellow crew members? Well, now you can! We have finally finished adding instruments with MIDI support! Whether you want to play a MIDI file or use a physical (or virtual) MIDI keyboard, instruments allow you to play your own music. Your dream of performing a delicate piano recital to the entire crew can now come true! It even supports [pitch bending and control change](https://streamable.com/jytwd8)!

<iframe width="660" height="315" src="https://www.youtube.com/embed/_Tocsb8N8eA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Furthermore, thanks to using a [full blown synthesizer](http://www.fluidsynth.org/) for MIDI, you can create and add custom instruments, such as the classic gilded bike horn.

<iframe width="660" height="315" src="https://www.youtube.com/embed/2zwbZ3lcAZ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You may also recall that we teased this feature many months ago. It has now finally been deemed stable enough for general play.

### Enviromental suicides
*Contributed by Izimann*
{{< video-audio "/video/pr_22/microwave" >}}

### Emote improvements
*Contributed by Hugal31*

A small quality-of-life improvement: emotes now show with the rest of the speech. The mime will surely appreciate.

{{< imgw "/images/post/pr_22/emotes" >}}

### Better Cooldown Animations
*Contributed by Tomeno*

The cooldown animation on items has been improved. It's silky smooth now and has a much cooler donut shape.

{{< video-auto "/video/pr_22/cooldown.mp4" >}}

### Smart Equip Shortcuts
*Contributed by Hugal31*

You can now press *Shift+E* and *Shift+B* to snart equip stuff to and from your belt/backpack respectively. When your hand is full it'll put the item in, if it's empty it'll pull out the last item you put in. This makes it was easier to "drop" tools into your belt, and it makes backpacks very useful as a quick place to stash something to free your hands temporarily.

{{< video-auto "/video/pr_22/smart_equip.mp4" >}}

### Equip Error Messages
*Contributed by Hugal31*

In our neverending quest to make the game more approachable for new players, it now tells you why things don't fit in inventory slots.

{{< imgw "/images/post/pr_22/equip_error" >}}

### Tool Refactor
*Contributed by Zumorica*

Tools have been refactored to make them much more modular. Thanks to this, you'll be able to have tools that can act as a screwdriver and wrench at the same time, or have multi-tools that can switch between different tool "behaviors". The Jaws of Life and Powered Hand Drill have also been added to the game, with fancy tooltips!

{{< video-auto "/video/pr_22/jawsofmemes.mp4" >}}

### Combat Mode Controls, Now Way Simpler

In the previous progress report, we were talking about how we "fixed" combat mode controls by making it so that you have to hold your mouse for a tiny bit to do a full "swinging" attack.

Since then somebody on Discord suggested just using spacebar instead and... yeah it's just spacebar now. No holding stuff. Spacebar is a swing attack if you're in combat mode. Simple huh.

When designing the combat mode controls I didn't want to use a key on the keyboard because there was no immediate room around WASD to put such an important combat button. That's probably what got me to completely rule out the keyboard, and it's probably why I fixated on using the mouse, and the resulting "hold mouse down" scheme.

Sometimes all it takes is somebody else with a completely different mindset to get you to realize the simple solution, huh...

### Limbs, Organs, and Big Plans
*Contributed by GlassEclipse*

{{< imgw "/images/post/pr_22/body_system" >}}

The backend for the body system has been added, and it is more robust than ever! In SS13, many things were hardcoded - humans couldn't have vox lungs nor robotic arms fused onto their bodies. With this new system, that is no more.
Humans, robots, and animals are all the same - every body is modular to an extreme. Install batteries to power the EMP field generator in your arm, or replace your legs with superspeed xenomorph walkers. Servers can even choose to support having extra legs - or even extra legs attached to the end of your extra arm protruding off your extra leg (no visuals, unfortunately). (obviously none of these advertised features are in yet, but they will be doable with the system and eventually will be, probably!)

The UI is still a work in progress and the system is still being developed, but currently the system is about 35% done. Surgery is functional and is more similar to Baystation than TGstation, but any fork off the main can change that themselves (of course!).

### Utility AI (still WiP)
*Contributed by metalgearsloth*

<iframe width="660" height="315" src="https://www.youtube.com/embed/M_LWWPOS2QY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Metalgearsloth has been working on a fancy AI system based on an "Infinite Axis Utility System", also known as Utility AI.

Traditionally SS13 AI are Finite State Machines (FSMs). This means there are a few states they can be in and they can switch between these states with hardcoded condiitons. FSMs make complex behaviors difficult to implement so a more robust AI system was chosen for SS14.
In Utility AI, each action an AI can take is given a score, and the action with the higher score wins. These scores are very flexible and can be calculated from many different inputs and such. This system can also be used for individual targets for actions.
For example, if an AI has 5 different guns in front of it, it could assign each gun a score based on statistics like fire rate or damage, and then pick up the one it prefers. These weights could be modified or take into account other factors, e.g. don't pick up a gun we don't have ammo for.
This can be used for any action the AI can take, e.g. selecting food based on its nutritional value, selecting a target based on its health, etc.

The basic system has been implemented, but not yet merged. A lot of work is still necessary to refine the system and make it great for gameplay.

### Skub
skub

{{< video-auto "/video/pr_22/skub.mp4" >}}

## Technical details for developers

### RSI Editor
*Contributed by ComicIronic*

The *Robust Station Image* format is SS14's custom spritesheet format. Supporting a simple, well-designed format is good for coders and content creators, but not so good for tooling. Up until now, RSIs have been missing a GUI for editing sprites and previewing animations.
That's why we made the [RSI Editor](https://github.com/space-wizards/rsi-editor), a cross-platform GUI application. It has lots of the features of Byond's DMI editor, and should help spriters translate existing DMIs into RSIs, as well as create new ones.

### Scripting
*Contributed by PJB3005*

{{< video-auto "/video/pr_22/scripting.mp4" >}}

We've integrated a C# Interactive prompt into the client and server, allowing you to run arbitrary C# code. This is an **amazing** debugging/development tool. It is, however, only limited to being a development tool for security reasons.

### Server Hosting Documentation & Software

Did you know that all our server hosting software and documentation is completely open source and decently documented? If you would like to host your own server, we have written out a [tutorial](https://hackmd.io/hCSV7oV0Q_q3WnuL2rqC3Q?view) on server hosting. There's even a guide for "quick private server for friends"!

### Client-Side Prediction
*Contributed by Acruid and PJB3005*

Currently, you will notice that there is quite a bit of lag when playing on the public servers. This is because movement is fully server side, so it takes at *least* your ping to the server before you actually see something move. This is obviously terrible for gameplay and it's one of the reasons BYOND is so awful.

Of course, there is a solution: **client-side prediction**. When you start moving you want the client to immediately do it locally, while also sending the exact inputs to the server. Then the server will replay those same inputs and if everything goes right, the client and server should have you move in the exact same way and have you stop at the exact same position.

Of course, that's "if everything goes right". When do things not go right? Well you have to keep in mind that you're on a server with a bunch of other people, and there is a bunch of lag in both directions. If you get stunned as you start moving, the server will just stun you and keep you in place. But your client won't know that you got stunned for maybe another 50 milliseconds, due to network lag! Yet, it already started moving!

The client should realize "oh crap, I should not have moved" as soon as the server tells it "you got stunned". This is called **server reconciliation**, and it's where it gets tricky. You have to realize that it went wrong, *and* you have to be able to fix it. For something like movement this is *relatively* easy. You can keep track of past positions and re-play the movement inputs if anything desynchonizes. For some more complex code like inventory interactions? You can easily do stuff like picking up an item and sticking it in your backpack, all inside prediction, if you're fast enough. Keeping track of these kinds of interactions nicely is basically impossible, but we still want to predict them!

As an example of this going wrong, in *Minecraft* you can easily run into these kinds of issues due to its poor netcode. Ever broke a block on your client, but it didn't drop anything and trying to walk into it results with your client glitching out? That's because the client *thought* it broke the block, the server didn't. You can't walk into the empty space, because the server doesn't let you walk into walls. To the client there's no wall though! The client doesn't have correct reconciliation to correct for this error and the workaround is usually that you have to manually try to place a block in the empty space.

In *Overwatch* they designed a custom flowgraph based scripting language to handle this for high-level code like abilities. Kind of outside our realm of possibility.

The architecture we have currently settled on is to simply reset the *whole* client side game state every time a server update comes in, and then re-play *all* predicted inputs that have yet to be acknowledged by the server. Checking what was made dirty is easy, the server netcode already does it. Resetting the state is easy, the client netcode already does it. Replaying input is easy, we can hook all input!

Something I should note is that the **client has to run ahead of the server**. There is still a network delay to sending input to the server, so we want to run the client at the same tick that the input *arrives* at the server. This is *ahead* of the server in real time. To make matters worse, the client is actually behind the server on the information it has (the delay is two-way). This means that we have to **constantly rewind and fast-forward *time itself*** on the client, and how *much* we rewind time is based on your network latency. SS14 now does time travel.

And, this is where having a custom engine is *extremely useful*. We have complete control over the game loop, timing, network game state system, reconciliation, *etcetera*. Doing these kinds of things would be extremely difficult in other engines or systems that are not flexible enough.

The hardest part, I suspect, will be the performance concerns of resetting the client constantly. Currently the game server runs at 60 TPS (partially because a lack of prediction/interpolation would otherwise result in choppy movement). This means the entire game has to be reset 60 times per second. If you have 1 second of ping (unrealistically bad networking, but an easy example), the client now has to reset and replay 60 ticks every tick, resulting in 3600 ticks per second. Ouch. The good thing is that there is very little actual heavy code running on the client, and we can do optimizations to special case whatever we need to exempt from this processing.

There are also concerns like how to handle sprite animations (they'd get reset 60 times a frame so their animations wouldn't progress correctly without special code) but I'm sure we can figure something out.

Currently, the basic framework for prediction is implemented, but nothing is written to support prediction yet short of... the combat mode button on your HUD. (it was easy to test with, ok?). I am hoping that by the next progress report we have full movement prediction and also prediction on various interactions like picking stuff up.

### Keeping traditions alive
*Contributed by Memory*

{{< imgw "/images/post/pr_22/wzhzhzh" >}}

### I Forgot to Install CS: Source
*Contributed by Swept, PJB3005 (Thanks yeeye for the awesome sprite!)*

{{< imgw "/images/post/pr_22/cssource" >}}

The "missing texture" sprite has been replaced with something a bit recognizable.

### Fixed-Point Reagents
*Contributed by PrPleGoo*

Reagents now use fixed-point decimals to store their reagent counts. This means no more 2.411421e-10 in your beaker. A minor technical improvement over SS13 but quite a positive one.

## Credits
The contributors since the last progress report have been (by their GitHub alias): *20kdc, AJCM-git, boiled-water-tsar, CakeQ, CC-4477, chairbender, Clyybber, collinlunn, ComicIronic, Decappi, FL-OZ, Fouin, GlassEclipse, Hugal31, Injazz, InquisitivePenguin, JiimBob, lzimann, metalgearsloth, Moneyl, Macoron, partyaddict, PaulRitter, PJB3005, PrPleGoo, RemieRichards, SamV522, ShadowCommander, SweptWasTaken, Tomeno, Zumorica.*

Also special thanks to everybody else like the people providing feedback in Discord. Every little bit is appreciated!
