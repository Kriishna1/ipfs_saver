import { useState } from "react";
import { WebContext } from "./createWebContext";

const Web3Giver = ({ children }) => {
  const [webState, setWebState] = useState({
    contractInstance: null,
    selectedAccount: null,
  });

  const updateWebState = (newState) => {
    setWebState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };
  return (
    <WebContext.Provider value={{ webState, updateWebState }}>
      {children}
    </WebContext.Provider>
  );
};

export default Web3Giver;
