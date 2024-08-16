import React from 'react'

import { useWeb3Context } from '../contexts/useWeb3context'

const Home =()=> {

  const {web3State}=useWeb3Context()
  const {selectedAccount}=web3State;
  console.log(selectedAccount)
  return (
    <div>
      Home
    </div>
  )
}

export default Home;
