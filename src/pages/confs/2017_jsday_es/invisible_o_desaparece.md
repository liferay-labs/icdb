---
title: "Invisible o desaparece"
description: "El futuro es la computación ubicua, que es la integración de la informática en el entorno de la persona, de forma que los ordenadores no se perciban como objetos diferenciados. La idea es interactuar de manera natural con sus dispositivos y realizar cualquier tarea de manera completamente transparente, un paso más allá en el paradigma del uso de los ordenadores de sobremesa. La revolución invisible está aquí y tenemos que estar preparados. La 'inteligencia ambiental' que tan estrechamente ligada está al IoT se asocia erróneamente a C/C++, Java, Python y otros lenguajes, sin embargo hay un sinfín de dispositivos que permiten ser programados con JavaScript. En esta charla veremos la cantidad de dispositivos del mercado que pueden ser programados en JavaScript, y con esto como base, haremos una demo completa de cómo comunicar con todo tipo de artilugios que tengamos en casa."
speaker: Juliet Moreiro Bockhop
twitter: julietsvq
video:
tags: [js, iot]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

- Starts with a brief (not very well structured) talk about IoT in general
- Mentions a curated list of IoT hacks in Github (see related links)
- Then the speaker shows a demo (and explains the internals) of the setup done to monitor twits about conferences:
	- The setup consists of a software accessing twits through the realtime stream API
	- The twits are then interpreted by Microsoft Language Services
	- Microsoft Cognitive Services are then used to obtain a mood score of the twits
	- The mood scores are statistically treated to obtain a ternary outcome: bad, neutral, good
	- The ternary outcome is used to light a bluetooth lamp which shows:
		- Red for bad
		- Blue for neutral
		- Green for good

</article>

<article id="2">

##### Opinion

Interesting talk about an IoT setup done by the author to monitor opinions (in Twitter) about conferences.

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[Talk slides](https://github.com/esmsdn/TechSum2016/blob/master/Presentaciones/Track%205%20-%20Cognitive%20Services%20%26%20Conversations%20as%20a%20Platform/53%20(DIY)%20Crea%20tu%20propio%20notwificador%20-%20Isabel%20Cabezas%20y%20Juliet%20Moreiro.pdf) | ★★★☆☆
[Talk's source code](https://github.com/isabelcabezasm/notwificador) | ★★★☆☆
[IoT hacks](https://github.com/nebgnahz/awesome-iot-hacks) | ★★★★☆
</article>
