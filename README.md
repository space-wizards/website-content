# Space-Wizards Hugo

This is the [Hugo](https://gohugo.io) content used to build [the website](https://space-wizards.github.io). You will obviously need to have hugo installed and on your `PATH`. Since I don't expect you to read Hugo's documentation to make a blog post I'll quickly write some stuff down for you here.

First though you need to init Git submodules so do that:

```
$ git submodule init
```

## Building

To build the site, run `$ hugo` inside the project. That's it. This dumps the output files into the `/public/` folder. This isn't really pratical for making sure your site's up to scratch though. If you want that, run `$ hugo serve` instead. It'll create a local (automatically updating) web server that you can connect to to make sure everything checks out.

When you're SURE you did everything right, run `publish.py`. Note that this pushes directly to the submodule (and as such website) so only do this when you're sure! Also push your stuff.

## Writing Posts 101

To add a post, simply create a markdown file under `/content/post/` that ends in `.md`. Sane naming please. Inside this file will be the content of the page, along with some other stuff defining title, date of creation, etc...

The content is just regular markdown, the title and stuff however is called "front matter" and it looks like this:

```md
+++
title = "doodad" # Title. Duh.
date = 1970-01-30 # Time. As this is TOML (surprise!) any TOML date-time will do: https://github.com/toml-lang/toml#offset-date-time
author = "Urist McDude" # Your name.
reddit = "https://reddit.com/link/to/reddit/thread" # Optional, when provided with a link it'll show as "Join the discussion on Reddit" below the article.
+++

Hi, I'm a blog post!
```

Also important is the summary split, `<!--more-->`. Put this where you want the summary on the main page listing to split with a "Read More..." link. This happens automatically with Hugo, but Hugo isn't exactly smart about it so I advise you you do it yourself.
