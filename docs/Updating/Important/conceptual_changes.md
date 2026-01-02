---
sidebar_position: 1
sidebar_label: Conceptual Changes
title: Conceptual Changes
---

GeckoLib5 represents a series of conceptual changes to the library, required to meet Mojang's requirements.

## Mojang's Rendering Changes
Beginning in 1.21, Mojang began to make moves towards separating the game thread from the render thread. 
This meant that at the time of rendering an object, the object did not exist.
For example, if you were rendering an entity; the entity was not known to the renderer at all, at any stage of the rendering process.

The reason for this was somewhat unclear at the beginning, although eagle-eyed developers could see the direction it was heading.
This continued to expand in scope throughout the various 1.21 version updates. 
At first, GeckoLib obscured the changes by simply ignoring vanilla and holding onto the entity throughout the process. 
It has become increasingly clear, however, that Mojang intends to not only continue with this change but expand it into other rendering areas.

The result of this is that all rendering now needs to be considered slightly differently to how we used to.

## GeckoLib's Changes
GeckoLib, for its part, had to acknowledge Mojang's move to a separate rendering pipeline. 
This was problematic, however, as GeckoLib was built from the ground up on the idea that the renderer always had ownership of the object it was rendering, 
at all times. Everything right down from the renderer itself, to the way GeckoLib parsed Molang, operated on the paradigm of render target ownership.

To ready itself for the incoming changes and adapt to Mojang's current pipeline plans, 5.0 makes a few notable conceptual changes:

- All renderers now operate on the principle that the rendered object is not accessible at the time of rendering. 
    - This means that all renderers operate on a `RenderState`, which caches the data extracted from the rendered object, before leaving that object behind.
- All renderers, as well as the Molang and animation pipelines all operate as instanced, disallowing any perpetual state management between render passes
- All render data for rendering (including Molang queries and associated data) must be pre-computed and final before being submitted for rendering.

## What does this mean for you?
For the most part, there's really only one key change you need to be aware of and adapt to: the `RenderState`. Now, for each renderer there are two stages:

1. RenderState extraction
2. Rendering

### RenderState extraction
At the start of each render pass, GeckoLib will create and fill a `GeoRenderState` with the data necessary for rendering. 
By default, GeckoLib will provide a suite of existing data for you to use and re-use as needed, however, you may want to add more for your own purposes. 
You can do this in `GeoRenderer#addRenderData`

This data will then be what gets passed through to the renderer for the rendering process. 
The animatable object (such as an `Entity`) will be forgotten immediately after this step and will be unavailable to the renderer.

All `GeoModel`s, `GeoRenderLayer`s, and other `GeoRenderer`s give access to the `RenderState` at fill time, to add additional data as needed.

More information can be found in the RenderStates section

### Rendering
After extracting and filling the `RenderState`, the renderer will then move on to actually rendering. 
It will use the information given to it in the `RenderState` to perform all rendering operations, including animation handling and processing.

This stage is mostly unchanged, with the exception that the animatable is no longer available.

## Anything else?
There are a few other changes caused by these conceptual changes, most of which are covered in the [RenderPassInfo](renderpassinfo.md) page.