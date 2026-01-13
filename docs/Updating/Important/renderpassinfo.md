---
sidebar_position: 7
sidebar_label: RenderPassInfo
title: RenderPassInfo
---

`RenderPassInfo` is an object all `GeoRenderer`s create to hold all other objects used in a render pass.

This allows GeckoLib to reduce the number of parameters in the various renderer methods, as well as be more flexible
and powerful with its render handling.

All bone manipulation, `RenderState` data, and other render-related data is stored in the `RenderPassInfo`.

## More information
For more information, see the [RenderPassInfo](/Concepts/Rendering/renderpassinfo.mdx) page.