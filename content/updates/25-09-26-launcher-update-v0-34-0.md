+++
title = "Launcher Update v0.34.0"
date = 2025-09-26
categories = [
	"update"
]
tags = [
	"launcher"
]
thumbnail = "launcher"
thumbnail_ext = "png"
hide_toc = true
+++

ARM64 support and localization updates.

<!--more-->

*This concerns the game launcher used to connect to game servers. Updates for game content happens separately.*

* The launcher is now supported on ARM64 macOS (Apple Silicon) and Linux.
* Fix idle CPU usage.
* Round times on the server list now work properly when exceeding 24 hours.
* Added Romanian translation.
* Linux and macOS now get MIDI support out of the box.
* Updated native dependencies. Should fix some weird platform-specific bugs.
* Launcher logging is now enabled by default.
* The launcher now refuses to show negative player counts reported by servers.
* Fix out-of-the-box graphics on Snapdragon X devices by forcing compatibility mode. (note: Snapdragon X devices do not get native ARM64 support yet due to Windows/driver bugs.)
* Launcher now warns on first startup if you have a 13th or 14th Intel CPU, as these may be vulnerable to a degradation hardware defect.
* Updated the localization files.

This update will be made available on all platforms as soon as possible. For manual downloads, [get them here](https://github.com/space-wizards/SS14.Launcher/releases).
