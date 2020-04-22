const fs = require('fs')
const path = require('path')
const theme = require('../theme.json')
const outputPath = path.resolve(__dirname, '../theme.scss')

function buildThemeScss () {
  const fontFamily = Object.keys(theme.fonts).map(name => {
    return `.${name} { font-family: $ipfs-${name}; }`
  })

  const color = Object.keys(theme.colors).map(name => {
    return `.${name} { color: $color-${name}; }`
  })

  const bg = Object.keys(theme.colors).map(name => {
    return `.bg-${name} { background-color: $color-${name}; }`
  })

  const border = Object.keys(theme.colors).map(name => {
    return `.border-${name}, .b--${name} { border-color: $color-${name}; }`
  })

  const hover = Object.keys(theme.colors).map(name => {
    return `.hover-${name}:hover, .hover-${name}:focus { color: $color-${name}; }`
  })

  const hoverBg = Object.keys(theme.colors).map(name => {
    return `.hover-bg-${name}:hover, .hover-bg-${name}:focus { background-color: $color-${name}; }`
  })

  const gradients = theme.gradients.map((gradient, i) => {
    return `.ipfs-gradient-${i} { background-image: $ipfs-gradient-${i}-background-image; }`
  })

  const fill = Object.keys(theme.colors).map(name => {
    return `.fill-${name} { fill: $color-${name}; }`
  })

  const hoverFill = Object.keys(theme.colors).map(name => {
    return `.hover-fill-${name}:hover, .hover-fill-${name}:focus { fill: $color-${name}; }`
  })

  const lines = [
    [`/* IPFS theme.scss - Generated from https://github.com/ipfs-shipyard/ipfs-css/blob/master/theme.json */`],
    [''],
    ['@import \'./vars.scss\';'],
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

module.exports = buildThemeScss
