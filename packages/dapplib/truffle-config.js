require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name release machine slow good end army gift'; 
let testAccounts = [
"0xd3745135a30ae45a032c26a8344ecb9d1441fa18c317e42d8c3add675f8c0666",
"0x04bb1229b37091e32ad00dcb48239acb9b7ecfaaab9c8c3569866e99a223a585",
"0xc6eb4b819bdab5d172de59d7f73171c577a56566a205ffa9afeeaddb4d77ccb9",
"0x6e7ab76fee8d41aa7abaf9ed5f80a43c11b92a352b38cbc5046a16804541640e",
"0xcfd6cf703a8993d73af408c455a6a678d9f96b9f08abd82ec041fedfead260fb",
"0x8c79c44c01ae764eea190fcaf650ee75fa7306b2e2f5c3b5cf4939b594b60e9b",
"0xc3effb1ea46c6853c6d75425ad09d5753ebb571eaf8e6094fe0197e20be96213",
"0xc4c51f7be746d6333b0adc5970c7e6ce4e79715e3889425b7eaac5741711f460",
"0x464da06afc9d3c37cd6e6a5ebf569666ff103de665a6cbf80a30e8faaabea51a",
"0x87db99f652c7c3815acdb1f10fdf02b78b1901aa7528f83a036d0b442ef62aed"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

