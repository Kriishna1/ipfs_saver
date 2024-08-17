
import GetImage from "../components/GetImage";
import { useState } from "react";
import UploadImages from "../components/UploadImages";
const Home = () => {
    const [reload,setReload]=useState(false)
    // const {web3State}=useWeb3Context()
    // const {selectedAccount}=web3State;
    const reloadEffect=()=>{
      setReload(!reload)
    }
return (


    <div className="relative h-full w-screen flex flex-col justify-center items-center mt-8 px-4 bg-slate-600 ">
      <UploadImages reloadEffect={reloadEffect}/>
      <GetImage reload={reload} />
    </div>
    );
}
 
export default Home;