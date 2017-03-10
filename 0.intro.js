const Amorph = require('amorph')
const Bignumber = require('bignumber.js')
const log = require('./log')
const clearTerminal = require('./clearTerminal')

Amorph.loadConverter('bignumber', 'hex', (bignumber) => {
  return bignumber.toString(16)
})

Amorph.ready()

const gas = new Amorph(new Bignumber(255), 'bignumber')

log.yellow("gas.to('hex'):")
log.green(gas.to('hex'))

Amorph.loadConverter('hex', 'hex.prefixed', (hex) => {
  return `0x${hex}`
})

Amorph.ready()

log.yellow("gas.to('hex.prefixed'):")
log.green(gas.to('hex.prefixed'))

log.yellow("Amorph.crossConverter.paths:")
Amorph.crossConverter.paths.forEach((forms, path) => {
  log.green('from/to: ' + JSON.stringify(forms))
  log.green('path: ' + JSON.stringify(path))
  console.log('=====================')
})
