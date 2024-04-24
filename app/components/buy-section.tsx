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
              <span className="text-primary">1.</span> Technological Innovation:
            </p>
            <p>
              EcoPaw Coin leverages cutting-edge blockchain
              technology to offer a secure, transparent, and efficient platform. With features
              like NFT Pet Passports, Food supply tracking and smart contracts for automated
              charitable donations, EcoPaw is at the forefront of integrating advanced
              technological solutions with everyday transactions. This innovation not only
              enhances the usability and functionality of the token but also ensures that each
              transaction contributes to a greater cause while setting new standards in the
              crypto-space for functionality and purpose-driven utility.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-8 pt-8 pb-8 xl:px-20 md:px-10 px-4 max-w-[1440px] mx-auto relative grid sm:grid-cols-2 gap-5">
        <div className="font-manrope sm:text-lg text-sm font-medium text-dark-2/80 gap-5 flex flex-col mt-12 sm:leading-[25px] leading-[19px] col-span-1">
          <b>
            <span className="text-primary">2.</span> Commitment to Sustainability:
          </b>
          <p>
            Purchasing EcoPaw Coin is more than an
            investment in cryptocurrency; it&apos;s a step towards a sustainable future. EcoPaw is
            committed to funding projects that enhance animal welfare and protect the
            environment, ensuring that every coin spent contributes directly to sustainable
            initiatives. This approach allows investors and users to participate actively in
            crucial conservation efforts, using blockchain&apos;s power to make a meaningful,
            positive impact on the planet.
          </p>
        </div>

        <div className="font-manrope sm:text-lg text-sm font-medium text-dark-2/80 gap-5 flex flex-col mt-12 sm:leading-[25px] leading-[19px] col-span-1">
          <b>
            <span className="text-primary">3.</span> Growth Potential:
          </b>
          <p>
            EcoPaw Coin is positioned for significant growth within
            the booming sectors of cryptocurrency and sustainable practices. As awareness
            and demand for eco-friendly solutions and ethical investments increase, EcoPaw
            stands out as a pioneering option that combines these elements with the
            expansive reach of digital currencies. The innovative use of blockchain to
            support environmental and animal welfare projects presents a compelling case
            for appreciation in value, driven by both market dynamics and the increasing
            involvement of socially conscious investors. This dual appeal makes EcoPaw a
            promising investment for those looking to diversify into a crypto asset with
            substantial potential for both impact and returns.
          </p>
        </div>

        <div className="font-manrope sm:text-lg text-sm font-medium text-dark-2/80 gap-5 flex flex-col mt-12 sm:leading-[25px] leading-[19px] col-span-1">
          <b>
            <span className="text-primary">4.</span> Community/DAO:
          </b>
          <p>
            EcoPaw Coin is not just a cryptocurrency; it&apos;s a vibrant,
            engaged community united by a shared passion for animal welfare and
            environmental conservation. By purchasing EcoPaw, you become part of a
            global network of like-minded individuals who are actively involved in shaping
            the project’s direction through decentralized governance and community-driven
            initiatives. This DAO aspect provides a platform for networking, collaboration,
            and mutual support, enhancing the value of your investment by connecting you
            with other enthusiasts and stakeholders who are equally committed to making a
            positive impact.
          </p>
        </div>

        <div className="font-manrope sm:text-lg text-sm font-medium text-dark-2/80 gap-5 flex flex-col mt-12 sm:leading-[25px] leading-[19px]">
          <b>
            <span className="text-primary">5.</span> Expression of Values:
          </b>
          <p>
            Investing in EcoPaw Coin is a powerful way to express
            and align your personal values with your financial activities. It offers an
            opportunity to support a project that prioritizes ethical considerations, animal
            welfare, and environmental sustainability. By choosing EcoPaw, you are casting
            a vote for a future where technology and commerce contribute positively to the
            world. It’s a choice that reflects a commitment to fostering a better planet and
            supporting a community that values responsibility and proactive change,
            making it an ideal investment for those who want their assets to reflect their
            principles.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BuySection
