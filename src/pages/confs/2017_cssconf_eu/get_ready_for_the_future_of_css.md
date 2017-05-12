---
title: "Get Ready for the Future of CSS!"
description: "It’s time to start thinking about new and upcoming CSS features that will boost your workflow and give you more power and flexibility when building your projects. This talk covers the latest CSS features, including: color manipulation, custom properties, selectors level 4, and what's new in media queries. We’ll also have a look at in-browser design features like blend modes and clip-path."
speaker: Guil Hernandez
twitter: guilh
video:
tags: [css, specs]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

**CSS Variables (custom properties)**
References to values you can reuse `--property-name : value;` and follow the rules of the cascade and can be scoped

Preprocessor variables:
- Static 
- Do not run in the browser
- Not aware of the DOM structure

You can create nice theming structures based on when the element appears without complex nested selectors, just changing the variable value. You can only use them in values.

**Compositing & Blending**
- `background-blend-mode`
- `mix-blend-mode`
- `backdrop-filter`

**Shapes**
Use geometric shapes as css values to layout text around
- `shape-outside` + `polygon()`
- `clip-path`

**Colors**
Color Module Level 4
- `8 digit hex colors`
- `color-mod()` -> apply color adjustments

**Selector**
Selectors Level 4 Working Draft
- `:matches`
- `:required | :optional`
- `:valid | :invalid`
- `@supports` (feature queries)

</article>

<article id="2">

##### Opinion

Interesting theming take on css variables without having to be dom-aware. Very nice summary of upcoming css features

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[CSS Shapes Editor](https://chrome.google.com/webstore/detail/css-shapes-editor/nenndldnbcncjmeacmnondmkkfedmgmp) | ★★★☆☆
[Clippy](http://bennettfeely.com/clippy/) | ★★★☆☆
[Selectors Level 4](https://www.w3.org/TR/selectors4/) | ★★★☆☆

</article>