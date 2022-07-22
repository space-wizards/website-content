+++
title = "Progress Report #36: Too Much of a Good Thing" TODO bikeshed this
author = "DrSmugleaf & ike709"
date = 2022-07-27
categories = [
    "Progress Report"
]
reddit = ""
thumbnail = "pr_36" TODO
+++
There's so much new content that at least one Progress Report author has been driven mad! We've even surpassed /tg/station 13 by contributions per month.
<!--more-->

<!-- Useful tags: 
Section splitter: {{< newsection >}}
Picture: {{< imgw "/images/post/pr_36/picture_name" >}}
Autoplay video (no audio): {{< video-auto "/video/pr_36/file_name.mp4" >}}
Paused vid (can do audio): {{< video-audio "/video/pr_36/file_name.mp4" >}}

Don't forget to run optipng on the pics then the script to convert them to webp.
-->

{{< newsection >}}
## Content
### Surpassing /tg/station 13
*Contributed by everyone*

Space Station 14 is officially being developed at a faster pace than the most active SS13 codebase, /tg/station. At the time of writing SS14 has 520 merged and 50 open pull requests (code changes) in the last 30 days, compared to 326 merged and 106 open for /tg/.

And that's not even counting changes to Robust Toolbox.

{{< newsection >}}
### Gun Refactor
*Contributed by metalgearsloth, ElectroSR, taral & probably others*

Guns have been refactored in their entirety. In fact there's been so many changes to guns over the course of June that we, your benevolent Progress Report authors, lost track of them all.

Here's the highlights:

- Guns now have clientside prediction and are more responsive
- Updated hitscan effects
- Updated sprites
- Added fire rate selectors (e.g. semi-auto and full-auto)
- Rebalanced the weight, accuracy, and bullet spread of many guns to give different types (i.e. rifles versus SMGs) more distinction. These changes are ongoing.
- Cleaned up gun code a lot to enable sillier and more unique guns
- Added a development tool for visualizing bullet spread

{{< video-auto "/video/pr_36/guns.mp4" >}}

{{< newsection >}}
### Item Pricing & Piracy
*Contributed by moony*

Most things now have prices assigned allowing Cargo to, for example, sell fuel tanks for a couple hundred spacebucks. Consequentially, an increase of space piracy has been detected in the sector. 

Attempts to kidnap and sell the Clown will be refused by Central Command.

TODO: Pic?

{{< newsection >}}
### Drug & Drunk Shaders
*Contributed by ElectroSR*

To save costs and improve employee morale, Central Command has disabled the drug & alcohol inhibitors embedded in everyone's spinal cord, and both vices should now have much more substantial effects. Employees are reminded to avoid getting absolutely blasted while they're on the clock.

Here's what the drug effects look like (Author's Note: This is not what it looks like IRL):

{{< video-audio "/video/pr_36/maryjane.mp4" >}}

{{< newsection >}}
### Department Radios
*Contributed by Morb0, ElectroSR, metalgearsloth, & notafet*

Engineering finally bothered to install the rest of the station's telecommunications equipment, and the network now has sufficient bandwidth for departmental radio channels. The crew can now yell exclusively at their own department instead of trying to talk over each other on the Common frequency all the time.

{{< imgw "/images/post/pr_36/radio" >}}

{{< newsection >}}
### Modular Landmines
*Contributed by mirrorcult*

The lads down in the Department of Interstellar War Crimes™ have developed a new modular landmine platform which accepts customized payloads. Casualties guaranteed or your money back! 

Make sure to watch your step.

{{< video-audio "/video/pr_36/mine.mp4" >}}

{{< newsection >}}
### Rat King
*Contributed by mirrorcult & EmoGarbage404*

His royal highness the Rat King has been spotted in maintenance aboard Space Station 14. The King and his loyal servants intend to eat the entire station's food supply while leaving plague and rot in their wake. Research & Development has been tasked with developing extra-large mousetraps.

{{< video-auto "/video/pr_36/rat.mp4" >}}

