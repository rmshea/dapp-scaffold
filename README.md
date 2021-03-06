# Solana App Scaffold
Scaffolding for a dapp built on Solana

# Environment Setup
1. Install Rust from https://rustup.rs/
2. Install Solana v1.5.0 or later from https://docs.solana.com/cli/install-solana-cli-tools#use-solanas-install-tool
3. Install Node
4. Install NPM
5. Run
```
npm install
```
# Build Smart Contract (compiled for BPF)

```
$ cargo build-bpf
$ cargo test-bpf
```

# Run dapp

`
npm start
`

# Directory structure

## program

Solana program template in Rust by @mvines

### src/lib.rs


## src/actions

Setup here actions that will interact with Solana programs using sendTransaction function

## src/contexts

React context objects that are used propagate state of accounts across the application

## src/hooks

Generic react hooks to interact with token program:
* useUserBalance - query for balance of any user token by mint, returns:
    - balance
    - balanceLamports
    - balanceInUSD
* useAccountByMint
* useTokenName
* useUserAccounts

## src/views

* home - 
* faucet - airdrops SOL on Testnet and Devnet