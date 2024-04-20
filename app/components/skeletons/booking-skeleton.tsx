import React from 'react'
import CapBnbSkeleton from './cap-bnb-skeleton'

const BookingSkeleton = () => {
  return (
    <div className="h-auto rounded-t-3xl bg-dark-8 bg-cover md:px-8 sm:px-6 px-4 pb-6 pt-8 relative z-[50]">
      <div className="w-full md:items-center flex md:flex-row flex-col md:justify-between md:gap-10 gap-3 mb-4 justify-start">
        <div className="h-12 flex flex-col gap-1">
          <h6 className="text-xl font-semibold text-white w-[150px] h-7 animate-pulse rounded-[10px] bg-dark-5"></h6>
          <p className="text-sm text-white/50 flex items-center gap-1 w-[100px] h-5 animate-pulse rounded-[10px] bg-dark-5"></p>
        </div>
        <button className="bg-dark-5 w-[70px] animate-pulse rounded-lg h-[30px]"></button>
      </div>
      <CapBnbSkeleton />
      <h6 className="bg-dark-5 w-[70px] animate-pulse rounded-lg h-5 mt-3"></h6>
      <div className="mt-2 h-3 w-full rounded-3xl animate-pulse bg-dark-5"></div>
    </div>
  )
}

export default BookingSkeleton
