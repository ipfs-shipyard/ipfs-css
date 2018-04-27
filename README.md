# ipfs-css

The single-purpose css class names and @font-face config to IPFS up your UI.

```css
/* ---- font ----- */
.sans-serif { font-family: 'Inter UI', system-ui, sans-serif; }
.montserrat { font-family: 'Montserrat', 'Verdana', system-ui, sans-serif; }
.monospace { font-family: Consolas, monaco, monospace; }

/* ---- color ----- */
.navy { color: #0b3a53; }
.navy-muted { color: #244e66; }
.aqua { color: #69c4cd; }
.aqua-muted { color: #9ad4db; }

/* ...and (just a little) more! */
```

Pairs well with [tachyons].

## Install

Add `ipfs-css` to your project via npm

```sh
npm install ipfs-css
```

## Usage

Once you've installed ipfs-css from npm, the css file and the web-fonts are available from your `node_modules/ipfs-css` directory.

If you are set up with a build process that let's you import css files directly from `node_modules`, then you can just add the following to your css file.

```css
@import 'tachyons'; /* Optional, jolly good tho */
@import 'ipfs-css';
```

The file includes font-face definitions and single purpose css class names that you can compose freely, to create your lovely UI.

```html
<header class='pa2 bg-navy'>
  <h2 class='ma0 montserrat aqua'>
    OH HAI! It's so nice to see you again.
  </h2>
</header>
```

### CSS in JS

You can import the `theme.json` file which can be used with a [ThemeProvider] component.

All **the css atoms are generated** from that, so you can be sure you're using the same values.

### Less

`ipfs.css` is regular css file, so you can import it normally. Each declaration has a single-purpose so if you prefer to compose your rules outside the dom, you can safely use them as mixins:

```less
.my-lovely-widget {
  .aqua;
  .bg-navy;
  .montserrat;
}
```

### Icons

See: https://ipfs.io/ipfs/QmPzidp7N52qTNWbpLdv63rttMPzLg7FxknxydyLQbxphG/

## License

The [Monserrat font family](https://github.com/JulietaUla/Montserrat) © The Montserrat Project Authors (https://github.com/JulietaUla/Montserrat) is used under the [SIL Open Font License, Version 1.1.](https://github.com/JulietaUla/Montserrat/blob/21047be7ebcae5e71328358fcf20566cb85383ec/OFL.txt)

The [Inter UI font family](https://github.com/rsms/inter/blob/master/LICENSE.txt) © The Inter UI Project Authors (me@rsms.me) is used under the [SIL Open Font License, Version 1.1.](https://github.com/rsms/inter/blob/fa8a99377e8d51d6c0721a4b4c96d91911399dcf/LICENSE.txt)

Documents and icons are [CC-BY-SA 3.0] license © 2018 Protocol Labs Inc.

Code is [MIT](./LICENSE) © 2018 Protocol Labs Inc.

[ipfs.io]: https://ipfs.io
[tachyons]: http://tachyons.io
[CC-BY-SA 3.0]: https://ipfs.io/ipfs/QmVreNvKsQmQZ83T86cWSjPu2vR3yZHGPm5jnxFuunEB9u
[ThemeProvider]: https://glamorous.rocks/advanced/#theming
