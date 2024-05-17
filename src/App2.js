import './constants.js';
import { useState } from "react";
import { ethers } from "ethers";
import './App.css';

const Transact = () =>{

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance,  setUserBalance] = useState(null);

  const connectWallet = () => {
    if (window .ethereum) {
      window.ethereum.request({method: 'eth_requestAccounts'})
      .then(result => {
        accountChanged([result[0]])
      })
    } else {
      setErrorMessage('install metamask!')
    }
  };

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName)
    getUserBalance(accountName)
  };

  const getUserBalance = (accountAddress) => {
    window.ethereum.request({method: 'eth_getBalance', params: [String(accountAddress), "latest"]})
    .then(balance => {
      setUserBalance(ethers.BrowserProvider.formatEther(balance));
    })
  };

  async function sendTransaction(e) {
   let params = [{
    from: "0x70Ebdf3aA6f0C49d5231e1DD07b914650AdA3EcA",
    to: e.target.to_address.value,
    gas: Number(21000).toString(16),
    gasPrice: Number(2500000).toString(16),
    value: Number(1000000000000000).toString(16),
   }]
  
   try {
    let result = await window.ethereum.request({method: "eth_sendTransaction",params});
    console.log("Transaction result:", result);
   } catch (err) {
      console.log("Transaction error:", err);
   }
  } 
    
  return (

    <div>
      <center>
        <h1>MetaMask Wallet Connection</h1>
        <button onClick={connectWallet}>Connect Wallet Button </button>
        <h3>Address: {defaultAccount}</h3>
        <h3>Balance: {userBalance}</h3>

        <form onSubmit={sendTransaction}>
          <h3> Enter Transaction Address </h3>
          <input type="text" name="to_address" placeholder="Address:"/>
        <input type="submit" value="Submit"/>
        </form>
        {errorMessage}
      </center>
    </div>
  );
};

export default Transact;