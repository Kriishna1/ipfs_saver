import { useWebContext } from "../contexts/useWebContext";

const ConnectedAccounts = () => {
    const {webState}=useWebContext()
    const {selectedAccount}=webState;
    return ( 
      <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-between md:px-10">
        <p className="font-semibold">Connected Account : {selectedAccount} ,</p>
        
        
    </div>
    );
}
 
export default ConnectedAccounts;