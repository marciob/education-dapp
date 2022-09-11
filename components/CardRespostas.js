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
    <div className='ml-8 mb-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
        {/* <div>Title</div> */}
        <div className="h-[300px] w-[250px] bg-gray-300 flex flex-col items-center justify-between">
  <div className="mt-3 flex flex-col items-center">
      <div>Course Id : </div>
      <div>Challenge Id : </div>
      <div>Question</div>
      <span></span>
  </div> 
  <div>
    Answer:
  </div>


  <div className="flex flex-col items-center">
    <span className="mb-3">Percentage</span>
    <input className="bg-white mb-3"></input>
    <button className="mb-3">Enviar</button>
  </div>
</div>

    </div>

  )
}
