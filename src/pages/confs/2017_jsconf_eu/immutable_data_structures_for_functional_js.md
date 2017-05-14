---
title: "Immutable data structures for functional JS"
description: "Functional programming has been gaining a lot of popularity in the JS community, and with good reason: rejecting side-effects and mutability - in-place changes to data - helps avoid a lot of headaches. But when you refuse to mutate objects, you have to create a whole new object each time something changes, which can slow things down and eat up memory, making functional programming seem inefficient. That’s where immutable data structures come in - to save the day, and time and space! Also called “persistent data structures”, they help you efficiently make new “modified” versions of immutable objects, by reusing parts of the old object that you don’t need to change. In this talk we’ll take a look at how these data structures work, why they’re fantastic for functional programming, and how we can easily use them in our JS code thanks to libraries like Mori and Immutable.js."
speaker: Anjana Vakil
twitter: AnjanaVakil
video: Wo0qiGPSV-s
tags: [js, immutable, data-structures]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

> Functional Programming rocks -> Immutability rocks

Data in Data out, no side effects

> With mutability come overhead and bugs  

**Challenges of immutability**
- Speed 
- Memory

**Immutable Data Structures** don't change
**Persistent Data Structures** keep old versions around

**Representing data as shared trees solve this by**
- Path copying
- Structural sharing

**This structure is called a trie**
- Leaves hold values
- Paths are keys
- Use binary as encoding keys, but 32-way usually works best -> `Bitmapped Vector Trie`
- If the key is not binary, it can be hashed -> `Hashed Array Mapped Trie`

</article>

<article id="2">

##### Opinion

A basic talk about immutability, but interesting implementation explanation.

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[mori](http://swannodette.github.io/mori/) | ★★★☆☆
[immutable-js](https://facebook.github.io/immutable-js/) | ★★★☆☆

</article>