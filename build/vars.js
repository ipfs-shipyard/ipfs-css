const fs = require('fs')
const path = require('path')
const theme = require('../theme.json')
const outputPath = path.resolve(__dirname, '../vars.scss')

function buildVarsScss () {
  const fontFamily = Object.keys(theme.fonts).map(name => {
    return `$ipfs-${name}: ${theme.fonts[name]};`
  })

  const colorVar = Object.keys(theme.colors).map(name => {
    return `$color-${name}: ${theme.colors[name]};`
  })

  const gradients = theme.gradients.map((gradient, i) => {
    return `$ipfs-gradient-${i}-background-image: ${gradient};`
  })

  const lines = [
    [`/* IPFS vars.scss - Generated from https://github.com/ipfs-shipyard/ipfs-css/blob/master/theme.json */`],
    ['\n/* ---- font ----- */'],
    fontFamily,
    ['\n/* ---- color ----- */'],
    colorVar,
    ['\n/* ---- gradient ----- */'],
    gradients
  ]

  const css = lines.reduce((a, b) => a.concat(b)).join('\n')
  fs.writeFileSync(outputPath, css)
}

module.exports = buildVarsScss
