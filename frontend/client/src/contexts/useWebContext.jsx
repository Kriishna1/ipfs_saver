import { useContext } from "react";
import { WebContext } from "./createWebContext";

export const useWebContext=()=>{
    return useContext(WebContext)
}