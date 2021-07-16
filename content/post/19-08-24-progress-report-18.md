+++
title = "Progress Report #18: Speech Bubbles & Slightly Better Launcher"
author = "PJB3005"
date = 2019-08-28
categories = [
	"Progress Report"
]
reddit = "https://www.reddit.com/r/ss14/comments/cwrlaw/progress_report_18_speech_bubbles_slightly_better/"
+++

Writing these into sections is hard, did you know that?

<!--more-->

## Speech Bubbles

{{< video-audio "/video/pr_18/speech-bubbles.mp4" >}}

## More Dakka (Contributed by metalgearsloth)

{{< imgw "/images/post/pr_18/dakka" >}}

Oh yeah, the PR for this added exactly [6,969 lines](https://github.com/space-wizards/space-station-14/pull/307). Nice.

## Graphical Launcher

Cross platform GUI sucks.

{{< imgw "/images/post/pr_18/launcher" >}}

So the old launcher was obviously pretty crappy if you tried it before. It was a simple console app because, as mentioned, cross platform GUI sucks. Not having any sort of progress indicator or error handling is bad. Eventually we will also be using the launcher as a server list and way to log in. So I decided to try to get this launcher have at least a progress bar or something. Oh boy. Cross platform GUI *sucks*.

We have some requirements for the launcher:

1. It should still be written in C#, to not make contributing to it too hard.
2. It should be *light weight*. No damn bloated Electron apps here.
3. Ideally the same look across platforms, namely whatever unified look we decide on for the website etc too.

This basically left us with two existing options: [Qml.NET](https://github.com/qmlnet/qmlnet) and [Avalonia UI](https://avaloniaui.net/). I built prototypes in both to try them out.

**Qml.NET** was painful to work with (QML sucks) and I could not for the life of me figure out a sane way to package Qt, so I just had to drop it.

**Avalonia** was still quite painful (lack of documentation, poor error reporting, etc...) but it was workable at the end of the day. I ran into a bunch of trouble due to conflicting dependencies when trying to use it with Mono though, so I also had to drop it, for now at least.

So wait, what did I use? None other than *Robust Lite*! So yes the current launcher is literally just the game client with all the non-UI code disabled. It's not at all a well behaved GUI app so this really will not be the future of the launcher. My current plan is to switch to Avalonia when we properly land .NET Core support. Oh, yeah, we're getting .NET Core support!

## .NET Core support

Find out how to get 35% extra FPS with this one weird trick!

If you know a bit about .NET you've probably heard about .NET Core. Basically Microsoft made their own open-source & cross platform .NET runtime. It's matured a lot since it came out a few years ago, and I'd say it's finally suitable to run the game on.

Some advantages of .NET Core are:

* Better tooling, especially on Linux/macOS.
* WAY better performance.
* It's gonna get all the fancy new features like C# 8.

Until .NET Core 3, it was missing a few features we depended on. With .NET Core 3 they're supported, so I got the game to run on it. Did I mention it runs so much better?

Ideally we'll switch to .NET Core entirely once it's 100% stable. It'll make it easier to package the game and such too.

