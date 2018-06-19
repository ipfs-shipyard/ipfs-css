const theme = require('../theme.json')

const {colors} = theme
const html = Object.keys(colors).map(name => {
  const value = colors[name]
  const color = encodeURIComponent(value)
  return `<img title='${value}' src='https://swatches.now.sh?color=${color}&name=${name}' />`
}).join('')

console.log(html)
