const fs = require('fs')
const path = require('path')

const iconsPath = path.join(__dirname, '..', 'icons')
const iconsList = fs.readdirSync(iconsPath)
const iconsData = iconsList.map(filename => {
  const projectUrl = `icons/${filename}`
  const url = `../${projectUrl}`
  const [type, ...rest] = filename.split('_')
  const name = path.basename(rest.join('_'), '.svg')
  return {type, name, filename, url, projectUrl}
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

const imgTpl = ({name, url, filename}) => `<img alt=${name} title=${filename} src=${url} style='width:100px; height:100px' />`

const missingTpl = (type, name) => `
  <div style='line-height:1.5;text-align:center;display:inline-block;width:100px;height:100px;background:white;box-shadow:inset 0px 2px 20px -5px rgba(0,0,0,0.2)'>
    <div style='color:tomato;padding:20 0 0 0;font-style:italic'>Missing</div>
    <div>${type}</div>
    <div>${name}</div>
  </div>`

const compareTpl = ({glyph, stroke}) => `
  <div style='display: inline-block; padding-bottom: 30px; vertical-align:top;'>
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
    body { font: menu; font-size: 16px; line-height:1.5; }
    img { maxWidth: 100%; }
    </style>
    <div style="max-width:1400px;margin:0 auto;">
      <h1>IPFS Icons</h1>
      <section style="padding-top:10px">
        <h2>Stroke flavour</h2>
        ${iconsByNameList.filter(x => !!x.stroke).map(x => imgTpl(x.stroke)).join('')}
      </section>

      <section style="padding-top:20px">
        <h2>Glyph flavour</h2
        ${iconsByNameList.filter(x => !!x.glyph).map(x => imgTpl(x.glyph)).join('')}
      </section>
      
      <section style="padding-top:20px">
        <h2>Icon style availability</h2>
        ${iconsByNameList.map(compareTpl).join('')}
      </section>
    </div>
  </div>
`

console.log(html)