{{< newsection >}}
### Cargo Shuttle, Evac Shuttle, & Docking Interface
*Contributed by metalgearsloth*

Shuttles have finally arrived! Unlike their SS13 predecessors, the shuttles Actually Move™ and can be piloted around. The Cargo Techs now have an additional responsibility — they need to remotely bring the cargo shuttle in for docking once it arrives from Central Command. There's also a fancy docking interface to make that easier.

Try to avoid slamming into any Salvage Miners!

TODO: Vid

{{< newsection >}}
### Projectile Spells
*Contributed by mirrorcult*

Wizards have found some new ancient tomes with detailed information on casting projectile spells, fireballs, and the like. Be sure to cast Dodge™ whenever one is headed your way!

{{< video-audio "/video/pr_36/spell.mp4" >}}

{{< newsection >}}
### Emergency Response Team
*Contributed by Peptide90*

Central Command has begun sending Emergency Response Teams™ to any stations experiencing ~~catastrophic failure and imminent death~~ technical issues.

{{< imgw "/images/post/pr_36/ert" >}}

{{< newsection >}}
### Jetpacks
*Contributed by metalgearsloth & lzimann*

Nuclear Operatives and crewmembers should have an easier time getting around during EVAs thanks to a brand new set of jetpacks.

TODO: Vid

{{< newsection >}}
### Miasma
*Contributed by Rane*

*"For when the morning breezes blow toward the town at sunrise, if they bring with them mist from marshes and, mingled with the mist, the poisonous breath of creatures of the marshes to be wafted into the bodies of the inhabitants, they will make the site unhealthy." - Vitruvius*

Rotting corpses will now produce miasma, a toxic and disease-ridden gas. Proper corpse disposal (or even just putting them on ice) is now essential for the crew's health.

TODO: Gif of rotting corpse?

{{< newsection >}}
### Space Dragons & Sushi
*Contributed by CrudeWax*

Salvage miners have discovered a new species of space fauna: the Space Dragon! How does a dragon fly in the vacuum of space? Why is it allied with Space Carp? Who cares!

In response, the Chef has been armed with a variety of recipes for turning space carp into sushi.

TODO: Pic from PR? Or new pic?

{{< newsection >}}
### Forensics
*Contributed by Rane, Soupstraw, & ike709*

Security has been equipped with a set of forensic scanners that can detect the fingerprints or glove fibers that any pesky criminals leave behind at a crime scene. Preliminary reports indicate that chain-smoking while using the scanner doubles the likelihood of solving crimes while only tripling the likelihood of lung cancer. Now *that's* efficiency!

TODO: Make a vid minus detective since detective isn't in yet as of progress report timeline. Plus I have a funny idea for detective in PR37.

{{< newsection >}}
### Device Network Configuration
*Contributed by juliangiebel*

A new Multitool™ version has been released with the ability to configure device networks. Setting up air alarms has never been so easy!

{{< video-auto "/video/pr_36/networking.mp4" >}}

{{< newsection >}}
## Minor Changes
Due to length constraints, not everything can get a dedicated section in the progress report and instead will be found listed here. This list is non-exhaustive but covers most player-facing changes.

###  New Features

