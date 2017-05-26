---
title: "CSS and the first meaningful paint"
description: "To render a webpage browsers needs to go through the complex dance of networking, parsing and painting before any content can be displayed to your user. Over the years, we've developed mechanisms and hacks to aid the browser at each stage of this process, but these have always come at some cost or trade-off.

How can we utilize modern web platform features to load our CSS as fast as possible? Should we still be inlining our critical content into the document or instead, how can HTTP/2 server push and Service Workers help us?

In this talk we will take a journey exploring the current, past, and future best-practices for loading CSS in the browser and how we can achieve a first meaningful paint within 1000ms. Ultimately creating a faster, more resilient experience for our users."
speaker: Patrick Hamann
twitter: patrickhamann
video: 4pQ2byAoIX0
tags: [css, performance]
layout: "talk"
weight: 2
---

<article id="1">

#### Notes

##### How do you measure performance?

New metrics are user-oriented, focused on users needs and not our delivery.

**First Meaningful Paint**
- Not exposed as an API yet, but talking about it. Read whitepaper!
- You can use Lighthouse to audit ttfmp
- Use Webpagetest to test on real devices in real conditions
- There's no single profile for the same user (conditions change)

Technique | Pros | Cons
--- | --- | ---
**Inline critical CSS** | no blocking, no spof, no critical request, instant painting | reflow, cache, maintenance and automation
**Preload (what are your critical resources** | indicate hidden resources, dictate priority, separate fetch from exec | easy to create contention, requires server logic
**Server Push (HTTP/2)** | we eliminate a request | We get a penalty, not an improvement
**Async Push** | |

**What about repeat view**
- We have no way to indicate how things are cached -> PRPL pattern!

**Future**
- Early hints 103 response
- CACHE_DIGEST

</article>

<article id="2">

##### Opinion

Interesting talk with emphasis in the importance of using the proper tools

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[Lighthouse](https://developers.google.com/web/tools/lighthouse/) | ★★★☆☆
[WebPageTest](https://www.webpagetest.org/) | ★★★☆☆
[Time to First Meaningful Paint Proposal](https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view) | ★★★☆☆
[Preload Specification Working Draft](https://www.w3.org/TR/preload/) | ★★★☆☆

</article>