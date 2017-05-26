---
title: "Scaffolding CSS for Scale?"
description: "Ever thought about localising your site, but realised it led to a lot of messy duplication? Do you want to re-use component styles, but have some styles overwrite others due to that cascade? Not sure where to start with CSS architecture?

In this talk, you'll learn how to get started with your own lightweight, localised CSS setup. We'll go through how we use Grandstand, a CSS framework built by BBC Sport, as the scaffolding for our CSS. Starting with bare bones of just ~10kb, it has the flexibility to allow layouts in 10 scripts for 20+ languages, and we’re using it across the BBC News & Sport sites."
speaker: Sareh Heidari
twitter: sareh88
video: pRos7NvtwFU
tags: [css, frameworks]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

**BBC News**
- Lots of users
- Lots of pages
- Easyc to reuse
- Localisable
- Lightweight

**Grandstand**
- Dont want components with repeated CSS
- Namespace all the things (BEML)

###### Components
- Objects (gs-o-*) -> 11 different ones (bullet pattern, ...)
- Utilities (gs-u-*) -> Standardize things (margins, paddings, display, float,...)
- Sass Tools -> Reusable colour variables and mixins
- GEL Typography
- GEL Grid
- GEL Iconography

###### Localization
- Content
- Typography
	- Same one doesn't really work with different scripts. Kerning, line heights, font sizes...
- Layouts
	- Function flip() for values
	- @if $rtl for properties -> {lb} # prop {rb} syntax tool

###### How to build your own
- Choose things
	- Standard spacing unit
	- Breakpoints and typography suited to your content
	- Colour Palette
- Keep it lightweight
	- Choose patterns carefully
	- Do you **really** need that variation
	- **Communicate** with others!

</article>

<article id="2">

##### Opinion

Talk focused on a particular CSS framework, close to what we built with LexiconCSS. Important to check GEL, BBC experience language at least, as a shared trend.

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[Grandstand](http://bbc.github.io/grandstand/) | ★★★☆☆
[GEL](http://www.bbc.co.uk/gel) | ★★★☆☆

</article>