- Added a warning for Linux users on the buggy glibc version (2.35). *Contributed by PJB3005*
- Added muted status effect & mute toxin. *Contributed by Rane*
- Re-added the "Stay alive" traitor objective. *Contributed by EmoGarbage404*
- Lawyers now have security headsets. *Contributed by EmoGarbage404*
- Added localization support for indefinite articles. *Contributed by mirrorcult*
- Added a generic visualizer system. *Contributed by ElectroSR*
- Added more console autocomplete helpers. *Contributed by mirrorcult*
- Added a simple raycast method. *Contributed by metalgearsloth*
- Added a popup for anchoring. *Contributed by metalgearsloth*
- Ported stethoscopes from Nyanotrasen. *Contributed by Rane*
- Added the fire axe as a traitor item. *Contributed by EmoGarbage404*
- Added Thieving Gloves as a quick/discrete traitor item for pickpocketing. *Contributed by keronshb*
- Replaced cargo points with Spacebucks. *Contributed by mirrorcult*
- Ported research disks from Nyanotrasen. *Contributed by Rane*
- Entities can now have natural immunity to some diseases. *Contributed by Rane*
- Added a notification for being stripped/dressed. *Contributed by keronshb*
- Slimes now breathe nitrogen. *Contributed by Rane*
- Reagent solutions can now be spiked. *Contributed by vulppine*
- Added a new "Warden" lobby art. *Contributed by Solbusaur & hubismal*
- Xenos can now pry doors. *Contributed by metalgearsloth*
- Animals are now gibbable. *Contributed by Rane*
- Added a rule against speciesism. *Contributed by Peptide90*
- Added random namesets for Syndicate agents. *Contributed by Pangogie*
- Added more variety to trash spawners. *Contributed by EmoGarbage404*
- Nuclear Operative is now opt-in in antag prefs. *Contributed by Veritius*
- Added ore bags. *Contributed by asperger-sind*
- Power structures are now destructible. *Contributed by Peptide90*
- Added a makeshift laser gun. *Contributed by UKNOWH*
- Added a bunch of floortiles from goonstation. *Contributed by Peptide90*
- Items dumped from bags are now spread around. *Contributed by WilliamECrew*
- Added a copy keybind for mapping mode (default `P`). *Contributed by ElectroSR*
- Admin sounds can now be disabled in audio settings. *Contributed by ike709*
- Added a wiki button to the escape menu. *Contributed by Just-a-Unity-Dev*
- Trashbags can be dumped into disposals with alt-click. *Contributed by ProfanedBane*
- Quartermaster is now a head of staff. Hail, Cargonia! *Contributed by moony*
- Station events can now disable their announcement. *Contributed by EmoGarbage404*
- Abusing vending machines can now give dispense items. *Contributed by EmoGarbage404*
- Characters are now displayed in the round end summary. *Contributed by KIBORG04*
- Jetpacks and Syndie headsets are now available in the traitor uplink. *Contributed by Ablankmann*
- Added acceleration to movement. *Contributed by metalgearsloth*
- Added an action to pull down masks. *Contributed by themias*
- Examining drinks now shows the remaining amount. *Contributed by themias*
- Added the Syndicate Shoulder Holster and the Outlaw's Hat. *Contributed by Ablankmann*
- Pocket slot contents in the strip menu are now obfuscated. *Contributed by keronshb*
- Item strip delay can now vary by slot. *Contributed by keronshb*
- Added more botany tools. *Contributed by Peptide90*
- Added more types of xenomorphs. *Contributed by DogZeroX*

### Fixes, Tweaks, and Balancing

