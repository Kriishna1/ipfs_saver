import ConnectedAccounts from "./ConnectedAccounts";

const Navbar = () => {
    return (  
        <div className=" w-full h-[80px] bg-sky-300 flex justify-center items-center border-b-2 border-gray-700">
         <ConnectedAccounts />
        </div> 
    );
}
 
export default Navbar;