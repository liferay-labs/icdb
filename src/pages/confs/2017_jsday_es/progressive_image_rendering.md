---
title: "Progressive Image Rendering"
description: "This talk addresses the culprit in page size, images. I feel that we like discussing JS and CSS and its payload, but we tend to forget about images, which represent 2/3 of the bytes of a page. The most performant request is the one that is never done, and this beats any possible image optimization."
speaker: José Manuel Pérez Pérez
twitter: jmperezperez
video:
tags: [js]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

Web performance does not only mean "page load time", but also the user perceived performance.

**Techniques**
1) Server side rendering
2) Critical CSS
3) Load JS asynchronously
4) Load fonts asynchronously

What about **images**? They usually represents the 66% of a page.
1) Try to be minimalist and use less images, or CSS where possible.
2) Optimize images and use the correct extension.
3) Use responsive images. `Picture` tag, `img` tag with sizes and srcset attributes, ...
4) Lazy-load images.
Use the `IntersectionObserver` API (works also with React).

What to show while the image is loading:
 - Nothing. Just keep the width and height of the image
 - Placeholder image
 - Solid color
 - A progressive image that loads on blur-up.
 - Draw with SVG's [Example](https://www.polygon.com/a/xbox-one-review). Cany Edge Detector.

</article>

<article id="2">

##### Opinion

Very interesting and practical talk about how to deal with images not reducing the performance of our page. Also usefull for UX and Designers.

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[Slides](http://slides.com/jmperez/pir#/) | ★★★★★

</article>