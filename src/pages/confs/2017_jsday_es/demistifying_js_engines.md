---
title: "Demystifying (JavaScript) engines"
description: "How a JavaScript engine works? What are its basic components? How to measure its performance? What is JIT compilation? Stigmatization: is JavaScript fast enough? are some of the questions I think we currently fail to answer in a, somewhat, short and direct way."
speaker: Alejandro Oviedo García
twitter: a0viedo
video:
tags: [js, engine]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

- How the engines model code:
	- Use of AST to syntactically analyze the code
	- Engines have the concept of hidden classes which are approximations to closed-like object structures to access members more efficiently.
	- Hidden classes are created and discarded as needed by analyzing code execution
	- Inline caches are maintained to minimize function calls (which are costly because of stack management)
	- Caches are created and discarded as needed by analyzing code execution and following heuristics
- How the engines optimize execution:
	- JIT compilers to optimize execution
	- Some language constructs inhibit optimization: eval, try/catch, with
- Structure of SpiderMonkey (Firefox engine):
	- Light JIT compiler: baseline
	- In depth JIT compiler: IO Monkey
	- Baseline acts first to give non transforming optimizations.
	- IO Monkey triggers after more cycles and produces aggressive assumptions-based optimizations which are discarded when assumptions no longer apply.
	- IO Monkey bailouts fall back to baseline optimization, which is never lost.
- Chakra (Microsoft engine):
	- Simple JIT: bytecode
	- Full JIT: bytecode and optimization based on typeinfo assumptions
- V8 (Chrome engine):
	- Ignition: interpreter
	- TurboFan (supersedes Crankshaft): typeinfo based JIT
	- TurboFan introduces performance regressions over Crankshaft (on purpose). These are due to a change in the way of measuring code performance.
- JavascriptCore (Safari engine):
	- Baseline JIT: light optimization
	- DataFlow Graph compiler: in depth optimization
	- LLVM: compilation to machine code

</article>

<article id="2">

##### Opinion

Advanced talk about how the current Javascript engines are structured. Interesting.

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[Slides](https://www.slideshare.net/RafaelCasusoRomate/javascript-editions-es7-es8-and-es9-vs-v8) | ★★★★☆
</article>
