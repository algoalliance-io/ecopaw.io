import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

import { Polygon } from '@/assets/svgs'

import { TermsData } from './terms.data'

const TermsCondition = () => {
  return (
    <div className="py-[116px] bg-[#FCFCF7] min-h-screen font-manrope h-auto">
      <div className="w-full max-w-[1280px] mx-auto sm:px-10 px-5 xl:px-0">
        <div className="flex justify-center mb-[72px]">
          <Image
            src="/images/terms-mobile.png"
            alt="Terms and conditions"
            width={560}
            height={503}
            className="hidden sm:block w-auto h-auto"
          />
          <Image
            src="/images/terms-mobile.png"
            alt="Terms and conditions"
            width={305}
            height={273}
            className="sm:hidden block w-auto h-auto"
          />
        </div>
        <Link href="/" className="flex items-center gap-2 justify-center">
          <FiArrowLeft className="h-5 w-5 flex-shrink-0 text-primary" />
          <span className="sm:text-base text-sm leading-[22px] text-dark-1 font-semibold">
            Back to home
          </span>
        </Link>
        <div className="mt-6 flex flex-col gap-2 justify-center items-center">
          <h4 className="sm:text-[40px] text-2xl font-bold text-dark-1">
            Terms and conditions
          </h4>
          <p className="text-dark-2/80 sm:text-base text-sm leading-[22px] font-semibold">
            Last revised: 20 April 2024
          </p>
        </div>
        <div className="md:mt-16 mt-10">
          <div className="w-full max-w-[1216px] bg-white border border-primary-1 h-auto sm:p-12 p-6 mx-auto rounded-2xl flex flex-col gap-8">
            {TermsData.map((data, index) => (
              <div className="flex gap-4" key={index}>
                <span className="flex-shrink-0 mt-2">
                  <Polygon />
                </span>
                <p className="md:text-base text-sm leading-[23.8px] font-semibold text-dark-2/80">
                  {data}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsCondition
