import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const HeaderComponent = () => {
  const [show, handleShow] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 800) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  return (
    <div
      className={clsx(
        'md:px-12 px-8 py-[18px] h-20 shadow flex items-center justify-between gap-10 fixed header bg-dark-1/[12%] w-[calc(100%-24px)] sm:w-[calc(100%-20%)] lg:w-[calc(100%-40%)] rounded-xl sm:rounded-2xl backdrop-blur-lg inset-0 top-3 sm:top-5 mx-auto ',
        show &&
          pathname !== '/terms-condition' &&
          'bg-dark-3/50 backdrop-blur-lg',
      )}
    >
      <Link
        href={'/images/ecopaw-logo.png'}
        className="flex items-center gap-2"
      >
        <Image
          src="/images/ecopaw-logo.png"
          alt="logo"
          width={44}
          height={44}
          className="flex-shrink-0 rounded-full object-cover w-auto h-auto"
        />
        <h3 className="font-bold text-xl text-white font-space">ECO PAW</h3>
      </Link>
      <div
        className={clsx(
          'flex items-center gap-2 rounded-[4px] h-10 w-20 justify-center',
          pathname === '/terms-condition' ? 'bg-black/20' : 'bg-black/20',
        )}
      >
        <Image
          src="/images/british_flag.png"
          alt="flag"
          width={33}
          height={20}
          className="flex-shrink-0 flex w-auto h-5"
        />
        <span className={clsx('font-manrope text-xs font-semibold text-white')}>
          Eng
        </span>
        {/* <FaChevronDown className="h-5 w-5 cursor-pointer text-white" /> */}
      </div>
    </div>
  )
}

export default HeaderComponent
