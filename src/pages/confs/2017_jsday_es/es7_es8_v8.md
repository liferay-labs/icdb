---
title: "ES7 & ES8 vs V8"
description: "Una revisión en profundidad de las características del último estándar de nuestro lenguaje favorito ES2016 (ES7) y de las ya incluidas en ES2017 (ES8, que saldrá a finales de Abril), incluidas las Funciones Asíncronas (que nos permiten gestionar la asincronía con mayor elegancia), los Array Buffers Compartidos y el objeto Atomics (los bloques de bajo nivel sobre los que construir abstracciones de concurrencia) y algunas características menores como nuevas propiedades de los prototipos de Object y String. Revisaremos cómo funciona el Comité TC39, cómo genera las releases anuales de la especificación ECMA-262 y cómo éstas se integran en el motor de alto rendimiento de V8. Un viaje a las entrañas del presente y el futuro de JavaScript."
speaker: Rafael Casuso Romate
twitter: Rafael_Casuso
video:
tags: [js, es7, es8, es99, tc39, ecma-262]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

- Starts with an explanation of how specifications of Javascript are released through the TC39 and ECMA-262 committees.
- Explains ES7 new features:
	- Array.protoype.includes: better than indexOf (because indexOf is not explicit and does not work with NaN)
	- Exponentiation operator: **
- Explains ES8 new features:
	- async/await
	- Shared array buffer: shared memory abstraction for Web workers.
	- Atomics: support for atomic operations
	- Object.entries: iterates through key/value pairs
	- Object.values: gets the values of an object
	- String padding: padStart() and padEnd() methods
	- Object.getOwnPropertyDescriptors() method
- Explains ES9 (DRAFT) new features:
	- Rest operator for properties: analog to rest parameters operator `...`
	- Async iteration: `for await`
	- Async `import()`

</article>

<article id="2">

##### Opinion

A talk about how the standardizing committees of Javascript work and some little description of newer features in ES7, ES8 and ES9. A bit unstructured, the title is misleading.

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[Slides](https://www.slideshare.net/RafaelCasusoRomate/javascript-editions-es7-es8-and-es9-vs-v8) | ★★★★☆
</article>
