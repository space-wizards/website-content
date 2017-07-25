+++
title = "Progress Report #3: Ending the pre-alpha"
author = "PJB3005"
date = 2017-07-25
categories = [
	"Progress Report"
]
+++

So stuff's been quiet for the past 14 days. I can give you an annoying excuse or I can just accept that weekly progress reports aren't working *yet*. As such **progress reports will no longer be scheduled and done whenever we feel there's something big to report**, like today!

<!--more-->

Pressuring ourselves to show progress is hard, especially when you're taking ages on giant refactors that are boring but necessary.

So what actually happened for progress?

## The end of pre-alpha

The `ComponentFamily` system was killed yesterday, this was the one final refactor that had to be done before we could get rolling on making a content assembly.
The system was used to reference components in an entity. Each "type" of component had its family, and two components with colliding family cannot be on an entity at the same time.
The primary problem was that you can't extend an enum as far as I know, so it flat out prevented things from adding more components. It also made the entire components API a pain to use.
Both of those issues are from the past now.

We also removed most remaining "game" components like health systems. These will be moved to the content assembly once that's up and running. This refactor ended up cutting out around 8,000 lines of code.

As for the systems loading the content assembly: Acruid's working on that and he already reworked part of the resource manager so we can bundle things easily. Once this refactor is done the flood gate should be open to content, and the next few reports should be a lot more interesting to say the least.

And as always work on everything else has been continuing.
