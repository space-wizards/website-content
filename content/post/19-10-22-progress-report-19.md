+++
title = "Progress Report #19: 2x The Wait, 4x The Content"
author = "PJB3005"
date = 2019-10-22
categories = [
	"Progress Report"
]
reddit = "https://www.reddit.com/r/SS13/comments/dlmmev/ss14_progress_report_19_2x_the_wait_4x_the_content/"
+++

Kept you waiting, huh?

<!--more-->

Yeah it probably would've been better to actually release a progress report in september. This one is absolutely huge now. Oops.

## Combat Work

### Attack Animations

So the flashiest thing: we have semi functional melee combat now!

<video src="/video/pr_19/attack-animations.mp4" controls></video>

A core part of making a combat system fun is making sure the animations work well. Feedback to every party involved is incredibly important to make sense of what is going on in a fight, and to make the experience more enjoyable.

I wanted to make sure the animations were short but still quite clear. Personally I'm not a fan of those slow hovering sprite animations you see on some servers. When you land a hit, it should be immediately obvious to you and everybody around you.

You may also notice that we're definitely not using "you have to click on the sprite" combat like in BYOND. As much as I think [this](https://www.youtube.com/watch?v=LRPBEC8hWhE) is a great meme, it just kinda sucked, and I think we can do better.

### Combat Mode (AKA, Intents v2)

Intents are a core mechanic of SS13 combat. They're also basically not a mechanic outside of combat.
Really, the most significant thing intents do is change the behavior for unarmed interactions. There are some odd interactions here and there but due to how rare they are, you never expect them and only learn about them when somebody tells you or you accidentally hit yourself.

Our idea is this: **There are only two intents**, namely combat mode or not.

Outside combat mode you can do anything you normally can, use tools, hug people, etc... You should not be able to directly do violent interactions outside combat mode. No more hitting yourself with your crowbar while prying up floors!

Inside combat mode, all your interactions are *somehow* violent. Every item is a weapon in some capacity.

{{< imgw "/images/post/pr_19/combat_mode" >}}

Yeah I need to get around to updating the styling info on that targeting doll.

One consequence of how combat mode is currently implemented is that you can't even pick up items. There are also issues like hitting *specific* objects. Fancy arcing weapons is cool and all but if you just want to smash a light on the wall it doesn't work nicely.

Ideally, there would be a separate way to do "targeted" attacks that act more like BYOND SS13 combat. There's a few possibilities, such as wide arcing combat needing to be "charged up" for a split second. The other option is to make it a separate keybind like ctrl+click. **Let me know what you think here**.

For now, toggling combat mode is bound to the "1" key on your number row. This was after it was bound to tab and I got annoyed by constantly triggering it when alt tabbing. I'm still not sure that's a great place for it, since we probably want to use the number row for action buttons later, so **suggestions welcome**.

## Hacking & Access (Contributed by DamianX)

<video src="/video/pr_19/hackerman.mp4" controls></video>

Both hacking and access is in! Our plans are to keep the systems mostly the same as in SS13.

Hacking in SS13 is a really simple system and it strikes a great balance between "it's not too hard to do" and "it's inconvenient enough to make you want to get a proper ID". We don't see much to change here except maybe in the interface and such.

Access is in the same boat, here. I've read suggestions about having access be like controlled by a central server, but really, the beauty is in the simplicity here.

We didn't make any of the airlocks on the map require access yet (because we haven't bothered) but the system is there. We also have an ID card computer!

{{< imgw "/images/post/pr_19/id_computer" >}}

Right now, the hacking interface is taken straight from SS13. Me (PJB) and Injazz designed a better one, but it hasn't been implemented yet.

{{< imgw "/images/post/pr_19/hacking_mockup" >}}

This design is not exactly final, as it doesn't match the new theme we came up with. Read on about that.

## Redesigned UI Theme

So the old UI theme was kind of ugly and generic. So I decided to fix that.

{{< imgw "/images/post/pr_19/apc_mockup" >}}

This interface specifically is not properly implemented yet, **but the lobby is!**

{{< imgw "/images/post/pr_19/lobby" >}}

My priorities when designing this theme were like this:

1. Function
2. Looking cool
3. Immersion

With the third point, I mean making the interfaces make logical sense in the context of the game. For example it's not unlikely NT would just use cheap, ugly & functional LCD panels for the APC, making the UI pixelated and probably like 16 color or whatever.

Personally, I think these kinds of designs go in hard against the first point. For something as simple as the APC the problem might not be *too* severe, but when you get into more complex interfaces like the air alarm, which would surely use the same kind of LCD, you're gonna be in for a world of pain.

This does not rule out interfaces like the hacking interface mockup shown earlier, but it does rule out stuff like "ugly 16 color pixelated displays". The hacking interface is something where, through heavy stylization & layout, we get something that still feels sort of immersive (you can see obvious connections to the PCB and such) while not reducing usability.

## Basic Chemistry (Contributed by moneyl & Acruid)

You can mix reagents, and cause explosions! Not much else though.

<video src="/video/pr_19/chem-dispenser.mp4" controls></video>

Yeah, reagent metabolism isn't yet, or syringes, or drinking, you get the gist.

## Importing sprites from SS13.

