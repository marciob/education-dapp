import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'

import { Container } from './Container'
import avatarImage from '../images/avatar.jpg'
import { Fragment, useEffect, useRef } from 'react'
import { useIdentityLoginContext } from '../context/IdentityContextProvider'


export function Header() {
  const connectWallet = useIdentityLoginContext();
  console.log('connectWallet', connectWallet)
  const [account,setAccount] = useState(); 

  const handleConnectWallet = async () => {
    if(window.ethereum){
      // window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const accountTemp = accounts[0]
      console.log("account",accountTemp)
      setAccount(accountTemp)
      connectWallet(accountTemp)

    }

  }

  useEffect(()=>{
    // const connect = async () => {
    //   const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    //   const accountTemp = accounts[0]
    //   console.log("account",accountTemp)
    //   setAccount(accountTemp)
    // }
    // connect()
  })
 

  return (
  <div className="flex justify-between p-4 px-10 w-screen">
    <div className="flex-1 mr-auto">Logo</div>
    <div className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
    </div>
    <div className='flex-1 items-center justify-center'>
    <button onClick={handleConnectWallet} className="h-full flex justify-center items-center rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 ml-auto"> {account ? "Connected" : "Connect Wallet"}</button>
    </div>
</div>
  )
}
