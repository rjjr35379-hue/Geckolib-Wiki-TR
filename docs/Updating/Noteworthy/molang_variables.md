---
sidebar_position: 3
sidebar_label: Molang Variables
title: Molang Variable Changes
---

With the change to the render pipeline in 5.0, Molang Variables had to change. 
Previously, queries could be defined and updated at any time during the render process. 
This was a problem with a new instance-based rendering pipeline because there's no animatable instance at render time.

To combat this, Molang Variables, and by extension all `MathValue`s, have been converted from a `DoubleSupplier` to a `ToDoubleFunction`, 
taking in the `ControllerState` from the current render pass. This allows for queries to be dynamic whilst still supporting an instance-based render pipeline.