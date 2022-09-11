import {ethers} from 'ethers'
import { useEffect, useState } from 'react'
import Totem from '../utils/Totem.json'

export default function ProjectSettings() {
  const [account,setAccount] = useState()
  const [totemContract,setTotemContract] = useState()
  const [courseId,setCourseId] = useState()
  const [challengeReward,setChallengeReward] =useState()

  const [studentAddress,setStudentAddress] = useState()
  const [courseId2, setCourseId2] = useState()

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

  const handleCreateChallenge = async (e) => {
    e.preventDefault()
    console.log(totemContract)
    const tx = await totemContract.addChallenge(courseId,challengeReward)
    console.log(tx)
  }

  const handleAddStudent = async (e) => {
    e.preventDefault()
    console.log(totemContract)

    const tx = await totemContract.addStudents(studentAddress,courseId2)
    console.log(tx)
  }



    return (
      <form className="space-y-8 divide-y divide-gray-200 p-10">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-2xl font-medium leading-6 text-gray-900 text-center">Crie um desafio</h3>
              <p className="mt-1 text-lg text-gray-500 text-center mb-3">
                Escolha o Id do Curso e a Remcompensa do Desafio
              </p>
            </div>

  
            <div className="mt-3 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
              </div>

              
  
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Id do Curso
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setCourseId(e.target.value)}
                    className="block w-full rounded-md border-gray-400 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Recompensa do Desafio
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setChallengeReward(e.target.value)}
                    className="block w-full rounded-md border-gray-400 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Link da Aula
                </label>
                <div className="mt-1">
                  <input
                    // onChange={(e) => setCourseId(e.target.value)}
                    className="block w-full rounded-md border-gray-400 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Questão da Aula
                </label>
                <div className="mt-1">
                  <input
                    // onChange={(e) => setChallengeReward(e.target.value)}
                    className="block w-full rounded-md border-gray-400 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              
              <button
              onClick={handleCreateChallenge}
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Enviar
            </button>
  
            </div>
          </div>
          <div>


            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 mt-10">Adicionar Aluno</h3>
              <p className="mt-1 text-sm text-gray-500">
                This information will be displayed publicly so be careful what you share.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Endereço do Aluno
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setStudentAddress(e.target.value)}

                    className="block w-full rounded-md border-gray-400 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Id do Curso
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setCourseId2(e.target.value)}

                    className="block w-full rounded-md border-gray-400 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <button
              onClick={handleAddStudent}
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Enviar
            </button>
  
            </div>
          </div>

  
        </div>
  
      </form>
    )
  }
  