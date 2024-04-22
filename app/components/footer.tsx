import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Security } from '@/assets/svgs'

const Footer = () => {
  return (
    <div>
      <div className="w-full min-h-[420px] h-auto bg-[#A5EE4C] py-5 flex flex-col justify-center items-center font-manrope relative">
        <div className="flex lg:flex-row flex-col md:justify-between justify-center md:gap-20 gap-5 px-12 w-full max-w-[1440px] mx-auto lg:mt-0 sm:mt-10 mt-7">
          <div className="w-full max-w-[295px] mt-4">
            <div className="items-center gap-2 flex">
              <Image
                src="/images/ecopaw-logo.png"
                alt="logo"
                width={44}
                height={44}
                className="flex-shrink-0 rounded-full object-cover w-auto h-auto"
              />
              <h3 className="font-bold text-xl text-dark-1 font-space">
                ECO PAW
              </h3>
            </div>
            <p className="md:text-base text-sm font-medium text-dark-6 mt-6 leading-[21.86px] font-space">
              Revolutionising The Pet Care Ecosystem
            </p>
          </div>
          <div className="flex flex-grow w-full gap-10 justify-between max-w-[800px] md:flex-nowrap flex-wrap">
            <div className="leading-[21.86px] flex flex-col gap-4">
              <p className="font-bold text-base text-dark-1">Token Price</p>
              <Image
                src={'/images/coincap-footer.png'}
                alt="coin"
                width={124}
                height={36}
                className="w-auto h-auto"
              />
              <Image
                src={'/images/coin-gecko-footer.png'}
                alt="coin"
                width={124}
                height={36}
                className="w-auto h-auto"
              />
              <Link
                href={
                  'https://bscscan.com/token/0xc0a934E793C2887456b886bCB6dDE63A7Ce6B8D0'
                }
                target="_blank"
              >
                <Image
                  src={'/images/binance-footer.png'}
                  alt="coin"
                  width={124}
                  height={36}
                  className="w-auto h-auto"
                />
              </Link>
            </div>
            <div className="leading-[21.86px] flex flex-col gap-4">
              <p className="font-bold text-base text-dark-1">Token Listing</p>
              <Image
                src={'/images/panckswap-footer.png'}
                alt="coin"
                width={124}
                height={36}
                className="w-auto h-auto"
              />
            </div>
            <div className="leading-[21.86px] flex flex-col gap-4">
              <p className="font-bold text-base text-dark-1">Token Details</p>
              <Link
                href="https://ecopaw.io/files/ecopaw-whitepaper.pdf"
                target="_blank"
              >
                <div className="flex gap-1 items-center">
                  <Image
                    src={'/images/whitepaper.png'}
                    alt="coin"
                    width={24}
                    height={24}
                    className="w-auto h-auto"
                  />
                  <p className="font-medium text-base text-[#141414]">
                    Whitepaper
                  </p>
                </div>
              </Link>
              <Link
                href="https://ecopaw.io/files/ecopaw-audit.pdf"
                target="_blank"
                className="flex gap-1 items-center"
              >
                <Security className="w-6 h-6" />
                <p className="font-medium text-base text-[#141414]">
                  Security Audit
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 bg-dark-1 flex items-center justify-center gap-5 flex-wrap">
        <p className="text-sm font-medium leading-5 text-white/80 text-center">
          ECO PAW, The World&apos;s First Meme Coin Created To Help
          Environmental Sustainability And Pet Care. By buying ECO PAW Coin
          users accept these{' '}
          <Link
            href={'/terms-condition'}
            className="border-b border-white/80 cursor-pointer"
          >
            Terms & Conditions
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Footer
