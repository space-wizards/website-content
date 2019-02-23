+++
title = "Progress Report #9: The One Where We Implemented New Features"
author = "PJB3005, Digitalis, Clusterfack & Acruid"
date = 2018-12-14
categories = [
        "Progress Report"
]
reddit = "https://www.reddit.com/r/ss14/comments/a66r95/progress_report_9_the_one_where_we_implemented/"
+++

Yeah, we really don't have anything to say here, outside of "look at all these features!"

<!--more-->

## Work on Mobcode

As any SS13 coder can tell you, ourselves included, mob code is a bloody mess. The best thing we can do to avoid creating the same mess in our project is write modular, configurable mob components.

Mob code's general component design has now been solidified, and we are making real progress on it. While we did previously have a component to store damage taken by weaponry, it didn't have any behavior implemented with it. This month, Clusterfack implemented the [first of many mob specific components](https://github.com/space-wizards/space-station-14-content/pull/130).

This newly implemented "species" component is meant to implement fundamental health states. In contrast to SS13's code, the species component is implemented in a modular way that can be used for any mob type and easily support adding new types of health states. At the basic level, it provides us with the conscious, critical, and dead health states that all SS13 forks have traditionally used.

<video src="/video/18_12_13-species.mp4" controls>

As you can see above, Clusterfack also provided us with the work to finally make a character window that combines information from multiple components for display to the user. Right now, it can be opened and closed with the "c" hotkey. This has made it trivial for us to later create additional components that have user interfaces shown to the character.

### The Future

Now that new character interfaces can easily be added to the character window, work has begun on additional mob based components for this month.

The initial plan includes creating a new "status effect" component. This component will visually represent the status effects that are currently being applied to a character, along with specific information about those status effects when any one of them is hovered over. At a basic level, this component includes status effects such as being stunned or weakened, and gives out information about which of them is being applied to you, and for how long (if applicable). This system is also planned to encompass SS13's extremely confusing "resist" system, by allowing you to resist out of individual status effects by clicking on them in the UI. Ever been on fire *and* cuffed, and then unable to stop, drop & roll because resist tries to uncuff first? This solves that.

## Verbs

Chances are, the first thing that goes through your head when you hear the word "verb" is "ugh", especially if you're an experienced SS13 coder. For those of you who don't know, in BYOND, verbs are the actions you see in the right click menu and the ugly panel above the chat, such as "Pick up" or "Eject". You'll have a hard time finding someone who actually likes the way they're implemented in BYOND: there are tons of issues with them from a user interaction standpoint and a code standpoint.

Thankfully, none of these issues with verbs are in their concept or unfixable. SS13 can't fix them because it's chained to BYOND, but we're not. Hell, in BYOND a lot of the right click lag is caused by verbs you *don't* have. We have no idea how this works either.

Our implementation of verbs so far is still minimal, ugly, and looks pretty much like SS13's does. And yes, we're keeping the regular right click menu.

Some servers, like TG, have recently added radial menus, which are a great addition that works around some of verbs' flaws in SS13. Hell, [PJB even pioneered them 2 years ago](/video/18_12_13-clockcult-radials.webm)! While they solve some of the glaring issues with BYOND's verbs implementation, they come with some of their own: they require artwork to make, have no consistent or obvious ordering, are really suited more towards analog joysticks on consoles, get really problematic when saturated with a lot of buttons, and so on. We might still see them in SS14 eventually. Not as a right click replacement, but as interfaces for objects that don't deserve a window (like the linked video).

With more effort that has not yet been done, classic right click menus will be perfect. We have to solve numerous challenges that SS13 hasn't even considered, but we can and will do it.

Consider one popular use case of right click menus: I want to eject the ID from my PDA. To do this, I have to cumbersomely go through the right click menu. SS13's workaround is to provide modifier-key shortcuts to these common actions, such as alt-clicking on the PDA to eject your ID. This is nice and all, but it's only useful if you actually know the shortcut in the first place. I'm too lazy to check TG at the moment, but I know that, historically, these shortcuts have been inconsistent and very poorly documented, if at all.

So what if, instead, alt-click is simply bound to a verb, and then you can see an icon indicating "this is bound to alt-click!" in the right click menu? You right click the PDA once, clearly see that you can alt click instead, and just naturally train yourself to use alt click later. Eventually, we could even make these shortcuts rebindable, and so on...! You may also realize that literally every GUI application ever does this, so.. yay for innovation.

Other object interactions, like "eject cell" for flashlights, have different text when the flashlight is already empty, and the verb is greyed out. By the way, we coded power cells and flashlights as an example of the verb system. Don't let your flashlight run out!

Of course, later on, verbs will become much more flexible. For example, things like the on-HUD action buttons such as "toggle jetpack" would be integrated into the verb system too.

## Notifications & Chat Usage

If you look at the screenshots we've shown so far, you'll notice that our chat box is tiny compared to SS13. Granted, none of us have actually touched the chat in ages, and we haven't put any thought into it yet outside of the technical backend.

In any case, we want to reduce the focus on the chat box. In SS13, tons of basic feedback goes into the chat with no consideration for whether it's actually appropriate there. I doubt I'm the only one who has trouble keeping an eye on chat throughout the round, because it's so often filled with useless messages. Sure, we all want feedback that we finished screwing in a window, but this shouldn't go into the chatbox, which is so far away from where your eyesight is usually trained. Some other messages also have their problems with filling up the chatbox, like attack logs. It's definitely hella convenient to have a permanent, flawless history to resolve whether Han shot first, but relying on our poor human memories is much more fun. Not to mention that having to *read a chat window to see who's attacking who* is just terrible. In SS14, chat will be primarily chatter, though we'll probably still have speech bubbles above peoples' heads when they talk.

So then how will we provide feedback for object interactions that isn't in the way, but is still obvious to the player? While reading [Factorio's 261st FFF](https://factorio.com/blog/post/fff-261), I saw exactly what needed to be done, and stole their idea of temporary hovering messages (scroll down to "Generic usability improvements"). Thanks, Factorio!

We can also provide audio feedback. While SS13 does this to some extent, it's not very reliable. Audio feedback is good, let's use it! *He says, unable to find any good audio samples*.

## Parallax

![Parallax is in](/images/post/pr_9/parallax.png)

## The Lobby & Rounds

We now have a lobby and round system!

Lobbies and round systems are necessary if we want to actually host a game server and playtest properly, so.. we have them now.

The first necessary step was to tear out and move around a bunch of engine crud. The engine had some leftover parts of the an old, barely functional lobby system, which were disabled for simplicity reasons when porting to Godot, but they weren't worth very much anyway. It complicated & slowed down the connection handshake if anything. All the round and lobby code has since been moved to be handled purely by content.

Implementing a basic content-side game ticker is also easy. If you're unaware, the game ticker keeps track of important state like "are we in the game, has the round ended, what's the game mode", etc... which was easy to implement. Not that we we have anything resembling *game modes* yet though, but still we can theoretically restart the round now and reset the map without restarting the server.

Designing the lobby UI though? Now that sure was something. SS13's lobby isn't exactly amazing, and we have the opportunity to turn it on its head, so we took it.

While a bare bones lobby is already implemented in code, it's mostly just the chat box and a ready button. So we'll show you the concept drawing instead.

![Lobby Concept Art](/images/post/pr_9/lobby-concept.png)

Most things in that image should be self-explanatory. OOC at the bottom left, server name nicely visible at the top... I decided to reserve a small outer border for a parallax background image, to make things look pretty. There's no massive meme lobby image, but there is a server info panel that servers will have a lot of fun customizing. Ideally, people would be able to see news and such in there too, like new changelog entries, announcements, polls, etc... We haven't bothered to fill in character creation itself yet, but we did reserve room for it.

You might've noticed the arrows in the middle of the image: the idea is that, by pressing some buttons, you'll be able to swap character creation and the server info menu. This way, there will be plenty of space for servers to show news and their own home-grown memes, but you still have a preview of your selected character slot while waiting for the round to start. And then when you want space for character creation again, you can easily swap back.

## Fun With Guns

Guns were lame. Less-so now that they're fully automatic. Or, well, at least the SMG is. Still nothing resembling ammunition or magazines though. Should be really easy to code though. Contributions welcome!

## Throwing

The ability to throw items out of your hand has now been added to the game, thanks to Acruid. The items are treated as physical objects and will collide with players and walls. Thrown items will damage objects they come into contact with, based of of the force of their collision. This means that a fast, heavy moving object like an iron ingot will do more damage to a player than a small object like a headset.

<video src="/video/18_12_13-throwing.mp4" controls>

Currently there is no concept of gravity on the station, which means that thrown items will continue to drift forever as if they are in open space. This will be changed once grid physics are improved and a gravity generator is added to the game. Also, as demonstrated in the video, items can currently open and pass through automatic doors. We are still deciding if this is going to stay in the game or not, and are open to suggestions about what you think.

## World Storage

SS13 definitely has an unique approach to lockers. When you open them everything tumbles out onto the floor, when you close them they suck everything back into themselves like a vortex. It's definitely a simple approach, and kinda necessary when you want to make interaction with the contents easy in the context of BYOND's limitations.

Our idea is to merge the code for backpacks and such with that for lockers. So you have to explicitly take items out with a menu. We believe it won't be clunky when eventually implemented well. All the open state sprites are still gonna stay though. Just like in Minecraft or whatever you'll be able to see when a locker is opened by somebody:

<video src="/video/18_12_14-storage.mp4" controls>

## IPv6 Networking Support

Just a minor thing: the netcode now transparently supports IPv6. Yay! If you don't know what that means then whatever. If you do then you'll realize that it really does not matter. It was fun to implement though.
