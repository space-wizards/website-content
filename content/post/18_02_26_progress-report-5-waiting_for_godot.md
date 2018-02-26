+++
title = "Progress Report #5: Waiting for Godot"
author = "PJB3005"
date = 2018-02-26
categories = [
	"Progress Report"
]
tags = [
	"Godot"
]
+++

So when was the last progress report made? November right?

Oh jeez.

<!--more-->

So depending on whether or not you read our Discord, you either think SS14 is dead or *Waiting for Godot*. Luckily (?), we're the latter!

## Godot

You may have heard of this open source game engine called [*Godot*](https://godotengine.org/) semi-recently. It's a 100% free and open source engine that's got quite a lot going for itself. Until recently they've been on 2.1, and while the engine was quite capable for 2D games (so I've heard) it was poorly documented, quite clunky and the 3D support was poor at best.

So their community of developers has been hard at work to make Godot 3, which improves the engine a _ton_. Actually I'm pretty sure _ton_ doesn't do it justice. Personally I first heard about the engine at all 6 months ago, due to this video:

<iframe width="854" height="480" src="https://www.youtube.com/embed/XptlVErsL-o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Just a month ago, [Godot 3.0 left beta](https://godotengine.org/article/godot-3-0-released).

One really big feature (of many) in Godot 3 is support for C# through Mono. If you didn't know what the Waiting for Godot memes were yet, you can see where this is going.

## Waiting for Godot.

So due to our decision to support 3D and 2D in SS13, we obviously would've needed to write our own OpenGL 3D renderer. This is of course very difficult and only Silver seemed to even have remotely the knowledge to do it. Hell Acruid wrote a textbook example 3D renderer and [it didn't work correctly on my iMac](/images/post/18_02_26-mike-macos.png) (I blame Apple for this).

So then when that certain video caught my eye claiming Mono support, oh boy.

At the very end of October, Godot 3 Alpha 2 was released with experimental C# support. At the beginning of December I started the `godot` branch on GitHub to get the client running in Godot. I was debating how much we wanted to use Godot before this, but settled on using it for rendering, audio, input and GUI (Godot has an excellent GUI system).

3 months later, and we're still waiting. Personally that's because I've been quite busy due to IRL reasons recently. There is very little work left before we can finally kill the SFML branch at this point. Really I just need to set up automatic builds and fix the content hands GUI.

But hey let's talk about the progress on the Godot branch!

![](/images/post/18_02_26-godot_screenshot_1.png)

As you can see: it works.

We are currently using Godot's own GUI system. It's completely wrapped using tons of code, but it's one hell of a lot better than maintaining the old hacky GUI system. Screenshot!

![](/images/post/18_02_26-godot_screenshot_2.png)

I haven't made any efforts to theme the GUI system much yet, so it's mostly Godot's own default GUI theme. Still better than the old mess:

![](/images/post/18_02_26-not-godot-screenshot.png)

Performance is much better than the SFML branch too. Though uh... on macOS it's still _highly_ lacking when lights are involved. This seems to be completely the fault of Apple's ancient awful OpenGL drivers. Godot 3 uses GLES3.0 for rendering (although a GLES2.0 renderer is coming in Godot 3.1 to solve this, especially due to Android). Apple's best supported OpenGL version is 4.1 (and it's poor support at that), which is 8 years old now. It's even worse in 3D, where Godot pretty much seems to choke the GPU and make the entire system slow from just rendering a single cube. Thanks Apple.

(Side note: just a few hours before writing this, [Vulkan now runs on macOS thanks to MoltenVK being open sourced](https://www.khronos.org/news/press/vulkan-applications-enabled-on-apple-platforms), and Godot's renderer seems to be getting rewritten to Vulkan. There is hope for playing 2/3D spessmens on macOS.)

Also, I spent a few hours working with Godot's 3D system to try importing the models from SS3D into Godot, and once I had a clue what I was doing I managed to get it at least imported at a basic level. _this isn't SS14 it's just a test project, there's no code for 3D in SS14 yet_:

![](/images/post/18_02_26-godot_screenshot_3.png)

So yes. Godot is promising!

## Power to the refactors

So did Godot mean everything was put on hold and SS14 is dead? Nope! I've been working on Godot in a separate branch, so Acruid and Cluster continued of working on the rest of the game.

Cluster did a lot of work on the content repo. There's a [power network system with supply and demand.](https://github.com/space-wizards/space-station-14-content/pull/25) There's no way to correctly visualize this yet, but that's to come. There's also an [interaction system](https://github.com/space-wizards/space-station-14-content/pull/26), and clicking wires with wirecutters is a simple interaction example that works. Woo!

Acruid has been working more engine-side. There's now a proper [transform parenting system](https://github.com/space-wizards/space-station-14/pull/522)! This works pretty much the same as in say Unity or Godot, where an entity's position is relative to the position of its parent. Practical examples of this would be making a shuttle's grid an entity. This makes all entities parented to it be implicitly moved when the shuttle does, with little hassle or bugs.

<center><video src="/video/18_02_28-spinner.mp4" controls height=300></center>

Doesn't stop there! We have [mostly-fully fledged map saving](https://github.com/space-wizards/space-station-14/pull/523)! It supports both saving an entire map (think of a map as a z-level in SS13), or storing individual grids of the map (station itself, the shuttle, etc...).

## New logo

So a while ago, we contacted Supernorn (the artist of the original Space Station 13 Remake project before it got open sourced) about the game's logo source, and he gave us the original vector source files for it. Thanks! We applied duct tape for hilarity's sake, and currently it looks like this in-game:

![](/images/old_logo.png)

Injazz decided to bust out Inkscape and change the logo up. Here's the new design:

![](/images/logo.svg)
