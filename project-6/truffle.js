const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "a8e44f91fbc2480b8a8f2fe1030f88f2";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const mnemonic = "various boring rival host toy amazing parent tip clog initial profit kind";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    
    goerli: {
      provider: () => new HDWallet(mnemonic, 'https://goerli.infura.io/v3/'+ infuraKey),
      network_id: 5,
      networkCheckTimeout: 99999,
      gas: 4465030,
      gasPrice: 100,
    }
}
}
