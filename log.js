const colors = require('colors')

function log(thing, color) {
  console.log(colors[color](thing))
}

module.exports = {
  green: (thing) => {
    log(thing, 'green')
  },
  yellow: (thing) => {
    log(thing, 'yellow')
  },
  magenta: (thing) => {
    log(thing, 'magenta')
  },
  red: (thing) => {
    log(thing, 'red')
  }
}
