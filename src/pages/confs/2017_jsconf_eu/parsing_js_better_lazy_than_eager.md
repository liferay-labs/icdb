---
title: "Parsing JavaScript - better lazy than eager?"
description: "Parsing JavaScript fast is critical for fast web page startup. We’ll look at challenges posed by complex frameworks and new language features and how V8, the JavaScript engine behind Google Chrome, solves them. You’ll learn how to write and bundle your code in a way that is fast to parse. Some topics I’ll cover in the talk: How does V8 parse JavaScript and how does it decide what parts to parse / compile upfront? Recent and upcoming improvements in the area of parsing JavaScript better. What should developers do to make parsing be less of a bottleneck? Why is benchmarking parsing hard?"
speaker: Marja Hölttä
twitter: marjakh
video: Fg7niTmNNLg
tags: [js, v8, engines]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

**What is parsing**
JS source code -> parser -> AST  -> scope analysis

Parsing is in the critical path of web apps startup

**How does V8 parse Js**
- Parser: full, eager
	- Parsing functions to compile
	- AST
	- Scropes
	- Finds syntax errors
- Preparser: fast, lazy
	- Used for skipping over functions, just finds the end
	- 2.5x faster than parser

**Heuristics to decide wether to parse eagerly or lazily**
- Rules not specified in the spec
- Free to implement in the browsers
- V8 tries to guess and eager parse, but lazy parses the rest

Lazy parsing inner functions is harder because of the function contexts. It is heavier than lazy parsing top-level functions. Modern js is heavily nested paying a price for it.

Parsing is hard because of some ambiguities. V8 parses very forgivingly until it can decide on ambiguous constructs but it never rewinds.

**What to do**
- Ship less js
- Use code coverage to re,ove code and dependencies
- Measure the parse cost 
- Code caching in V8, caches bytecode of frequently used scripts -> bundling affects this
- Use streaming
- Avoid eval
- Use the parens hack selectively

</article>

<article id="2">

##### Opinion

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[optimize-js](https://nolanlawson.github.io/optimize-js/) | ★★★☆☆
[JS Startup Performance](https://medium.com/reloading/javascript-start-up-performance-69200f43b201) | ★★★☆☆

</article>