const Amorph = require('amorph')
const amorphHexPlugin = require('amorph-hex')
const amorphBignumberPlugin = require('amorph-bignumber')
const amorphBufferPlugin = require('amorph-buffer')
const Bignumber = require('bignumber.js')
const log = require('./log')
const clearTerminal = require('./clearTerminal')
const IpfsApi = require('ipfs-amorph-api')

const ipfsApi = new IpfsApi({
  protocol: 'https',
  host: 'ipfs.infura.io',
  port: 5001
})

const chai = require('chai')
chai.use(require('chai-amorph'))
chai.use(require('chai-as-promised'))
chai.should()

const multihash = new Amorph('QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j', 'base58')
const helloWorld = new Amorph('hello world!', 'ascii')
const goodbyeWorld = new Amorph('goodbye world!', 'ascii')

describe('get file', () => {
  it('get QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j should equal "hello world!"', () => {
    return ipfsApi.getFile(multihash).should.eventually.amorphEqual(helloWorld)
  })
  it('get QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j should equal "goodbye world"', () => {
    return ipfsApi.getFile(multihash).should.eventually.amorphEqual(goodbyeWorld)
  })
})
