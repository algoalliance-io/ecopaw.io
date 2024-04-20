import React from 'react'
import { MaintainanceIcon } from '@/assets/svgs'

interface Props {
  onClose: () => void
}

const PreWarningModal = ({ onClose }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full justify-center flex items-center">
        <MaintainanceIcon />
      </div>
      <div className="w-full justify-center flex flex-col items-center mt-5">
        <h2 className="text-center font-semibold text-lg text-dark-1">
          We are upgrading our servers
        </h2>
        <p className="text-sm font-medium leading-[19.12px] text-dark-2/80 text-center mt-2">
          Next Tuesday we are going to face a couple of hours down time due to
          upgrading of our servers, to respond to higher amount of requests.
          Stay tuned for new exciting updates! You can still use the page as
          always until maintenance page comes up.
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <button
          onClick={onClose}
          className="bg-primary leading-[16.94px] text-black text-sm font-medium rounded-full hover:text-white w-full p-3 mt-8 hover:bg-primary-1"
        >
          Understood
        </button>
      </div>
    </div>
  )
}

export default PreWarningModal
