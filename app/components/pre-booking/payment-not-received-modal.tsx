import React from 'react'
import { AlertCircle } from '@/assets/svgs'

const PaymentNotReceivedModal = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full justify-center flex items-center">
        <AlertCircle />
      </div>
      <div className="w-full justify-center flex flex-col items-center mt-5">
        <h2 className="text-center font-semibold text-lg text-dark-1">
          Something went wrong
        </h2>
        <p className="text-sm font-medium leading-[19.12px] text-dark-2/80 text-center mt-2">
          Ops! Something went wrong and we couldn&apos;t receive your payment!
          Check your wallet to see if you have enough for gas fees and try again
        </p>
      </div>
      <div className="w-full flex gap-2 sm:flex-row flex-col-reverse justify-center items-center mt-8">
        <button className="border-primary border bg-transparent leading-[16.94px] text-black text-sm font-medium rounded-full w-full p-3">
          Cancel
        </button>
        <button className="bg-primary leading-[16.94px] text-black text-sm font-medium rounded-full w-full p-3  hover:bg-primary-1">
          Try again
        </button>
      </div>
    </div>
  )
}

export default PaymentNotReceivedModal
