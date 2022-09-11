/* This example requires Tailwind CSS v2.0+ */
// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from "react"
import { CardResposta } from "../components/CardRespostas"
import axios from "axios"
import {ethers} from 'ethers'
import Totem from './utils/Totem.json'
import Link from "next/link"

const dataTemp = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
]

export default function Validate() {
  const [submittedData, setSubmittedData] = useState(dataTemp)

  const [account,setAccount] = useState()
  const [totemContract,setTotemContract] = useState()
  const [score,setScore] = useState()
  // const [courseName,setCourseName] = useState()
  // const [ownerAddress,setOwnerAddress] = useState()
  // const [tokenAddress, setTokenAddress] = useState()
  // const [stakeAmount, setStakeAmount] = useState()
  const totemContractAddress="0xDD1C101bE86b43E5a8841B18F4028d2A3E2Bb6B5"
  const totemContractAbi= Totem.abi

  const fetchAnswers = async () => {
    // Construct query for subgraph
    const subgraphURL= "https://api.thegraph.com/subgraphs/name/danilowhk/totem-subgraph-polygon3"
    const postData = {
      query: `
      {
        submittedChallenges(first: 100) {
          id
          challengeId
          courseId
          answer
          studentAddress
        }
      }
      `,
    }
    // Fetch data
    try {
      const result = await axios.post(subgraphURL, postData)
      // setQuestion(result.data.data.parentMessageAddeds[0])
      // setAnswers(result.data.data.messageAddeds)
      // console.log("result",result)
      console.log("result.data",result.data.data)
      console.log("result.data.submittedChallenges",result.data.data.submittedChallenges)
      setSubmittedData(result.data.data.submittedChallenges)
      // setAnswers(result.data.data.messageAddeds)
    } catch (err) {
      console.log('Error fetching subgraph data: ', err)
    }
  }

  useEffect(() => {
    const doAsync = async () => {
      await fetchAnswers()
    }
    getWallet()
    doAsync()
  }, [])

  // const handleValidate = (data) => {
  //   console.log(data)
  //   console.log("Validate")
  // }



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



  const handleValidate = async (data) => {
    console.log(data)
    const challengeId=data.challengeId
    const courseId=data.courseId
    const studentAddress=data.studentAddress
    console.log(score)
    console.log(totemContract)
    // console.log('challengeId',challengeId)
    // console.log('courseId',courseId)
    // console.log('studentAddress',studentAddress)

    const tx = await totemContract.validateSubmit( challengeId, courseId, score, studentAddress)
    console.log(tx)
  }

  return (
    <div className="flex flex-col items-center justify-center">

        <div className='p-10 grid grid-cols-3 items-center'>
        {submittedData.map((data) => (
          <div className='ml-8 mb-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-2xl' key={data.id}>
            <div className="h-[300px] w-[250px] bg-gray-200 flex flex-col items-center justify-between rounded-2xl">
          <div className="mt-3 flex flex-col items-center rounded-2xl text-black">
            <p>Course Id : {data.courseId} </p>
            <p>Challenge Id : {data.challengeId} </p>
            <p className="mt-3 font-bold">Pergunta </p>
            <p>How to create an ERC20 Token?</p>
        </div> 
        <div>
          <p className="text-center font-bold">Resposta</p>
          <p className="text-center">{data.answer}</p>
        </div>


        <div className="flex flex-col items-center text-black px-4">
          <span className="mb-3">Avaliação</span>
          <input onChange={(e) => setScore(e.target.value)} className="bg-white mb-3 px-8 w-full text-black"></input>
          <button onClick={()=>handleValidate(data)} className="mb-3 w-full bg-lime-500 rounded-xl">Enviar</button>
        </div>
      </div>

          </div>
        ))}

        </div>
        <Link href="/project-settings/1">
        <div className="p-2 bg-gray-300 rounded-lg cursor-pointer">Settings dos Cursos</div>
      </Link>

    </div>
    
  )
}
