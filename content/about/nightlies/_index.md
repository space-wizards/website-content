+++
title = "Downloads"
date = "2018-04-13"
type = "about"
+++

<div id="download-container">
	<div class="download">
		<a href="https://github.com/space-wizards/space-station-14/releases/download/v0.2.0/SS14.Launcher_Windows_x64.zip"><img src="/images/Windows_logo_2012.svg" class="download-image"/></a>
		<small>Windows 64-bit</small>
		<a class="download-link" href="https://github.com/space-wizards/space-station-14/releases/download/v0.2.0/SS14.Launcher_Windows_x64.zip">Download launcher</a>
		<small><strong>Needs <a href="https://aka.ms/vs/16/release/vc_redist.x64.exe">VC++ 2015 Redist</a></strong></small>
	</div>
	<div class="download">
		<a href="https://github.com/space-wizards/space-station-14/releases/download/v0.2.0/SS14.Launcher_Windows_x64.zip"><img src="/images/tux.svg" class="download-image"/></a>
		<small>Linux 64-bit</small>
		<a class="download-link" href="https://github.com/space-wizards/space-station-14/releases/download/v0.2.0/SS14.Launcher_Linux_x64.zip">Download launcher</a>
		<small><strong>Needs <a href="https://www.mono-project.com/download/stable/">Mono</a></strong></small>
	</div>
	<div class="download">
		<a href="https://github.com/space-wizards/space-station-14/releases/download/v0.2.0/SS14.Launcher_macOS_x64.zip"><img src="/images/Apple_logo.svg" class="download-image"/></a>
		<small>macOS 64-bit</small>
		<a class="download-link" href="https://github.com/space-wizards/space-station-14/releases/download/v0.2.0/SS14.Launcher_macOS_x64.zip">Download launcher</a>
		<small><strong>Needs <a href="https://www.mono-project.com/download/stable/">Mono</a></strong></small>
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
* 50 MiB disk space

### Windows:

* [VC++ 2015 Redistributable](https://aka.ms/vs/16/release/vc_redist.x64.exe)

### Linux:

* [Mono](https://www.mono-project.com/)
* OpenAL
* Freetype

### macOS:

* [Mono](https://www.mono-project.com/)


## Standalone Downloads

You can also download the current client or server binaries directly. It won't auto update via the launcher, but hey.

You can find the builds [right here on Jenkins](https://builds.spacestation14.io/jenkins/job/SS14%20Content/)

To run them, just run `Robust.Client.exe` and `Robust.Server.exe`. On Linux/macOS, run them with `mono` via a terminal, not via Wine.

## FAQ

#### The code is C#, can't I run the builds cross-platform?

No, while the main code is .NET, the builds will not start cross-platform. Two reasons:

* We decided to use conditional compilation instead of runtime detection for some platform-specific functions.
* We are shipping multiple native libraries and it'd be a massive waste to package those for each platform into the same download.

While we could theoretically solve both of these, we won't. It's not worth the hassle.

####  What about supporting other CPU architectures (x86/i686, ARM, ...)?

Right now we only support x64.

* x86/i686: Not happening. While we totally *could* do this, there is no reason to still drag x86 behind us. If you can't run an x64 program in 2018, you ought to get off Windows XP. CPUs that aren't x64 are too slow to run SS14 anyways. (actually this might not be true but it's still not worth supporting) It complicates the build tools for no reason.
* ARM/ARM64: Could/probably will happen if somebody codes it, but it's not a priority. Mono does support it.

####  Is this malware?

No. If you're paranoid you can download the code yourself and build from source though.
