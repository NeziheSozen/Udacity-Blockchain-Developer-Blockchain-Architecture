# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

## Write Up

### Sequence Diagrams:

![Sequence Diagrams](images/sequence_diagram.PNG)

![Sequence Diagrams](images/sequence_diagram_2.PNG)

### Class Diagrams

![Class Diagrams](images/class_diagram.PNG)

### Activity Diagrams

![Activity Diagrams](images/activity_diagram.PNG)

### State Diagrams

![State Diagrams](images/state_diagram.PNG)

## Libraries and Why I used:

Truffle v5.0.2: I use Truffle v5.0.2 to simplify the development, testing, and deployment of Ethereum smart contracts.

Ganache v2.7.1: I use Ganache v2.7.1 to emulate a local Ethereum network for development and testing purposes.

Solidity - 0.8.4: I use Solidity - 0.8.4 to write smart contracts on the Ethereum platform with its contract-oriented programming language.

Node v12.22.9: I use Node v12.22.9 as the runtime environment for executing scripts and interacting with the Ethereum network.

Web3.js v1.7.4: I use Web3.js v1.7.4 to interact with the Ethereum blockchain and develop decentralized applications using JavaScript.

## Smart Contract Address

0x6ECDf54b2cd6d0a6b8b36fC40bEA90B30a8f685F

https://goerli.etherscan.io/address/0x6ecdf54b2cd6d0a6b8b36fc40bea90b30a8f685f

TX: https://goerli.etherscan.io/tx/0x5de2f691af072d62d8e5cb1a4e950618864efd80730a759acefd1a1a78c893f8

Transaction ID: 0x5de2f691af072d62d8e5cb1a4e950618864efd80730a759acefd1a1a78c893f8


#### The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

> The starter code is written for **Solidity v0.4.24**. At the time of writing, the current Truffle v5 comes with Solidity v0.5 that requires function *mutability* and *visibility* to be specified (please refer to Solidity [documentation](https://docs.soliditylang.org/en/v0.5.0/050-breaking-changes.html) for more details). To use this starter code, please run `npm i -g truffle@4.1.14` to install Truffle v4 with Solidity v0.4.24. 

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle

