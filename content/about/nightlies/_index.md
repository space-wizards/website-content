+++
title = "How to Run Space Station 14 TODAY"
date = "2018-04-13"
type = "about"
+++

Through rigorous effort on our part, you too can play SS14 *TODAY!* This page will list all the details necessary to launching and trying the game.

## Updates

The game is still in constant development. As soon as something is pushed to master it will be automatically built for all platforms and can be downloaded within like 3 minutes.

If you want to follow this process, it's done [right here on Jankins](https://builds.spacestation14.io/jenkins/job/SS14%20Content/)

SS14 is in active development so yada yada won't be stable we're not responsible if your computer and/or sanity blows up. It probably won't though. At least not your computer.

Bug reports appreciated!

## The Launcher

The easiest way to get SS14 right now is to download the [Launcher](https://github.com/space-wizards/SS14.Launcher/releases/tag/v0.1.0) for your platform and run it. It's `SS14.Launcher.exe` on Windows and `SS14.Launcher` on Linux (both native binaries you can run directly). macOS is untested and probably broken and you'd need to launch it from a terminal too. For **Linux and macOS** you will also need to have **[Mono](https://www.mono-project.com/) installed** on your system.

The launcher will automatically download and update the main client. From there you can connect to our public server with the convenient button in the main menu.

## Manually

If you want to host a server on your own machine (or are running on macOS, sorry) you will want to download the client and server manually as zip files.

You can get binaries of the client and server for your platform [right here](https://builds.spacestation14.io/jenkins/job/SS14%20Content/). You'll have to extract the files somewhere sane. Actually running it is pretty easy but check the sections down below for your platform.

### Windows

For the client you should run `SS14.Client.exe`, and for the server you should run `SS14.Server.exe`.
Then hit "Direct Connect" inside the client and it should all work.

### Linux

You will need to have [Mono](https://www.mono-project.com/) installed on your system. Pretty much any distro runs it though it's pretty easy to install.
For the client you will want to run "`mono SS14.Client.exe`" with a terminal, and "`mono SS14.Server.exe`" for the server.
Then hit "Direct Connect" inside the client and it should all work.

### MacOS

Download both the client and server and unzip them somewhere sane.
You will need to have [Mono](https://www.mono-project.com/) installed on your system.
For the client you can just run the app directly, *dismiss the popup telling you the app is not from a verified developer and thus you can't open it because Apple treats you like ~~the~~ sheep ~~you are for buying their products~~, open security preferences and hit "Open Anyways".*

To run the server just run "`mono SS14.Server.exe`" with a terminal.
rminal, and "`mono SS14.Server.exe`" for the server.

## System Requirements

### Every Platform:

* 64-bit OS (amd64)
* OpenGL 3.3
* 250 MiB free memory should do it. (Client takes approx 100 MiB right now but that's probably gonna increase)
* Gonna need a decent CPU though because the code is poorly optimized right now.

### Linux:

* [Mono](https://www.mono-project.com/)

Quick note, the client needs OpenAL and Freetype to be installed on your system. If you don't have both of these installed the client is definitely not gonna start, so tell us so we can bundle them!

### macOS:

* [Mono](https://www.mono-project.com/)

## FAQ

**The code is C#, can't I run the builds cross-platform?**

No, while the main code is .NET, the builds will not start cross-platform. Two reasons:

* We decided to use conditional compilation instead of runtime detection for some platform-specific functions.
* We are shipping multiple native libraries and it'd be a massive waste to package those for each platform into the same download.

While we could theoretically solve both of these, we won't. It's not worth the hassle.

**What about supporting other CPU architectures (x86/i686, ARM, ...)?**

Right now we only support x64.

* x86/i686: Not happening. While we totally *could* do this, there is no reason to still drag x86 behind us. If you can't run an x64 program in 2018, you ought to get off Windows XP. CPUs that aren't x64 are too slow to run SS14 anyways. (actually this might not be true but it's still not worth supporting) It complicates the build tools for no reason.
* ARM/ARM64: Could/probably will happen if somebody codes it, but it's not a priority. Mono does support it.

**Is this malware?**

No. If you're paranoid you can download the code yourself and build from source though.
