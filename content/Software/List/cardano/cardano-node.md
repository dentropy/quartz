---
id: TLv69EDw4Bln3K1aZ01YI
title: Cardano Node
desc: ''
updated: 1632416956357
created: 1628449250275
---

## Other Cardano Stuff

* [Cardano Bear Case](https://youtu.be/T3LVUvOjCGM?t=3718)
* [Cardano Explorer](https://explorer.cardano-testnet.iohkdev.io/en.html)

## More Notes

* Testnet Wallet
  * about bomb idea trap convince power reform use canvas parrot faculty vote adapt market sorry parade similar figure hidden paper spin stage liquid absurd
* Get the `cardano-cli`
* Out of date documentation
  * [Guide: How to build a Cardano Stake Pool - CoinCashew](https://www.coincashew.com/coins/overview-ada/guide-how-to-build-a-haskell-stakepool-node)
  * [Deposit Stuff](https://forum.cardano.org/t/in-my-params-json-i-couldnt-find-keydeposit-but-can-see-stakeaddressdeposit/57319/5)
  * [https://forum.cardano.org/t/staking-through-cardano-cli/38294](https://forum.cardano.org/t/staking-through-cardano-cli/38294)
  * [https://www.coincashew.com/coins/overview-ada/guide-how-to-build-a-haskell-stakepool-node](https://www.coincashew.com/coins/overview-ada/guide-how-to-build-a-haskell-stakepool-node)
* Reminders
  * [Cardano Explorer](https://explorer.cardano-testnet.iohkdev.io/en)
  * [Faucet](https://testnets.cardano.org/en/testnets/cardano/tools/faucet/)
* Building
  * [Configuring a node using YAML](https://testnets.cardano.org/en/testnets/cardano/get-started/configuring-a-node-using-yaml/)
  * [Configure topology files for block-producing and relay nodes. - Stake pool course](https://cardano-foundation.gitbook.io/stake-pool-course/stake-pool-guide/stake-pool/core_relay)
  * [input-output-hk/cardano-node: The core component that is used to participate in a Cardano decentralised blockchain.](https://github.com/input-output-hk/cardano-node)
* Post node running
  * [cardano-rt-view/install.md at master · input-output-hk/cardano-rt-view](https://github.com/input-output-hk/cardano-rt-view/blob/master/doc/getting-started/install.md)
  * [SMASH Handbook](https://docs.cardano.org/explore-cardano/cardano-architecture/smash-handbook#buildingandrunningthenodeonthetestnet)
* Resources
  * [Get started with testnets | Cardano Developer Portal](https://developers.cardano.org/docs/get-started/testnets-and-devnets/)
  * [Best Tutorial](https://developers.cardano.org/docs/operate-a-stake-pool/)
* Things to do
  * [Build node](https://cardano-foundation.gitbook.io/stake-pool-course/stake-pool-guide/getting-started/install-node)
  * Generate key pair mnenomic
  * Generate public key
  * Setup Testnet node
* Theory
  * Files required for nodes
  * Topolgy file
  * List of nodes to connect, IP address and port

Steps to deploy a stake pool
----------------------------

* Build cardano-cli, cardano-node and put the binaries in your $PATH
* Get the configuration files for the blockchain you want to run a node for
* [Start the node](https://cardano-foundation.gitbook.io/stake-pool-course/stake-pool-guide/getting-started/cli)
* [Create a wallet via CLI](https://cardano-foundation.gitbook.io/stake-pool-course/stake-pool-guide/stake-pool-operations/keys_and_addresses)
  * After you get address use the Faucet
  * Practice sending Ada back to home address
* [Create a stake pool address via CLI (Requires wallet)](https://cardano-foundation.gitbook.io/stake-pool-course/stake-pool-guide/stake-key/generate-stake-keys-and-address)
* [KES and VRF key generation]([Generate stake pool keys – IOHK Support](https://iohk.zendesk.com/hc/en-us/articles/900001957723-Generate-stake-pool-keys))
* Register Stake Pool

[Run Node](https://developers.cardano.org/docs/get-started/running-cardano/)
----------------------------------------------------------------------------

   cardano-node run \
       --topology /root/relay/testnet-topology.json \
       --database-path /root/relay/db \
       --socket-path /root/relay/db/node-socket \
       --host-addr 172.105.110.191 \
       --port 3001 \
       --config /root/relay/testnet-config.json
       
     export CARDANO_NODE_SOCKET_PATH="/root/relay/db/node-socket"
     
     cardano-cli query tip --testnet-magic 1097911063

[Setup Node RT View](https://github.com/input-output-hk/cardano-rt-view)
------------------------------------------------------------------------

Generate Keys
-------------

    # Payment key pair
    cardano-cli address key-gen \
    --verification-key-file payment.vkey \
    --signing-key-file payment.skey
    
    # Stake key pair
    cardano-cli stake-address key-gen \
    --verification-key-file stake.vkey \
    --signing-key-file stake.skey
    
    # Payment address
    cardano-cli address build \
    --payment-verification-key-file payment.vkey \
    --stake-verification-key-file stake.vkey \
    --out-file payment.addr \
    --testnet-magic 1097911063
    
    # Stake address
    cardano-cli stake-address build \
    --stake-verification-key-file stake.vkey \
    --out-file stake.addr \
    --testnet-magic 1097911063
    
    # Query Address
    cardano-cli query utxo \
    --address $(cat payment.addr) \
    --testnet-magic 1097911063

Query Balance
-------------

    cardano-cli query protocol-parameters --testnet-magic 1097911063  --out-file protocol.json
    
    cardano-cli query utxo \
      --address $(cat payment.addr) \
      --testnet-magic 1097911063
      
    # UTXO has 100000000
      
    #You need to calculate your own UTXO so get the TX Hash and Number such as 
    # ed704dabce9587c85c4839883c52e2d2ce6160232bfe18d55f56355548b8ed84#0
    
    cardano-cli transaction build-raw \
    --tx-in ed704dabce9587c85c4839883c52e2d2ce6160232bfe18d55f56355548b8ed84#0 \
    --tx-out addr_test1qzhux4wv47n7v6deetrl52qx7v5s6uzsxcy35kwkfya8rpx9q8suys6uqlahmqv3sq25mz4xfu2xfrvyuhsm536u94xqlkrv4q+50000000 \
    --invalid-hereafter 0 \
    --fee 0 \
    --out-file tx.draft
    
    cardano-cli transaction calculate-min-fee \
       --tx-body-file tx.draft\
       --tx-in-count 1 \
       --tx-out-count 2 \
       --witness-count 1 \
       --byron-witness-count 0 \
       --testnet-magic 1097911063 \
       --protocol-params-file protocol.json
    
    # Returns payment of lovelace in this case 174213
    
    expr 100000000 - 50000000 - 174213
      = 49825787
      
      
    cardano-cli query tip --testnet-magic 1097911063
    # Find slotNo, in this case 32526839
    # Add 500 to it so 32527339 for next step
    
    cardano-cli transaction build-raw \
        --tx-in ed704dabce9587c85c4839883c52e2d2ce6160232bfe18d55f56355548b8ed84#0 \
        --tx-out addr_test1qzhux4wv47n7v6deetrl52qx7v5s6uzsxcy35kwkfya8rpx9q8suys6uqlahmqv3sq25mz4xfu2xfrvyuhsm536u94xqlkrv4q+50000000 \
        --tx-out $(cat payment.addr)+49825787\
        --invalid-hereafter 32527339 \
        --fee 174213\
        --out-file tx.raw
        
     cardano-cli transaction sign \
        --tx-body-file tx.raw \
        --signing-key-file payment.skey \
        --testnet-magic 1097911063 \
        --out-file tx.signed
     
    cardano-cli transaction submit --tx-file tx.signed --testnet-magic 1097911063
    
    # Should return "Transaction successfully submitted."
    
    
    # Check balance again
    cardano-cli query utxo \
      --address $(cat payment.addr) \
      --testnet-magic 1097911063
      
    

Setting up stake pool
---------------------

    cat protcol.json | grep otocol
    #   "stakePoolDeposit": 500000000, requirement for stake pool deposit, 500 ada
    #    "stakeAddressDeposit": 2000000, requirement for staking, 2 ada
    
    # Run "cardano-cli node" to generate all those other keys
    
    
    slotNo=$(cardano-cli query tip --testnet-magic 1097911063 | jq -r '.slot')
    echo slotNo: ${slotNo}
    
    # 33039957
    
    # OLD
    
    cat > $NODE_HOME/startBlockProducingNode.sh << EOF 
    #!/bin/bash
    DIRECTORY=$NODE_HOME
    PORT=6000
    HOSTADDR=0.0.0.0
    TOPOLOGY=\${DIRECTORY}/${NODE_CONFIG}-topology.json
    DB_PATH=\${DIRECTORY}/db
    SOCKET_PATH=\${DIRECTORY}/db/socket
    CONFIG=\${DIRECTORY}/${NODE_CONFIG}-config.json
    /usr/local/bin/cardano-node run --topology \${TOPOLOGY} --database-path \${DB_PATH} --socket-path \${SOCKET_PATH} --host-addr \${HOSTADDR} --port \${PORT} --config \${CONFIG}
    EOF
    
    # NEW REMEMBER TO COPY THE FILES
    cat > $NODE_HOME/startBlockProducingNode.sh << EOF 
    DIRECTORY=$NODE_HOME
    PORT=6000
    HOSTADDR=0.0.0.0
    TOPOLOGY=\${DIRECTORY}/${NODE_CONFIG}-topology.json
    DB_PATH=\${DIRECTORY}/db
    SOCKET_PATH=\${DIRECTORY}/db/socket
    CONFIG=\${DIRECTORY}/${NODE_CONFIG}-config.json
    KES=\${DIRECTORY}/kes.skey
    VRF=\${DIRECTORY}/vrf.skey
    CERT=\${DIRECTORY}/node.cert
    cardano-node run --topology \${TOPOLOGY} --database-path \${DB_PATH} --socket-path \${SOCKET_PATH} --host-addr \${HOSTADDR} --port \${PORT} --config \${CONFIG} --shelley-kes-key \${KES} --shelley-vrf-key \${VRF} --shelley-operational-certificate \${CERT}
    EOF
    
    cardano-cli node issue-op-cert \
        --kes-verification-key-file kes.vkey \
        --cold-signing-key-file $HOME/cold-keys/node.skey \
        --operational-certificate-issue-counter $HOME/cold-keys/node.counter \
        --kes-period 254 \
        --out-file node.cert

10
--

    cardano-cli query protocol-parameters \
        --testnet-magic 1097911063 \
        --out-file params.json
        
    extractPoolStakingKeys extractedPoolKeys/ about bomb idea trap convince power reform use canvas parrot faculty vote adapt market sorry parade similar figure hidden paper spin stage liquid absurd
    
        
    ./extractPoolStakingKeys.sh extractedPoolKeys/ about bomb idea trap convince power reform use canvas parrot faculty vote adapt market sorry parade similar figure hidden paper spin stage liquid absurd
    
    cd extractedPoolKeys/
    cp stake.vkey stake.skey stake.addr payment.vkey payment.skey base.addr $NODE_HOME
    cd $NODE_HOME
    #Rename to base.addr file to payment.addr
    mv base.addr payment.addr

    ###
    ### On air-gapped offline machine,
    ###
    cat > extractPoolStakingKeys.sh << HERE
    #!/bin/bash 
    
    CADDR=\${CADDR:=\$( which cardano-address )}
    [ -z "\$CADDR" ](%20-z%20%22%5C$CADDR%22%20) && ( echo "cardano-address cannot be found, exiting..." >&2 ; exit 127 )
    
    CCLI=\${CCLI:=\$( which cardano-cli )}
    [ -z "\$CCLI" ](%20-z%20%22%5C$CCLI%22%20) && ( echo "cardano-cli cannot be found, exiting..." >&2 ; exit 127 )
    
    OUT_DIR="\$1"
    [ -e "\$OUT_DIR"  ](%20-e%20%22%5C$OUT_DIR%22%20%20) && {
           	echo "The \"\$OUT_DIR\" is already exist delete and run again." >&2 
           	exit 127
    } || mkdir -p "\$OUT_DIR" && pushd "\$OUT_DIR" >/dev/null
    
    shift
    MNEMONIC="\$*"
    
    # Generate the master key from mnemonics and derive the stake account keys 
    # as extended private and public keys (xpub, xprv)
    echo "\$MNEMONIC" |\
    "\$CADDR" key from-recovery-phrase Shelley > root.prv
    
    cat root.prv |\
    "\$CADDR" key child 1852H/1815H/0H/2/0 > stake.xprv
    
    cat root.prv |\
    "\$CADDR" key child 1852H/1815H/0H/0/0 > payment.xprv
    
    TESTNET=0
    MAINNET=1
    NETWORK=\$TESTNET
    
    cat payment.xprv |\
    "\$CADDR" key public | tee payment.xpub |\
    "\$CADDR" address payment --network-tag \$NETWORK |\
    "\$CADDR" address delegation \$(cat stake.xprv | "\$CADDR" key public | tee stake.xpub) |\
    tee base.addr_candidate |\
    "\$CADDR" address inspect
    echo "Generated from 1852H/1815H/0H/{0,2}/0"
    cat base.addr_candidate
    echo
    
    # XPrv/XPub conversion to normal private and public key, keep in mind the 
    # keypars are not a valind Ed25519 signing keypairs.
    TESTNET_MAGIC="--testnet-magic 1097911063"
    MAINNET_MAGIC="--mainnet"
    MAGIC="\$MAINNET_MAGIC"
    
    SESKEY=\$( cat stake.xprv | bech32 | cut -b -128 )\$( cat stake.xpub | bech32)
    PESKEY=\$( cat payment.xprv | bech32 | cut -b -128 )\$( cat payment.xpub | bech32)
    
    cat << EOF > stake.skey
    {
        "type": "StakeExtendedSigningKeyShelley_ed25519_bip32",
        "description": "",
        "cborHex": "5880\$SESKEY"
    }
    EOF
    
    cat << EOF > payment.skey
    {
        "type": "PaymentExtendedSigningKeyShelley_ed25519_bip32",
        "description": "Payment Signing Key",
        "cborHex": "5880\$PESKEY"
    }
    EOF
    
    "\$CCLI" shelley key verification-key --signing-key-file stake.skey --verification-key-file stake.evkey
    "\$CCLI" shelley key verification-key --signing-key-file payment.skey --verification-key-file payment.evkey
    
    "\$CCLI" shelley key non-extended-key --extended-verification-key-file payment.evkey --verification-key-file payment.vkey
    "\$CCLI" shelley key non-extended-key --extended-verification-key-file stake.evkey --verification-key-file stake.vkey
    
    
    "\$CCLI" shelley stake-address build --stake-verification-key-file stake.vkey \$MAGIC > stake.addr
    "\$CCLI" shelley address build --payment-verification-key-file payment.vkey \$MAGIC > payment.addr
    "\$CCLI" shelley address build \
        --payment-verification-key-file payment.vkey \
        --stake-verification-key-file stake.vkey \
        \$MAGIC > base.addr
    
    echo "Important the base.addr and the base.addr_candidate must be the same"
    diff base.addr base.addr_candidate
    popd >/dev/null
    HERE

    cardano-cli shelley address build \
        --payment-verification-key-file payment.vkey \
        --stake-verification-key-file stake.vkey \
        --testnet-magic 1097911063 > base.addr

    cardano-cli query utxo \
        --address $(cat payment.addr) \
        --testnet-magic 1097911063

    currentSlot=$(cardano-cli query tip --testnet-magic 1097911063 | jq -r '.slot')
    echo Current Slot: $currentSlot

    cardano-cli query utxo \
        --address $(cat payment.addr) \
        --testnet-magic 1097911063 > fullUtxo.out
    
    tail -n +3 fullUtxo.out | sort -k3 -nr > balance.out
    
    cat balance.out
    
    tx_in=""
    total_balance=0
    while read -r utxo; do
        in_addr=$(awk '{ print $1 }' <<< "${utxo}")
        idx=$(awk '{ print $2 }' <<< "${utxo}")
        utxo_balance=$(awk '{ print $3 }' <<< "${utxo}")
        total_balance=$((${total_balance}+${utxo_balance}))
        echo TxHash: ${in_addr}#${idx}
        echo ADA: ${utxo_balance}
        tx_in="${tx_in} --tx-in ${in_addr}#${idx}"
    done < balance.out
    txcnt=$(cat balance.out | wc -l)
    echo Total ADA balance: ${total_balance}
    echo Number of UTXOs: ${txcnt}

    fee=$(cardano-cli transaction calculate-min-fee \
        --tx-body-file tx.tmp \
        --tx-in-count ${txcnt} \
        --tx-out-count 1 \
        --testnet-magic 1097911063 \
        --witness-count 2 \
        --byron-witness-count 0 \
        --protocol-params-file params.json | awk '{ print $1 }')
    echo fee: $fee

    cardano-cli transaction submit \
        --tx-file tx.signed \
        --testnet-magic 1097911063

11.
---

    cd extractedPoolKeys
    cardano-cli stake-address registration-certificate \
        --stake-verification-key-file stake.vkey \
        --out-file stake.cert

    currentSlot=$(cardano-cli query tip --testnet-magic 1097911063 | jq -r '.slot')
    echo Current Slot: $currentSlot

    cd ~/cardano-my-node
    
    cardano-cli query utxo \
        --address $(cat payment.addr) \
        --testnet-magic 1097911063 > fullUtxo.out
    
    tail -n +3 fullUtxo.out | sort -k3 -nr > balance.out
    
    cat balance.out
    
    tx_in=""
    total_balance=0
    while read -r utxo; do
        in_addr=$(awk '{ print $1 }' <<< "${utxo}")
        idx=$(awk '{ print $2 }' <<< "${utxo}")
        utxo_balance=$(awk '{ print $3 }' <<< "${utxo}")
        total_balance=$((${total_balance}+${utxo_balance}))
        echo TxHash: ${in_addr}#${idx}
        echo ADA: ${utxo_balance}
        tx_in="${tx_in} --tx-in ${in_addr}#${idx}"
    done < balance.out
    txcnt=$(cat balance.out | wc -l)
    echo Total ADA balance: ${total_balance}
    echo Number of UTXOs: ${txcnt}

    cardano-cli transaction build-raw \
        --tx-in df67d318f5fbdacd861b897de9a619f49ec0f0d4662f9705cfa7d2744727b160#0 \
        --tx-out $(cat payment.addr)+3997818571\
        --invalid-hereafter $(( ${currentSlot} + 10000)) \
        --fee 181429 \
        --out-file tx.tmp \
        --certificate stake.cert

    fee=$(cardano-cli transaction calculate-min-fee \
        --tx-body-file tx.tmp \
        --tx-in-count ${txcnt} \
        --tx-out-count 1 \
        --testnet-magic 1097911063 \
        --witness-count 2 \
        --byron-witness-count 0 \
        --protocol-params-file params.json | awk '{ print $1 }')
    echo fee: $fee

    cardano-cli transaction build-raw \
        --tx-in df67d318f5fbdacd861b897de9a619f49ec0f0d4662f9705cfa7d2744727b160#0 \
        --tx-out $(cat payment.addr)+3997818571 \
        --invalid-hereafter $(( ${currentSlot} + 10000)) \
        --fee 181429 \
        --certificate-file stake.cert \
        --out-file tx.raw

    cp tx.raw extractedPoolKeys
    cd extractedPoolKeys
    cardano-cli transaction sign \
        --tx-body-file tx.raw \
        --signing-key-file payment.skey \
        --signing-key-file stake.skey \
        --testnet-magic 1097911063 \
        --out-file tx.signed

    
    cardano-cli transaction submit \
        --tx-file tx.signed \
        --testnet-magic 1097911063
