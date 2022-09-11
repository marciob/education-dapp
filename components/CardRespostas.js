import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from './Container'
import avatarImage from '../images/avatar.jpg'
import { Fragment, useEffect, useRef } from 'react'



export function CardResposta() {
 

  return (
    <div className='ml-8 mb-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-2xl'>
        {/* <div>Title</div> */}
      <div className="h-[300px] w-[250px] bg-gray-200 flex flex-col items-center justify-between rounded-2xl">
    <div className="mt-3 flex flex-col items-center rounded-2xl text-black">
      <p>Course Id : </p>
      <p>Challenge Id : </p>
      <p>Question</p>
  </div> 
  <div>
    <p>Answer:</p>
  </div>


  <div className="flex flex-col items-center text-black px-4">
    <span className="mb-3">Percentage</span>
    <input className="bg-white mb-3 px-8 w-full text-black"></input>
    <button className="mb-3 w-full bg-lime-500 rounded-2xl">Enviar</button>
  </div>
</div>

    </div>

  )
}
