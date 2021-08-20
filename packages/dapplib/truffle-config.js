require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword story dash mushroom pulse harvest muscle army gate'; 
let testAccounts = [
"0x420492b52caf4df66b8ad85eade0c9df0e65be57241a5ec33b2d0214d420b776",
"0x97a5f0ed7c50ef03929e3300ad30e21d42ae68f2ad52f1e7d445dae5193e4e96",
"0xea44d5ee75cc6c4734970ff6fbb4afe0720810116813a7e032db16acce462fd2",
"0x9258ce28d40e6578451a5e86360b69c03cfd2f7290e9b554feb9a7b4142eefcd",
"0xaa9793741bb651528eb1e27e74586cdec26ea5b37df359e159a28d9ea4bce656",
"0xbe6c744ad0df0d00daa38c255bd017fe0cf92eb6572951c3b5484bb46293194b",
"0xa6a5ab35ddb489e04872a6bad5d480ce280c61c1a030527784e3ff803e6531a8",
"0x85f6325673b89afeec658f70dc29f106ce5b8fff3ef57caa31e21b6c427e2d4c",
"0x9ed2e1d4dcc907ead7fd3e4e46355ca7a83bc0b2c48b3c0802b0a553ba5a3b7e",
"0x25fe073b517fa8a5202d10f91d1f38f514ca298dd76d1f1330b3161346626a11"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

