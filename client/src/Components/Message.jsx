import React from 'react'
import Emoji from "react-emoji-render";


const Message = ({ message: { user, text }, name }) => {

    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase()

    if (user === trimmedName) {
        isSentByCurrentUser = true
    }

    // console.log(ReactEmoji.emojify(":smile:"))

    return (
        isSentByCurrentUser
            ? (
                <div className='flex justify-end px-[3%] mt-1'>
                    <p className='flex items-center font-helvetica text-[#828282] tracking-[0.3px] pr-2.5'>{trimmedName}</p>
                    <div className='bg-[#2979FF] rounded-[20px] px-5 py-1.5 inline-block max-w-[80%]'>
                        <p className='w-full text-[1.1em] break-words text-white font-[Segoe UI Emoji, Noto Color Emoji, Apple Color Emoji, sans-serif]'>{<Emoji text={text} />}</p>
                    </div>
                </div>
            )
            : (
                <div className='flex justify-start px-[3%] mt-1'>
                    <div className='bg-[#F3F3F3] rounded-[20px] px-5 py-1.5 inline-block max-w-[80%]'>
                        <p className='w-full text-[1.1em] break-words text-[#353535] font-[Segoe UI Emoji, Noto Color Emoji, Apple Color Emoji, sans-serif]'>{<Emoji text={text} />}</p>
                    </div>
                    <p className='flex items-center font-Helvetica text-[#828282] tracking-[0.3px] pl-2.5'>{user}</p>
                </div>
            )

    )
}

export default Message