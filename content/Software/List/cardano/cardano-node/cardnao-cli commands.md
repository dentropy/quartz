---
id: wFY2hiN9lnsUBxyFVcgKm
title: Cardnao CLI Commands
desc: ''
updated: 1628449250337
created: 1628449250337
---
# cardnao-cli commands
    sudo systemctl status cardano-node

    wget https://hydra.iohk.io/job/Cardano/cardano-node/cardano-deployment/latest-finished/download/1/testnet-config.json
    wget https://hydra.iohk.io/job/Cardano/cardano-node/cardano-deployment/latest-finished/download/1/testnet-shelley-genesis.json
    wget https://hydra.iohk.io/job/Cardano/cardano-node/cardano-deployment/latest-finished/download/1/testnet-byron-genesis.json
    wget https://hydra.iohk.io/job/Cardano/cardano-node/cardano-deployment/latest-finished/download/1/testnet-topology.json
    wget https://hydra.iohk.io/job/Cardano/cardano-node/cardano-deployment/latest-finished/download/1/testnet-alonzo-genesis.json

     cardano-node run \
     --topology testnet-topology.json \
     --database-path db \
     --socket-path db/node.socket \
     --host-addr 172.105.110.191 \
     --port 3001 \
     --config testnet-config.json

     cardano-cli address build \
     --payment-verification-key-file cold.vkey \
     --out-file cold.addr \
     --testnet-magic 1097911063

    cardano-cli query utxo \
    --shelley-mode \
    --address $(cat payment.addr) \
    --testnet-magic 1097911063

     cardano-cli address build \
     --payment-verification-key-file payment.vkey \
     --stake-verification-key-file stake.vkey \
     --out-file paymentwithstake.addr \
     --testnet-magic 1097911063

    cardano-cli stake-pool registration-certificate \
        --testnet-magic 1097911063 \
        --pool-relay-port 6000 \
        --pool-relay-ipv4 172.105.110.191

    cardano-cli stake-pool registration-certificate \
        --cold-verification-key-file /root/cold-keys/node.vkey \
        --vrf-verification-key-file /root/cold-keys/vrf.vkey \
        --pool-pledge 100000000 \
        --pool-cost 340000000 \
        --pool-margin 0.15 \
        --pool-reward-account-verification-key-file stake.vkey \
        --pool-owner-stake-verification-key-file stake.vkey \
        --testnet-magic 1097911063 \
        --pool-relay-ipv4 172.105.110.191 \
        --pool-relay-port 6000 \
        --metadata-url https://raw.githubusercontent.com/dentropy/DENT-TEST/D/q.json \
        --metadata-hash $(cat poolMetaDataHash.txt) \
        --out-file pool.cert

    cardano-cli stake-address delegation-certificate \
        --stake-verification-key-file stake.vkey \
        --cold-verification-key-file /root/cold-keys/node.vkey \
        --out-file deleg.cert

    currentSlot=$(cardano-cli query tip --testnet-magic 1097911063 | jq -r '.slot')
    echo Current Slot: $currentSlot

    currentSlot=$(cardano-cli query tip --testnet-magic 1097911063 | jq -r '.slot')
    echo Current Slot: $currentSlot

DEPOSIT FEE: 500000000

Current Slot: 33717416

     cardano-cli query stake-snapshot --stake-pool-id $(cat stakepoolid.txt) --testnet-magic 1097911063
