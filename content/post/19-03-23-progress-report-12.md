+++
title = "Progress Report #12: Suddenly, Progress!"
author = "PJB3005"
date = 2019-03-23
categories = [
	"Progress Report"
]
reddit = "https://www.reddit.com/r/ss14/comments/b4pet4/progress_report_12_suddenly_progress/"
+++

Didn't think you'd already see a new progress report now, did you?
And especially not such a packed one!

<!--more-->

Indeed, a lot of things got done this week. I also want to thank the new contributors we got and those that are hanging out on Discord/IRC. Contributions are welcome and mean a lot to me!

## Shaders Work In Clyde

Another step towards making Clyde more feature complete, it can now load shaders! This means a couple things render correctly now.

One... interesting problem is that there really isn't a good existing format for shaders like this. And uh, I of course would like to keep things simple development wise and *not* have to implement a complete GLSL parser. So we just parse the necessary data like shader parameters and copy the code straight into the final shaders sent to the OpenGL driver. Works surprisingly well!

## Bwoink

Sound works! This was quite easy to implement. It's implemented through OpenAL, so we don't have to implement any of the math related to spatial audio, and it sounds quite nice. Heck it can theoretically use audio hardware if you're one of those rich kids who has dedicated sound cards in 2019.

### Mono Or Stereo?

Quick quiz. I'm gonna embed two audio files. Which of these is the correct sound as played in SS13 on BYOND?

A:

<audio controls src="/audio/19_03_23-crowbar_a.ogg"></audio>

B:

<audio controls src="/audio/19_03_23-crowbar_b.ogg"></audio>

Well I obviously wouldn't be making this quiz if the result wasn't counter intuitive. "A" here is `crowbar.ogg` straight from TGStation's GitHub as I am writing this. "B" is what you actually hear in game.

As it turns out, many audio files in SS13 are stereo, meaning there's a left and right audio channel. "B" is what you get when you merge the two audio channels into one (I did this with `ffmpeg -i crowbar.ogg -ac 1 crowbar_mono.ogg`, for what it's worth). OpenAL has a limitation that it can't play back stereo audio positionally, and I assume BYOND has the same one, except BYOND just merges the file into mono internally before playback.

So when you play the audio file directly in say VLC or your browser, it sounds completely wrong. If you play it in BYOND or manually merge the channels into one, it sounds fine. Odd.

Anyways, I had to merge the audio channels on all these files, which reduces file size on some, but increases it on others... and I have no idea why. Lossy codecs are fun.

## Lighting!

{{< imgw "/images/post/pr_12/lighting" >}}

Clyde now draws lights, so it doesn't look as horrendously ugly. Shadow casting is not implemented however, which is the actually difficult part. But hey, looks better than the full bright we had before.

## Medkits (Contributed by Zumorica)

So we've had a couple medkits lying around on the tables of the test map for a while now. If you tried to interact with them though, you'll notice that they just completely didn't work. They weren't even items that could be picked up. Oh well.

Well not anymore, it's shoddy but you can pick them up and heal people with them! Same goes for a new roll of gauze and some ointment.

## Light Tubes (Contributed by Zumorica)

You can now take lights out of light fixtures with the power of hands (make sure to put on gloves). Support for colored lights also included. It's a minor thing but hey.

## Guns

Guns are fancy now. They need ammo now, absolutely spew those casings all over the floor around you, and have some pretty nice sound effects and recoil. They even store a bullet in the chamber separately for that extra realism.
Theoretically implementing guns with different caliber, different ammo types, yada yada should all be possible, though I have yet to (but it should be pretty easy to for a new contributor, nudge nudge)

I was gonna post a video here but the screen recorder I'm using broke and I'm too lazy to reconfigure OBS so... Try it yourself!

## Nightly Builds Back Up.

[Try SS14 out today here!](https://spacestation14.io/about/nightlies/)

I finally re-installed Jenkins on the builds server and got the builds producing again. Woo! You can try out SS14 for yourself now (and still be disappointed).


