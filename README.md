# GeckoLib Wiki

This is the GitHub Pages repository for the GeckoLib Wiki.

# Working on the Wiki
## Setup
### Requirements
- Node.js - https://nodejs.org/en/download

### Steps
1. Clone the repository
2. Open a terminal/cmd in the repository directory
3. Run `npm install`
4. Run `npx docusaurus start`
5. If a browser window doesn't automatically open; open a browser and navigate to `http://localhost:3000`

From there, as long as you leave your console open, you can make changes to the wiki and the website will update live

## Adding a category
To add a category, create a new folder in the `docs` directory.
The folder name should represent the category name; but isn't the visible name for end-users.

Add a `_category_.json` file to the folder, with the below contents:

```json
{
  "position": <Index>,
  "label": "<DisplayName>"
}
```

Replacing the index with the numerical index you want the category to appear at, represented as a 1-indexed number.

The display name is the name that will be displayed to the end-user on the sidebar and in page traversal.

### Subcategories
Subcategories are created in the same way, by nesting folders under the category folder.

## Adding a page
To add a page, create a new `.md` file with a relevant name inside any existing category or subcategory folder.
All pages are fully parsed markdown files, so you can use any [markdown features](https://docusaurus.io/docs/markdown-features) you want.

### Page Metadata
Pages can have metadata at the top of the file defining its properties, such as ordering of the pages, the sidebar label, page title, etc.

To do so, simply copy the below example template text into the top of the `.md` page file and modify as needed:

```yaml
---
sidebar_position: 1
sidebar_label: Armor
title: Armor
---
```

## Adding a Minecraft Version
When a new Minecraft version comes out, we'll want to add it to the list of available versions for users to select from.
This is done by editing the [VersionSelect](src/components/VersionSelect/index.tsx) file and adding the new version to the `versions` array
in the same format as the other versions.

## Working on a specific version
By default, the `docs` directory is the main documentation directory, supporting the current latest major GeckoLib version (GeckoLib5).

If you want to work on GeckoLib4 or GeckoLib3, you can edit the associated directory under `versioned_docs`.
Once inside the relevant version directory, you can make edits in the same way you would in the `docs` directory.

For more information, see [The Docusaurus Docs](https://docusaurus.io/docs)