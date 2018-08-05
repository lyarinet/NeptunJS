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

###### BLOCK 1 [100% Deob] - Code Deobfuscated + _BIGARRAY deobfuscated
Contains video-js code (videojs.com) and seemingly sets it to the global var "player" and seems to use it for showing the emulator frames (kinda smart)
###### BLOCK 2 [100% Deob] - Code Deobfuscated + _BIGARRAY deobfuscated
Only took a glance, but seems to be the UI handling for the code AFTER you click Start Game, so like downloading the game rom e.t.c (could be wrong but it definitely errored on download when I messed up deobfuscating it)
###### BLOCK 3 [100% Deob] - Code Deobfuscated + _BIGARRAY deobfuscated
###### BLOCK 4 [ 50% Deob] - Code Deobfuscated
###### BLOCK 5 [ 50% Deob] - Code Deobfuscated
###### BLOCK 6 [ 50% Deob] - Code Deobfuscated
###### BLOCK 7 [100% Deob] - Code Deobfuscated + _BIGARRAY deobfuscated
Mainly UI handling, handles stuff like down/up saves, save manager, context menu, settings, applying settings, FS, setting up "Neptune" variable
###### BLOCK 8 [ 50% Deob] - Code Deobfuscated
