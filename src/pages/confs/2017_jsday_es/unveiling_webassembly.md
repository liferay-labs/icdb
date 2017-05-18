---
title: "Unveiling WebAssembly: what, why, how"
description: "This year the browser vendors are placing a significant effort into developing WebAssembly. The aim of this talk is to answer whether it's relevant to your use case and how to use it to improve the performance of your application. We will see what WebAssembly brings in comparison to existing technologies. We will write some C++ code and run it in browser. We will take a look at exposing functions and classes written in C++ to parts of application that are written in JavaScript. We will discuss using WebAssembly to optimize parts of application written in JavaScript. We will use some C++ libraries to do cool stuff in a browser. Finally I will invite you to explore WebAssembly yourself and show us what you came up with."
speaker: Matjaz Drolc
twitter: MatjazDrolc
video:
tags: [js, webassembly]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

- WebAssembly is a bytecode format suitable for compilation to machine code that can be used in the web
- It is useful for speeding up code and reusing server-side legacy C libraries
- Emscripten: C to Javascript (using asm.js or WebAssembly subsets) compiler
- WebAssembly Explorer: an online tool to see how C is compiled to WebAssembly and then to x86 machine code
- WebAssembly structure:
	- More limited control flow than in machine code
	- Limited set of instructions
	- Limited set of types (compared to Javascript) to avoid megamorphism
	- Separation of code and data address spaces
	- Data passing between JS and WebAssembly is done by copying memory areas
	- Lack of GC in WebAssembly mode (manual memory management needed)
- Future of WebAssembly:
	- Enhance tools
	- Threading
	- SIMD
	
</article>

<article id="2">

##### Opinion

Interesting talk to get a grasp of what WebAssembly is and will be.

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[Talk's demos](https://github.com/drola/webassembly) | ★★★★☆
[Author's web](https://drola.si/webassembly/) | ★★★☆☆
[WebAssembly Explorer](https://mbebenita.github.io/WasmExplorer/) | ★★★★☆
</article>
