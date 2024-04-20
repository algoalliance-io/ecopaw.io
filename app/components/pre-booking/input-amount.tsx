'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IModalHandler, ModalManager, TemplateCollection } from '@/utils/modal'
import { CustomNumberInput } from '../custom-number-input'
import { CustomModal } from '../modals/custom-modal'
import PaymentReceivedModal from './payment-received-modal'
import PaymentNotReceivedModal from './payment-not-received-modal'
import TransactionProgress from './progess-transaction'

const InputAmount = () => {
  const modalTemplateCollection: TemplateCollection = {
    paymentReceived: {
      title: 'Transaction Done',
      visibility: true,
      content: (transactionHash: string) => (
        <PaymentReceivedModal
          transactionHash={transactionHash}
          onClose={() => modal.dismissModal()}
        />
      ),
    },
    paymentNotReceived: {
      title: 'Payment not received',
      visibility: true,
      content: () => <PaymentNotReceivedModal />,
    },
    transactionProgress: {
      title: 'Transaction in progress',
      visibility: true,
      content: () => (
        <TransactionProgress onClose={() => closeTransactionProgressModal()} />
      ),
    },
  }
  const [ModalModel, setModalModel] = useState<IModalHandler>({
    visibility: false,
    title: '',
    content: '',
  })

  const modal = new ModalManager(setModalModel, modalTemplateCollection)

  const closeTransactionProgressModal = () => {
    modal.dismissModal()
  }

  return (
    <div className="py-6 px-8 bg-dark-5 rounded-b-3xl">
      <div className="flex items-center gap-2 mt-3 w-full md:flex-row flex-col">
        <div className="w-full">
          <label
            htmlFor="bnb"
            className="text-xs font-medium text-white/[80%] "
          >
            What BNB amount do you wish to invest?
          </label>
          <div className="w-full py-3 px-4 border border-white/[0.06] focus-within:border-primary rounded-[14px] mt-2 bg-dark-4 flex items-center">
            <CustomNumberInput
              name={'payment_token_symbol'}
              id={'payment_token_symbol'}
              placeholder="Only BNB"
              className="foucs:outline-none w-full bg-transparent border-0 focus:ring-0 focus-visible:ring-0 focus-visible:outline-none flex-grow text-white"
              min={0}
            />
            <Image
              alt="bnb"
              src="/images/bnb-icon.png"
              width={18}
              height={18}
              className="flex-shrink-0 w-auto h-auto"
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="bnb" className="text-xs font-medium text-white/[80%]">
            The ECO PAW Token you will receive
          </label>
          <div className="w-full py-3 px-4 border border-white/[0.06] focus-within:border-primary rounded-[14px] mt-2 bg-dark-4 flex items-center">
            <CustomNumberInput
              readOnly
              name={'payment_token_symbol'}
              id={'payment_token_symbol'}
              placeholder="=0 ECOPAW"
              className="foucs:outline-none w-full bg-transparent border-0 focus:ring-0 focus-visible:ring-0 focus-visible:outline-none flex-grow text-white"
              min={0}
            />
            <Image
              alt="logo"
              src="/images/ecopaw-logo.png"
              width={18}
              height={18}
              className="flex-shrink-0 w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <button
        disabled
        className="text-sm font-semibold text-black py-3 bg-primary rounded-full w-full mb-2 mt-6"
      >
        The sale starts soon
      </button>

      {ModalModel.visibility && (
        <CustomModal
          onClose={() => {
            modal.dismissModal()
          }}
          title={ModalModel.title as string}
        >
          {ModalModel.content}
        </CustomModal>
      )}
    </div>
  )
}

export default InputAmount
