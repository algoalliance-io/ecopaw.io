import React from 'react'
import Image from 'next/image'

const DescriptionSection = () => {
  return (
    <div className="bg-[url(/images/bg-who.png)] bg-cover bg-center p-4">
      <div className="w-full justify-center relative font-manrope max-w-[1280px] mx-auto">
        <div className="mb-8 pt-8 pb-8 flex lg:flex-row flex-col items-center justify-between gap-10 relative">
          <div className="w-full max-w-[681px]">
            <h2 className="text-dark-1 sm:text-[56px] text-[32px] font-bold text-left font-space">
              Who is <span className="text-primary">ECO PAW?</span>
            </h2>
            <div className="font-manrope sm:text-lg text-sm font-medium text-dark-2/80 gap-5 flex flex-col mt-12 sm:leading-[25px] leading-[19px]">
              <p>
                Eco Paw is not just a captivating Border Collie at the heart of
                this Bull Run&apos;s most engaging meme coin;
              </p>
              <p>
                It represents much more. Embodied within Eco Paw is a profound
                commitment to sustainability and the principles of the green
                economy. This meme coin transcends mere digital currency,
                symbolizing a movement towards environmentally friendly
                practices and the promotion of a sustainable future for
                humanity.
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
              They are aligning with a project that prioritizes ecological
              initiatives. The ethos of Eco Paw includes supporting projects and
              partnerships that focus on renewable energy, waste reduction, and
              the preservation of natural habitats. This alignment with
              environmental stewardship offers a unique proposition in the
              crypto space, where investors can contribute to a greener planet
              while engaging in the digital economy.
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
              Moreover, Eco Paw&apos;s integration of blockchain technology with
              eco-friendly initiatives could potentially revolutionize how we
              think about sustainability in the digital age. By leveraging smart
              contracts and decentralized finance (DeFi) mechanisms, Eco Paw
              aims to incentivize green behaviors and fund projects that have a
              tangible positive impact on the environment.
            </p>
            <p className="text-dark-2 font-medium text-sm font-manrope">
              For investors, Eco Paw offers an opportunity to be part of a
              pioneering movement that blends the dynamic world of
              cryptocurrency with the imperative of ecological sustainability.
              It&apos;s a chance to invest in a future where technology and
              nature coexist harmoniously, paving the way for a healthier planet
              and a more conscientious approach to digital finance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionSection
