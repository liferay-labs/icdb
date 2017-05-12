---
title: "Where does CSS come from?"
description: "Understanding how CSS is developed is more than an academic exercise. It gives you a way of understanding why things are weird, which is a good starting point to avoiding or fixing weirdness. It can give you an early heads up as to what might be happening in the very near future. It also opens up an opportunity to be part of the process, to contribute to CSS - just like any open source project. Then once we have new CSS on the horizon, we can all be part of encouraging browser vendors to ship it!"

speaker: Rachel Andrew
twitter: rachelandrew

video:
tags: []

layout: "talk"
weight: 2
---

<article id="1">

## Notes

* It comes from 1996 (IE3)
* Don't break the web! Everything still works. All is backwards compatible

Where does it come from **today**

CSS WG
* Browser vendor members
* Ebook/Epubs members

Specs originate from
* Browser vendors
* CSS user agents
* Companies (adobe)
* CSS WG itself

**CSS Grid Spec**
* First public working draft in 2011
	* A snapshot of the state of a specification at a particular date
	* The editor's draft is the current document
* It goes back to the CSS Advanced Layout Module spec (2005)
* Experimental implementations (vendor prefixes or flags)
	* IE10 implemented it as experimental prefixed feature
	* Bloomberg sponsored the implementation in Blink and Webkit
	* With prefixes, features are available, making the spec changes way harder
* By using experimental impls, community can **influence specs** -> gutter
* Browsers implement alongside spec development
* CSS Grid Candidate Recommendation (2016)
	* It is ready to gather implementation experience
* Proposes recommendation
	* Requires 2 different interoperable implementations of each feature
* There are _at-risk_ implementations that might not be implemented by 2 diff implementors
* As of March 2017 Grid is in all Browsers!
* Why it takes so long?
	* Needs to be implemented
	* Priorities
	* Does it make sense?
	* Will it break anything?
* Why are some things weird?

</article>

<article id="2">

## Opinion

Nice overview into the CSS WG and how CSS specs happen, evolve and can be influenced.

</article>

<article id="3">

## Related Links

csswg-drafts github
csswg twitter alias
css current work
bugs in browsers

</article>