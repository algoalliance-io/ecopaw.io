import React from 'react'
import Image from 'next/image'

const DescriptionSection = () => {
  return (
    <div className="bg-[url(/images/bg-who.png)] bg-cover bg-center p-4">
      <div className="w-full justify-center relative font-manrope max-w-[1280px] mx-auto">
        <div className="mb-8 pt-8 pb-8 flex lg:flex-row flex-col items-center justify-between gap-10 relative">
          <div className="w-full max-w-[681px]">
            <h2 className="text-dark-1 sm:text-[56px] text-[32px] font-bold text-left font-space">
              What is <span className="text-primary">ECO PAW?</span>
            </h2>
            <div className="font-manrope sm:text-lg text-sm font-medium text-dark-2/80 gap-5 flex flex-col mt-12 sm:leading-[25px] leading-[19px]">
              <p>
                Eco Paw is not just a captivating Border Collie at the heart of this Bull Run&apos;s most engaging meme coin; it&apos;s a movement.
              </p>
              <p>
              Designed for those who treasure their furry friends and the planet, EcoPaw Coin
              fuels a blockchain-based ecosystem that’s all about positive action. Every
              transaction supports animal welfare and champions environmental sustainability,
              making it the perfect choice for pet lovers and eco-warriors alike. It’s crypto with
              a conscience, where the well-being of pets and the health of our planet go
              hand in hand.
              </p>
            </div>
          </div>
          <Image
            src="/images/ecopaw-logo.png"
            alt="ecopaw"
            width={480}
            height={480}
            className="object-cover flex-shrink-0 lg:flex hidden w-auto h-auto"
          />
          <Image
            src="/images/ecopaw-logo.png"
            alt="ecopaw"
            width={657}
            height={657}
            className="object-cover flex-shrink-0 lg:hidden sm:flex hidden w-auto h-auto"
          />
          <Image
            src="/images/ecopaw-logo.png"
            alt="ecopaw"
            width={375}
            height={375}
            className="object-cover flex-shrink-0 flex sm:hidden w-auto h-auto"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-9 w-full max-w-[1280px] mx-auto font-space">
        <div className="lg:p-8 sm:p-6 p-4 flex flex-col md:gap-8 gap-5 border border-dark-2/80 bg-gray-shade-2/80 rounded-3xl filter backdrop-blur-[54px]">
          <div className="px-4 py-1.5 rounded-full w-fit text-base font-medium border border-dark-2/80 text-dark-1">
            Investors
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-dark-1 font-bold">
              Investors drawn to Eco Paw are not just participating in a
              cryptocurrency venture;
            </p>
            <p className="text-dark-2 font-medium text-sm font-manrope">
            Investors in EcoPaw Coin aren’t just backing a cryptocurrency; they’re joining a
            forward-thinking community committed to creating a tangible impact. With
            EcoPaw, investors have the opportunity to support a project that integrates pet
            care with environmental conservation, all powered by blockchain technology. It’s
            an investment that looks beyond mere financial returns to foster a healthier
            world for pets and a greener planet for everyone. By choosing EcoPaw,
            investors are placing their trust in a future where finance and philanthropy work
            in harmony.
            </p>
          </div>
        </div>
        <div className="lg:p-8 sm:p-6 p-4 flex flex-col md:gap-8 gap-5 border border-dark-2/80 bg-gray-shade-2/80 rounded-3xl filter backdrop-blur-[54px]">
          <div className="px-4 py-1.5 rounded-full w-fit text-base font-medium border border-dark-2/80 text-dark-1">
            Sustainability
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-dark-1 font-bold">
              How we think about sustainability in the digital age.
            </p>
            <p className="text-dark-2 font-medium text-sm font-manrope">
              EcoPaw Coin stands at the forefront of sustainable crypto initiatives, embodying
              an ethos where every digital transaction contributes to real-world environmental
              preservation and traceability. By utilizing blockchain technology, EcoPaw
              ensures transparency and efficiency, tracking all aliments that our Lovet pets
              consume and in funding eco-friendly projects, from reforestation efforts to
              wildlife protection. This commitment to sustainability not only supports the
              planet but also offers a greener option for crypto enthusiasts who are conscious
              of their environmental impact. With EcoPaw, sustainability isn't just a feature—
              it's the foundation of our mission to harmonize cryptocurrency with ecological
              responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionSection
