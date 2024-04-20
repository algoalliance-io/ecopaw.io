import React from 'react'
import TeamCard from './team-section/team-card'
import { teamData } from './team-section/team.data'

const TeamSection = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center px-4 font-manrope">
        <h2 className="text-dark-1 sm:text-[56px] sm:leading-[64px] text-[32px] leading-[37px] font-bold text-center font-space">
          Our Amazing <span className="text-primary">Team</span>
        </h2>
      </div>
      <div className="w-full flex items-center justify-center mt-6 sm:mb-[64px] mb-12">
        <p className="text-dark-2 sm:text-lg sm:leading-[21px] leading-[18px] text-base font-bold max-w-[493px] w-full text-center">
          DESPITE THE FACT THAT THE ECO PAW TEAM IS ANONYMOUS, THE LEVEL OF
          THEIR SKILLS CAN BE FELT IN EVERY PART OF OUR ECOSYSTEM
        </p>
      </div>
      <div className="w-full  flex justify-center items-center">
        <div className="flex flex-wrap gap-8 justify-center mb-[124px] px-4 max-w-[1440px]">
          {teamData.map((item) => (
            <TeamCard
              key={item.picture}
              name={item.name}
              position={item.position}
              image={item.picture}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamSection
