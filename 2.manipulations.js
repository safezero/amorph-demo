const Amorph = require('amorph')
const amorphHexPlugin = require('amorph-hex')
const amorphBase58Plugin = require('amorph-base58')
const amorphBufferPlugin = require('amorph-buffer')
const crypto = require('crypto')
const log = require('./log')
const clearTerminal = require('./clearTerminal')

Amorph.loadPlugin(amorphHexPlugin)
Amorph.loadPlugin(amorphBase58Plugin)
Amorph.loadPlugin(amorphBufferPlugin)
Amorph.ready()

// Goal : remove first two bytes from a multihash: QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ

const myMultihash = new Amorph('QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ', 'base58')

const myStrippedMultihash = myMultihash.as('array', (array) => {
  return array.slice(2)
})

log.yellow("myMultihash:")
log.green(`${myMultihash.to('array').length} bytes`)
log.green(myMultihash.to('base58'))
log.green(myMultihash.to('hex'))
log.yellow("myStrippedMultihash:")
log.green(`${myStrippedMultihash.to('array').length} bytes`)
log.green(myStrippedMultihash.to('base58'))
log.green(myStrippedMultihash.to('hex'))

log.magenta(Amorph.crossConverter.paths.get('base58', 'array'))