- Reduced ore yield of asteroids. *Contributed by Peptide90*
- Stun batons now use an internal battery and can use rechargers. *Contributed by themias*
- Self-repair is slower than having someone else do it. *Contributed by Rane*
- Buffed APC capacity. *Contributed by Peptide90*
- Raw meat no longer poisons animals. *Contributed by Rane*
- Fixed wrapped foods. *Contributed by EmoGarbage404*
- Added anchor checks to containment fields. *Contributed by keronshb*
- Spell sounds are no longer global. *Contributed by jessicamaybe*
- Fixed being eaten as a mouse causing problems. *Contributed by themias*
- Space mobs are now immune to stun and knockdown. *Contributed by metalgearsloth*
- Disarm chance now scales with relative health, mass, and status effects. *Contributed by Rane*
- Changed salvage locker loadout. *Contributed by Peptide90*
- Fixed being able to interact without hands. *Contributed by KIBORG04*
- Added flash protection to Syndie gas masks. *Contributed by themias*
- Fixed wide attacking in containers. *Contributed by mirrorcult*
- Salvage tanks now start with oxygen. *Contributed by themias*
- Can no longer break other people's drags on cuffed people. *Contributed by Rane*
- Cleaned up the appearance/ambience of various atmos devices. *Contributed by Zumorica*
- Culled the excessive variety of power cells. *Contributed by metalgearsloth*
- Prying floor tiles ignores puddles. *Contributed by themias*
- Tweaked whitelist for botany & engi belts. *Contributed by Peptide90*
- Fixed issues with ghost orbiting. *Contributed by mirrorcult*
- Fixed thrown item rotation. *Contributed by metalgearsloth*
- Fixed salvage players being deleted. *Contributed by ElectroSR*
- Fixed storage eating buckled players. *Contributed by Mirino97*
- Many atmos machines can no longer be stacked. *Contributed by Peptide90*
- Lizards now have animal metabolism. *Contributed by Rane*
- Fixed chair layering. *Contributed by themias*
- Tweaked damage slowdown to suck less. *Contributed by EmoGarbage404*
- Fixed vow of silence popup spam. *Contributed by themias*
- Decreased delta.ogg volume. *Contributed by Mirino97*
- Fixed vaulting tables. *Contributed by Peptide90*
- Stopped NPCs from going around non-hard fixtures. *Contributed by metalgearsloth*
- Fixed Nuke Ops. *Contributed by Mirino97*
- Fixed other players not hearing the musician PDA. *Contributed by themias*
- Fixed matches & match boxes. *Contributed by ElectroSR*
- Added a delay to removing light bulbs. *Contributed by themias*
- Bibles no longer heal dead people. *Contributed by mirrorcult*
- Cleaned up the chem dispenser UI. *Contributed by Rane*
- Fixed chat bubbles in low resolutions. *Contributed by 20kdc*
- Made more decorations destructible. *Contributed by jessicamaybe*
- Removed Extended from gamemode votes. *Contributed by EmoGarbage404*
- Disabled OOC during the round. *Contributed by EmoGarbage404*
- Fixed damage slowdown. *Contributed by EmoGarbage404*
- Removed starvation damage. *Contributed by Rane*
- Removed Common from Syndie headsets. *Contributed by metalgearsloth*
- Reduced the amount of drinks in the Booze O' Mat. *Contributed by EmoGarbage404*
- Removed being able to melee yourself. *Contributed by metalgearsloth*
- Inflatable doors are now transparent. *Contributed by EmoGarbage404*
- Moved emitters from cargo orders to research. *Contributed by Peptide90*
- Removing cuffs places them in the user's hand. *Contributed by ProfanedBane*
- Holofans now use power cells. *Contributed by metalgearsloth*
- Fixes circuit printing for generators and emitters. *Contributed by Peptide90*
- Re-enabled Sandbox for <5 players. *Contributed by mirrorcult*
- Prevent inflatables from being placed on walls/doors. *Contributed by themias*
- Round-end sound now respects the lobby music setting. *Contributed by Zumorica*
- Fixed jaws of life sometimes not prying floortiles. *Contributed by themias*
- Reduced nuke timer to 120 seconds. *Contributed by DogZeroX*
- Adds health analyzers to more first aid kits. *Contributed by Peptide90*
- Pipes no longer generate extra gas from nothing. *Contributed by ElectroSR*
- Puddles are slippery again. *Contributed by KIBORG04*
- Added a max pressure to gas miners. *Contributed by Peptide90*
- Fixed firelock prying. *Contributed by themias*
- Buffed tables and counters. *Contributed by Peptide90*
- Fixed comms consoles. *Contributed by Veritius*
- Slowed down parallax a lot. *Contributed by moony*
- Gave nuclear operatives their access. *Contributed by Morb0*
- Fixed nuke ops (again). *Contributed by metalgearsloth*
- Halved the number of drinks in coffee machines. *Contributed by EmoGarbage404*
- Reduced door hacking time. *Contributed by metalgearsloth*
- Reworked zombies. *Contributed by EmoGarbage404*
- Fixed disposals units endlessly pressurizing. *Contributed by themias*
- Reduced the number of drinks in Robust Softdrinks machines. *Contributed by EmoGarbage404*
- Removed the shuttle powering crate. *Contributed by youarereadingthis*
- Removed most memory allocations from the `F3` menu. *Contributed by PJB3005*
- Fixed grid splitting. *Contributed by metalgearsloth*
- Optimized physics bodies when collision is disabled. *Contributed by metalgearsloth*
- Fixed some grid traversal misprediction. *Contributed by ElectroSR*
- Added more items to the Pointless tab. *Contributed by Ablankmann*
- Fixed item interaction audio sometimes not playing. *Contributed by ElectroSR*
- Removed the zombie bundle. *Contributed by EmoGarbage404*
- Water/fuel tanks in cargo orders are no longer shipped in crates. *Contributed by EmoGarbage404*
- Removed currently-useless plants from botany. *Contributed by Rane*
- Nerfed singularity pulling. *Contributed by metalgearsloth*
- Buffed cuff delay. *Contributed by metalgearsloth*
- Fixed hot reloading. *Contributed by wrexbe*
- Sterile masks no longer work as internals masks. *Contributed by themias*
- SMG crates now come with the correct magazines. *Contributed by lapatison*
- Fixed cigarettes transferring reagents while unequipped. *Contributed by TekuNut*

