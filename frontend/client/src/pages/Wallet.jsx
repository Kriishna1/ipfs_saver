import React, { useLayoutEffect } from 'react'
import { useWeb3Context } from '../contexts/useWeb3context'
import { connectWallet } from '../utils/connectWallet'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import connectedAccount from '../components/connectedAccount'


const  Wallet=()=> {
  const navigateTo=useNavigate()
  const {updateWeb3State,web3state}=useWeb3Context()
  const {selectedAccount} = web3state ?? {};


  useEffect(()=>{
    if(selectedAccount){
      navigateTo("/home")
    }
  },[selectedAccount,navigateTo])



    
    const handleWalletConnection=async()=>{
        const {contractInstance,selectedAccount}= await connectWallet()
        // console.log(contractInstance,selectedAccount)
        updateWeb3State({contractInstance,selectedAccount});
    }
  return (
    <button onClick={handleWalletConnection}> connect Wallet 
     
    </button>
  )
}

export default Wallet;