You might think it's easy to import sprites from SS13. We even have a tool for it.

We extensively make things that are logically "lit" on entities such as computer screens ignore the lighting layer. You've probably noticed this in earlier screenshots and such. This looks great! The problem is that half the sprites I get to import into SS14 literally weren't designed for this, so there's a TON of manually cutting up sprites into extra layers to get everything to look better than ever.

Many SS13 sprites also don't seem to have explicit depowered variants of their sprites, and when they do they usually don't go far enough. Take the Eris airlock sprites we've been using for example. There are lights on the keypad and on the top of the door that change color when opening or flicking the deny animation. It makes sense to me that these are actually lights that are always powered, so we made them explicitly ignore lighting. There's no version of the airlock sprite that has this light completely greyed out though! Luckily making these version isn't hard with some saturation/lightness adjustment in an image editor, but it's still something that "needs" doing.

The end results, however, are worth it:

{{< imgw "/images/post/pr_19/depowered" >}}

{{< imgw "/images/post/pr_19/powered" >}}

## Very Basic Research (Contributed by Zumorica)

{{< imgw "/images/post/pr_19/research" >}}

As always, the interface could use some work, and some of the exact mechanics could use some thought.

But hey, progress is being made.

## More Clothes (Contributed by metalgearsloth)

{{< imgw "/images/post/pr_19/clothes" >}}

Oh yeah, this is just a fraction of them. It's getting to the point now where the entity spawn panel hangs for a bit when first opened because it has to load all the textures at once. We should probably organize that a bit more.

## Map Extensions

When we add new features, we like to put them on the map. As such, I mapped a basic science & medical department. Moneyl also mapped a tool storage/construction kinda room to the left of engineering.

{{< imgw "/images/post/pr_19/science" >}}

{{< imgw "/images/post/pr_19/medical" >}}

{{< imgw "/images/post/pr_19/tool_storage" >}}

Filling these places up can be a challenge with our lack of implement props, but I'm sure we'll improve the situation over time.

## More Effort Into Examine Tooltips

Writing fancy examine tooltips used to be pretty annoying. They also weren't localizable correctly because it was just such a pain to write them. I put some effort into improving the workflow here by writing a simplistic BBCode-like parser.

What it used to look like:

```csharp
message.AddText("A dice with ");
message.PushColor(new Color(1F, 0.75F, 0.75F));
message.AddText(_sides.ToString());
message.Pop();
message.AddText(" sides.\nIt has landed on a ");
message.PushColor(new Color(1F, 1F, 1F));
message.AddText(_currentSide.ToString());
message.Pop();
message.AddText(".");
```

What it looks like now:

```csharp
message.AddMarkup(loc.GetString("A dice with [color=lightgray]{0}[/color] sides.\n" +
                                "It has landed on a [color=white]{1}[/color].", _sides, _currentSide));
```

Obviously, quite a bit easier to work with, especially if you're a Russian trying to translate the game.

{{< imgw "/images/post/pr_19/examine_tooltips_airlock" >}}

{{< imgw "/images/post/pr_19/examine_tooltips_d20" >}}

## Some Fancy UI Animations

<video width="874" src="/video/19_10_22-animations.mp4" controls></video>

Fancy animations like this make UIs way nicer to use, so I figured I'd implement some.

Yes, these are better animations than some of the programs I use daily. Go figure.

## WiP: MIDI Input (Contributed by Zumorica)

Being in a proper programming language, we can do a lot more fun stuff than something like BYOND. This is known.

One feature this allows is directly accepting input from attached MIDI devices like musical keyboards, so you can perform live in front of your audience at the bar.

<video src="/video/pr_19/midi-input.mp4" controls></video>

Because we can use system sound fonts, a lot of instruments can be supported out of the box, without significantly bloating the size of the game:

{{< imgw "/images/post/pr_19/instruments" >}}

Yes, this is apparently how we're painting the bikeshed. But hey, it's a fun feature and people can choose to contribute whatever they want.

This also means that now we have an API for streaming in audio samples, which paves the way to other features like text-to-speech or voice chat, if other servers want to implement those. We currently have no plans to implement these kinds of things ourselves, but the possibility is open for anybody wishing to contribute or fork the code.

(Look, I personally also think text to speech is a cool idea but I'm afraid that if I dare touch TTS engines I'll get PTSD from trying to get them to work sanely & cross platform, fluidsynth for MIDI was awful enough)

## A Note On MacOS Support.

You may have heard some noise on the internet about Apple hardening requirements to make software for macOS, and many indie game developers considering dropping macOS support. We are also getting burned here. While I'm not gonna drop macOS support officially any time soon, running the game may be harder and harder on macOS. **This is not our fault, blame Apple for continually reinforcing their stupid walled garden.**

The short version is, **Apple is gonna make it impossible for us to publish the game for macOS without paying them $100 a year.**

**We are not paying Apple $100 a year.** We can publish Windows and Linux versions with zero hassle from any operating system. **Apple wants us to pay *them* for the privilege of developing for *their* platform.** And also to do it on macOS, on their overpriced Apple hardware, with their tooling.

Also, since I've seen some game devs complain about the 32 bit support drop: We literally don't care about that, we weren't supporting 32 bit in the first place.

