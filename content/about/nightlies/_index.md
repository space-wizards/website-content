+++
title = "How to Run Space Station 14 TODAY"
date = "2018-04-13"
type = "about"
+++

This page will be updated regularly to tell you how to run the automatically updated builds (nightlies). As soon as we push something it's automatically built and can be downloaded after like, 3 minutes (fast huh).

First of all, [here are the downloads.](https://builds.spacestation14.io/jenkins/job/SS14%20Content/)

SS14 is in active development so yada yada won't be stable we're not responsible if your computer and/or sanity blows up.
It probably won't though. At least not your computer.

Bug reports appreciated!

## Windows

Download both the client and server and unzip it somewhere sane.
For the client you should run `SS14.Client.exe`, and for the server you should run `SS14.Server.exe`.
Then hit connect inside the client and it should all work.

## Linux

Download both the client and server and unzip them somewhere sane.
You will need to have [Mono](https://www.mono-project.com/) installed on your system. Pretty much any distro runs it though it's pretty easy to install.
For the client you will want to run "`mono SS14.Client.exe`" with a terminal, and "`mono SS14.Server.exe`" for the server.
Once that is done you can hit connect in the client and it'll all work.

Quick note, the client needs OpenAL and Freetype to be installed on your system. If there are actually people who don't have these installed on their system already the client is probably not gonna start. In which case tell us so we can bundle them.

## MacOS

Download both the client and server and unzip them somewhere sane.
You will need to have [Mono](https://www.mono-project.com/) installed on your system.
For the client you can just run the app directly, *dismiss the popup telling you the app is not from a verified developer and thus you can't open it because Apple treats you like ~~the~~ sheep ~~you are for buying their products~~, open security preferences and hit "Open Anyways".*

To run the server just run "`mono SS14.Server.exe`" with a terminal.
Once that is done you can hit connect in the client and it'll all work.

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
