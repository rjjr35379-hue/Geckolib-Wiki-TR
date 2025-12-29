---
sidebar_position: 1
sidebar_label: Plugin Usage
title: How to use the Blockbench plugin
---

With the GeckoLib plugin installed in Blockbench, you can create GeckoLib-type models and animations.

## Making a model
Creating a new GeckoLib model in Blockbench is the same as creating any other model; Click `File` -> `New Project` and select `GeckoLib Animated Model` from the dropdown.

![GeckoLib Animated Model](/img/blockbench_new_model_select.png)


### Model Properties
When creating a new model, you are presented with a popup window where you can set the model's properties.
These properties can also be changed at any time by going to `File` -> `Project`.

![GeckoLib Model Properties](/img/blockbench_model_properties.png)

<details>

<summary>Available Properties – Click to expand</summary>

The following properties are available for GeckoLib models:

| Property                | Description                                                                                                                    |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Model Type              | The type of model this project is for. Determines initial project setup and some additional properties                         |
| Project Name (Optional) | The name of this model project. Used to help Blockbench suggest file names for you when saving. E.G., `Green Gecko`            |
| Object ID (Optional)    | The id of the object this model is for. Used to help Blockbench suggest file names for you when exporting. E.G., `green_gecko` |
| Mod ID (Optional)       | The `modid` of the mod this model is for. This will be used to calculate asset export paths for your mod to use, if needed     |
| Default UV Mode         | The default UV mode your model cubes will use for UV mapping. Leave this as default unless you know what you are doing         |
| Default Texture Size    | The default pixel size of the texture your model will use. Leave this as default unless you know what you are doing            |

</details>

### Video Tutorials
See below for some in-depth video tutorials on how to use Blockbench to make GeckoLib models.

Blockbench also has a [Wiki](https://www.blockbench.net/wiki/) with more detailed tutorials and guides.

#### Blockbench Basics
<a href="https://www.youtube.com/watch?v=dsax5p4brN8"><img src="http://img.youtube.com/vi/dsax5p4brN8/0.jpg" width="220" alt="Blockbench Basics"></img></a>

#### GeckoLib Model Basics
<a href="http://www.youtube.com/watch?v=VlUwLXkwb2c"><img src="http://img.youtube.com/vi/VlUwLXkwb2c/0.jpg" width="220" alt="Modelling a new entity with GeckoLib"></img></a>
<a href="http://www.youtube.com/watch?v=lR4Mhd90Wj4"><img src="http://img.youtube.com/vi/lR4Mhd90Wj4/0.jpg" width="220" alt="Texturing new entity with GeckoLib"></img></a>
<a href="http://www.youtube.com/watch?v=3srLEdFTgVI"><img src="http://img.youtube.com/vi/3srLEdFTgVI/0.jpg" width="220" alt="Animations in Blockbench with GeckoLib"></img></a>
<a href="http://www.youtube.com/watch?v=95ds1eltUwU"><img src="http://img.youtube.com/vi/95ds1eltUwU/0.jpg" width="220" alt="Attack animtions with GeckoLib"></img></a>

## Converting an existing model
If you have an existing Blockbench model that you want to convert to GeckoLib, Blockbench supports model conversion.

To convert your model, open your existing model in Blockbench, then go to `File` -> `Convert Project`, and select `GeckoLib Animated Model` from the dropdown.

:::note
After converting the model, it is recommended that you check and adjust the model properties of your newly converted model to ensure it's correct.<br/>
See the [Model Properties](#model-properties) section for more information.
:::