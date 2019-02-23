+++
title = "Progress Report #10: Nothing To Say For Ourselves"
author = "PJB3005"
date = 2019-02-20
categories = [
	"Progress Report"
]
#reddit = ""
+++

Yeah I honestly have nothing to say for myself. You have the right to laugh.

<!--more-->

## Another Rendering Engine Change

Hahahah. Yep it's happening. We're creating another rendering engine. Laugh all you want, you have the right to and I can't blame you at this point, but I'm still going through with this and do believe this is the best way forward. To be clear, right now the code still works on Godot, the new renderer is optional.

So... you may wonder... why?

Godot does have nice features and it's definitely convenient to work with, but it's getting more painful to work with by the day:

* Crashes. Lots. At this point Godot keeps crashing constantly. I can't run the client for 5 minutes or it dies. I've attempted to look into this myself but it's all over the place. A lot of these crashes (but not all) are related to Mono though so I won't hold it against Godot since it *is* marked as unstable.
* Painful to work with. Like any game engine, Godot wants you to do things *its* way. We're only using Godot as rendering, sound and GUI engine, so we want to do things *our* way. There's a problem here. Most of this was worked around with hacks and can be fixed with *more* hacks, but these hacks get to the point of "time to distribute custom Godot binaries", which is a complete pain. Not to mention that I'm really not experienced with C++.
* Performance. Holy crap Godot's performance is atrocious. I don't want to go complete hostile here, but that's just how it is. Read on:

### Godot's performance

So to render a sprite on the screen, you generally need to draw two textured triangles (a "quad") in a rectangle shape. Pretty simple stuff right.
Now as it turns out, if you've got a few thousand objects to render, GPU drivers *really* don't like it when you tell them to render those one by one. So basically any 2D game uses a technique called "sprite batching", where the renderer does its best to make big "batches" of quads and render them all at once. Big performance improvements here.

Godot doesn't do this.

This is honestly mind boggling, and it *shows*. This isn't some "oh a minor improvement", it's 100% standard in 2D renderers and a significant difference. Yes I've done profiling, I'm not talking out of my ass. There are some discussions about this on GitHub, it mostly boils down to "3.1 GLES2 WILL do batching" and presumably the 3.2 Vulkan renderer won't be terrible either, but even on the latest beta GLES2 performance is even worse than GLES3, and we shouldn't need Vulkan as that completely screws older hardware.

There are other issues here, like Godot using forward rendering for lights, very poor data structure choices, etc...

For reference, I get barely 30 FPS on my laptop's integrated GPU (Intel UHD Graphics 630 on Linux, i7-8750H, not some ancient Sandy Bridge one) with Godot and lighting on, and we're not even rendering that much things yet. This is not acceptable, period. We could put effort into making our game more optimized for the renderer (by manually doing sprite batching), but that just becomes a giant mess of avoiding slow paths and reverse engineering the renderer. At that point it's better to make our own... so we are.

### Was Godot a mistake?

This is a tough question. One of the reasons we originally picked Godot in the first place is that none of us really were able to make an OpenGL renderer work properly. Even worse is that I was on an Apple computer at the time, and Apple has notoriously bad OpenGL drivers. We tried to get a cookie cutter example 3D renderer to work. It didn't. Even worse is that back then MoltenVK wasn't even open source so even if we wanted to go "screw old hardware let's go Vulkan", we couldn't because of Apple. Nowadays I have a good Linux laptop which means developing with OpenGL is actually *sane*. I've been using [RenderDoc](https://renderdoc.org/) a lot to debug and such and I probably would've lost my sanity trying to write this renderer without it. RenderDoc does not work on macOS.

If you're wondering how we solved the "Apple has terrible OpenGL support problem" today. We didn't. The difference is now it isn't directly holding back development. Maybe we'll put effort into making sure it works on macOS later, which will be agony, but at the moment I'm going with "your mistake for buying from the walled garden company". Theoretically the current renderer should work on macOS provided there's no driver bugs. Theoretically. Maybe eventually we'll write a Vulkan renderer too and that'll work on macOS sanely with MoltenVK. Theoretically.

So would I say Godot was a bad choice? No. We did get a lot of stuff done on it, but I feel like we're gonna run into more unsolvable problems if we continue with it as our only option.

### What about 3D?

Godot will still be supported as a backend for the time being, so 3D has nothing to fear. I'm not comfortable writing a 3D renderer in OpenGL because there's a LOT more to it.

### What about UI?

We are using Godot's UI system at the moment. I will say that Godot's UI system is quite good, though I don't have much perspective with other UI systems. I basically re-implemented it on the non-Godot version and it's been smooth sailing.

Not using Godot's UI also opens the door for tons of new fun things. For example Godot's UI theming is pretty weak. I implemented a new theming system using CSS (yes, CSS!) and I'm implementing the new UI theme teased before in Progress Report 8. We're also looking into High DPI support, which Godot seemed to have pretty poor support for.

Furthermore, we should be able to re-implement our custom UI system on top of Godot when I feel like putting the effort in.

### Introducing Clyde

Clyde is the name we (read: I) decided on for the new renderer. Currently targeting OpenGL 4.1 and heavily work in progress and bodged together. Targeting OpenGL 3.3 is probably doable (in fact I don't think we're using anything )

As it turns out, you can get quite far by drawing purely quads.

I mean, it works really. Performance is also already significantly better than Godot. I get about 2.5x FPS on iGPU comparing with unlit Godot. And there's already a lot of room for optimizations that I'm too lazy to make currently.

Of course I still have to implement things like lighting, but hey, it's getting there.

![Here's a screenshot of Clyde](/images/post/pr_10/clyde_screenshot.png)

