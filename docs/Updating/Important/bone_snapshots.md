---
sidebar_position: 8
sidebar_label: Bone Snapshots
title: Bone Snapshots
---

Bone Snapshots are GeckoLib5's method of handling bone adjustments for rendering.

## Some context
It helps to have some context as to why Bone Snapshots exist in the first place.

In modern Minecraft, when the game renders, the renderer submits a render 'task' to the render thread.
This task contains all the information needed to render, all immutable, and self-contained.

The render thread doesn't bother maintaining the order tasks were submitted in, or even guarantee that your task will only
be run once. Because of this, GeckoLib needs a way to 'snapshot' the state of a model before it is rendered, so that
the render thread can generate it, at any time.

## How do they work?
When GeckoLib is compiling the render pass, it creates a `RenderPassInfo` instance.

This `RenderPassInfo` accepts [Bone Updaters](bone_updaters.md), which allow for GeckoLib to perform an operation on bones
when run.
When the `RenderPassInfo` is called to render, it runs all of the `Bone Updater`s, and takes a snapshot of the bone, capturing
its current 'animation state'. This snapshot is then used to render the model as many times as is needed, without needing
to re-compute the updates.

It also means that GeckoLib knows if any given bone has been modified for rendering; and can skip bones that haven't been
modified, for even more efficiency.

## How is this different to before?
Previously, `BoneSnapshots` did exist, but they were used very differently, and inefficiently. Additionally, `GeoBone`s
themselves were not immutable, and so most animation was performed by modifying the bone's values directly.

Now, `GeoBone`s are immutable, and only `BoneSnapshots` can be created and modified. This means that you cannot
directly modify a bone at any time, and instead must add a `BoneUpdater` to the `RenderPassInfo` to perform the update.

As a bonus, this also means that changes to a model cannot leak onto another model; because the updates are specific
to that render pass and are discarded once the render pass is complete.

## More information
See the [Bone Snapshots](/Concepts/GeoBones/bone_snapshots.mdx) page for more information.