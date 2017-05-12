---
title: "Let's go big"
description: "Do you feel limited, boxed in, like you are unable to grow? Try to imagine how numbers in JavaScript feel - they are stuck between +/- 9007199254740991. Unable to breathe, they are stuck. I will talk about how we can free numbers in JavaScript to represent values much larger than their natural constraints. The talk will navigate through increasingly creative techniques to represent numbers of ever increasing values - freeing numbers from their constraints as well as ourselves."
speaker: Alexander Reardon
twitter: alexandereardon
video:
tags: [js]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

JS adds constrains to numbers because of how it represents and stores them

**Techniques**
- Decimal strings ('125') -> only 2^27, so new max is 10^2^27
- Binary strings ('100110') -> smaller than the previous, but still huge
- Hex strings ('7FE') -> a bit bigger than dec strings but harder to substract
- Unicode strings ('👌d€') 16bit
- Array of unicode strings
- ...
- Files :)

**What about memory... impractical as numbers grow**
- We can do almost any operation if we can add
- Streaming it using utf and storing the result, calculating a char at a time can skip the memory problem and go directly to storage
- Arithmetic could even be distributed over the network

</article>

<article id="2">

##### Opinion

Interesting and practical talk about techniques to deal with huge numbers

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[big-number-demos](https://github.com/alexreardon/big-number-demos) | ★★★☆☆
[TC-39 BigInt proposal](https://github.com/tc39/proposal-bigint) | ★★★☆☆

</article>