---
section: techstack
heading: Techstack
color: blue
---

Our frontend is developed in Vue and communicates with our Django backend via GraphQL which allows us to query, modify and stream data in a dynamic but reliable manner.

The Django backend manages a grid of SuperCollider instances which we use as a scriptable sound synthesizer.

The audio content of the SuperCollider grid is then distributed by Janus via WebRTC, which allows us to stream the audio from within the Browser with very low latency.

All our services are virtualized with Docker and managed with docker compose with the goal to switch to Kubernetes for global scaling.
