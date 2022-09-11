/* This example requires Tailwind CSS v2.0+ */
// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { useEffect,useState } from "react"
import { CardResposta } from "../components/CardRespostas"
import axios from "axios"
import {ethers} from 'ethers'
import Totem from './utils/Totem.json'


export default function Validate() {
  const [account,setAccount] = useState()
  const [totemContract,setTotemContract] = useState()
  const [claims,setClaims] = useState([])



  const fetchAnswers = async () => {
    // Construct query for subgraph
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const accountTemp = accounts[0]
    const subgraphURL= "https://api.thegraph.com/subgraphs/name/danilowhk/totem-subgraph-polygon3"
    const postData = {
      query: `
      {
      validatedSubmits(
        first: 100
        where: {studentAddress: "${accountTemp}"}
        ) {
        id
        challengeId
        courseId
        score
        rewardAmount
        }
      }
      `,
    }
    // Fetch data
    try {
      const result = await axios.post(subgraphURL, postData)
      // setQuestion(result.data.data.parentMessageAddeds[0])
      // setAnswers(result.data.data.messageAddeds)
      console.log("result",result)
      console.log("result.data",result.data.data)
      setClaims(result.data.data.validatedSubmits)
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


  const totemContractAddress="0xDD1C101bE86b43E5a8841B18F4028d2A3E2Bb6B5"
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
  },[])

  const handleCreateProject = async (e) => {
    e.preventDefault()

   

    console.log(totemContract)
    const tx = await totemContract.addCourse( courseName, ownerAddress, stakeAmount, tokenAddress)
    console.log(tx)
  }


  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-bold mt-10">{claims.length >1 ? "Veja os Desafios que você pode Clamar/Claim": "Você não tem mais tokens para Clamar/Claim"} </h1>

        <div className='p-10 grid grid-cols-3 items-center'>
            {claims.map((data) => (
              <CardResposta key={data.id}/>
            ))}
        </div>
    </div>
    
  )
}
