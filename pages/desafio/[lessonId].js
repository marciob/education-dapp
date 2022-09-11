import Image from "next/future/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import {ethers} from 'ethers'
import Totem from '../utils/Totem.json'

import { useRouter } from "next/router";

import { storeFiles, makeFileObjects, passMyData } from "../../storing-data";

const lesson = {
  name: "Git 101",
  description: "Introdução ao control de versões",
  link: "https://youtu.be/USjZcfj8yxE",
};

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Desafio() {
  // pegar info de uma aula e pergunta da aula
  const [lesson, setLesson] = useState('');
  const [input,setInput] = useState('')
  const router = useRouter();
  const { lessonId } = router.query
  const [account,setAccount] = useState()
  const [totemContract,setTotemContract] = useState()

  const totemContractAddress="0xc57B6B0efaf07b546c9AeE8AF8cA984660167258"
  const totemContractAbi= Totem.abi
  // console.log('router query', router.query)

  let course_id = 3;
  let lesson_id = lessonId;


  useEffect(() => {
    if(lessonId){
    const url = `https://ubo-dapp-api.herokuapp.com/api/courses/${course_id}/lessons/${lesson_id}`;
      try{
        fetch(url)
        .then((response) => {
          console.log("response", response)
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setLesson(data);
        });
  

      } catch(e){
        console.log(e)
      }

    }
    getWallet()
    
  }, []);





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



  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(input)
    const uri = await passMyData(input);
    const courseId = "1"
    const challengeId = lessonId
    console.log('uri', uri)


    console.log(totemContract)
    const tx = await totemContract.submitChallenge( uri,courseId,challengeId )
    console.log(tx)
  }


  return (
    <>
      <div className="flex flex-col justify-between px-10 text-center">
        <div className=" w-[100%]">
          <div className="flex flex-col mt-10 text-center">
            <p className="mb-3.5">Nome da Aula</p>
            <p> Historia do Brasil </p>
          </div>
          <div className="flex items-center justify-center mb-10">
            <video className="bg-black w-[40%] mt-3 "></video>
          </div>
          <p className="max-w-lg m-auto pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas consequatur molestias quasi sed officiis pariatur soluta aperiam esse quibusdam, fuga iste quos doloribus totam, consectetur porro, distinctio vitae voluptatum.</p>
          <div>
            <p className="mb-3.5"> Instrutor :</p>
            <p className="mb-3.5">Vitor Mancio</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <p className="mb-3.5">Questao 1:</p>
            <input className="border-2 border-black mb-3.5 p-10" onChange={(e) => setInput(e.target.value)} ></input>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="mb-3.5">Group Id</p>
            <input className="border-2 border-black mb-3.5 p-3" onChange={(e) => setInput(e.target.value)} ></input>
          </div>
          
          
          <button onClick={handleSubmit} className='mb-3.5 w-full max-w-lg m-auto bg-lime-500 rounded-2xl'>Enviar</button>
        </div>
      </div>
    </>
  );
}
