import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import CapBnb from './cap-bnb'

const Booking = ({ info }: BookingProps) => {
  return (
    <div className=" h-auto rounded-t-3xl bg-dark-8 bg-cover md:px-8 sm:px-6 px-4 pb-6 pt-8 relative z-[50]">
      <div className="w-full md:items-center flex md:flex-row flex-col md:justify-between md:gap-10 gap-3 mb-4 justify-start">
        <div>
          <h6 className="text-xl font-semibold text-white">ECO PAW Coin</h6>
          <p className="text-sm text-white/50 flex items-center gap-1">
            <span className="text-sm font-semibold text-primary flex items-center gap-1">
              <span
              // className={clsx({
              //   blur: !info.is_sale_started,
              // })}
              >
                1 ECOPAW = {info.ecopaw_price}{' '}
              </span>
              <Image
                src="/images/bnb-icon.png"
                width={16}
                height={16}
                alt="bnb"
                className="w-auto h-auto"
              />
            </span>
          </p>
        </div>
        <button className="bg-primary/[16%] w-[69px] text-primary rounded-lg px-3 text-xs font-semibold h-[30px] flex items-center justify-center">
          Coming
        </button>
      </div>
      <CapBnb info={info} />
      <h6 className="text-sm font-medium text-white/50 mt-3">Invested</h6>
      <div
        className={clsx(
          'relative mt-2 h-3 w-full overflow-hidden rounded-3xl',
          info.receivableTokenCollectionPercentage < 75 && `bg-primary/[0.16]`,
          info.receivableTokenCollectionPercentage >= 75 &&
            info.receivableTokenCollectionPercentage < 100 &&
            `bg-primary/[20%]`,
          (info.receivableTokenCollectionPercentage === 100 ||
            info.is_sold_out) &&
            `bg-primary/[20%]`,
        )}
      >
        <div
          style={{
            width: `${info.receivableTokenCollectionPercentage}%`,
          }}
          className={clsx(
            info.receivableTokenCollectionPercentage < 75 && `bg-primary`,
            info.receivableTokenCollectionPercentage >= 75 &&
              info.receivableTokenCollectionPercentage < 100 &&
              `bg-primary`,
            (info.receivableTokenCollectionPercentage === 100 ||
              info.is_sold_out) &&
              `bg-[#EA3943]`,
            `absolute top-0 z-50 h-3 rounded-3xl`,
          )}
        ></div>
      </div>
    </div>
  )
}

export default Booking
