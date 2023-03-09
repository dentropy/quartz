## Research
* [ethers.js - Signing a request with a signature gives the wrong from address - Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/85212/signing-a-request-with-a-signature-gives-the-wrong-from-address)
* [ethersjs](../ethersjs.md)

``` typescript
const { ethers } = require("ethers");

async function main(){
    var mnemonic_str = "test test test test test test test test test test test junk"
    var wallet = new ethers.Wallet.fromMnemonic(mnemonic_str)
    var message = "I Like Pie"
    var signedTransaction = await wallet.signMessage(message)
    var transaction = ethers.utils.verifyMessage(message, signedTransaction);
    console.log(`message             : ${message}`)
    console.log(`Wallet Address      : ${wallet.address}`)
    console.log(`Transaction Address : ${transaction}`)
}

main()

```