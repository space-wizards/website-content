+++
title = "Progress Report #29: A lot to unpack"
author = "Timrod"
date = 2021-12-01
categories = [
    "Progress Report"
]
reddit = ""
thumbnail = "pr_28"
+++

<!-- todo intro -->

---

## Content
### Packed Station
*Contributed by Timrod, Solbusaur, 20kdc and Efruit*

The station that the /vg/ wiki describes as "Like eating poison ivy" is back! Designed to support SS14's growing player base, Packed Station is a nearly completely accurate port of the map as seen on /vg/'s SS13 codebase with some new features - like a full Atmos department (codenamed "The Hand of Atmosia") designed by Solbusaur and an SS14-compliant wiring system by Efruit. 20kdc added support for the Traitor Deathmatch gamemode and filled the hallways with trash. There may be another surprise somewhere - but you'll have to explore it to find out.

Packed Station supports up to 50 players, and can be voted for once the server is over 15 players.

---

### Chemical carpets
*Contributed by mirrorcult*

Mirrorcult proves once again that common sense has no place in a chemistry lab, adding in the ability to grind jumpsuits in a blender in order to create liquid carpet that can be sprayed or dumped onto floors to instantly carpet them. Interior design will never be the same.

<!-- https://cdn.discordapp.com/attachments/310560938438819861/912498813657284638/2021-11-22_17-23-58.mp4 -->

---

### Directional Windows
*Contributed by mirrorcult*

Directional Windows (also known as "thindows") are a core element of most SS13 maps, used to divide rooms without the need for full walls. They're also the number one source of anxiety among mappers, who live in constant fear that they forgot one somewhere. Thanks to mirrorcult, maps ported from SS13 can feel a little more like SS13.

---

### Nuke
*Contributed by Macoron*

Macoron added a core element for the Nuclear Emergency game mode: the nuclear bomb. Located in the vault on Packed Station (and in most SS13-derived stations) and in the Nuke Op shuttle, these are capable of destroying the entire station.. provided you didn't forget the code.

---

### Admin logs
*Contributed by DrSmugleaf and moony*
<!-- note: moony wasnt the only person to add logs to this system. it might blow the lid of the topic to mention everyone who did. maybe just only mention smug? adding logs is kinda onpar with bugfixes, and we omit them here too -->

DrSmugleaf added a logging system for admin use, which moony later modified to include 17 new logs. Centcom now knows when you've stolen the Head of Security's shoes, eaten all of the Chef's pizza, or when you've slipped on an improbable amount of banana peels all at once.

---

### Shuttle thrusters
*Contributed by metalgearsloth*

The space magic that allowed entire stations to fly without any apparent source of propulsion has waned, and metalgearsloth instead added thrusters that can be attached to a station or shuttle to, well... thrust. They can be ordered from cargo and are extremely deadly if you stand on the wrong end. 

---

### Animal mechanics
*Contributed by FoLoKe*

FoLoKe reworked animals in SS14, allowing for a lot of basic interactions that didn't previously exist - such as feeding them or putting them on tables. As a result, you'll no longer need to ask "Does that monkey have a gun?" because yes, it does. This also allows the vicious and highly lethal space carp to survive their natural habitat.

---

### Cow milking
*Contributed by FoLoKe*

For ages, the Chef has asked a single question: "How do I get milk?" FoLoKe answered that by allowing the Chef (or anyone with a bucket) to milk cows that have been properly fed. The Chef has responded thus far by ignoring the milk entirely and butchering every cow Nanotrasen has sent them.

---

### Update to .NET 6 and C# 10
*Contributed by DrSmugleaf*

RobustToolbox and Space Station 14 were updated this month to use .NET 6 and C# 10, the latest release of both standards. While this change mostly affects contributors (who will have to update to a development environment that supports these standards if they haven't already) it also comes with some small performance boosts out of the box.

---

### Shuttle docking
*Contributed by metalgearsloth*

metalgearsloth added a system for shuttle docking using docking airlocks, a vast improvement on the previous docking method of blowing a hole in the station big enough to drive a shuttle into. Any shuttle equipped with one or more docking airlocks will now lock on to the station when it gets close enough.

---

### Test pooling
*Contributed by DrSmugleaf*

DrSmugleaf pooled a bunch of tests Github uses when testing code contributions, reducing the time they take by 57% to an average of just 90 seconds. For contributors, this means less time taken between each code commit. For players, this instead means that coders can speedrun a patch that fills every inventory slot with banana peels even faster.

---

### Space kudzu
*Contributed by Moony*
<!-- chagrin? -->
Moony unleashed the highly annoying and extremely fast-reproducing Space Kudzu on the station, much to the chagrin of absolutely everyone. Centcom recommends the use of flame-based weaponry like welders, along with liberal application of the "wide attack" button. 

Centcom would also like to remind you that "the station is being eaten by a horrible plant" is not on the list of valid reasons for handing out the nuclear codes.

---

### Blockgame ghosts
*Contributed by Tomeno*

Hardcore Nanotrasen Block Game players cheered this month as drop ghosts were added to Nanotrasen Block Game, thanks to Tomeno. Finally, Space Station 14 can be what it was always meant to be: a competitive block dropping puzzle game. What, you thought the atmospheric simulation was the game?

---

### Chemist job
*Contributed by Elijahrane*

Elijahrane added the Chemist job, with doors and access to match. Now you can be sure that the person running around force-feeding everyone poison is board-certified.

---

### Map voting
*Contributed by mirrorcult and moony*

With the advent of Packed Station came a need for a way to select a map. Enter the Map Select Vote, which mirrorcult added to allow everyone the pleasure of dying to vacuum on the beta version of Packed Station that had no firelocks... assuming they didn't die to the numerous plasma fires.

moony later made map choices dependent on server population, ensuring that a 50-player server cannot vote for Knightship. 

---

### Job refactor
*Contributed by moony*
<!-- more like: it also added support to have more than one station... -->
moony changed the way Centcom hands out jobs, retiring the dartboard in HR that was used previously. Each station map now has its own job list based on what the station supports - as an example, Packed Station has a Chaplain slot while Saltern and Knightship do not. This also allows Centcom to have more than one station in space at the same time, with each having its own crew.

---

### Epinephrine and autoinjectors
*Contributed by mirrorcult*

The starting equipment for everyone on the station has gotten a bit heavier thanks to Mirrorcult, who added epinephrine autoinjectors to the survival box all players start with. These can be used to revive people who have gone into critical health... or to poison people with a highly lethal overdose. Epinephrine has also been added to the list of chemicals Chemistry can make, giving the chemists something new to leave lying around on the floor in pill form.

---

### Syndicate puddle jumper
*Contributed by 20kdc*

Having determined that Nanotrasen's station captains have been lulled into a false sense of security, the Syndicate has launched their first shuttle for carrying heavily-armed nuclear ops teams to the station. Now might not be a bad time to get the Nuclear Authentication Disk back from the Clown...
