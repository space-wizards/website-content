+++
title = "Progress Report #7: Visual"
author = "PJB3005"
date = 2018-06-24
categories = [
	"Progress Report"
]
+++

Fancy graphics and less fancy menus.

<!--more-->

## The Sprite Component Refactor (PJB)

So when you want an entity to render on the map, you need a component that gives it a sprite. You’d think this is pretty simple, but this is how many sprite component variants there were in the main engine:

* `SpriteComponent`
* `AnimatedSpriteComponent`
* `WearableAnimatedSpriteComponent`
* `ItemSpriteComponent`
* `MobSpriteComponent`

This was such an absolute mess. Nothing made sense and everything just used `WearableAnimatedSpriteComponent` because it was easiest to put into a prototype, although the animations system never worked.

I’m sure all of this worked at some point, but horrendously poorly, and awfully thought out. Because item code and such isn’t in the main engine anymore (thank god), That leaves us with two component that actually matter: `SpriteComponent` and `AnimatedSpriteComponent`. You’ll note that in say BYOND, there’s no distinction, so these should just be merged.

The APIs were also horrible, and they couldn’t be controlled from the server, which was also a major pain point.

I killed off all except `SpriteComponent` already in the Godot refactor, because they were too painful to maintain. No, there was no loss of features.

So, what does the new system do?

1. **Sprites are made of multiple layers.** Same deal as overlays in BYOND. Layers can even have custom scaling and rotation.
2. **Animation Support.** Pretty self explanatory really.
3. **Shader support!** Each layer of a sprite component can have its own shader applied, which means you can do some fun stuff!

### Shaders

So you might've heard the word "shader" used as a fancy way to say *dude fancy graphics.* Which yes, is one of the many things they're used for. BYOND never really supported this, only giving you specific presets like color matrices and 512's simple filters. Luckily, Godot was not desiged at the turn of the millenium, so we can write our own *fancy graphics!*

The first example is allowing specific layers to be exempt from lighting. This is an amazing graphical detail, which makes things like computers look *incredible:*

![](/images/post/pr_7/unlit_materials.png)

This effect is nigh-impossible to do correctly in BYOND. SS13 codebases like Paradise have attempted this, but due to layering you'll always get issues when somebody moves on *top* of the computer. There may be some hacky way to get it to work perfectly, but it'd be so much effort I'm not bothering to try it.

[This was actually already an idea of the original remake crew, a whole **6 years ago.**](https://youtu.be/ouyzMwC5iEE?t=6m46s) So I’m glad to finally see it in action properly.

Now...

<img src="/images/post/pr_7/sing.png" width=720 />

*dude fancy graphics.*

## Outlines (PJB)
In SS13, clicking on an object is pixel perfect. There are many problems with this:

* Pixel hunting when trying to pick up thin/small objects like wire coils.
* People picking smaller borg sprites so hitting them is harder.

Sadly, BYOND can’t do better. Thanks BYOND.

In SS14, we decided to not use this system. Objects have a click bounding box, and it works quite well, room for improvement of course, but still. To properly visualize what you’ll click on, the object you’d click on is now highlighted:

![](/images/post/pr_7/outline.png)

## An Actual Map (PJB)

Ever since we started adding stuff to content, nobody is directly developing against the standalone engine anymore. This is absolutely fine. What’s annoying was that the map was still on the engine, so we couldn’t use content things on it. After fixing the placement code to allow me to make a new grid and other shenanigans, I made an entirely new map and put it on the repo. It has a bunch of things like items and a simplistic power grid.

Yes, the lights shut off automatically when the power grid dies.

Welcome to `stationstation.yml`

![](/images/post/pr_7/stationstation.png)

## Linux & Mac Builds Up (PJB)

I finally went and got Linux and macOS builds to work again. The Linux builds are actually tested this time around. [Get 'em here.](/about/nightlies/)

## Inventories (Clusterfack)

Cluster reworked the inventory system and it now has some basic GUI and stuff like slots. Definitely not winning any awards but we gotta start somewhere.

![](/images/post/pr_7/inventories.png)

## Power (Clusterfack + PJB)

We have a power system now! It took an iteration or two, but we're quite happy where it's at now. We got batteries, consumers, APCs, generators, ... The system is intelligent about power usage, and Watts/Joules are correctly defined.

A big difference from SS13's system is that energy drain is handled by the *power network,* not the invidual machines. You see, in SS13, each machine told the powernet "hey I took 200 energy (no, there's no unit specified, Bay probably did by now but not traditionally) this tick". First of all, this was prone as hell to race conditions and network drain is completely unpredictabble. Secondly, "an amount of energy" isn't even how energy *works.* Realistically, when a machine turns on it increases its power usage for that duration. For giant power hogs like a teleporter, you'd have giant capacitor banks and superconducting wire capable of discharging their energy in a fraction of a second to power some sci-fi machinery.

Visualization for the power system exists, but it's not great. Lights turn on and off, the rest you'll have to check through a debug tool.

## Entity Netcode Optimizations (PJB)
So the “main” netcode for entities is made up of two parts: game state and messages.
Messages are simple: they’re one-off messages sent between server and client, potentially related to an entity. Stuff like the client saying “I want to switch my hand to left”.

Then there’s game state. Stuff like the positions of every object, their sprite, etc… Stuff like this needs to be permanent, because if somebody connects mid round, they need to still know everything.

How was this done before? Dear god.

So first of all, we rounded up every entity and every network component on said component. Yes. Every entity. We then asked them to give us back an object containing all their state (position, sprite, etc…) that the client needs. We collected all of those into a giant blob, and serialized it to binary. So basically, this binary blob could be deserialized back into an object to get the state again. So, we sent this to the client..? Right?

Nope! It’s 50 kB of data and that times 60 (netcode runs at 60 Hz) would be 3 god damn MB/s. That’s way too much. So we need to compress this! Quite simple! We know that the client has the last iteration, so we just used a C# port of a [binary diffing algorithm](https://github.com/mendsley/bsdiff)! Genius!

Oh great my CPU is on fire now.

So yes, the previous netcode was extremely slow and inefficient. It worked but the performance was so bad I couldn’t even get a smooth 60 FPS on my 4.2 GHz quad core Windows PC. On my iMac I was lucky to hit 45.

To temporarily bandage it, my idea was to use P/Invoke instead of a C# library for the diffing. After struggling for 5 minutes to get the C code to even compile, [I ported the diffing algorithm to Rust](https://github.com/space-wizards/bsdiff-rs), because screw C. Honestly the port to C was a better idea in the long run anyways, because I had to write a bunch of wrapper code, including bzip2 (which I'd also have to get compiling..) Native languages like Rust or C don't have a garbage collector and are just much faster, so this helped relieve *some* stress.

It was still pretty awful though, [so I finally went and changed the diffing system](https://github.com/space-wizards/space-station-14/pull/586). We now are actually aware when an entity needs to be updated on the client. The result? Client CPU usage on my mac was halved. Server CPU usage dropped by a factor of 6. Movement also feels significantly smoother now.

There are still many things to do. Client bubbling, bandwidth optimizations, client side prediction, ...

But hey, I’m happy for now:

<img src="/images/post/pr_7/6_clients.png" width=1024 />

And this was the server:

![](/images/post/pr_7/6_client_server_cpu.png)


## A Thing (Clusterfack)

![](/images/post/pr_7/3d.png)
