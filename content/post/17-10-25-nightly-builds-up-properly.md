+++
title = "Nightly Builds Up (Properly!)"
author = "PJB3005"
date = 2017-10-25
+++

[Get your Windows, MacOS and Linux builds here!](https://ss14.silvertorch5.io/jenkins/job/SS14%20Content%20Build/)

<!--more-->

**UPDATE (2018/04/13):** This page is now out of date, see the [new page](/about/nightlies.html) for instructions.

Thanks to the last post, me and silver got together again to set up a proper build system, using Jenkins.
This means the builds automatically update and they're fancy and stuff.

In the last post I gave basically 0 explanation as to how to get the things running though.
So let's write about that!

First, you'll want to download the server and client binaries for your system.
Unzip them somewhere sane.

For Windows, it's very easy. Just run both `SS14.Client.exe` and `SS14.Server.exe` directly and hit connect.
That should be everything.

For MacOS, you need to have mono installed. [Get it here](http://www.mono-project.com/download/).
Once you have that installed, you can run the client directly.
For the server you'll have to manually open a terminal, change into the directory of the server and run `mono SS14.Server.exe`.
Then the client can connect and you're good.

For Linux, you're gonna want to install SFML 2.4, CSFML 2.4 and mono, probably with your package manager.
Then you can run the client and server by running `mono SS14.Client.exe` and `mono SS14.Server.exe` from a terminal for client and server respectively.
