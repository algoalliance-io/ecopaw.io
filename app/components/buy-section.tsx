import React from 'react'
import Image from 'next/image'

const BuySection = () => {
  return (
    <div className="bg-[url(/images/bg-why-buy.png)] bg-cover bg-center pb-4">
      <div className="mb-8 pt-[102px] pb-14 xl:px-20 md:px-10 px-4 flex lg:flex-row flex-col-reverse items-center justify-between gap-10 max-w-[1440px] mx-auto">
        <Image
          src="/images/ecopaw-token-tilted.svg"
          alt="ecopaw"
          width={438}
          height={335}
          className="object-cover flex-shrink-0 lg:flex hidden w-auto h-auto"
        />
        <Image
          src="/images/ecopaw-token-tilted.svg"
          alt="ecopaw"
          width={438}
          height={335}
          className="object-cover flex-shrink-0 lg:hidden sm:flex hidden w-auto h-auto"
        />
        <Image
          src="/images/ecopaw-token-tilted.svg"
          alt="ecopaw"
          width={438}
          height={335}
          className="object-cover flex-shrink-0 flex sm:hidden w-auto h-auto"
        />
        <div className="w-full max-w-[681px]">
          <h2 className="text-dark-1 sm:text-[56px] text-[32px] font-bold text-left font-space">
            Why buy <span className="text-primary">ECO PAW?</span>
          </h2>
          <div className="font-manrope sm:text-lg sm:leading-[25px] leading-[19px] text-sm font-medium text-dark-2/80 gap-3 flex flex-col mt-12">
            <p>
              <span className="text-primary">1.</span> Commitment to
              Sustainability:
            </p>
            <p>
              Eco Paw stands out in the cryptocurrency landscape for its strong
              commitment to the green economy and sustainability. Investing in
              Eco Paw is equivalent to backing initiatives that promote
              renewable energies, waste reduction, and biodiversity
              conservation.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-8 pt-8 pb-8 xl:px-20 md:px-10 px-4 max-w-[1440px] mx-auto relative grid sm:grid-cols-2 gap-5">
        <div className="font-manrope sm:text-lg text-sm font-medium text-dark-2/80 gap-5 flex flex-col mt-12 sm:leading-[25px] leading-[19px] col-span-1">
          <b>
            <span className="text-primary">2.</span> Participation in an
            Ecological
          </b>
          <p>
            By buying Eco Paw, investors become part of a community aimed at
            making a positive impact on the environment. It&apos;s an
            opportunity to actively contribute to a greener future, joining
            forces with others who share the same values.
          </p>
        </div>

        <div className="font-manrope sm:text-lg text-sm font-medium text-dark-2/80 gap-5 flex flex-col mt-12 sm:leading-[25px] leading-[19px] col-span-1">
          <b>
            <span className="text-primary">3.</span> Technological Innovation:
          </b>
          <p>
            Eco Paw leverages blockchain technology to foster sustainable
            practices, demonstrating how digital finance can be used to
            incentivize environmentally friendly behaviors. This innovative
            approach could open new possibilities for using technology for
            ecological purposes.
          </p>
        </div>

        <div className="font-manrope sm:text-lg text-sm font-medium text-dark-2/80 gap-5 flex flex-col mt-12 sm:leading-[25px] leading-[19px] col-span-1">
          <b>
            <span className="text-primary">4.</span> Growth Potential:
          </b>
          <p>
            Like any cryptocurrency investment, there&apos;s the potential for
            value appreciation. Eco Paw&apos;s unique combination of a
            charismatic meme coin and commitment to sustainability could capture
            market attention, leading to significant growth.
          </p>
        </div>

        <div className="font-manrope sm:text-lg text-sm font-medium text-dark-2/80 gap-5 flex flex-col mt-12 sm:leading-[25px] leading-[19px]">
          <b>
            <span className="text-primary">5.</span> Expression of Values:
          </b>
          <p>
            For many, investing in Eco Paw is a way to express their values and
            aspiration for a better world. It&apos;s a choice that reflects the
            belief that the cryptocurrency sector can contribute to positive
            environmental solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BuySection
