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
    return `.b--${name} { border-color: ${theme.colors[name]}; }`
  })

  const hover = Object.keys(theme.colors).map(name => {
    return `.hover-${name}:hover, .hover-${name}:focus { color: ${theme.colors[name]}; }`
  })

  const hoverBg = Object.keys(theme.colors).map(name => {
    return `.hover-bg-${name}:hover, .hover-bg-${name}:foucus { background-color: ${theme.colors[name]}; }`
  })

  const gradients = theme.gradients.map((gradient, i) => {
    return `.ipfs-gradient-${i} { background-image: ${gradient}; }`
  })

  const fill = Object.keys(theme.colors).map(name => {
    return `.fill-${name} { fill: ${theme.colors[name]}; }`
  })

  const hoverFill = Object.keys(theme.colors).map(name => {
    return `.hover-fill-${name}:hover, .hover-fill-${name}:focus { fill: ${theme.colors[name]}; }`
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
    hover,
    [''],
    hoverBg,
    [''],
    fill,
    [''],
    hoverFill,
    [''],
    border,
    [''],
    gradients
  ]

  const css = lines.reduce((a, b) => a.concat(b)).join('\n')
  fs.writeFileSync(outputPath, css)
}

module.exports = buildThemeCss
