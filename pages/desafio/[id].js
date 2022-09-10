import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '../../components/Card'
import { SimpleLayout } from '../../components/SimpleLayout'
import logoAnimaginary from '../../images/logos/animaginary.svg'
import logoCosmos from '../../images/logos/cosmos.svg'
import logoHelioStream from '../../images/logos/helio-stream.svg'
import logoOpenShuttle from '../../images/logos/open-shuttle.svg'
import logoPlanetaria from '../../images/logos/planetaria.svg'
import Link from 'next/link'
const projects = [
  {
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
  },
  {
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function desafio() {
  return (
    <>

<div className="flex flex-col justify-between px-10  ">
  <div className="bg-gray-300  w-[100%]">
    <div className="flex flex-col mt-10">
      <span>Noame da Aula</span>
      <span className="text-center"> Historia do Brasil </span>
    </div>
    <div className="flex items-center justify-center mb-10">
    <video className="bg-gray-800 w-[80%] mt-3"></video>

    </div>
    <span>Lorem Lorem Lorem </span>
    <div>
      <span> Instrutor :</span>
      <span>Vitor Mancio</span>
    </div>
  </div>
  <div className="flex flex-col items-center justify-between">
     <div className="flex flex-col items-center justify-center">
       <span>Questao 1</span>
      <input className="border-2 border-black w-[500px] h-[150px] rounded-lg"></input>
    </div>
    <div className="flex flex-col items-center justify-center">
       <span>Questao 2</span>
      <input className="border-2 border-black w-[500px] h-[150px] rounded-lg"></input>
    </div>
    <div className="flex flex-col items-center justify-center">
       <span>Questao 3</span>
      <input className="border-2 border-black w-[500px] h-[150px] rounded-lg"></input>
    </div>
    <button className="bg-gray-300 w-[300px] mt-5 p-5 rounded-lg">Enviar</button>
    </div>
  </div>
   
    </>
  )
}
