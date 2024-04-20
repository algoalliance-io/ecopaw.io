import React from 'react'
import Image from 'next/image'
import { HiOutlineCheckCircle } from 'react-icons/hi2'
import clsx from 'clsx'

const CapBnb = ({ info }: BookingProps) => {
  return (
    <div>
      <div className="mb-3 flex items-center md:gap-10 gap-3 md:flex-row flex-col">
        <div className="w-full md:max-w-[200px] flex flex-col">
          <span className="text-sm text-white/50">Soft cap</span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-white flex items-center gap-1">
              <span
                className={clsx({
                  blur: !info.is_sale_started,
                })}
              >
                {info.soft_cap}
              </span>
              <Image
                src="/images/bnb-icon.png"
                width={16}
                height={16}
                alt="bnb"
                className="w-auto h-auto"
              />
            </span>
            {info.is_sale_started && (
              <span className="flex items-center gap-1">
                <HiOutlineCheckCircle className="text-primary h-4 w-4" />
                <span className="font-semibold text-base text-primary">
                  Completed
                </span>
              </span>
            )}
          </div>
        </div>
        <div className="w-full md:max-w-[200px] flex flex-col">
          <span className="text-sm text-white/50">Hard cap</span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-white flex items-center gap-1">
              <span
                className={clsx({
                  blur: !info.is_sale_started,
                })}
              >
                {Number(info.hard_cap).toLocaleString()}
              </span>
              <Image
                src="/images/bnb-icon.png"
                width={16}
                height={16}
                alt="bnb"
                className="w-auto h-auto"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="mb-3 flex items-center md:gap-10 gap-3 md:flex-row flex-col">
        <div className="w-full md:max-w-[200px] flex flex-col">
          <span className="text-sm text-white/50">Collected BNB</span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-white flex items-center gap-1">
              <span
                className={clsx({
                  blur: !info.is_sale_started,
                })}
              >
                {info.collected_BNB}
              </span>
              <Image
                src="/images/bnb-icon.png"
                width={16}
                height={16}
                alt="bnb"
                className="w-auto h-auto"
              />
            </span>
          </div>
        </div>
        <div className="w-full md:max-w-[200px] flex flex-col">
          <span className="text-sm text-white/50">Available BNB</span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-white flex items-center gap-1">
              <span
                className={clsx({
                  blur: !info.is_sale_started,
                })}
              >
                {info.available_BNB}
              </span>
              <Image
                src="/images/bnb-icon.png"
                width={16}
                height={16}
                alt="bnb"
                className="w-auto h-auto"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CapBnb
