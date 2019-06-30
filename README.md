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

## Icons

See: https://ipfs.io/ipfs/QmV1n57ps2cpHvdSHpdBWwiSrNuNfam9ZR5MtUik8MmENy/

## Colors

<img title='#0b3a53' src='https://swatches.now.sh?color=%230b3a53&name=navy' /><img title='#244e66' src='https://swatches.now.sh?color=%23244e66&name=navy-muted' /><img title='#69c4cd' src='https://swatches.now.sh?color=%2369c4cd&name=aqua' /><img title='#9ad4db' src='https://swatches.now.sh?color=%239ad4db&name=aqua-muted' />

<img title='#b7bbc8' src='https://swatches.now.sh?color=%23b7bbc8&name=gray' /><img title='#d9dbe2' src='https://swatches.now.sh?color=%23d9dbe2&name=gray-muted' /><img title='#34373f' src='https://swatches.now.sh?color=%2334373f&name=charcoal' /><img title='#7f8491' src='https://swatches.now.sh?color=%237f8491&name=charcoal-muted' />

<img title='#ea5037' src='https://swatches.now.sh?color=%23ea5037&name=red' /><img title='#f36149' src='https://swatches.now.sh?color=%23f36149&name=red-muted' /><img title='#f39021' src='https://swatches.now.sh?color=%23f39021&name=yellow' /><img title='#f9a13e' src='https://swatches.now.sh?color=%23f9a13e&name=yellow-muted' />

<img title='#3e9096' src='https://swatches.now.sh?color=%233e9096&name=teal' /><img title='#439a9d' src='https://swatches.now.sh?color=%23439a9d&name=teal-muted' /><img title='#0cb892' src='https://swatches.now.sh?color=%230cb892&name=green' /><img title='#0aca9f' src='https://swatches.now.sh?color=%230aca9f&name=green-muted' />

<img title='#edf0f4' src='https://swatches.now.sh?color=%23edf0f4&name=snow' /><img title='#f7f8fa' src='https://swatches.now.sh?color=%23f7f8fa&name=snow-muted' />

## License

The [Monserrat font family](https://github.com/JulietaUla/Montserrat) © The Montserrat Project Authors (https://github.com/JulietaUla/Montserrat) is used under the [SIL Open Font License, Version 1.1.](https://github.com/JulietaUla/Montserrat/blob/21047be7ebcae5e71328358fcf20566cb85383ec/OFL.txt)

The [Inter UI font family](https://github.com/rsms/inter/blob/master/LICENSE.txt) © The Inter UI Project Authors (me@rsms.me) is used under the [SIL Open Font License, Version 1.1.](https://github.com/rsms/inter/blob/fa8a99377e8d51d6c0721a4b4c96d91911399dcf/LICENSE.txt)

The home icon © Icons8 is under their [Free License](https://icons8.com/license)

All other documents and icons are [CC-BY-SA 3.0] license © 2018 Protocol Labs Inc.

Code is under the [MIT](./LICENSE) © 2018 Protocol Labs Inc.

[ipfs.io]: https://ipfs.io
[tachyons]: http://tachyons.io
[CC-BY-SA 3.0]: https://ipfs.io/ipfs/QmVreNvKsQmQZ83T86cWSjPu2vR3yZHGPm5jnxFuunEB9u
[ThemeProvider]: https://glamorous.rocks/advanced/#theming
