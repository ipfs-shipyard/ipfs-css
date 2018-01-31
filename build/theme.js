const fs = require('fs')
const path = require('path')
const theme = require('../theme.json')
const outputPath = path.resolve(__dirname, '../src/theme.css')

function buildThemeCss () {
  const fontFamily = Object.keys(theme.fonts).map(name => {
    return `.${name} { font-family: ${theme.fonts[name]}; }`
  })

  const color = Object.keys(theme.colors).map(name => {
    return `.${name} { color: ${theme.colors[name]}; }`
  })

  const bg = Object.keys(theme.colors).map(name => {
    return `.bg-${name} { background-color: ${theme.colors[name]}; }`
  })

  const border = Object.keys(theme.colors).map(name => {
    return `.border-${name} { border-color: ${theme.colors[name]}; }`
  })

  const gradients = theme.gradients.map((gradient, i) => {
    return `.ipfs-gradient-${i} { background-image: ${gradient}; }`
  })

  const lines = [
    [`/* IPFS theme.css - Generated from https://github.com/ipfs-shipyard/ipfs-css/blob/master/theme.json */`],
    ['\n/* ---- font ----- */'],
    fontFamily,
    ['\n/* ---- color ----- */'],
    color,
    [''],
    bg,
    [''],
    border,
    [''],
    gradients
  ]

  const css = lines.reduce((a, b) => a.concat(b)).join('\n')
  fs.writeFileSync(outputPath, css)
}

module.exports = buildThemeCss