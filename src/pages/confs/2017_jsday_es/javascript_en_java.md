---
title: "JavaScript en Java: diversas formas de ejecutar JavaScript desde la JVM"
description: "Hace años, ejecutar JavaScript desde Java podía ser un capricho o una necesidad anecdótica. Pero hoy en día, con más y más proyectos nada triviales en JavaScript que no tienen una alternativa Java, es importante conocer qué posibilidades tenemos para ejecutar JavaScript desde Java y las ventajas e inconvenientes de cada una. Tras un pequeño repaso de las soluciones tradionales como Rhino, veremos con algo más de detalle Nashorn, GraalVM y sobre todo J2V8. Se podría dudar si esta charla no es más adecuada para una conferencia de Java. Pero el propósito, que es tener más plataformas donde poder ejecutar JavaScript, supongo que será mejor recibido en una conferencia sobre JavaScript. Además, en tecnologías como GraalVM y J2V8, Java pasa a ser un actor secundario."
speaker: Pedro Palao
twitter:
video:
tags: [js, java, jvm]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

- Closure Compiler better than Babel when generating final code.
- Babili: a Babel preset to minimize JS without transpiling.
- Claims that right now Babel implements less ES6 than some browsers because some features (for instance `new.target` operator cannot be correctly transpiled).
- States that it would be interesting, given the state of the JS engines on the JVM, to run JS code inside an applet instead of using the browser's built-in JS engine.
- Claims that the goals of the JS engine are different for server (stability, security, ...) and browser (performance, forgiveness, ...) and that could lead to drop V8 as Node.js' engine.
- Talks about complexities of the language when implementing an engine:
	- Objects must be stored by reference because they can change type
	- Object classes are not closed
	- Arrays are polymorphic and cannot be treated as fixed size structures
	- Function calls megamorphism: given a call site, it's impossible to infer what will be invoked
	- Need for GC and impossibility of using reference counting
- V8 internals:
	- More object oriented (as opposed to functional programming)
	- Cannot inline binary code functions, thus it is sometimes faster to stay on JS domain than calling highly optimized binary methods
	- Weird inlining depth limit of 8 which causes deoptimizations that hurt performance.
- JS engine implementations for the JVM:
  - Oracle Nashorn:
    - Was used as a thorough test for invokedynamic JVM instruction
    - Avatar.js engine
    - Can inline binary code calls as opposed to V8
  - GraalVM:
    - Intended to implement dynamic languages in the JVM with low-cost interop between them.
    - Only 80k lines of code!
    - JS implementation is the only one that is not opensourced.
    - Goes slows at the beginning but usually has the best performance on the long term because it's the best optimizing.
  - J2V8:
    - V8 bindings for JVM
    - Works like V8 and has the same advantages/limitations of V8
</article>

<article id="2">

##### Opinion

Very interesting talk on the difficulties of implementing a JS engine and a comparison of
JS engines for the JVM.

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[Closure compiler](https://developers.google.com/closure/compiler/) | ★★★☆☆
[Babili](https://github.com/babel/babili) | ★★★☆☆
[Oracle Nashorn](http://www.oracle.com/technetwork/articles/java/jf14-nashorn-2126515.html) | ★★★☆☆
[GraalVM](https://graalvm.github.io/) | ★★★☆☆
[J2V8](https://github.com/eclipsesource/j2v8) | ★★★☆☆
[new.target operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target) | ★★☆☆☆
</article>
