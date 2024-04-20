import React from 'react'
import Image from 'next/image'
import InfiniteScroll from './background-section/infinite-scroll'
import { ImageDataLoop } from './background-section/scroll-loop-data'

const BackgroundSection = () => {
  return (
    <div className="pb-[8rem] relative bg-dark-7">
      <Image
        src="/images/bg-pattern.png"
        width={700}
        height={634}
        alt="ecopaw"
        className="absolute z-[300] top-0 transform right-0 w-auto h-auto"
      />
      <div className="flex flex-col items-center gap-5 pt-20 max-w-[1440px] mx-auto">
        <div className="mt-20 w-full max-w-[756px] mx-auto md:px-0 px-4">
          <p className="font-bold leading-[64px] md:text-[56px] text-[48px] text-center text-white font-space">
            Who is talking about <span className="text-primary">ECO PAW?</span>
          </p>
          <p className="mt-6 font-bold text-lg leading-[20.7px] text-center text-white/80 px-4 font-manrope">
            No matter how incredible a Meme Coin is, the Market is showing that
            the most capitalised Meme Coins are all DOGS! ECO PAW is the Dog of
            Dogs!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-16 mt-8 justify-center items-center max-w-[1280px] w-full mx-auto">
        {ImageDataLoop.map((portion: any) => (
          <InfiniteScroll key={portion.id} portion={portion} />
        ))}
      </div>
    </div>
  )
}

export default BackgroundSection
