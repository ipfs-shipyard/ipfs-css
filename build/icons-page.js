const fs = require('fs')
const path = require('path')

const iconsPath = path.join(__dirname, '..', 'icons')
const iconsList = fs.readdirSync(iconsPath)
const iconsData = iconsList.map(filename => {
  const url = `icons/${filename}`
  const [type, ...rest] = filename.split('_')
  const name = path.basename(rest.join('_'), '.svg')
  return {type, name, filename, url}
})

/*
iconsByName = {
  attention: {
    glyph: {
      type: 'glyph',
      name: 'attention',
      url: '../icons/glyph_attention.svg',
      ...and friends.
    },
    stroke: {
      type: 'glyph',
      name: 'attention',
      url: '../icons/glyph_attention.svg',
      ...and friends.
    }
  },
  basket: {
    glyph: { ... }
    stroke: { ... }
  },
  ...and the rest of the icon names
}
*/

const iconsByName = iconsData.reduce((map, info) => {
  const {name, type} = info
  map[name] = map[name] || {}
  map[name][type] = info
  return map
}, {})

const iconsByNameList = Object.keys(iconsByName).map(name => iconsByName[name])

const imgTpl = ({type, name, url, filename}) => `
  <div class="item">
    <div><img class="icon" alt=${name} title=${filename} src=${url} /></div>
    <div>${type} ${name}</div>
  </div>
`

const missingTpl = (type, name) => `
<div class="item item-missing">
  <div class="icon">(missing)</div>
  <div>${type} ${name}</div>
</div>
`

const compareTpl = ({glyph, stroke}) => `
  <div class="compare">
    <div>
      ${glyph ? imgTpl(glyph) : missingTpl('glyph', stroke.name)}
    </div>
    <div>
      ${stroke ? imgTpl(stroke) : missingTpl('stroke', glyph.name)}
    </div>
  </div>
`

const html = `
  <div>
    <style>
      body { font: menu; font-size: 16px; line-height: 1.5; max-width: 1400px; margin: 0 auto; padding: 2em; }
      section { padding-top: 1.5em; }
      .compare { display: inline-block; margin-bottom: 3em; }
      .compare .item {display: block; }
      .item { display: inline-block; font-style: italic; margin: 1em .75em 1em 0; text-align: center; vertical-align:top; width: 10.5em; }
      .item-missing { border: 1px dashed #7f8491; }
      .icon { align-items: center; color: #f36149; display: flex; height: 100px; justify-content: center; margin: 0 auto; max-width: 100%; width: 100px; }
    </style>

    <h1>IPFS Icons</h1>

    <section>
      <h2>Style: Glyph</h2>
      ${iconsByNameList.filter(x => !!x.glyph).map(x => imgTpl(x.glyph)).join('')}
    </section>

    <section>
      <h2>Style: Stroke</h2>
      ${iconsByNameList.filter(x => !!x.stroke).map(x => imgTpl(x.stroke)).join('')}
    </section>

    <section>
      <h2>Cross-style availability</h2>
      ${iconsByNameList.map(compareTpl).join('')}
    </section>

  </div>
`

console.log(html)
