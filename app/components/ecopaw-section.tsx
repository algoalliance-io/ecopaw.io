import React from 'react'
import Image from 'next/image'

const EcopawSection = () => {
  return (
    <div className="bg-[url(/images/bg-different-section.png)] bg-center bg-cover">
      <div className="py-[102px] xl:px-20 md:px-10 px-4 flex lg:flex-row flex-col justify-between gap-10 max-w-[1440px] mx-auto">
        <div className="w-full lg:max-w-[680px] max-w-full flex flex-col">
          <h2 className="text-dark-1 sm:text-[56px] sm:leading-[60px] text-[32px] leading-[37px] font-bold text-left font-space">
            What Sets EcoPaw Apart from Other Meme Coins{' '}
            <span className="text-primary">Meme Coins?</span>
          </h2>
          <div className="font-manrope sm:text-lg text-sm font-medium text-dark-2/80 space-y-5 mt-12 sm:leading-[25px] leading-[19px]">
            <p>
              Unlike typical meme coins that often lack tangible utility or a clear mission,
              EcoPaw Coin stands out with its robust integration of groundbreaking
              technological features and a strong ethical foundation. EcoPaw goes beyond
              mere transactions by introducing innovative solutions like Digital Pet Passports
              and ethical food supply control systems. These Digital Pet Passports serve as
              immutable digital identities for pets, encapsulating everything from medical
              history to vaccination records, thus streamlining pet care and ensuring
              continuity across different care providers. This technology enhances the
              traceability and safety of pet management within the blockchain ecosystem.
            </p>
            <p>
              Moreover, EcoPaw is pioneering the use of blockchain technology to oversee
              and verify the ethical sourcing of pet food products. Through smart contracts,
              EcoPaw ensures that every item in the pet food supply chain is ethically sourced
              and sustainably produced, providing pet owners with unparalleled transparency
              and peace of mind. This commitment to ethical standards sets EcoPaw apart,
              making it not just a financial investment but also a moral choice that resonates
              with pet owners and environmentalists alike.
            </p>
            <p>
              By focusing on these practical and impactful applications, EcoPaw Coin
              transcends the typical scope of meme coins, offering both innovative solutions
              and real-world utility that contribute to a healthier planet and happier pets. This
              unique blend of technology and ethics not only enhances the value of EcoPaw
              but also solidifies its position as a leader in the movement towards more
              sustainable and responsible crypto initiatives
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center lg:w-[438px] lg:flex-shrink-0">
          <Image
            src="/images/ecopaw-group.svg"
            alt="ecopaw"
            width={438}
            height={315}
            className="object-cover flex-shrink-0 lg:flex hidden w-full h-auto max-w-[438px] max-h-[315px]"
          />
          <Image
            src="/images/ecopaw-group.svg"
            alt="ecopaw"
            width={657}
            height={657}
            className="object-cover flex-shrink-0 lg:hidden sm:flex hidden w-full h-auto max-w-[657px] max-h-[657px]"
          />
          <Image
            src="/images/ecopaw-group.svg"
            alt="ecopaw"
            width={375}
            height={375}
            className="object-cover flex-shrink-0 flex sm:hidden w-auto h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default EcopawSection
