import React from 'react'

const CapBnbSkeleton = () => {
  return (
    <div>
      <div className="mb-3 flex items-start md:gap-10 gap-3 md:flex-row flex-col">
        <div className="w-full md:max-w-[200px] flex flex-col">
          <span className="text-sm text-white/50 h-5 bg-dark-5 animate-pulse rounded-lg"></span>
          <div className="w-[100px] h-5 rounded-lg animate-pulse bg-dark-5 mt-2"></div>
        </div>
        <div className="w-full md:max-w-[200px] flex flex-col">
          <span className="text-sm text-white/50 h-5 bg-dark-5 animate-pulse rounded-lg"></span>
          <div className="w-[100px] h-5 rounded-lg animate-pulse bg-dark-5 mt-2"></div>
        </div>
      </div>
      <div className="mb-3 flex items-center md:gap-10 gap-3 md:flex-row flex-col">
        <div className="w-full md:max-w-[200px] flex flex-col">
          <span className="text-sm text-white/50 h-5 bg-dark-5 animate-pulse rounded-lg"></span>
          <div className="w-[100px] h-5 rounded-lg animate-pulse bg-dark-5 mt-2"></div>
        </div>
        <div className="w-full md:max-w-[200px] flex flex-col">
          <span className="text-sm text-white/50 h-5 bg-dark-5 animate-pulse rounded-lg"></span>
          <div className="w-[100px] h-5 rounded-lg animate-pulse bg-dark-5 mt-2"></div>
        </div>
      </div>
    </div>
  )
}

export default CapBnbSkeleton
