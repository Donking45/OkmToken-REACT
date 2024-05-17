# MetaMask Wallet Connection and Transaction App
This React application connects to the MetaMask wallet and allows the user to send Ethereum transactions. It provides functionality to connect to a user's MetaMask wallet, display their account address and balance, and send transactions to other addresses.

## Connect to MetaMask:
Click the "Connect Wallet Button" to connect your MetaMask wallet.

## View Address and Balance:
Once connected, the application will display your account address and balance.

## Send Transactions:
Enter the recipient's address in the input field and click "Submit" to send a transaction.

## Code Explanation
### State Variables
errorMessage:  Stores any error messages to display to the user.

defaultAccount: Stores the currently connected MetaMask account address.

userBalance: Stores the balance of the connected account.

## Connecting to MetaMask
The connectWallet function is triggered when the user clicks the "Connect Wallet Button". It requests the user's MetaMask account and updates the state with the account address.

## Handling Account Changes
The accountChanged function updates the defaultAccount state and retrieves the balance for the new account.

## Getting User Balance
The getUserBalance function retrieves the balance of the connected account and updates the userBalance state.

## Sending Transactions
The sendTransaction function sends a transaction from the connected MetaMask account to a specified address.

## Conclusion
This README provides an overview of the MetaMask Wallet Connection and Transaction App. This setup will allow users to connect their MetaMask wallets, view their Ethereum account details, and send transactions.