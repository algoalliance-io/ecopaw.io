import React, { useEffect, useState } from 'react'
import Countdown, { CountdownRendererFn } from 'react-countdown'
import BookingSkeleton from '../skeletons/booking-skeleton'
import InputAmount from './input-amount'
import Booking from './booking'
import { dummySaleInfo } from './dummy-data'

const PreBooking = () => {
  const [saleInfo, setSaleInfo] = useState<SaleInfo>()
  const [showLoading, setShowLoading] = useState<boolean>(true)

  useEffect(() => {
    setSaleInfo(dummySaleInfo)
    setShowLoading(false)
  }, [])

  // const getInfo = async () => {
  //   try {
  //     const info = await getSaleInfo()
  //     setSaleInfo(info)
  //     setShowLoading(false)
  //   } catch {
  //     setSaleInfo(undefined)
  //     toast.error('Can not fetch presale data')
  //   }
  // }

  return (
    <div className="w-full bg-dark-7 md:h-[1110px] h-[1410px] relative flex items-center py-10 font-manrope">
      <div className="md:px-20 sm:px-10 px-5 flex flex-col items-center lg:gap-14 gap-6 w-full max-w-[785px] mx-auto">
        <div className="w-full" id="buy-ecopaw">
          <p className="text-base font-manrope font-medium text-white/80 text-center leading-[22px] mb-4">
            ECO PAW will not be listed on PancakeSwap at the end of{' '}
            <span className="text-primary">Launchpad</span> but it&apos;s going
            to use its own Liquidity Pool
          </p>
          <h1 className="text-white text-center font-bold md:text-[52px] text-[40px] md:leading-[60px] leading-[46px] font-space">
            Don&apos;t buy into FOMO!{' '}
            <span className="text-primary">Buy NOW</span> before everyone else
            and <span className="text-primary">fuck the Market!!!</span>
          </h1>
          <div className="mt-6 w-[300px] h-[74px] border-[0.5px] border-primary py-2 px-4 bg-[url(/images/bg_timer.png)] bg-cover bg-no-repeat bg-center rounded-[20px] flex gap-[6px] items-center justify-around mx-auto">
            <span className="w-full max-w-[85px] text-xs font-semibold text-white font-manrope">
              Pre-sale will {saleInfo?.is_sale_started ? 'end' : 'start'} in
            </span>
            {/* {showLoading ? (
              <CgSpinner className="inline-block h-6 w-6 animate-spin text-primary" />
            ) : (
              <>
                {saleInfo && (
                  )}
              </>
            )} */}
            <Countdown date={new Date()} renderer={countdownRenderer} />
          </div>
        </div>
        <div className="w-full border-gray-shade-1 border rounded-3xl max-w-[596px] mx-auto z-50">
          {showLoading ? (
            <BookingSkeleton />
          ) : (
            <>{saleInfo && <Booking info={saleInfo} />}</>
          )}
          <InputAmount />
        </div>
      </div>
    </div>
  )
}

export default PreBooking

// Countdown Renderer
const countdownRenderer: CountdownRendererFn = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div className="flex gap-6 font-manrope">
      <div className="flex flex-col items-center">
        <h6 className="text-sm font-semibold text-white">{days}</h6>
        <p className="text-[10px] font-medium text-white/[50%]">DAYS</p>
      </div>
      <div className="flex flex-col items-center">
        <h6 className="text-sm font-semibold text-white">{hours}</h6>
        <p className="text-[10px] font-medium text-white/[50%]">HOURS</p>
      </div>
      <div className="flex flex-col items-center">
        <h6 className="text-sm font-semibold text-white">{minutes}</h6>
        <p className="text-[10px] font-medium text-white/[50%]">MIN</p>
      </div>
      <div className="flex flex-col items-center">
        <h6 className="text-sm font-semibold text-white">{seconds}</h6>
        <p className="text-[10px] font-medium text-white/[50%]">SEC</p>
      </div>
    </div>
  )
}