{{< newsection >}}
## Mapping
List new maps or map changes in subsections here. Don't forget to do maprenders for major stuff.

### Lighthouse Station
*Contributed by OldDanceJacket*

A new, completely original station has been created by OldDanceJacket.

{{< imgw "/images/post/pr_36/lighthouse" >}}

{{< newsection >}}
### Central Command
*Contributed by LittleBuilderJane*

LittleBuilderJane has a spicy new take on the Central Command station, which now accessible via the evac shuttle.

TODO: Maprender (needs to be made)

{{< newsection >}}
## Technical
### Entity Creation Optimizations
*Contributed by PJB*

While many people would already say that SS14 runs better than BYOND SS13, there are still many performance problems. A lot of the core engine has some poor design that could do with a tune up.

One of the biggest problems were consistent stutters when moving around. This is because the networking system currently sends new entities from the server on chunk boundary, and these stutters were the result of new entities being *really* expensive to instantiate. There was some easy low-hanging fruit to grab at here that immediately stood out in a profiler, but the actually involved work here was related to optimizing event bus.

**Event bus** is the system that dispatches gameplay logic events. It has the ability to dispatch "directed" events on entities, based on the components said entities have. In short, a system can subscribe to an event:

```csharp
SubscribeLocalEvent<LightReplacerComponent, InteractUsingEvent>(HandleInteract);
```

And then these events can be sent on an entity like this:

```csharp
var interactUsingEvent = new InteractUsingEvent(user, used, target, clickLocation);
RaiseLocalEvent(target, interactUsingEvent, true);
```

The table of events to raise on which components is stored per-entity, since we assume each entity can have its own set of components. A large amount of work on entity creation was building this table incrementally. 

The low hanging fruit (so somewhat medium hanging) is removing special "component events" from the tables. These are events like `ComponentAdd` which are sent only to one component at once (as opposed to all listening components on an entity). They don't use the regular event tables, but were still being tracked there uselessly. This already cut down a massive amount of subscriptions, saving work and memory.

The real problem to tackle is the data layout of the event table itself. Previously, the data was stored like this:

```csharp
// eUid -> EventType -> { CompType1, ... CompTypeN }
internal Dictionary<EntityUid, Dictionary<Type, HashSet<CompIdx>>> _entEventTables = new();
```

(a `CompIdx` is a simple integer that maps 1:1 to a component type. A little faster and more compact to work with in some cases)

Realistically, the only thing we need to be able to do is to iterate the list of subscribed components. We do not need properties like O(1) delete and unique keys from `HashSet<T>`. Allocating a bunch of these hash sets is *expensive*, and most of them don't contain much data.

A more optimal data structure is a simple linked list of subscriptions:

