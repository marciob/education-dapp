import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from './Container'
import avatarImage from '../images/avatar.jpg'
import { Fragment, useEffect, useRef } from 'react'



export function CardDesafio() {
 

  return (
    <div className='ml-8 mb-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
        {/* <div>Title</div> */}
        <div>
                <div className="flex h-[250px] w-[200px] flex-col items-center justify-between rounded-lg bg-gray-200">
                <div className="mt-3">Active</div>
                <div className="text-2xl">Title</div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-400">Project</span>
                    <span>Project Details</span>
                    </div>
                    <div className="mb-3">End Date</div>
                </div>
                </div>
        </div>
    </div>

  )
}
