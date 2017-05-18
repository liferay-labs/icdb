---
title: "Creando una arquitectura de microservicios en node.js y Kubernetes"
description: "Existe un creciente interés en la industria por el desarrollo de arquitecturas de microservicios, gracias a las muchas ventajas que ofrecen. Sin embargo, este nuevo paradigma supone un cambio de mentalidad a la hora de organizar nuestras aplicaciones y conlleva más trabajo de operaciones, creando así una barrera de entrada mayor frente a sistemas monolíticos. Hablaremos de nuestra experiencia en seedtag migrando a una arquitectura de microservicios en Node.js y de los retos que aparecen a la hora de implementar un sistema que debe atender miles de peticiones por segundo. Repasaremos las técnicas y herramientas a nuestra disposición para crear una sistema ágil, mantenible y escalable utilizando Kubernetes como base."
speaker: Paul Goldbaum
twitter: paulgoldbaum
video:
tags: [js, microservices, kubernetes, nodejs]
layout: "talk"
weight: 2
---

<article id="1">

##### Notes

- Microservices platforms very much necessary to isolate from complexity when dealing with microservices. Example: Docker + Kubernetes.
- Docker: a tool to make self-contained computations units (microservices) than can be easily replicated and deployed.
- Kubernetes: a tool to manage and deploy computation units created with Docker. Comes from Borg (Google's internal cloud platform)
- Prometheus: a time series base database which queries data using labels. Used in seedtag to manage events in the microservices architecture.
- Grafana: a tool to analyze and monitor the microservices architecture.
- Zipkin: a distributed tracing system which correlates different distributed events traced by the system and shows them in a single trace.

</article>

<article id="2">

##### Opinion

A talk about the setup used in the author's company (seedtag).

</article>

<article id="3">

##### Related Links

Related Links | Rating
--- | ---
[Docker](https://www.docker.com/) | ★★★☆☆
[Kubernetes](https://kubernetes.io/) | ★★★☆☆
[Prometheus](https://prometheus.io/) | ★★★☆☆
[Grafana](https://grafana.com/) | ★★★☆☆
[Zipkin](http://zipkin.io/) | ★★★☆☆
</article>
