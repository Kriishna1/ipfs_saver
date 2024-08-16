import {ethers} from "ethers"
import contractAbi from "../constants/contractAbi.json"
import axios from "axios"

import toast from "react-hot-toast"



export const connectWallet =async()=>{
    try{
    
        if(!window.ethereum){
           throw new Error("Metamask is not installed")
        }
        const accounts =await window.ethereum.request({
           method:"eth_requestAccounts"
        })
        const selectedAccount = accounts[0];
       
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        
        const message = "Welcome to Project k ";
        const signature = await signer.signMessage(message)
        
        const dataSignature = {
         signature
        }
        const url=`http://localhost:3000/api/authentication?address=${selectedAccount}`
        const res = await axios.post(url,dataSignature)
        // const token = res.data.token
        
        // localStorage.setItem("token",token)
   
        const contractAddress = "00x30A43C1129B4844326543785cECe6B97301Ca09A"
        const contractInstance = new ethers.Contract(contractAddress,contractAbi,signer);
        return {contractInstance,selectedAccount}
    } catch (error) {
       toast.error("Wallet connection failed")
       console.error(error)
    }
   }