```csharp
internal Dictionary<EntityUid, EventTable> _entEventTables = new();

internal sealed class EventTable
{
    private const int InitialListSize = 8;

    // Event -> { Comp, Comp, ... } is stored in a simple linked list.
    // EventIndices contains indices into ComponentLists where linked list nodes start.
    // Free contains the first free linked list node, or -1 if there is none.
    // Free nodes form their own linked list.
    // ComponentList is the actual region of memory containing linked list nodes.
    public readonly Dictionary<Type, int> EventIndices = new();
    public int Free;
    public EventTableListEntry[] ComponentLists = new EventTableListEntry[InitialListSize];

    public EventTable()
    {
        InitEventTableFreeList(ComponentLists, ComponentLists.Length, 0);
        Free = 0;
    }
}

internal struct EventTableListEntry
{
    public int Next;
    public CompIdx Component;
}
```

Iteration and insertion are now even easier to do than before, because linked lists are very easy to work with. Removal is O(n) now, but it probably won't ever be a problem.

Critically, we use a single array buffer to store the linked list data per entity. This drastically cuts down on the count of objects and complexity of the object graph, drastically reducing memory and GC overhead. Reminder that a heap object in .NET has 16 bytes of overhead, and hash sets are complex!

This system provides very good savings, but there is still a lot of things that can be improved about it. Ideally we would be able to pre-cache event tables for entity prototypes, so we can just copy-on-write the event tables when constructing entities. The current problem with this approach is that entity creation is still too dynamic (`AddComponent()` from inside component initializations...) which would make this complex and gnarly to implement. Making entity creation more rigid is on our mind, but it'll still take more work to be able to get there.

{{< newsection >}}
## Credits
### Contributors Since Last Progress Report
<!-- Use the script in SS14's tools dir. Make sure any subsection authors have their names replaced if they have an override in the script. -->
*448 content pull requests, authored by: 20kdc, Ablankmann, Acruid, Andre19926, asperger-sind, CrudeWax, Daemon, Delete69, DogZeroX, DrSmugleaf, ElectroSR, Emisse, EmoGarbage404, greenrock64, HoofedEar, hubismal, ike709, jessicamaybe, juliangiebel, Just-a-Unity-Dev, KaiShibaa, keronshb, KIBORG04, lapatison, LittleBuilderJane, LudwigVonChesterfield, Macoron, metalgearsloth, Mirino97, mirrorcult, moony, Morb0, OldDanceJacket, Pangogie, PaulRitter, Peptide90, PJB3005, ProfanedBane, Rane, Ranger6012, ScalyChimp, SirDragooon, TaralGit, TekuNut, themias, TimrodDX, UKNOWH, Veritius, Visne, vulppine, WilliamECrew, wrexbe, youarereadingthis, Zumorica*

### Patrons
<!-- Just bully PJB for these -->
*Alex Fry, Altana, Anthony Fleck, AquaDraco, Austin Nelson, Blaise M., Bobberunio, Brandon Campbell, Callum Tubrett, Cormos Lemming, CPM311, Dan Griskardian, Daniel Thompson, Darren Brady, Daskata, DramaBuns, Durp, Eric VW, Ethan Keller, Evan Armstrong, Farewell Fire, Florian, Gothryd, grhmhome, Hamcha, hh, Jack Rose, James Andrew Peoples Jr, Jex N, Joel, John Edward Hamilton Barchard, Joshington Awesomahee, KevKev, Koyki, Kris Piper, KrystalDisc, liltenhead, LPGaming, Matthew C Miklaucic, Mikhail, Mono, Nicholas Hillblom, osborn, Oxyclean114, Peter "Azmond" Newhouse, Phillip Inman, Ramiro Agis, Robin Rottstock, Seija, Serathis, Serianas, Simon Lapatin, Spiffyfishface, spinnermaster, ThatGuyGW, The Hateful Flesh, Tomeno, Uinseann, Valinov, vifs_vestige, Viridian, Will M., William Grondin, Wrexbe, Zandario*