---
title: "Preact: Into the void 0"
description: "Front-end developers sit atop a massive amount of technology, often treating whole pieces of our application as opaque functionality. Grab a hard hat and follow me down into the internals of Preact, a tiny 3kb alternative to React. Along the way we’ll shed light on fundamentals like JSX & Virtual DOM, demystify DOM diffing, and see how keys work up-close. On our way back to the surface, we’ll stop at the Museum of Lost Hours to see some performance and size optimizations. Hope you’re not afraid of the dark!"
speaker: Jason Miller
twitter: developit
video: LY6y3HbDVmg
tags: [js, performance]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

**Constraints** are challenges

**JSX**
- XML-liked expression compiled to a function call
- Factory function -> createElement, calls inserted
- Nothing to do wih the DOM, just a representation

Simple renderer works but is awful -> diffing

In VDom, keys attribute meaningful order to a set of uniform elements

**Performance**

> The DOM is slow  

- DOM is accessible
- DOM is extendable
- DOM is framework agnostic

**Your DOM is slow**
- Use textNodes for text
- avoid (DOM) getters
- avoid Live NodeLists

**Measure**
- Chrome devtools
- IRHydra
- ESbench

**Lessons**
- Be explicit
- Inline helpers. Functions can be too generic and get deopted
- Short-Circuiting
- Make decisions based on data

</article>

<article id="2">

##### Opinion

Good talk showcasing some algorithms and inner workings from the preact auhor.

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[HyperScript](https://github.com/hyperhype/hyperscript) | ★★★☆☆
[IRHydra2](http://mrale.ph/irhydra/2/) | ★★★☆☆
[ESBench](https://esbench.com/) | ★★★☆☆

</article>