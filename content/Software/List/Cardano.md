---
id: 3Ko8DpJgRyLTsaY77RZfI
title: Cardano
desc: ''
updated: 1628449250318
created: 1628449250318
---
# Cardano
Set up a Cardano Stake Pool
---------------------------

*   [https://medium.com/coinmonks/want-to-run-a-cardano-stake-pool-here-is-what-you-need-to-know-a53a34314cb2](https://medium.com/coinmonks/want-to-run-a-cardano-stake-pool-here-is-what-you-need-to-know-a53a34314cb2)
*   [https://docs.cardano.org/projects/cardano-node/en/latest/getting-started/install.html](https://docs.cardano.org/projects/cardano-node/en/latest/getting-started/install.html)
*   [https://hub.docker.com/r/inputoutput/cardano-node](https://hub.docker.com/r/inputoutput/cardano-node)
*   [https://github.com/pasklab/cardano-docker](https://github.com/pasklab/cardano-docker)

Steps to set up a stake pool
----------------------------

Hi Cardano Community,

I have a question about token / smart contract design. If one were to mint a centralized currency, for example in a video game, what are the different options to bridge said centralized currency to the blockchain? I am wondering if we can extend UTxO so that transactions can be reversed via cold wallet withing a specified period of time, say 72 hours or one week. Any transactions older than the specified period of time would be irreversible. Let me add some context. Let's say a micro transaction game wants to list their currency on a Dex. They have some API running on their back end that receives the a request it mints/transfers the token on the blockchain. Let's say that the hot server minting the tokens gets compromised and then a bunch of tokens are minted/transferred by the attacker. The attacker then launders the hacked tokens across hundreds of different wallets. When an event like this occurs rather than saying that sucks one can get the cold wallet to sign a transaction that would invalidate any transactions after a specific time/block number. All minted/transferred tokens have the metadata attached to them saying what hot wallet initially transferred the tokens and when. The removal/transfer back of tokens would be enforced by having a data structure within the UTxO model that would check for each UTxO transaction was invalidated. This would make token transfers more expensive but it is worth the cost for many parties out there. When transactions are invalidated the tokens can be transferred back to a new hot/cold wallet or removed from circulation if minting.

  
Is this part of Extended UTxO or would it have to be a smart contract?  
I also posted the above question on ideascale, https://cardano.ideascale.com/a/dtd/Need-backup-plan-for-bridged-tokens/361708-48088
