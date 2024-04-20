import React from 'react'

interface CustomModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
  disable?: string
}

export const CustomModal: React.FC<CustomModalProps> = (props) => {
  return (
    <div
      className={`fixed inset-0 z-[5000] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none backdrop-blur-lg backdrop-filter focus:outline-none 
    `}
    >
      {/*content*/}
      <div
        className={`relative mx-3 flex w-full flex-col rounded-xl bg-white p-4 focus:outline-none max-w-[400px]`}
      >
        {/*header*/}

        <div className={`max-h-[600px] overflow-y-auto`}>{props.children}</div>
      </div>
    </div>
  )
}
