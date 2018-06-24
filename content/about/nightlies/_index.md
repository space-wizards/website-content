+++
title = "How to Run Space Station 14 TODAY"
date = "2018-04-13"
type = "about"
+++

This page'll be updated regularly to tell you how to run the automatically updated builds (nightlies). As soon as we push something it's automatically built and can be downloaded after like, 3 minutes (fast huh).

First of all, [here are the downloads.](https://builds.spacestation14.io/jenkins/job/SS14%20Content%20Build/)

SS14 is in active development so yada yada won't be stable we're not responsible if your computer and/or sanity blows up.

## Windows

Download both the client and server and unzip it somewhere sane. For the client you should run `spess.bat`, and for the server you can just run `SS14.Server.exe` and hit connect in the client. It should all *work*.

## Linux

Download both the client and server and unzip them somewhere sane. For the client, run `spess.sh` from the same folder as the shell script.

For the server you'll need to install [mono](https://www.mono-project.com/). To run the server you need to run `SS14.Server.exe` with `mono` (yes it looks like a Windows exe, that's normal).

## MacOS

Download both the client and server and unzip them somewhere sane. For the client you can just run the app bundle, *dismiss the popup telling you the app is not from a verified developer and thus you can't open it because Apple treats you like ~~the~~ sheep ~~you are for buying their products~~, open security preferences and hit "Open Anyways".*

For the server you'll need to install [mono](https://www.mono-project.com/). To run the server you need to run `SS14.Server.exe` with `mono` from a terminal (yes it looks like a Windows exe, that's normal).

## FAQ

**The code is C#, can't I run the builds cross-platform?**

No, while the main code is .NET, the builds will not start cross-platform. Two reasons:

* We decided to use conditional compilation instead of runtime detection for some platform-specific functions.
* Godot is a native program too, good luck running that cross-platform.

While we could theoretically solve both of these, we won't. It's not worth the hassle.

**What about supporting other CPU architectures (x86/i686, ARM, ...)?**

Right now we only support x64.

* x86/i686: Not happening. While we totally *could* do this, there is no reason to still drag x86 behind us. If you can't run an x64 program in 2018, you ought to get off Windows XP. CPUs that aren't x64 are too slow to run SS14 anyways. It complicates the build tools for no reason.
* ARM/ARM64: Could/probably will happen if somebody codes it, Godot and Mono both support it.
