import {ethers} from 'ethers'
import { useEffect, useState } from 'react'
import Totem from './utils/Totem.json'

export default function CreateProject() {
  const [account,setAccount] = useState()
  const [totemContract,setTotemContract] = useState()
  const [courseName,setCourseName] = useState()
  const [ownerAddress,setOwnerAddress] = useState()
  const [tokenAddress, setTokenAddress] = useState()
  const [stakeAmount, setStakeAmount] = useState()
  const totemContractAddress="0xc57B6B0efaf07b546c9AeE8AF8cA984660167258"
  const totemContractAbi= Totem.abi

  const getWallet = async () => {
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log("account",signer)
      console.log('totemAbi',totemContractAbi)
      console.log('Contract Address',totemContractAddress )
      setAccount(signer)
      const totemContractTemp = new ethers.Contract(totemContractAddress,totemContractAbi,signer)
      console.log("Contract",totemContractTemp )
      setTotemContract(totemContractTemp);


    }
  }

  useEffect(()=>{
    getWallet()
  },[])

  const handleCreateProject = async (e) => {
    e.preventDefault()

   

    console.log(totemContract)
    const tx = await totemContract.addCourse( courseName, ownerAddress, stakeAmount, tokenAddress)
    console.log(tx)
  }



    return (
      <form className="space-y-8 divide-y divide-gray-200 p-10">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-2xl font-medium leading-6 text-gray-900 text-center">Crie o seu curso</h3>
              <p className="mt-3 text-sm text-gray-500 text-lg text-center">
                Crie um curso e defina a token de remunerção para os seus alunos
              </p>
            </div>
  
            <div className="mt-1 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
              </div>
  
            

            </div>
          </div>
  
          <div className="pt-8">
  
            <div className="sm:col-span-6">
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  Descrição
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-gray-400 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={''}
                  />
                </div>
              </div>
  
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setCourseName(e.target.value)}
                    className="block w-full rounded-md border-gray-400 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Endereço/Wallet do Instrutor
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setOwnerAddress(e.target.value)}
                    className="block w-full rounded-md border-gray-400 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Endereço do Token de Incentivo
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setTokenAddress(e.target.value)}
                    className="block w-full rounded-md border-gray-400 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Valor de Stake
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setStakeAmount(e.target.value)}
                    className="block w-full rounded-md border-gray-400 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
            </div>
          </div>

        </div>
  
        <div className="pt-5">
          <div className="flex justify-center items-center">
   
            <button
              className="ml-3 py-3 px-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleCreateProject}
            >
              Criar Curso
            </button>
          </div>
        </div>
      </form>
    )
  }
  