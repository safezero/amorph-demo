# Why

## Lots of different libraries/formats
1. hex "deadbeef" (solc)
2. hex.prefixed "0xdeadbeef" (web3/etherereumjs/testrpc)
3. base58 "Qm..." (ipfs/bitcoin)
4. Buffer (crypto/bitcore/cryptocoin/protobufjs)
5. Array
6. Uint8Array
7. Base64
8. Number
9. BigNumber
10. BN
11. ascii
12. utf16

## How'd we get here
1. No native type safety
2. HTML/HTTP are text-based (string-encoded must be supported)

## Current solutions
1. Write a bunch of converters. (10! = 3628800) different converters
2. Choose some "canonical" encoding
....
3. Amorph!

## Key principals
1. Keep encoding abstract (self-describing a'la IPFS)
2. Keep variables amorphic until...
  1. Displaying to the user
  2. Transporting (HTTP)
  3. Interacting with non-amorphic code
  4. Manipulations
