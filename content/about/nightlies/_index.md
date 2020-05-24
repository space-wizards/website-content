+++
title = "Downloads"
date = "2018-04-13"
type = "about"
+++

<div id="download-container">
	<div class="download">
		<a href="https://github.com/space-wizards/SS14.Launcher/releases/latest/download/SS14.Launcher_Windows.zip"><img src="/images/Windows_logo_2012.svg" class="download-image"/></a>
		<small>Windows 64-bit</small>
		<a class="download-link" href="https://github.com/space-wizards/SS14.Launcher/releases/latest/download/SS14.Launcher_Windows.zip">Download launcher</a>
		<small><strong>Needs <a href="https://aka.ms/vs/16/release/vc_redist.x64.exe">VC++ 2015 Redist</a></strong></small>
	</div>
	<div class="download">
		<a href="https://github.com/space-wizards/SS14.Launcher/releases/latest/download/SS14.Launcher_Linux.zip"><img src="/images/tux.svg" class="download-image"/></a>
		<small>Linux 64-bit</small>
		<a class="download-link" href="https://github.com/space-wizards/SS14.Launcher/releases/latest/download/SS14.Launcher_Linux.zip">Download launcher</a>
	</div>
	<div class="download">
		<a href="https://github.com/space-wizards/SS14.Launcher/releases/latest/download/SS14.Launcher_macOS.zip"><img src="/images/Apple_logo.svg" class="download-image"/></a>
		<small>macOS 64-bit</small>
		<a class="download-link" href="https://github.com/space-wizards/SS14.Launcher/releases/latest/download/SS14.Launcher_macOS.zip">Download launcher</a>
		<small><strong>macOS High Sierra or greater</strong></small>
	</div>
</div>

<div id="download-sublinks">
	<small><a href="/about/nightlies/#system-requirements">System requirements</a></small>
	<small><a href="/about/nightlies/#standalone-downloads">Standalone downloads</a></small>
</div>

## System Requirements

### Every Platform:

* 64-bit CPU & OS
* OpenGL 3.3 (as long as you have your video drivers installed and your GPU isn't ancient, you have this)
* 250 MiB free memory should do it
* 200 MiB disk space

### Windows:

* [VC++ 2015 Redistributable](https://aka.ms/vs/16/release/vc_redist.x64.exe)

### Linux:

* OpenAL
* Freetype

### macOS:

* High Sierra or greater

## Standalone Downloads

You can also download the current client or server binaries directly. It won't auto update via the launcher, but hey.

You can find the builds [right here on Jenkins](https://builds.spacestation14.io/jenkins/job/SS14%20Content/).

These builds **require** a [.NET Core 3 runtime](https://dotnet.microsoft.com/download) to be installed on your machine. The launcher does not need this (it's already included).

## FAQ

####  What about supporting other CPU architectures (x86/i686, ARM, ...)?

Right now we only support x64.

* x86/i686: Not happening. While we totally *could* do this, there is no reason to still drag x86 behind us. If you can't run an x64 program in 2018, you ought to get off Windows XP. CPUs that aren't x64 are too slow to run SS14 anyways. (actually this might not be true but it's still not worth supporting) It complicates the build tools for no reason.
* ARM/ARM64: Could/probably will happen if somebody codes it, but it's not a priority. Mono does support it.

####  Is this malware?

No. If you're paranoid you can download the code yourself and build from source though.
