import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from './Container'
import avatarImage from '../images/avatar.jpg'
import { Fragment, useEffect, useRef } from 'react'



export function CardDesafio(props) {
  console.log("lessons", props.lesson)
 

  return (
    <Link href={`/desafio/${props.lesson.challengeId}`}>
      <div className='ml-8 mb-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
          {/* <div>Title</div> */}
          <div>
                  <div className="flex h-[300px] w-[200px] flex-col items-center justify-between rounded-lg bg-gray-200">
                  <div className="mt-3 flex items-center gap-2">
                    Active
                    <div className='circle-active'></div>
                  </div>
                  <div className="text-2xl text-center">{props.lesson.name}</div>
                  <div className="flex flex-col items-center">
                      <div className="flex flex-col items-center mb-5 px-4">
                      <span className="text-2xl text-gray-400 mb-10">Id: {props.lesson.challengeId}</span>
                      <span className="text-center text-md">Challenge Reward</span>

                      <span className="text-center text-md">{props.lesson.challengeReward}</span>
                      </div>
                      {/* <div className="mb-3">End Date</div> */}
                  </div>
                  </div>
          </div>
      </div>
    </Link>

  )
}
