import React from 'react'
import Image from 'next/image'

const Tutorial = () => {
  // px-4 sm:px-8 lg:px-12 xxl:px-20 max-w-7xl
  // max-w-7xl
  return (
    <div className="bg-[#F0F2ED] font-space text-dark-1 ">
      <div className="main mx-auto pt-[35%] sm:pt-[20%] lg:pt-[14%]">
        <div className="custom-container">
          <h1 className="font-bold text-3xl lg:text-5xl xxl:text-[3.3rem] !leading-normal">
            Let&apos;s learn How to join community and enjoy{' '}
            <span className="text-primary">
              EcoPaw Presale live on Centher.io!
            </span>
          </h1>
          <p className="font-bold text-lg lg:text-xl xxl:text-2xl py-5 lg:py-6 xxl:py-10">
            EcoPaw Presale is live on Centher.io! <br />
            Follow these easy steps to join the community and be a part of a
            revolutionising force that will enhance pet care to its maximum.
          </p>
        </div>
        <div className="custom-list-bullet">
          <h4 className="font-bold text-lg lg:text-xl xxl:text-2xl text-primary pt-4 custom-container">
            Steps to register:
          </h4>
          <div className="lg:text-lg xxl:text-xl text-sm font-medium text-dark-2/80 gap-6 flex flex-col mt-6 lg:mt-7 xxl:mt-9">
            <div className="pattern1-parent relative overflow-hidden">
              <Image
                src="/images/learning-bg-1.png"
                alt="pattern"
                width={1248}
                height={657}
                className="absolute w-full h-full object-cover top-[-15%]"
              />
              <div className="gap-6 flex flex-col custom-container">
                <ul className="gap-6 flex flex-col">
                  <li>
                    Make sure you have BNB in your wallet and you are connected
                    to Binance Smart Chain.
                  </li>
                  <li>
                    Navigate to{' '}
                    <a
                      className="text-primary underline"
                      target="_blank"
                      href="https://app.centher.io/"
                    >
                      app.centher.io
                    </a>{' '}
                    from mobile or desktop and click on Register Now which you
                    can see in the image below inside of the green rectangle.
                  </li>
                </ul>
                <div className="p-4 border flex justify-center items-center rounded-2xl lg:rounded-3xl border-dark-2/10 bg-gray-shade-2 mb-6 lg:mb-10 xxl:mb-12">
                  <Image
                    src="/images/step-1.png"
                    alt="register to centher"
                    width={1248}
                    height={657}
                    className="rounded-2xl lg:rounded-3xl z-10"
                  />
                </div>
              </div>
            </div>

            <ul className="gap-6 flex flex-col custom-container">
              <li>
                Click on Connect Wallet button indicated by the green arrow in
                the image below.
              </li>
              <div className="p-4 border flex justify-center items-center rounded-2xl lg:rounded-3xl border-dark-2/10 bg-gray-shade-2 mb-6 lg:mb-10 xxl:mb-12">
                <Image
                  src="/images/step-2.png"
                  alt="connect wallet"
                  width={1248}
                  height={657}
                  className="rounded-2xl lg:rounded-3xl"
                />
              </div>
              <li>
                If you do not have a wallet, follow the steps in this{' '}
                <a
                  className="text-primary underline"
                  target="_blank"
                  href="https://centher.io/academy/centher-features#Connecting-with-Wallet-For-Dummies"
                >
                  video on Centher Academy
                </a>{' '}
                to create one using email and password and add funds to it.
              </li>
              <li>
                If you already have a wallet, click on Wallet Connect to select
                your wallet provider (Ex. choose Metamask).
              </li>
              <li>
                Choose the wallet address you want to connect to Centher and
                click Next, then click on Connect.
              </li>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center p-4 border rounded-2xl lg:rounded-3xl border-dark-2/10 bg-gray-shade-2">
                <Image
                  src="/images/step-3.png"
                  alt="connect wallet step 2"
                  width={616}
                  height={602}
                  className="rounded-2xl lg:rounded-3xl"
                />
                <Image
                  src="/images/step-4.png"
                  alt="choose wallet step 1"
                  width={616}
                  height={602}
                  className="rounded-2xl lg:rounded-3xl"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center p-4 border rounded-2xl lg:rounded-3xl border-dark-2/10 bg-gray-shade-2 mb-6 lg:mb-10 xxl:mb-12">
                <Image
                  src="/images/step-5.png"
                  alt="choose wallet step 2"
                  width={616}
                  height={602}
                  className="rounded-2xl lg:rounded-3xl"
                />
                <Image
                  src="/images/step-6.png"
                  alt="connect to tutorial"
                  width={616}
                  height={602}
                  className="rounded-2xl lg:rounded-3xl"
                />
              </div>
            </ul>

            <div className="pattern2-parent relative overflow-hidden">
              <Image
                src="/images/learning-bg-2.png"
                alt="pattern"
                width={1840}
                height={657}
                className="absolute w-full h-full object-cover top-[-5%] z-0"
              />
              <div className="gap-6 flex flex-col custom-container relative z-30">
                <ul className="gap-6 flex flex-col">
                  <li>
                    Once the wallet is connected, type in the Referral Address
                    input field the following wallet address
                    <span className="break-words">
                      ( 0xe8b6768eabafec20b48dd49d4f69d4c214d62017 )
                    </span>{' '}
                    to pay only gas fees during registration and avoid
                    registration fees.
                  </li>
                  <div className="p-4 border flex justify-center items-center rounded-2xl lg:rounded-3xl border-dark-2/10 bg-gray-shade-2 mb-6 lg:mb-10 xxl:mb-12">
                    <Image
                      src="/images/step-7.png"
                      alt="add refferal address"
                      width={1248}
                      height={657}
                      className="rounded-2xl lg:rounded-3xl"
                    />
                  </div>
                  <li>
                    Then check the checkbox to agree to the platform&apos;s
                    Terms and Conditions.
                  </li>
                  <li>
                    Click on Register button you find below Terms and Conditions
                    text.
                  </li>
                  <div className="p-4 border flex justify-center items-center rounded-2xl lg:rounded-3xl border-dark-2/10 bg-gray-shade-2 mb-6 lg:mb-10 xxl:mb-12">
                    <Image
                      src="/images/step-8.png"
                      alt="register your self"
                      width={1248}
                      height={657}
                      className="rounded-2xl lg:rounded-3xl"
                    />
                  </div>
                </ul>
              </div>
            </div>

            <div className="pattern3-parent relative overflow-hidden">
              <Image
                src="/images/learning-bg-3.png"
                alt="pattern"
                width={381}
                height={556}
                className="absolute object-cover top-0 right-0 z-0"
              />
              <div className="gap-6 flex flex-col custom-container relative z-30">
                <ul className="gap-6 flex flex-col">
                  <li>
                    When the modal opens, click on <b>Join for free.</b>
                  </li>
                  <li>
                    Confirm the registration by clicking on Confirm inside of
                    the wallet provider window that opens.
                  </li>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center p-4 border rounded-2xl lg:rounded-3xl border-dark-2/10 bg-gray-shade-2 mb-6 lg:mb-10 xxl:mb-12">
                    <Image
                      src="/images/step-9.png"
                      alt="join for free"
                      width={616}
                      height={602}
                      className="rounded-2xl lg:rounded-3xl"
                    />
                    <Image
                      src="/images/step-10.png"
                      alt="confirm registration"
                      width={616}
                      height={602}
                      className="rounded-2xl lg:rounded-3xl"
                    />
                  </div>
                  <li>Click on Continue.</li>
                  <li>
                    Lastly, click on Sign to sign the agreement to enter the
                    platform.
                  </li>
                  <li>
                    Once you are inside of the platform, a small banner on the
                    bottom of the page asks you to accept or decline the
                    app&apos;s cookies. You can choose whichever option you
                    desire.
                  </li>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center p-4 border rounded-2xl lg:rounded-3xl border-dark-2/10 bg-gray-shade-2 mb-6 lg:mb-10 xxl:mb-12">
                    <Image
                      src="/images/step-11.png"
                      alt="click continue"
                      width={616}
                      height={602}
                      className="rounded-2xl lg:rounded-3xl"
                    />
                    <Image
                      src="/images/step-12.png"
                      alt="Signature Request"
                      width={616}
                      height={602}
                      className="rounded-2xl lg:rounded-3xl"
                    />
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="pb-20 gap-6 flex flex-col">
            <div className="pattern4-parent relative overflow-hidden">
              <Image
                src="/images/learning-bg-4.png"
                alt="pattern"
                width={1840}
                height={657}
                className="absolute w-full h-full object-cover top-[-30%] z-0"
              />
              <div className="gap-6 flex flex-col custom-container relative z-30">
                <h1 className="font-bold text-3xl lg:text-5xl xxl:text-[3.3rem] !leading-normal">
                  You are almost on the way to{' '}
                  <span className="text-primary">EcoPaw Presale</span>
                </h1>

                <h4 className="font-bold text-lg lg:text-xl xxl:text-2xl text-primary pt-4">
                  Steps to buy EcoPaw:
                </h4>
                <ul className="gap-6 flex flex-col">
                  <li>
                    After you accept or decline the cookies, you see
                    Centher&apos;s Feeds page.
                  </li>
                  <li>
                    If you are on desktop, click on Launchpad List which you
                    find in the left menu. If you are on mobile, open the menu
                    by clicking on the menu icon on the top right corner and
                    then click on Launchpad List.
                  </li>
                </ul>
                <div className="p-4 border flex justify-center items-center rounded-2xl lg:rounded-3xl border-dark-2/10 bg-gray-shade-2 mb-6 lg:mb-10 xxl:mb-12">
                  <Image
                    src="/images/step-13.png"
                    alt="launchpad list"
                    width={1248}
                    height={657}
                    className="rounded-2xl lg:rounded-3xl"
                  />
                </div>
              </div>
            </div>

            <div className="pattern5-parent relative overflow-hidden">
              <Image
                src="/images/learning-bg-5.png"
                alt="pattern"
                width={1440}
                height={657}
                className="absolute w-full object-cover bottom-[5%] z-0"
              />
              <ul className="gap-6 flex flex-col custom-container relative z-30">
                <li>
                  When the page loads, click on View on EcoPaw presale preview
                  to open the Launchpad.
                </li>
                <div className="p-4 border flex justify-center items-center rounded-2xl lg:rounded-3xl border-dark-2/10 bg-gray-shade-2 mb-6 lg:mb-10 xxl:mb-12">
                  <Image
                    src="/images/step-14.png"
                    alt="view the cards of eco paw"
                    width={1248}
                    height={657}
                    className="rounded-2xl lg:rounded-3xl"
                  />
                </div>
                <li>
                  Inside of the EcoPaw Launchpad Overview you find the component
                  which allows you to buy the tokens during the presale. Enter
                  the amount of your choice and purchase from a minimum of 50
                  USDT to a maximum of 25,000 USDT and join the community!
                </li>
                <div className="p-4 border flex justify-center items-center rounded-2xl lg:rounded-3xl border-dark-2/10 bg-gray-shade-2">
                  <Image
                    src="/images/step-15.png"
                    alt="view the cards of eco paw"
                    width={1248}
                    height={657}
                    className="rounded-2xl lg:rounded-3xl"
                  />
                </div>
                <li>
                  Your tokens will be released 50% one month after purchase and
                  50% the next month, so you will have 100% of your tokens 2
                  months after purchase.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tutorial
