const Amorph = require('amorph')
const amorphHexPlugin = require('amorph-hex')
const amorphBase58Plugin = require('amorph-base58')
const amorphBufferPlugin = require('amorph-buffer')
const log = require('./log')
const clearTerminal = require('./clearTerminal')

Amorph.loadPlugin(amorphHexPlugin)
Amorph.loadPlugin(amorphBase58Plugin)
Amorph.loadPlugin(amorphBufferPlugin)
Amorph.ready()

// TODO : remove first two bytes from a multihash: QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ

const myMultihash = new Amorph('QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ', 'base58')

const myStrippedMultihash = myMultihash.as('array', (array) => {
   return array.slice(2)
})

// log.yellow("myMultihash:")
// log.green(`${myMultihash.to('array').length} bytes`)
// log.green(myMultihash.to('base58'))
// log.green(myMultihash.to('hex.prefixed'))
// log.yellow("myStrippedMultihash:")
// log.green(`${myStrippedMultihash.to('array').length} bytes`)
// log.green(myStrippedMultihash.to('base58'))
// log.green(myStrippedMultihash.to('hex.prefixed'))
