---
title: "Applying NASA coding standards to JavaScript"
description: "Jet Propulsion Laboratory - scientific institution making research and development for NASA. Their portfolio includes such famous missions as Curiosity Mars rover and Voyager probe which left solar system after 25 years of flight and still providing scientific information. High level of automation and long duration of missions led to superior demands to software quality. As a result of JPL amazing experience a set of code guidelines was developed and published recently. Since demands to web-driven software constantly increase and more critical tasks are entrusted to JavaScript, lets apply NASA coding guidelines to JavaScript / HTML applications for higher performance, reliability and the better world."
speaker: Denis Radin
twitter: PixelsCommander
video:
tags: [js, guidelines]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

> The universe favors unification  

Unification never stops

> Scared flying JS driven airplane?  

Lack of trust in the web platform, lack of guidelines, and low price of mistakes makes the perception of the JS language be seen as unreliable

**Code guidelines can help**
1. **Readability** - No function should be longer than what can be printed in a sheet of paper -> Do just one thing
2. **Predictabilty** - Restrict all code to very simple control flow constructs. Do not use goto statements, redirections or recursions -> Static analysis, metrics
3. **Respect RAM** - Do mot use dynamic memory allocation after initialization -> Measure and compare
4. ~~All loops must have a fixed upper-bound~~
5. **Test well** - The assertion density of the code should average to a minimum of two assertions per function
6. **No shared state** - Data objects must be declared at the smallest scope of code
7. ~~The return value of non-void functions must be checked by each calling function~~
8. The use of the preprocessor must be limited -> Nice to know when to use transpilers. The code you write is not the one it runs. You dont own it and it has a price
9. **LoD** - The use of pointers should be restricted -> Small call chains
10. **Keep green** - All code must be compiled, from the first day of development, with all compiler warnings enabled

</article>

<article id="2">

##### Opinion

Overview of NASAs code guidelines and how it can be applied to JS development to improve the perception of the language, paltform and coders.

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[ESLint Pureness plugin](https://github.com/rom-melnyk/eslint-plugin-pureness) | ★★★☆☆

</article>
