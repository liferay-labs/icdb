---
title: "Dynamic video in the browser"
description: "Rather than just playing videos in the browser; what if you could edit and composite them on the fly? Just as the Web Audio API allowed for dynamic audio manipulation, we can now do similar things for video, opening up the creative possibilities for interactive visual experiences on the web. In this talk I’ll show you how, with some live coded demos using an open source library. I’ll also talk about how the BBC is using these techniques to explore the future of TV."
speaker: Matthew Shotton
twitter: MathewShotton
video:
tags: [js]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

**VideoContext**
- Make interactive video on the web very easily
- Like WebAudio API
- Cut, sequence, play clips
- Real-time graph and timeline modifications
- Mobile support
- Integrates with A-Frame
- Uses WebGL and GLSL shaders for fast image processing
- Allows using custom GLSL shaders to write personalized effects

**Reading video.currentTime is not frame accurate**
Use `requestAnimationFrame`

**Switching tabs stops**
- Use a serviceworker to keep the clock running

**No auto playing video on mobile**
- Pool of activated elements

**No low-level APi for syncing video playback**
- No solution for this. If buffering happens... eh :)

**Object Based Media**
- Bringing responsive design to broadcasting

</article>

<article id="2">

##### Opinion

Cool presentation of BBCs work on video on the web

Interesting to see the use of WebGL outside the game development world

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[VideoContext](http://bbc.github.io/VideoContext/) | ★★★☆☆

</article>