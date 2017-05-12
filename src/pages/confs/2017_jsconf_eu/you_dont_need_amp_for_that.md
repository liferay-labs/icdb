---
title: "You don't need AMP for that"
description: "But it makes things so nice and easy :) AMP at its heart is a JavaScript library for building super fast static web pages. Being purely web tech based, we can understand how it works and take the best ideas and use them in non-AMP projects. This talk will dig into the nitty gritty details of AMP and uncover how the sausage is made so to say. We’ll talk about network concurrency, font loading, image optimizations, and this magic thing called pre-rendering. Even if you never plan to use AMP, you’ll learn new tricks that you’ll be able to use to speed up your next project!"
speaker: Chen Shay
twitter: 
video:
tags: [js]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

Steps taken in AMP

**Unblock the render**
- Scripts are async (do not block the render)
- Inline CSS (limit CSS to 50kb)
- 3rd party JS only in sandbox iframes
- Resource priorization
	- Preconnect (videos to sources)

**Don't be flashy**
- Invisibility trick to avoid fouc

**Stop shifting**
- Static resource sizing
- Minimize style recalculations batching reads and writes
	- max of 1 style recalc per frame
	- 2 style recalcs per page load
- GPU optimizable animations only

**Optimize**
- Cache
- Efficient prerendering
- Code optimizations with closure compiler and amp optimizations on top

</article>

<article id="2">

##### Opinion

Step by step guide into what needs to be done to comply with AMP

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[AMP](https://www.ampproject.org/) | ★★★☆☆

</article>