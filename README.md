# Koken LightGallery Plugin

## Installation

1. Clone it into some development folder.
2. link the `lightgallery` folder into your plugins directory

```
cd /path/to/src
git clone koken-lightgallery-plugin.git
cd /path/to/koken/storage/plugins
ln -s /path/to/src/koken-lightgallery-plugin/lightgallery
```

## Configuration

Inside Koken, enable the plugin.

## Development

Run

```
yarn start
```

to watch and rebuild the distribution folder.

## Remarks

Why is the distribution folder named `lightgallery` and not `dist``

This is because when linking inside the plugin folder from koken, the php code would always recognize the name `dist` and references to files would break.
