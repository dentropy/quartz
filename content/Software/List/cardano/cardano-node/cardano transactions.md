---
id: As6ud2f1GXDnU2JuZ5Owz
title: Cardano Transactions
desc: ''
updated: 1628449250337
created: 1628449250337
---
# cardano transactions
    cardano-cli query utxo \
      --address $(cat payment.addr) \
      --testnet-magic 1097911063

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

3997818571 - 500000000 = 3497818571

    cardano-cli transaction sign \
        --tx-body-file tx.raw \
        --signing-key-file payment.skey \
        --signing-key-file $HOME/cold-keys/node.skey \
        --signing-key-file stake.skey \
        --testnet-magic 1097911063 \
        --out-file tx.signed

    cardano-cli transaction build-raw \
        --tx-in 6745604ccf03203b9686b5c6b6cca226a2dd909704680296a286a705af0b74d8#0 \
        --tx-out $(cat payment.addr)+3497818571  \
        --invalid-hereafter $(( ${currentSlot} + 10000)) \
        --fee 0 \
        --certificate-file pool.cert \
        --certificate-file deleg.cert \
        --out-file tx.tmp

    fee=$(cardano-cli transaction calculate-min-fee \
        --tx-body-file tx.tmp \
        --tx-in-count ${txcnt} \
        --tx-out-count 1 \
        --testnet-magic 1097911063 \
        --witness-count 3 \
        --byron-witness-count 0 \
        --protocol-params-file params.json | awk '{ print $1 }')
    	echo fee: $fee

FEE 196565

    cardano-cli transaction build-raw \
        --tx-in 6745604ccf03203b9686b5c6b6cca226a2dd909704680296a286a705af0b74d8#0 \
        --tx-out $(cat payment.addr)+500196565 \
        --invalid-hereafter $(( ${currentSlot} + 10000)) \
        --fee 196565 \
        --certificate-file pool.cert \
        --certificate-file deleg.cert \
        --out-file tx.raw

    cardano-cli transaction sign \
        --tx-body-file tx.raw \
        --signing-key-file payment.skey \
        --signing-key-file /root/cold-keys/node.skey \
        --signing-key-file stake.skey \
        --testnet-magic 1097911063 \
        --out-file tx.signed

    cardano-cli transaction submit \
        --tx-file tx.signed \
        --testnet-magic 1097911063
