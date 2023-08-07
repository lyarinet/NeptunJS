[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# NeptunJS
NeptunJS is a web emulator for GBA, N64, NDS, PSX, NES, SNES, Sega Saturn, and many other retro game consoles. In 2022, [Lyarinet](https://github.com/lyarinet/NeptunJS) created a deobfuscated version of NeptunJS, as the original contains much unnecessary bloatware and adware baked into the project. Lyarinet's fork uses their github.io website as the root for all data calls, but the github.io site they used is no longer in service. This fork sets these calls to use local files from the project, and will be replaced with a permanent CDN setup to host these files permanently.

All code is from [Lyarinet](https://github.com/lyarinet/NeptunJS) and [NeptunJS](https://neptunjs.xyz/doc.html)

This is a Deobfuscated version of NeptunJS/NeptuneJS/NJS - Specifically v2.5.5 as of 5th of August 2018

# Try it out!
[https://captainbrando.com](https://captainbrando.com)

Or, clone this repo, launch it with a live server, and open up the index.html site

### Important
This repo contains "rom.zip" and its a GBA rom copyright of Nintendo.
It's in here strictly so people can see the zip folder structure required for this Emulator.

### Deobfuscation Progress (from [Lyarinet/NeptunJS](https://github.com/lyarinet/NeptunJS))
This deobfuscation isnt complete.
While all of the code IS de-obfuscated and removed entirely from the need of the launchers aswell as integrity checks patched out
It still has the Big String Array from "javascript-obfuscator" on GitHub.
The MAIN script that will be referenced as njs.gge, has 8 total "Blocks".
Blocks are code executed in its own "(function(){//block;}(params,...))();"

All blocks are patched out but might not necessarily be 100% deobfuscated yet.
cores/dataload.gge is in fact 100% deobfuscated and patched.
