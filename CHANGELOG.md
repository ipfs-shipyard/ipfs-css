# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.3.0] - 2020-10-22

- Adds/updates [icons](https://gateway.ipfs.io/ipfs/QmQYzfzGKAeBWgarrmTSsG2PJ8AFfFEBprhVBFaudcFTof) (see [#46](https://github.com/ipfs-shipyard/ipfs-css/pull/46)) related to pinning and pinning services:
     - `glyph_pin_cloud` (new)
     - `stroke_pin_cloud` (new)
     - `glyph_cloud` (updated)
     - `stroke_cloud` (updated
- Bumps `dot-prop` version

## [v1.2.0] - 2020-06-26
Adds icons for external links:
- stroke_link_external.svg
- glyph_link_external.svg

See https://gateway.ipfs.io/ipfs/QmWB4HTz8G9RQeNumjFqHeHD7ziVkC3bfxWe37oEE75LZv to view them in the full icon list!
## [v1.0.1] - 2020-05-12
### Adds an official link color and improves icons throughout.

- Adds chevron-style arrow to be used in [file import progress UI pattern](https://github.com/ipfs-shipyard/ipfs-webui/issues/1206): `stroke_small_arrow.svg` and `glyph_small_arrow.svg`
- Optimizes all icons for file size
- Updates gateway link to icon guide doc in readme
- Adds `link` color, confirmed WCAG AA compliant on white background (background discussion [here](https://github.com/ipfs/dir-index-html/pull/29#issuecomment-623767787)
## [v1.0.0] - 2020-04-23

### General icon, font, and color improvements across the board.

### Closes https://github.com/ipfs-shipyard/ipfs-css/issues/21
- Includes icon names underneath all icons in [icon reference HTML page](https://ipfs.io/ipfs/QmWwajTYvw7h9iJPz62diJnjMBo75V2d9t2bMBuFXmhcPo/)
- **IMPORTANT!** Renames `stroke_picture.svg` to `stroke_doc_picture.svg` for consistency. **Please double-check that this doesn't represent a breaking change for you.**

### Closes https://github.com/ipfs-shipyard/ipfs-css/issues/8
- Adds all remaining missing icons

### Unblocks https://github.com/ipfs-shipyard/ipfs-webui/issues/1379
- Replaces `teal` value `#3e9096` with `#378085` for accessibility as proposed [here](https://github.com/ipfs-shipyard/ipfs-webui/issues/1379#issuecomment-582457581)

### Closes & augments https://github.com/ipfs-shipyard/ipfs-css/issues/37 
- Adds support for SCSS via PR https://github.com/ipfs-shipyard/ipfs-css/pull/39 (thanks, @bluelovers!)
- Builds on that PR by generating its formerly static `vars.scss` and `theme.scss` from `theme.json`
- Moves both `vars.scss` and `theme.scss` up to top level of directory structure, so it's in the same place as `ipfs.css`

### Closes https://github.com/ipfs-shipyard/ipfs-css/issues/29
- Updates to latest version of Montserrat from https://github.com/JulietaUla/Montserrat 
- Updates to latest version of Inter from https://github.com/rsms/inter
- Renames all `interui`, `inter ui`, `inter ui` references to just `inter` due to 2019 name change
- Adds `@font-face` support for the following, so we now have support for all weights 300-800 for both our core fonts:
   - Inter: `ExtraLight` 300, `ExtraLightItalic` 300, `SemiBold` 600, `SemiBoldItalic` 600, `ExtraBold` 800, `ExtraBoldItalic` 800
   - Montserrat: `Medium` 500, `MediumItalic` 500, `ExtraBold` 800, `ExtraBoldItalic` 800
- Excludes various unused fonts from build:
   - Montserrat: `Thin`, `ThinItalic`, `ExtraLight`, `ExtraLightItalic`, `Black`, `BlackItalic`
   - Inter: `Black`, `BlackItalic`, `Light`, `LightItalic`, `InterDsplay*`, `Inter-Thin*`

### Closes https://github.com/ipfs-shipyard/ipfs-css/issues/10 
- Un-excludes woff, eot, otf formats when building fonts directory
- Adds `@font-face` support for .woff and .eot fonts in Montserrat
- Adds `@font-face` support for .woff and .otf fonts in Inter

### Miscellany
- Minor typo/consistency fixes in readme
- Mentions SCSS in readme
- Adds maintainer info to readme
