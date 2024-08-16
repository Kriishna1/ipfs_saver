import { Web3Context } from "./createWeb3context";
import { useContext } from "react";

export const useWeb3Context=()=>{
    return useContext(Web3Context)
}