import Link from 'next/link'
import Image from 'next/image'
import { NotFoundNum } from '@/assets/svgs'

export default function NotFound() {
  return (
    <div className="w-full bg-dark-7 min-h-screen flex flex-col">
      <div className="flex items-center justify-between w-full py-4 px-5 sm:px-10 h-[90px]">
        <Link href={'/'} className="flex items-center gap-2">
          <Image
            src="/images/ecopaw-logo.png"
            alt="logo"
            width={44}
            height={44}
            className="flex-shrink-0 rounded-full object-cover w-auto h-auto"
          />
          <h3 className="font-bold text-xl text-primary">ECO PAW</h3>
        </Link>
        <div className="flex items-center gap-2 rounded-[4px] h-10 w-20 justify-center">
          <Image
            src="/images/british_flag.png"
            alt="flag"
            width={33}
            height={20}
            className="flex-shrink-0 flex w-auto h-5"
          />
          <span className="font-manrope text-xs font-semibold text-white bg-white/20 py-1 px-2 rounded-md">
            Eng
          </span>
        </div>
      </div>
      <div className="flex-grow py-4 px-4 sm:px-10 flex items-center justify-center">
        <div className="flex flex-col gap-5 items-center mt-[-40px]">
          <Image
            src="/images/not-found.png"
            alt="logo"
            width={363}
            height={200}
            className="w-full h-auto mb-4"
          />
          <NotFoundNum className="[@media(max-width:767px)]:scale-75" />
          <p className="text-white text-center text-sm sm:text-base">
            SORRY, THE PAGE YOU WERE LOOKING FOR DOES’T EXIST
          </p>

          <Link href="/">
            <button className="bg-primary leading-[16.94px] text-black text-sm font-medium rounded-full hover:text-white py-3 px-8 hover:bg-primary-1">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
