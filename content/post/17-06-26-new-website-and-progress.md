+++
title = "Progress Report #1: New Website"
author = "PJB3005"
date = 2017-06-26
categories = [
	"Progress Report"
]
tags = ["website"]
+++

You're reading this on the new website for SS14! After [lots of hard work with CSS](https://i.imgur.com/Q3cUg29.gif), the website is ready to recieve progress reports and other news.

<!--more-->

The website is hosted entirely from GitHub pages, which means it's fast, reliable <!--Citation Needed--> and secure, with zero cost to us (except for designing and writing it). It's completely static server side, and generated with [Hugo](https://gohugo.io), an excellent tool for making static sites like this. Adding a page is as simple as making a new markdown file with title, and date and building it. Easy as that!

The code for the website can be found [here](https://github.com/space-wizards/space-wizards.github.io-content), temporarily until Silver wakes up and I move the repo.

## Progress!

Now, since this is the first blog post on the site, I want to give a quick run down of the status of SS14 since the [last progress report made in March by Silvertorch5 on /r/ss14](https://www.reddit.com/r/ss14/comments/5yd7fh/march_2017_update/).

The project has been revived pretty heavily. We've already refactored everything over a couple times by now. There's a whole bunch of new developers (including me!) and we're ready to take this remake on head first.

We're retargeting the main repo to be a more "bare engine" sort of deal. There will not be a lot of content in it (excluding debug content). All of this content will be loaded from an external set of files that can be loaded on a per server basis, thus ensuring that players only need one client for every server. We've made a repo for a "base" set of content that other repos can branch off [here](https://github.com/space-wizards/space-station-14-content). In general most of the work is focused on getting this functional so we can start hitting clowns with toolboxes.

Work on the new rendering engine is progressing by Silvertorch. Lots of assorted refactors that touch the entire project have been made to allow us to pave the way for a more easy development environment, content *and* main engine. For example, the entity template system has been replaced with a generic "prototype" system, and the entity prototype for a toolbox currently looks like this:

```yaml

- type: entity
  id: Toolbox
  name: Toolbox
  components:
  - type: Transform
  - type: Velocity
  - type: Clickable
  - type: Direction
  - type: WearableAnimatedSprite
    sprite: player_toolbox

  - type: BasicInteractable
  - type: BasicMover
  - type: BasicItem
  - type: Physics
    mass: 5

  - type: BasicItem

```

Compared to this:

```xml
<?xml version="1.0" encoding="utf-8"?>

<EntityTemplates>
  <EntityTemplate name="Toolbox">
    <Components>
      <Component name="TransformComponent"></Component>
      <Component name="VelocityComponent"></Component>
      <Component name="DirectionComponent"></Component>
      <Component name="ClickableComponent"></Component>
      <Component name="WearableAnimatedSpriteComponent">
        <Parameters>
          <Parameter name="sprite" type="string" value="player_toolbox" />
        </Parameters>
      </Component>
      <Component name="BasicInteractableComponent"></Component>
      <Component name="BasicMoverComponent"></Component>
      <Component name="PhysicsComponent">
        <Parameters>
          <Parameter name="Mass" type="float" value="5" />
        </Parameters>
      </Component>
      <Component name="BasicItemComponent" />
    </Components>
  </EntityTemplate>
</EntityTemplates>
```

I'll let you be the judge but I think it's pretty obvious which is nicer.

On the more "engine" side of things however, the project has moved to a far more sane structure. Previously the project was laid out like this:

* `SS14.Client`
* `SS14.Client.Graphics`
* `SS14.Client.Services`
* `SS14.Client.GameObjects`
* `SS14.Client.Interfaces`
* `SS14.Server`
* `SS14.Server.Services`
* `SS14.Server.GameObjects`
* `SS14.Server.Interfaces`
* `SS14.Shared`
* `SS14.Shared.GameObjects`
* `SS14.Shared.IoC`

This was a giant mess in more ways than I can explain with that small list. Now it looks like this:

* `SS14.Client`
* `SS14.Client.Graphics`
* `SS14.Server`
* `SS14.Shared`

Hooray for clean up!

And that's just the biggest elephant in the room! We're fixing systems, discussing design targets, documented the code that's undocumented. We're working on setting up a proper project management board to allow us to easily delegate tasks and go "here's a list of things we can work on right now. Pick something you like!". This is still a bit off, but when it's done it'll be in the next progress report I guarantee you.

So for more stuff to report:

* Sood has been working on IPv6 networking and updating the years out of date version of Lidgren.Network in our code. Sadly Lidgren isn't being updated anymore, but it's still highly reliable. We are talking about moving to an alternative, LiteNetLib, as a very long term goal, because of obvious maintenance issues with Lidgren (IPv6 support is through an unmerged old PR on the Lidgren repo.)
* Sood helped redo all the EOLs to be LF (UNIX). I know have the most line changes of any single person on the repo and I don't deserve it.
* Silvertorch5 continues working on RobustEngine, the name we debubbed for the rendering engine that will be powering the client. As much as it is demotivating, SFML was a giant terrible mistake, a BYOND level mistake, but giving up isn't the solution, shit happens.
* A fancy splash screen, a joint project between me, Silver and PsyKzz. [Check it out](/images/splash.png)
* All around performance improvements.
* Tons of UI fixes.
* Set up automatic code anlysis to catch bugs and yell at us.
* Better support for non-Windows operating systems all around.

However picking a fine line between these and other PRs is kind of hard, so if you want to see every PR merged recently, [here you go](https://github.com/space-wizards/space-station-14/issues?utf8=%E2%9C%93&q=is%3Amerged%20).

I can assure you: SS14 is not dead. And we're gonna finish this.
