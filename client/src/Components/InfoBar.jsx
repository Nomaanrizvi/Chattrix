import React from 'react'

import closeIcon from '../assets/closeIcon.png'
import onlineIcon from '../assets/onlineIcon.png'

const InfoBar = ({ room }) => {

    return (
        <div className='flex items-center justify-between bg-[#2979FF] rounded-t h-[60px] w-full'>
            <div className='flex items-center flex-[0.5] ml-[5%] text-white'>
                <img className='mr-[5%]' src={onlineIcon} alt="onlineIcon" />
                <h3>{room}</h3>
            </div>
            <div className='flex justify-end flex-[0.5] mr-[5%]'>
               <a href="/"><img src={closeIcon} alt="" /></a> 
            </div>
        </div>
    )
}

export default InfoBar