---
title: "JavaScript engines how do they even?"
description: "Want to know how JavaScript engines work? Why is JavaScript so fast? What is just-in-time compilation? We’ll look at basic concepts of compilers, challenges posed by modern JavaScript, and how to write compiler-friendly JavaScript."
speaker: Franziska Hinkelmann
twitter: fhinkel
video: iiEDtpy6I
tags: [js, v8, engines]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

- Many js engines nowadays that help competition and improvement
- Even though being dynamically typed makes it harder to optimize, js is really fast -> JIT (generate machine code during runtime, not ahead of time)

**Optimizing Compiler**
- _Re-compile_ hot functions with type information from previous executions
- _De-optimize_ if the type has changed -> Don't change types

In V8, the baseline compiler is **Ignition** and the optimizer is **Turbofan**

**Object Types**
Optimized compiled code makes use of observed types (internal representation) to run faster. It accepts up to 4 type shapes or 312 in a less optimized version.

> Always construct the same type of objects!  

Try experiments with Node and Chrome is possible

> Write code that looks like statically typed  

</article>

<article id="2">

##### Opinion

Great talk about the internals of V8 and the optimizer.

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[Ignition](https://v8project.blogspot.com.es/2016/08/firing-up-ignition-interpreter.html) | ★★★☆☆
[TurboFan](https://blog.chromium.org/2015/07/revving-up-javascript-performance-with.html) | ★★★☆☆

</article>