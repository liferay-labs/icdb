---
title: "How to Break an API: How Community Values Influence Practices"
description: "Breaking the API of a package can create severe disruptions downstream, but package maintainers have flexibility in whether and how to perform a change. Through interviews and a survey, we found that developers within a community or platform often share cohesive practices (e.g., semver, backporting, synchronized releases), but that those practices differ from community to community, and that most developers are not aware of alternative strategies and practices, their tradeoffs, and why other communities adopt them. Most interestingly, it seems that often practices and community consensus seems to be driven by implicit values in each community, such as stability, rapid access, or ease to contribute. Understanding and discussing values openly can help to understand and resolve conflicts, such as discussions between demands for more stability and a pursuit of frequent and disruptive innovations."
speaker: Christian Kästner
twitter: 
video:
tags: [js]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

**Culture matters**
- Different Values
- Different Trade-Offs
- Different cost allocations
- Different challenges

**Two extremes**
- Cost on the users, easy to break things from the maintainers
- Cost on the maintainers, not allowed to break things

###### Eclipse community

Backwards compatibility

**Characteristics**
- Stable platform, convenient to use
- Yearly updates are sufficient to many

**Consequences**
- Perceived stagnant development, stale platform
- Difficulty recruiting releases
- Painful using

###### R community

The most recent version of all packages shall be compatible (snapshot consistency)

**Characteristics**
- Short release cycles, compatibility

**Consequences**
- Urgency and reacting to updates as burden
- Aggressive reduction of dependencies (code cloning)
- High gatekeeping creates friction

###### node community

Open to rapid change and experiments. Low barrier to entry. Easy and fast for developers to publish and use packages

**Characteristics**
- Openness, attractive to devs

**Consequences**
- Unstable, no quality control
- Rapid change requires constant maintenance

</article>

<article id="2">

##### Opinion

- Show of the results of an academic research.
- How to do something depends on the community values

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[breakingapis](http://breakingapis.org/) | ★★★☆☆

</article>