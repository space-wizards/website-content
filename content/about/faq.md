+++
title = "Frequently Asked Questions"
date = "2020-06-09"
navlinkactive = "faq"
+++

# Frequently Asked Questions

<p style="color:red;">DISCLAIMER</p>

This information could be slightly out of date as we update it less frequently. Check this [forum thread](https://forum.spacestation14.io/index.php?/topic/6-information/) for the most up-to-date information.

### Q: Is It Cursed?
Nah.

### Q: Will SS14 ever cost money?
No.

### Q: Are you the original creator of SS13?
Yes/No. The original creator of SS13 would be Exadv1 in 2003. Since its open-sourcing in 2006, the community has been the developers of SS13. Many of our devs are coders, contributors, admins and hosts of various SS13 communities, but none of us were there in 2003.

### Q: What Language/Engine is SS14 written in?
It's written in C# using our own engine; [Robust Toolbox](https://github.com/space-wizards/RobustToolbox). C# is a good language and it's perfect for this project. It's easy to pick up, comfortable to write and pretty fast.

### Q: Can I Help?
Of course! Our [Discord](https://discord.gg/MwDDf6t) server is the best place to ask questions and get help. We also have guides on our [Dev Wiki](https://docs.ss14.io) on [getting setup](https://docs.spacestation14.io/getting-started/dev-setup) and [coding](https://docs.spacestation14.io/getting-started/how-do-i-code).

### Q: Will the main SS14 servers have round-start playable species other than humans?
No, but the functionality will be there for other servers.

<details>
  <summary>Long Answer</summary>

  If we want to add non-human species, they would have to pass a high-bar for adding unique content to the game. This means simple boring "human reskin" aliens are off the table, and aliens should be very unique to humans in both design and behavior. The combined effort code, design, sprite and RP wise to make them pass such a bar would so immense that we do not feel it worth focusing on.


 - Supporting base systems for it in code is something we'll do either way, to make it easier for downstream forks that DO want to add species and to make our code more flexible.
 - Spritework on the other hand is significantly harder to come by and would increase maintenance effort for not only a single species, but the whole game (think clothing sprites to fit alien body types, no generic human-shaped stuff).
 - Design wise is a careful balance to thread. Making them too unique can have ramifications for the rest of the game (especially powergaming) so there is no one answer here. Design also plays closely into lore and, as such, RP. We do have a lot of inspiration to pick from from SS13 servers, of course. Either way, we still aim to rid ourselves of many mistakes SS13 has made, so these kinds of decisions will be hard no matter what.
 - Last but not least is the RP factor, which is perhaps the most difficult one. RP is still a critical part of making a species unique, but at the same time we recognize that main SS14 servers will be low RP, and we are not sure if we would actually be able to to provide this.


 Due to these factors we feel like round-start playable (i.e. selectable from the character creator) will likely never happen. Areas like antagonist roles (e.g. vox raiders) are less problematic here, so they may happen, but the bar is still very high. And again, we still aim to make it easy for forks to add species if they want to.
</details>

### Q: Will SS14 support multiple codebases/servers like SS13?
It already does! You can checkout our [hosting guide](https://hackmd.io/@ss14/for-hosting) to get started.

Note: If you're just looking to host a private server to mess around in solo play or test stuff, it's much less hassle to just [build the game yourself](https://hackmd.io/@ss14/docs/getting-set-up) which will compile a local client/server for you.

### Q: Can I use SS14's engine to make other games?
Yes, we even have templates for both [singleplayer](https://github.com/space-wizards/RobustToolboxTemplateSingleplayer) and [multiplayer](https://github.com/space-wizards/RobustToolboxTemplate) to get you started.

### Q: Is There a Patreon? Can I donate?
[Yes.](https://www.patreon.com/spacestation14) We started a Patreon in order to pay for productivity software, server hosting, art commissions, and more! In addition to providing rewards, we will also regularly post a financial statement that shows how our income is being used in the game's development. We want to give our patrons full trust and confidence, and we believe that being 100% transparent about how the money is being used is best.

Our finances are public in this regularly updated [google sheet](https://docs.google.com/spreadsheets/d/1iP3qOeTxrwN0DyeJvPndE7i1_nXeKL25j96wFIgYcU8/edit?usp=sharing).

### Q: Where can I play SS14?
Spacestation 14 is currently in a loosely defined "pre-alpha" stage. You can download the client right now and play on our servers, but it's mainly for testing at the moment. A fair estimate of when the game will be 'complete' isn't possible.
