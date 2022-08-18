# ipfs-css

The single-purpose CSS class names and @font-face config to IPFS up your UI.

```css
/* ---- font ----- */
.sans-serif { font-family: 'Inter', system-ui, sans-serif; }
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

Add `ipfs-css` to your project via npm:

```sh
npm install ipfs-css
```

## Usage

Once you've installed ipfs-css from npm, the CSS and SCSS files and the web-fonts are available from your `node_modules/ipfs-css` directory.

If you are set up with a build process that lets you import css files directly from `node_modules`, then you can just add the following to your CSS file.

```css
@import 'tachyons'; /* Optional, jolly good tho */
@import 'ipfs-css';
```

The file includes font-face definitions and single purpose CSS class names that you can compose freely, to create your lovely UI.

```html
<header class='pa2 bg-navy'>
  <h2 class='ma0 montserrat aqua'>
    OH HAI! It's so nice to see you again.
  </h2>
</header>
```

### CSS in JS

You can import the `theme.json` file which can be used with a [ThemeProvider] component.

All **the CSS atoms are generated** from that, so you can be sure you're using the same values.

### Less

`ipfs.css` is a regular CSS file, so you can import it normally. Each declaration has a single purpose, so if you prefer to compose your rules outside the DOM, you can safely use them as mixins:

```less
.my-lovely-widget {
  .aqua;
  .bg-navy;
  .montserrat;
}
```

### SCSS

While `ipfs.css` contains everything you need, if you prefer variables for fonts, colors and gradients, these are there for you in `theme.scss`.

## Icons

See: https://dweb.link/ipfs/bafybeiebays3i7aem7tptga3kilzux7f5gz6czl4dietazgutcjhozjviu

## Colors

<img title='#0b3a53' src='https://swatch.now.sh?color=%230b3a53&name=navy' /><img title='#244e66' src='https://swatch.now.sh?color=%23244e66&name=navy-muted' /><img title='#69c4cd' src='https://swatch.now.sh?color=%2369c4cd&name=aqua' /><img title='#9ad4db' src='https://swatch.now.sh?color=%239ad4db&name=aqua-muted' />

<img title='#b7bbc8' src='https://swatch.now.sh?color=%23b7bbc8&name=gray' /><img title='#d9dbe2' src='https://swatch.now.sh?color=%23d9dbe2&name=gray-muted' /><img title='#34373f' src='https://swatch.now.sh?color=%2334373f&name=charcoal' /><img title='#7f8491' src='https://swatch.now.sh?color=%237f8491&name=charcoal-muted' />

<img title='#ea5037' src='https://swatch.now.sh?color=%23ea5037&name=red' /><img title='#f36149' src='https://swatch.now.sh?color=%23f36149&name=red-muted' /><img title='#f39021' src='https://swatch.now.sh?color=%23f39021&name=yellow' /><img title='#f9a13e' src='https://swatch.now.sh?color=%23f9a13e&name=yellow-muted' />

<img title='#378085' src='https://swatch.now.sh?color=%23378085&name=teal' /><img title='#439a9d' src='https://swatch.now.sh?color=%23439a9d&name=teal-muted' /><img title='#0cb892' src='https://swatch.now.sh?color=%230cb892&name=green' /><img title='#0aca9f' src='https://swatch.now.sh?color=%230aca9f&name=green-muted' />

<img title='#edf0f4' src='https://swatch.now.sh?color=%23edf0f4&name=snow' /><img title='#f7f8fa' src='https://swatch.now.sh?color=%23f7f8fa&name=snow-muted' /><img title='#117eb3' src='https://swatch.now.sh?color=%23117eb3&name=link' />

## Releasing

First, clean and build the CSS and the docs.

```console
# Clean then build your local workspace
$ npm run clean
$ npm run build
```

Next, with IPFS running locally, add the docs to IPFS, to get the new CID.

```console
# Add the docs to IPFS to get the CID
$ npm run -s deploy:docs
QmQYzfzGKAeBWgarrmTSsG2PJ8AFfFEBprhVBFaudcFTof
```

Pin the CID to ipfs-cluster (via #pinbot on IRC or your preferred method). Update the README.md with the new docs link.

Then bump the version, push to GitHub and publish to npm. If you are adding an icon, that's a minor release. Fixing an issue with an existing icon would be a patch. Changing any of the color values would be at least a minor. Changing the naming scheme for the CSS classes would be a major release.

```console
# use npm to bump the version and tag
$ npm version minor

# Push the changes back to the repo
$ git push origin master
$ git push --tags

# PUBLISH!
$ npm publish
```

## Contribute

Contributions are more than welcome! Check out the [currently open issues](https://github.com/ipfs-shipyard/ipfs-css/issues) and start hacking on anything that sounds interesting. Issues are labeled with a variety of tags to help you find a good fit — you may wish to start with the [`help-wanted`](https://github.com/ipfs-shipyard/ipfs-share-files/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) tag.

To contribute to IPFS in general, check out the wide variety of opportunities [here](https://docs.ipfs.io/community/contribute/ways-to-contribute).

The IPFS community believes that our mission is best served in an environment that is friendly, safe, and accepting, and free from intimidation or harassment. To that end, we ask that everyone involved in IPFS read and respect our [code of conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

## License

The [Monserrat font family](https://github.com/JulietaUla/Montserrat) © The Montserrat Project Authors (https://github.com/JulietaUla/Montserrat) is used under the [SIL Open Font License, Version 1.1.](https://github.com/JulietaUla/Montserrat/blob/21047be7ebcae5e71328358fcf20566cb85383ec/OFL.txt)

The [Inter font family](https://github.com/rsms/inter/blob/master/LICENSE.txt) © The Inter Project Authors (me@rsms.me) is used under the [SIL Open Font License, Version 1.1.](https://github.com/rsms/inter/blob/fa8a99377e8d51d6c0721a4b4c96d91911399dcf/LICENSE.txt)

The home icon © Icons8 is under their [Free License](https://icons8.com/license)

All other documents and icons are [CC-BY-SA 3.0] license © 2018 Protocol Labs Inc.

Code is under the [MIT](./LICENSE) © 2018 Protocol Labs Inc.

[ipfs.io]: https://ipfs.io
[tachyons]: http://tachyons.io
[CC-BY-SA 3.0]: https://ipfs.io/ipfs/QmVreNvKsQmQZ83T86cWSjPu2vR3yZHGPm5jnxFuunEB9u
[ThemeProvider]: https://glamorous.rocks/advanced/#theming
