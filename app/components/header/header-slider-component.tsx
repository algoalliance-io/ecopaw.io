'use client'
import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import { useOnClickOutside } from 'usehooks-ts'
import { IoMdClose } from 'react-icons/io'
import { TbMenuDeep } from 'react-icons/tb'
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export const HeaderSliderComponent = () => {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)
  const [sideBarOpen, setSideBarOpen] = useState(false)

  useOnClickOutside(ref, () => {
    if (sideBarOpen) {
      setSideBarOpen(false)
    }
  })

  return (
    <div className="fixed top-0 z-[100] px-4 flex items-center justify-between lg:hidden py-3 w-full bg-[#111214]/70">
      <Link href={'/'} className="flex items-center gap-2">
        <Image
          src="/images/ecopaw-logo.png"
          alt="logo"
          width={44}
          height={44}
          className="flex-shrink-0 rounded-full object-cover w-auto h-auto"
        />
        <h3 className="font-bold text-sm sm:text-xl text-white font-space">
          ECO PAW
        </h3>
      </Link>
      <TbMenuDeep
        className="text-4xl cursor-pointer text-white"
        onClick={() => setSideBarOpen(!sideBarOpen)}
      />
      <div
        ref={ref}
        className={clsx(
          'fixed top-0 z-[100] flex min-h-[100dvh] w-[70%] flex-col justify-between backdrop-blur-lg shadow bg-dark-1/[70%] py-5 duration-500',
          sideBarOpen ? ' right-0' : ' -right-full',
        )}
      >
        <div>
          <div className="flex items-center justify-between gap-4 px-4">
            <div
              className={clsx(
                'flex min-w-max items-center gap-2 rounded-[4px] h-10 w-20 justify-center',
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
              <span
                className={clsx(
                  'font-manrope text-xs font-semibold text-white',
                )}
              >
                Eng
              </span>
            </div>
            <div
              onClick={() => setSideBarOpen(false)}
              className="flex cursor-pointer items-center justify-center rounded-md bg-black/20 p-2"
            >
              <IoMdClose className="text-xl text-white" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-[30px] flex w-full max-w-[70%] flex-col">
              <div className="flex flex-col lg:flex-row gap-4 text-sm font-manrope w-full cursor-pointer border-b border-black-shade-1 py-4 font-bold text-white first:border-t">
                <Link
                  href="https://ecopaw.io/files/ecopaw-whitepaper.pdf"
                  className="font-semibold py-2 px-3 rounded-full flex items-center justify-center text-white"
                  target="_blank"
                >
                  WHITEPAPER
                </Link>
                <Link
                  href="https://ecopaw.io/files/ecopaw-audit.pdf"
                  className="font-semibold py-2 px-3 rounded-full flex items-center justify-center text-white"
                  target="_blank"
                >
                  AUDIT
                </Link>
                <Link
                  href="https://www.pinksale.finance/launchpad/bsc/0x758B07D0Ab2F2a78765Cf85FF3BAE3eC8d137d41?refId=0x5BA4996aB7e2DaFb6Ff8D7047342eC7734b4fBCB"
                  target="_blank"
                  className="font-semibold text-dark-7 py-2 px-7 rounded-full flex items-center justify-center bg-white"
                >
                  Join Presale
                </Link>
              </div>

              <div className=""></div>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto flex items-center gap-2.5">
          <div className={icons}>
            <FaTelegramPlane className={innerIcons} />
          </div>
          <div className={icons}>
            <FaDiscord className={innerIcons} />
          </div>
          <div className={icons}>
            <FaTwitter className={innerIcons} />
          </div>
        </div> */}
      </div>
    </div>
  )
}

const icons =
  'flex size-[34px] items-center justify-center rounded-full border-2 border-white'
const innerIcons = 'size-4 text-white'
