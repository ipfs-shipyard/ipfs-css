const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const buildThemeCss = require('./theme-css')
const buildThemeScss = require('./theme-scss')
const buildVarsScss = require('./vars')

const from = path.resolve(__dirname, '../src/ipfs.css')
const to = path.resolve(__dirname, '../ipfs.css')
const plugins = [
  require('postcss-import'),
  require('autoprefixer')
]

async function processCss () {
  try {
    buildThemeCss()
    const src = fs.readFileSync(from)
    const {css} = await postcss(plugins).process(src, {from, to})
    console.log(css)
  } catch (err) {
    console.error(err)
  }
}

processCss()
buildVarsScss()
buildThemeScss()
