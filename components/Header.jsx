import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'

import { Container } from './Container'
import avatarImage from '../images/avatar.jpg'
import { Fragment, useEffect, useRef } from 'react'
import { useIdentityLoginContext, useIdentityContext } from '../context/IdentityContextProvider'
import Web3 from 'web3'


export function Header() {
  const connectWallet = useIdentityLoginContext();
  // const wallet = useIdentityContext()
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
    
    checkAccount()
    // console.log('wallet',wallet)
  },[])

  const checkAccount = async ()=> {
    let web3 = new Web3(window.ethereum)
    // setWeb3(web3)
    const accounts = await web3.eth.getAccounts()
    if(accounts[0]){
      console.log('accounts',accounts[0])
      setAccount(accounts[0])
      connectWallet(accounts[0])
    }
  
  }


 

  return (
  <div className="flex justify-between p-4 px-10 w-screen">
    <div className="flex-1 mr-auto">Logo</div>
    <div className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 cursor-pointer">
      <Link href="/">
        <div className="p-2">Home</div>
      </Link>
      <Link href="/projects">
        <div className="p-2">Cursos</div>
      </Link>
      <Link href="/validate">
        <div className="p-2">Instrutores</div>
      </Link>
      <Link href="/student-dashboard">
        <div className="p-2">Alunos</div>
      </Link>

    </div>
    <div className='flex-1 items-center justify-center'>
    <button onClick={handleConnectWallet} className="h-full flex justify-center items-center rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 ml-auto"> {account ? "Connected" : "Connect Wallet"}</button>
    </div>
</div>
  )
}
