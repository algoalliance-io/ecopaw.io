import React from 'react'
import { CheckCircle } from '@/assets/svgs'

interface Props {
  transactionHash: string
  onClose: () => void
}

const PaymentReceivedModal = ({ transactionHash, onClose }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full justify-center flex items-center">
        <CheckCircle />
      </div>
      <div className="w-full justify-center flex flex-col items-center mt-5">
        <h2 className="text-center font-semibold text-lg text-dark-1">
          Transaction done successfully.
        </h2>
        <p className="text-sm font-medium leading-[19.12px] text-dark-2/80 text-center mt-2">
          We are pleased to inform you that your transaction has been done
          successfully. Kindly note that Ecopaw tokens will be transferred to
          your designated wallets within the next 2-3 minutes.
        </p>
        <p className="text-sm font-medium leading-[19.12px] text-dark-2/80 text-center mt-2 w-full break-all flex flex-col gap-2">
          <span>Your transactions hash id:</span> <span>{transactionHash}</span>
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <button
          onClick={onClose}
          className="bg-primary leading-[16.94px] text-black text-sm font-medium rounded-full w-full p-3 mt-8 hover:bg-primary-1"
        >
          Back to Ecopaw
        </button>
      </div>
    </div>
  )
}

export default PaymentReceivedModal
