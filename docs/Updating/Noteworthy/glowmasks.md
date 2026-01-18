---
sidebar_position: 2
sidebar_label: Glowmasks
title: Glowmask/Emissive Rendering Changes
---

As of 5.0, GeckoLib no longer supports `.mcmeta`-based glowmasks. 
This was a rarely used and inefficient system anyway, and has been fully superceded by the texture-based glowmask system.

Additionally, GeckoLib5 no longer modifies the base texture when using an emissive texture. 
This means that you can selectively/conditionally/dynamically apply a glowmask without having missing chunks of your texture.

See the [Glowmasks/Emissive Rendering](/docs/Miscellaneous/glowmasks.md) page for more details