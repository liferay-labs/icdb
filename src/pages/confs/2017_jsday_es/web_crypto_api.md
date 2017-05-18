---
title: "Un paso más en seguridad FrontEnd con Web Crypto API"
description: "La seguridad FrontEnd siempre ha sido un tema bastante olvidado en los desarrollos, dejandose muchas veces esta parte exclusivamente para el backend. Al ser el front la parte más accesible y a la vez vulnerable, los desarrolladores debemos tomar medidas, pues una fuerte seguridad puede filtrar en gran medida el número de ataques que llegan a back, así como detener otros casi por completo. El objetivo de esta charla es presentar y analizar la Web Cryptography API que ya está implementada en algunos navegadores, ofreciendo soporte para algoritmos básicos de encriptación, así como firmado con mecanismos de claves públicas y privadas. Además de ayudar a los desarrolladores a asegurar la identidad de los usuarios en operaciones sensibles, puede ser utilizado para cantidad de acciones, como la comprobación de que los recursos enviados desde back son exactamente los mismos que recibimos en front."
speaker: Jon Rojí
twitter:
video:
tags: [js, crypto, api]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

- Starts with a brief discussion about security problems in the browser side.
- Continues with a simple explanation of some security concepts.
- Then goes on explaining the Web Crypto API:
	- Accessible through the read-only `window.crypto` object
	- Only usable via HTTPS or localhost
	- Asynchronous API due to the time needed for some crypto primitives
	- Allows using standard symmetric/asymmetric ciphers, digests and password hashes
	- Has support for strong random numbers
	- Keys are modeled as a Javascript key objects which can be tagged as non-extractable to avoid third parties access to keys

</article>

<article id="2">

##### Opinion

Introductory talk on Web Crypto API.

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[Web Crypto API](https://www.w3.org/TR/WebCryptoAPI/) | ★★★★☆
</article>
