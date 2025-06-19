import React from 'react'
import onlineIcon from '../assets/onlineIcon.png'

const TextContainer = ({ users }) => {
    return (
        <div className="flex flex-col items-center mt-3 text-white w-full lg:w-auto">
            {
                users && users.length > 0 && (
                    <div className="bg-[#2C2F33] rounded-lg p-1 w-full lg:w-[250px]">
                        <h1 className="text-lg font-semibold mb-2 text-center">People currently chatting:</h1>
                        <div className="flex flex-wrap justify-center gap-4">
                            {users.map(({ name }) => (
                                <div key={name} className="flex items-center gap-2 text-sm">
                                    <span>{name}</span>
                                    <img className="w-3 h-3" alt="Online Icon" src={onlineIcon} />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>

    )
}

export default TextContainer