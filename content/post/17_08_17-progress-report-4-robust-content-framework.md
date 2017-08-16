+++
title = "Progress Report #4: Robust Content Framework"
author = "PJB3005"
date = 2017-08-17
categories = [
	"Progress Report"
]
+++

It's been a couple weeks since the last progress report, and lots has happened since then. Refactors, setting up the content repo, and more!

<!--more-->

So here's a fun bit of trivia, when we started the project to revive SS14, the project was at 45,000 lines of code. That was the middle of May. We're now a few months later, and the we're at 37,000 lines! [Here's a chart if you want to see it for yourself.](https://sonarcloud.io/project/activity?custom_metrics=ncloc&graph=custom&id=ss14)

The original developers did not have a very modular idea for the project. Everything in one big project and writing the game and engine as one. A workable approach to game development for most projects. Sadly, SS13 is not one of
those, and we realized that.

The problem is something you might even forget about when you just play SS13 on a single server, or even multiple ones! Every server is different, and this is thanks to BYOND. You just hit connect and you don't care what the server is doing on their end, as long as you can beat up the clown with the server's most unique stylish weapons. The client has to download nothing but sprites, sounds and some other stuff, and the server handles everything. This has its pros and its cons. It ensures you're never spreading viruses, makes it possible for Bay, Goon, TG, etc... to all be very different, and makes it easy to program your favorite new meme of an item. on the other hand, good luck doing advanced mouse movement responsively over a 100ms connection, things like lighting are server side and are too damn heavy, and so on.

We're trying to get the best of both worlds here. The ease of programming simple things and keeping codebases possible, while keeping it simple and secure for the end user. No having to install different clients for specific servers.
How do we pull this off? Glad you asked!

# The Content Repo

Ever since we "inherited" the project, [this has been in the back of our heads](https://github.com/space-wizards/space-station-14/issues/74). The plan is to have the base SS14 repo ([`space-wizards/space-station-14`](https://github.com/space-wizards/space-station-14)) be the "engine". This is the common program that most players and server hosts will be installing. Event loop, rendering, collision, asset management, entity management, the basic things you want no matter what. Along with that goes a second repo, the "content" repo: [`space-wizards/space-station-14-content`](https://github.com/space-wizards/space-station-14-content). What is in this repo? Well... a couple `// TODO:` entry points, a test prototype and a few python scripts. Exciting!

Everything inside the content repo is something a codebase can change. Most stuff will eventually go in here, even fundamental things like item code, power and atmospherics! The content repo is, just like the main engine, written in C#, but due to the nature of .NET, other languages from [Python](http://ironpython.net/) to [F#](http://i.imgur.com/HqH8ktx.png) and theoretically most things on [this list](https://en.wikipedia.org/wiki/List_of_CLI_languages) should be possible, provided the codebase in question is up for rewriting everything.

The content repo is compiled into a .NET assembly (a block of code the game can load). This assembly gets loaded into the server on startup and client on connect, and as such you can swap server without having 20 clients installed.

So the past few months, a lot of code that's more "game" level like gamemodes, jobs, items, ... has been removed. That's a lot of the cut lines, the rest being tons of unrelated duplicate and dead code that was no good anyways. If we happen to need any of this old code we can just check the Git history, although most of it was pretty crappy to begin with so I doubt we'll miss it. Probably easier to write it from scratch.

We've gone through a lot of effort to make this work, from asset loading to IoC refactors, and it's paying out, because it *works*:

<center><video src="/video/17_08_17-disco-ball-prototype.webm" controls height=300></center>

What you are seeing here (other than my mouse cursor, apologies) is the first example of the content repo in use. It's a crude "disco ball", the color just changing with a hue shift over time. The code was terrible because I was in a hurry and there were various limitations in the engine that I've since fixed (couldn't even load sprites from content, joy!), but here's a more cleaned up version of the code. Note that the engine isn't there *yet*, there's still a bunch of refactors ahead, but this is generally what we want to have:

YAML entity prototype:

``` yaml
# This is an entity prototype.
- type: entity
  id: discoball
  name: Disco Ball
  # Declare which C# class the entity will be.
  # This contains the logic in the next snippet.
  class: Content.Client.Prototypes.DiscoBall
  # Declare components: what the entity can do.
  components:
  - type: Transform
  - type: Clickable
  - type: Sprite
    sprites:
    - discoball

    # This entity has a light.
    # The color is changed by the C# code.
  - type: PointLight
```

And for the C# code:

```csharp
using OpenTK;
using SS14.Client.GameObjects;
using SS14.Shared.GameObjects;

namespace Content.Client.Prototypes
{
	public class DiscoBall : Entity
	{
		private float hue;
		private PointLightComponent light;

		public override void Initialize()
		{
			// Fetch our light ahead of time to improve performance and make the code more readable.
			light = GetComponent<PointLightComponent>();
		}

		public override void Update(float frameTime)
		{
			hue += frameTime / 10;
			if (hue > 1)
			{
				hue -= 1;
			}

			var color = Color4.FromHsl(new Vector4(hue, 0.5, 0.5, 1.0));
			light.SetColor(color);
		}
	}
}
```

Yes, it's a little verbose, but it's for the better. And if you want to go back and use Python instead, you can!

In the next few days we'll probably start writing some simple content like maybe power in there, as it should be mostly possible already. We'll finally get onto some exciting stuff that isn't just "look what we refactored this week!"

Oh and by the way, servers like Goon and CM do not have to fear. We'll do the best we can to ensure that the content repo server side can remain closed source. So have at it with that solarium!

# 2D or not 2D

So as you may know from the old project, SS14 uses prerendered 3D sprites for humans.
This means that we have a 3D model, but the client never touches it.
The model gets rendered with all the items, clothes, etc... and saved as images into the resource pack.
All these images are loaded together. The theoretical result being that it's much less demanding on the client because it's still a 2D sprite, but we can make animations and such easily!

**Except it's not so simple.**
Prerendered 3D has its style but unless you want to produce very high resolution sprites, it looks much better to just do the 3D rendering in engine on the spot, especially for us when not everything would be 3D.
As such, we set out to make the rendering engine be capable of 3D too, which Silver is still working on.
Then an interesting dilemma was raised: how much pixels per tile, how much tiles view, what resolution do we target the client at?

The problem with 2D pixel art games is that scaling *sucks*. You either blur everything to hell, or you get incredibly annoying and ugly artifacts from the nearest neighbor algorithm.
Neither are exactly nice and it's one of those things we want to fix when we're free from BYOND.
Now why isn't this an issue in say, Terraria? Well, Terraria has the advantage that view size isn't that important. Games like this can get away with changing view size based on resolution to maintain consistency.
Sadly this is SS13 and view size has to be consistent, but *can change mid game, for example genetic powers*. You want to accomodate 1080p resolutions, and keep the art style consistent and without horrible blur or scaling artifacts.
Oh it's **impossible**.

What can you do then? **full 3D**. We're not talking high quality model 3D like an AAA game though, just simple easy 3D models, like this:
<center>![Simple, low poly models](/images/post/17_08_17-low-poly-3d-example.png)</center>

**HOWEVER:** we will put great effort into keeping it possible to use 2D sprites at an engine level. So if you want to fork the *content repo* and make an all 2D codebase, go ahead!

3D has more advantages than scaling though. It would allow us to make rotation a possibility, and probably make multi-z a lot less of a hassle too.

We're still experimenting with the practicality of making 3D models, art style, tooling, etc... **The game will stay top down**, this is only a visual change. Seriously don't freak out I know this is a big decision and highly controversial. If it seriously doesn't work we'll revert to 2D and have our scaling artifacts instead.

# Robusting the SFML

As you may know if you read the previous reports, SFML is... [yeah... about that...](/images/post/17_08_17-sfml-macos-segfault.png)

The good news is that SFML is *mostly* stable on MacOS. Silver allegedly develops on Arch Linux but otherwise I don't think any developers use Linux so I'm unsure how things are there.
However, that's not the point of this (relatively too small) section of the progress report! Silver has been continuing work on making Robust Engine, our rendering backend. It's not yet ready for a move, but we just finished a refactor to get rid of a ton of SFML vector primitives so it should make transitions easier. SFML's crappy vectors didn't even allow you to get the *length* of them, and they even stack overflow on equality checks in certain unknown cases.

The point is, there is hope, and SS14 mostly works cross platform right now (to our knowledge). At the very least all the fundamentals to make writing content possible is there.

# Designing the Game, not the Engine

As stated before, the goal of SS14 is not only to rid ourselves of BYOND, but also to fix the actual game design tainted by BYOND.
While there is something to be said about bikeshedding here, our game designer Urist McDorf (yes, that's his online name) doesn't have anything better to do anyways, so he decided to design some systems like power and interaction, which we're gonna need sooner rather than later now that the content repo is set up.

If you want to read the design docs he's written, they can be found [here](https://goo.gl/bnk4qo). Discussion is welcome, but note that **these are not final**. It's his design, it does not necessarily reflect the way SS14 will be going.

# Automatic Nightly Builds

Because we have the content repo set up now, we'll soon be writing actual content. To make progress more obvious for the average Joe who doesn't want to read these damn reports (by the way this one is *really* long), we will set up automatic builds of the client and server for download. Just download the client and server, start both and hit connect and you'll have your poorly lit room where you can hopefully do more than just bumping into the walls and that table. We have the build scripts for this written down, and the builds work on both MacOS and Windows (Linux client untested), but we're still working on hosting them automatically somewhere. We'll make an independent announcement when it's done in the next couple days.
