import { LoaderIcon } from '@/assets/svgs'
import React from 'react'

interface Props {
  onClose: () => void
}
const TransactionProgress = ({ onClose }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full justify-center flex items-center">
        <LoaderIcon className="mx-auto animate-spin" />
      </div>
      <div className="w-full justify-center flex flex-col items-center mt-5">
        <h2 className="text-center font-semibold text-lg text-dark-1">
          Transaction in progress
        </h2>
        <p className="text-sm font-medium leading-[19.12px] text-dark-2/80 text-center mt-2">
          Your transaction is in progress, Please wait.
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <button
          onClick={onClose}
          className="bg-primary leading-[16.94px] text-black text-sm font-medium rounded-full w-full p-3 mt-8 hover:bg-primary-1"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default TransactionProgress
