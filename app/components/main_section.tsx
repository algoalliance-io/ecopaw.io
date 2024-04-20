import React from 'react'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'
import { FaDiscord } from 'react-icons/fa'

const MainSection = () => {
  return (
    <div className="h-auto w-ful bg-[url(/images/bg-hero.png)] bg-cover bg-center">
      <div className="lg:h-[815px] md:h-[900px] sm:h-[750px] h-[650px] w-full">
        <div className="max-w-[1440px] mx-auto">
          <div className="lg:w-full max-w-[1071px] lg:mx-auto text-center lg:text-[64px] lg:leading-[72px] font-bold sm:text-5xl sm:leading-[56px] leading-[42px] text-[34px] sm:mx-10 mx-5 sm:pt-[155px] pt-[171px] text-dark-1 font-space">
            <span className="text-dark-1/80">Elon Musk said:</span>
            <div className="relative">
              &ldquo;He who controls the memes controls the world!&rdquo;, but
              Eco Paw also wants to guide the world towards a greener, more
              human-friendly future.
            </div>
          </div>
          <div className="w-full flex md:mt-12 sm:mt-8 mt-4 justify-center items-center gap-3">
            <Link
              href={'https://x.com/ecopawbnb?s=21&t=f7gNWGGGB4bXdIwQ37lqEQ'}
              target="_blank"
              className="w-fit"
            >
              <button className="font-manrope font-medium text-white py-3 w-full px-6 max-w-[168px] border border-dark-2/80 rounded-full hover:bg-dark-2 flex items-center justify-center gap-2 bg-dark-2/80">
                <span className="md:block hidden">Follow us</span>
                <FaXTwitter className="h-5 w-5 text-white fill-white" />
              </button>
            </Link>
            <Link
              href={'https://discord.gg/JBfHdAzJ'}
              target="_blank"
              className="w-fit"
            >
              <button className="font-manrope font-medium text-white py-3 w-full px-6 max-w-[168px] border border-dark-2/80 rounded-full hover:bg-dark-2 flex items-center justify-center gap-2 bg-dark-2/80">
                <span className="md:block hidden">Join us</span>
                <FaDiscord className="h-5 w-5 text-white fill-white" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
