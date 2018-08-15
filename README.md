# NeptunJS
This is a Deobfuscated version of NeptunJS/NeptuneJS/NJS - Specifically v2.5.5 as of 5th of August 2018

# Try it out!
[https://impragma.github.io/NeptunJS](https://impragma.github.io/NeptunJS)

### Important
This repo contains "rom.zip" and its a GBA rom copyright of Nintendo.
It's in here strictly so people can see the zip folder structure required for this Emulator.

### Deobfuscation Progress
This deobfuscation isnt complete.
While all of the code IS de-obfuscated and removed entirely from the need of the launchers aswell as integrity checks patched out
It still has the Big String Array from "javascript-obfuscator" on GitHub.
The MAIN script that will be referenced as njs.gge, has 8 total "Blocks".
Blocks are code executed in its own "(function(){//block;}(params,...))();"

All blocks are patched out but might not necessarily be 100% deobfuscated yet.
cores/dataload.gge is in fact 100% deobfuscated and patched.
