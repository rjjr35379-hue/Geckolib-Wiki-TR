---
sidebar_position: 4
sidebar_label: Dynamic Renderers
title: Dynamic Renderer Changes
---

In GeckoLib4, GeckoLib expanded upon its 'dynamic' renderers; a special renderer subclass that allows for quickly swapping out textures 
or RenderTypes for individual bones. With 1.21, this became impractical due to the changes in the way Mojang handled buffers.
GeckoLib patched this in an incredibly ugly way to attempt to keep the functionality while a better solution was being devised, 
but with 5.0 this became impractical to keep.

As a result, the 'dynamic' renderers have been removed:
- `DynamicGeoBlockRenderer`
- `DynamicGeoItemRenderer`
- `DynamicGeoEntityRenderer`

Instead, GeckoLib5 now has `CustomBoneTextureGeoLayer`. This is a GeoLayer that can be applied to any GeoRenderer 
and allows for dynamic rendering of bones in much the same way that the previous 'dynamic' renderers worked, but in a much more efficient and stable manner.