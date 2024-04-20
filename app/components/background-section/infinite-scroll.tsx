import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  portion: {
    id: number
    images: [
      {
        src: string
        link: string
      },
    ]
  }
}

const InfiniteScroll = ({ portion }: Props) => {
  return (
    <div className="flex mx-auto min-h-[140px] h-auto gap-16 flex-wrap items-center justify-center px-3">
      <div className="flex gap-16 items-center min-h-[140px] flex-wrap h-auto justify-center">
        {portion.images.map((company, index) => (
          <Link href={company.link} key={index}>
            <Image
              src={company.src}
              width={260}
              height={139}
              alt="ecopaw"
              className="object-contain xl:w-[260px] md:w-[216px] w-[154px] md:h-[139px] h-[85px]"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default InfiniteScroll
