---
sidebar_position: 1
sidebar_label: GeoModel Asset Paths
title: GeoModel Asset Paths
---

Traditionally with GeoModels, you would either use one of the Defaulted variants or override the `getModelResource` and `getAnimationResource` 
methods to return your asset paths.

For example, you may have had something like the below:

```java
@Override
public ResourceLocation getModelResource(GeoRenderState renderState) {
    return ResourceLocation.fromNamespaceAndPath(ExampleMod.MOD_ID, "geckolib/animations/my_model.geo.json");
}
```

As of 5.0, GeckoLib no longer expects you to acknowledge either the asset location prefix or the file suffixes.<br/>
What this means is that the expected format is now like so:

```java
@Override
public Identifier getModelResource(GeoRenderState renderState) {
    return Identifier.fromNamespaceAndPath(ExampleMod.MOD_ID, "my_model");
}
```

The benefit to this is that neither GeckoLib nor the users need to ensure they match the correct prefix path, or the file suffixes. 
GeckoLib assumes all JSON files in the animations or models directories are animations or models respectively, 
and so it no longer needs you to explicitly define them, making your paths look cleaner and easier to read, and more flexible.

:::warning
This does not apply to `getTextureResource`, as vanilla uses this for its own purposes, and still expects the prefix and suffix
:::