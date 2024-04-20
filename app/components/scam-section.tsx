import React from 'react'
import Image from 'next/image'

const EcopawScamSection = () => {
  return (
    <div className="bg-[url(/images/bg-different-section.png)] bg-center bg-cover">
      <div className="py-[102px] xl:px-20 md:px-10 px-4 flex lg:flex-row flex-col justify-between gap-10 max-w-[1440px] mx-auto">
        <div className="w-full lg:max-w-[680px] max-w-full flex flex-col">
          <h2 className="text-dark-1 sm:text-[56px] sm:leading-[60px] text-[32px] leading-[37px] font-bold text-left font-space">
            What is different about ECO PAW from other{' '}
            <span className="text-primary">Meme Coins?</span>
          </h2>
          <div className="font-manrope sm:text-lg text-sm font-medium text-dark-2/80 space-y-5 mt-12 sm:leading-[25px] leading-[19px]">
            <p>
              At EcoPaw Coin, our mission transcends empowering global
              contributions to animal welfare and environmental sustainability.
              We aim to revolutionize the pet care ecosystem by introducing a
              secure, transparent, and innovative cryptocurrency platform.
            </p>
            <p>
              EcoPaw Coin is not merely a currency; it&apos;s a commitment to
              ensuring the health and happiness of our pets. By enabling pet
              food producers to use EcoPaw Coin for transactions, we introduce
              an unprecedented level of traceability in the procurement of pet
              food ingredients.
            </p>
            <p>
              This ensures that pet owners can confidently trace the provenance
              of everything their pets consume, guaranteeing only the highest
              quality, ethically sourced, and environmentally sustainable
              products make it to their bowl. EcoPaw Coin is where the
              well-being of our pets meets the health of our planet, ensuring
              every transaction nurtures the bond between pet lovers and their
              cherished companions, all while fostering a greener earth
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

export default EcopawScamSection
