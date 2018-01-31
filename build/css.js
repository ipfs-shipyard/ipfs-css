const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const buildThemeCss = require('./theme')

const from = path.resolve(__dirname, '../src/ipfs.css')
const to = path.resolve(__dirname, '../ipfs.css')
const plugins = [
  require('postcss-import')
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
