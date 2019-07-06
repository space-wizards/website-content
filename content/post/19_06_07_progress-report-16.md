+++
title = "Progress Report #16: Outline, Use, Kaboom"
author = "PJB3005"
date = 2019-07-07
categories = [
	"Progress Report"
]
reddit = "https://www.reddit.com/r/ss14/comments/c9zutk/progress_report_16_outline_use_kaboom/"
+++

As it turns out, *re-imagining* SS13 is a bit harder than simply *re-making* it. Not that that deters us.

<!--more-->

## Kaboom (Contributed by Injazz)

<video src="/video/19_07_07-boom.webm" controls>

Yeah it could use some polish. Baby steps though.

## Interaction Rework

The primary method of interacting with the game world is clicking via your hand. We all know how this works and I will say is quite intuitive. That doesn't mean however it cannot be improved upon.

One of the biggest nuisances I personally have with SS13 is that having your hands full basically makes it impossible to do many things like just *opening* computer interfaces. This usually results in you having to akwardly drop things just to open a computer interface. Of course SS13 only cares about this when *opening* the interface and ignores the items in your hand actually using it.

This is a massive paper cut. I want to be able to use computers, open lockers, etc... without having to drop things in my hand. Now yes, you could argue that "you can't use a computer while you're holding toolboxes". You would be right, but I definitely could use a computer while holding a screwdriver. Any further detail into this just feels like simulating things that aren't actually *fun*. Also I can totally *look* at a computer screen with toolboxes in my hand. Not so much the case for SS13.

**The gist is** that we assigned the `E` key to act as a permanent "interact with empty hand" button. So if you want to use a computer, you can just hit E instead of having to drop whatever you're holding. This should hopefully cut out a lot of finnicky item manipulation and make the game just a bit more streamlined.

## Outlines!

![](/images/post/pr_16/outline.png)

Yep, it actually cover the whole entity now!

If you went and actually tried to download SS14 (you should!), you'll probably have noticed that outlines for the entity under your mouse were.. pretty broken.

Drawing these outlines is actually a lot more annoying than it may look at first sight. The outline has to consider the *entire* entity, not just be ran layer-by-layer (which is what was happening before). Graphics APIs only really allow you to draw layer by layer though. This is a solved problem of course, just draw the entity into its own framebuffer and then apply the outline to *that*. While I cannot speak for an engine like Unity, I can already tell you there is just no sane way to implement this in Godot without *many* hacks. I'm quite glad we dropped Godot, because it was *relatively* simple to implement this in our own renderer.

Outlines are looking pretty fancy now. They're not perfect (could use some better contrast in light areas), but now that's just some GLSL shader code away, instead of massive renderer reworks. If somebody's feeling brave, it should be quite easy to improve!
