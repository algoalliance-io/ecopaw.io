import React from 'react'
import Image from 'next/image'

interface TeamCardProps {
  name: string
  position: string
  image: string
}

const TeamCard = ({ name, position, image }: TeamCardProps) => {
  return (
    <div className="w-full max-w-[405px] max-h-[432px] h-auto rounded-[32px] relative">
      <Image
        src={image}
        alt="team"
        className="rounded-[32px]"
        width={405}
        height={432}
      />
      <div className="h-[66px] rounded-full border-2 border-primary-1 bg-primary/20 absolute z-50 w-full max-w-[275px] inset-0 m-auto top-[18rem] font-bold text-center flex flex-col items-center justify-center backdrop-blur-[6px]">
        <p className="text-white font-manrope">{name}</p>
        <p className="text-primary">{position}</p>
      </div>
    </div>
  )
}

export default TeamCard
