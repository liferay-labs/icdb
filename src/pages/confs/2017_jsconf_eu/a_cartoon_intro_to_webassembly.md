---
title: "A Cartoon Intro to WebAssembly"
description: "WebAssembly is fast. It’s being called “the future of the web”. It’s speed and potential have major browser vendors working together to make it a reality. And it’s on it’s way—the MVP hit multiple browsers in October of last year. But what makes it fast? Starting from the basics, this talk will walk you through what WebAssembly is, and then why it’s fast."
speaker: Lin Clark
twitter: linkclark
video: HktWin_LPf4
tags: [js, performance, webassembly]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

WebAssembly is so hot right now -> skeptical

**What is WebAssembly**
- A way to run other programming languages on the web other than js
- Js wasnt designed to be fast (first 10 years)
- Introduction of JIT compilers in 2008 perfmwars increased perf by 10x and allowed new usages of the lang
- We're reaching a new inflection point

**JIT in a nutshell**
1. Cose is initially interpreted and monitored
2. Warm paths will be stubbed by the baseline compiler
3. Hot paths are optimized in the optimizer compiler
4. Bailouts happen if optimization assumptions are no longer valid

WebAssembly can only get wasm input/output params -> integers. Complex types will pass down pointers to the wasm application memory

**Browsers already ship the MVP of wasm, but it will keep improving**
- Threads with shared memory
- Direct DOM access
- Integration with Garbage collection

</article>

<article id="2">

##### Opinion

Nice talk about compilers and webassembly. Very easy to understand, but not very detailed.

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---

</article>