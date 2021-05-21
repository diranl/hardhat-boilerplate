## Goal

The goal of this repository is quickstart for Solidity development using Hardhat. It come pre-configured with the essentials so that a developer can just start building without worrying about the setup.

## Boilerplate

This boilerplate hardhat repository has been created by the following commands:

1. Install Hardhat locally: `yarn add hardhat --dev`
2. Create Hardhat project: `npx hardhat` => select "Create a sample project"
3. Add TypeScript support: `yarn add ts-node typescript --dev` and `yarn add chai @types/node @types/mocha @types/chai --dev`
4. Add Etherscan support: `yarn add @nomiclabs/hardhat-etherscan --dev`
5. Add OpenZeppelin dependencies: `yarn add @openzeppelin/contracts@3.4.1` - note: we are specifically specifying the version here b/c we want point to the latest stable solidity version which is pragma 0.7.0

## Pre-requisite

Here are the prereqs to get started with the project:

1. Install NPM: https://www.npmjs.com/get-npm
2. Install Yarn: https://classic.yarnpkg.com/en/docs/install
3. Install NPX: `yarn global add npx`
4. (Optional) Install hardhat shorthand: `yarn global add hardhat-shorthand` - this will allow for shorthand commands like `hh compile` as opposed to `npx hardhat compile`

## Commands

- Deploy locally: `hh run scripts/sample-script.ts`
- Run Tests: `hh test`
