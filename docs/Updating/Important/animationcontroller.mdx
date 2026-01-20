---
sidebar_position: 2
sidebar_label: AnimationController
title: AnimationController Changes
---

In GeckoLib5, the `AnimationController` and `AnimationProcessor` classes were completely rewritten from the ground up 
to be more flexible, performant, and easier to use.

`AnimationController`s still work mostly the same from the perspective of a developer, but there have been some
significant conceptual changes to how they operate.

## The changes
### Previously
To put it bluntly, the way `AnimationController`s worked was so messy that to explain how they worked isn't really practical
or helpful.
`AnimationProcessor`s weren't any better.

The two of them together comprised the main functionality in GeckoLib for handling how animations were managed and 
translated into bone modifications.

Each `GeoModel` received its own `AnimationProcessor` instance, and each `AnimatableManager` stored a collection of
`AnimationController`s. The `GeoModel` then facilitated multiple back-and-forth passes between itself, the processor, 
and the controller.

### Now
Now, `AnimationProcessor` is an entirely static class, consisting of methods used to take a `ControllerState` and
create `BoneSnapshot`s for each animated bone for that animation pass.

Each `AnimatableManager` still stores the collection of `AnimationController`s, and the `GeoModel` has no involvement at all.

The `AnimationController` now handles all the logic of the animations themselves.
It does this by creating an `AnimationTimeline`, which is a timeline object that determines an entire `RawAnimation`'s 
timeline, including any transition periods it may have.

The controller then keeps track of the current time along that timeline the current animation is at, and uses that to
request bone manipulation values for any given point on the timeline from `AnimationProcessor`.

## More Information
For more information on either the `AnimationController` or the `AnimationTimeline`, see the pages for each of those concepts.
- [AnimationController](/Concepts/Animation/animationcontroller)
- [AnimationProcessor](/Concepts/Animation/animationtimeline)