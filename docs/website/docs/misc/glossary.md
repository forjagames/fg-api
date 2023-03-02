# Glossary

## General

### API
An application programming interface (API) is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software. A document or standard that describes how to build or use such a connection or interface is called an API specification. A computer system that meets this standard is said to implement or expose an API. The term API may refer either to the specification or to the implementation.
[🔗From Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/API)

### Favicon
A Favicon is an icon associated with a particular website, typically displayed in the address bar of a browser accessing the site or next to the site name in a user's list of bookmarks.

### Wildcard
A Wildcard (lternatively called a wild character or wildcard character), is a symbol used to replace or represent one or more characters. The most common wildcards are the asterisk (*), which represents one or more characters, and the question mark (?), which represents a single character.

## Blockchain

### Blockchain
A blockchain is a growing list of records, called blocks, that are linked together using cryptography.
Blockchains are typically managed by a peer-to-peer network for use as a publicly distributed ledger, where nodes collectively adhere to a protocol to communicate and validate new blocks. Although blockchain records are not unalterable as forks are possible, blockchains may be considered secure by design and exemplify a distributed computing system with high Byzantine fault tolerance.

[🔗From Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/Blockchain)

### Metamask
MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. 
It allows users to access their wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications.

[🔗From Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/MetaMask)

### Wallet
A cryptocurrency wallet is a device, physical medium, program or a service which stores the public and/or private keys for cryptocurrency transactions. 
In addition to this basic function of storing the keys, a cryptocurrency wallet more often also offers the functionality of encrypting and/or signing information. Signing can for example result in executing a smart contract, a cryptocurrency transaction, identification or legally signing a 'document'.

[🔗From Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/Cryptocurrency_wallet)

### Smart Contract
A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. The code and the agreements contained therein exist across a distributed, decentralized blockchain network. The code controls the execution, and transactions are trackable and irreversible.
Smart contracts permit trusted transactions and agreements to be carried out among disparate, anonymous parties without the need for a central authority, legal system, or external enforcement mechanism.

[🔗From Investopedia](https://www.investopedia.com/terms/s/smart-contracts.asp)

### Fungibility
In economics, fungibility is the property of a good or a commodity whose individual units are essentially interchangeable and each of whose parts is indistinguishable from another part. Fungible tokens are the ones that can be exchanged or replaced; for example, a $100 note can easily be exchanged for twenty $5 bills. In contrast, non-fungible tokens cannot be exchanged in the same manner.

For example, gold is fungible since a specified amount of pure gold is equivalent to that same amount of pure gold, whether in the form of coins, ingots, or in other states, whereas a unique item such as gold fashioned into a statue by a famous artist would not be considered fungible. Other fungible commodities include sweet crude oil, company shares, bonds, other precious metals, and currencies.

Fungibility refers only to the equivalence and indistinguishability of each unit of a commodity with other units of the same commodity, and not to the exchange of one commodity for another.

[🔗From Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/Fungibility)

### Token
A token is a representation of something in the blockchain. This something can be money, time, services, shares in a company, a virtual pet, anything. By representing things as tokens, we can allow smart contracts to interact with them, exchange them, create or destroy them.

#### Kind of Tokens
Note that there’s a big difference between having two voting rights and two deeds of ownership: each vote is equal to all others, but houses usually are not! This is called fungibility. Fungible goods are equivalent and interchangeable, like Ether, fiat currencies, and voting rights. Non-fungible goods are unique and distinct, like deeds of ownership, or collectibles.

In a nutshell, when dealing with non-fungibles (like your house) you care about which ones you have, while in fungible assets (like your bank account statement) what matters is how much you have.

#### Standards
Even though the concept of a token is simple, they have a variety of complexities in the implementation. Because everything in Ethereum is just a smart contract, and there are no rules about what smart contracts have to do, the community has developed a variety of standards (called EIPs or ERCs) for documenting how a contract can interoperate with other contracts.
* ERC20: the most widespread token standard for fungible assets, albeit somewhat limited by its simplicity.
* ERC721: the de-facto solution for non-fungible tokens, often used for collectibles and games.
* ERC777: a richer standard for fungible tokens, enabling new use cases and building on past learnings. Backwards compatible with ERC20.
* ERC1155: a novel standard for multi-tokens, allowing for a single contract to represent multiple fungible and non-fungible tokens, along with batched operations for increased gas efficiency.

[🔗From OpenZeppelin Docs](https://docs.openzeppelin.com/contracts/3.x/tokens#different-kinds-of-tokens)


### ERC1155
ERC1155 is a novel token standard that aims to take the best from previous standards to create a fungibility-agnostic and gas-efficient token contract.

ERC1155 draws ideas from all of ERC20, ERC721, and ERC777. If you’re unfamiliar with those standards, head to their guides before moving on.

The distinctive feature of ERC1155 is that it uses a single smart contract to represent multiple tokens at once. This is why its balanceOf function differs from ERC20’s and ERC777’s: it has an additional id argument for the identifier of the token that you want to query the balance of.

This is similar to how ERC721 does things, but in that standard a token id has no concept of balance: each token is non-fungible and exists or doesn’t. The ERC721 balanceOf function refers to how many different tokens an account has, not how many of each. On the other hand, in ERC1155 accounts have a distinct balance for each token id, and non-fungible tokens are implemented by simply minting a single one of them.

This approach leads to massive gas savings for projects that require multiple tokens. Instead of deploying a new contract for each token type, a single ERC1155 token contract can hold the entire system state, reducing deployment costs and complexity.

[🔗From OpenZeppelin Docs](https://docs.openzeppelin.com/contracts/3.x/erc1155#multi-token-standard)
