import {createBrowserRouter} from "react-router-dom"
import Wallet from "../pages/Wallet"
import Home from "../pages/Home"

export const routes =createBrowserRouter([
    {path:"/", element: <Wallet/> },
    {path:"/home",element:<Home/>}
])




