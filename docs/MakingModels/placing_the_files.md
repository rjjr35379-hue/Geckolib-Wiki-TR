---
sidebar_position: 3
sidebar_label: Placing the Files
title: Placing the asset files
---

For GeckoLib to be able to find your files, they need to be put in the correct location.

## Model Files
In GeckoLib5, model files (`.geo.json`) are placed in the `assets/<modid>/geckolib/models/` folder.

![Models Folder](/img/geckolib_models_folder.png)

You may use subfolders to organize your models, and some GeckoLib features (such as the `DefaultedGeoModel` classes) will automatically use subfolders.

:::note
The `.geo` portion of the filename is optional.
:::

## Animation Files
In GeckoLib5, animation files (`.animation.json`) are placed in the `assets/<modid>/geckolib/animations/` folder.

![Animations Folder](/img/geckolib_animations_folder.png)

You may use subfolders to organize your animations, and some GeckoLib features (such as the `DefaultedGeoModel` classes) will automatically use subfolders.

:::note
The `.animation` portion of the filename is optional.
:::

## Texture Files
In GeckoLib5, texture files are placed in the `assets/<modid>/textures/` folder, like you would for any other texture.

You may use subfolders to organize your textures, and some GeckoLib features (such as the `DefaultedGeoModel` classes) will automatically use subfolders.