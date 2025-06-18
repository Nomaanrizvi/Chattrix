import React from 'react'
import onlineIcon from '../assets/onlineIcon.png'

const TextContainer = ({ users }) => {
    return (
        <div className="flex flex-col ml-[100px] text-white h-[60%] justify-between max-[1200px]:hidden">
            {
                users
                    ? (
                        <div>
                            <h1>People currently chatting:</h1>
                            <div className="flex items-center mb-[50%]">
                                <h2 className="flex flex-wrap gap-2">
                                    {users.map(({ name }) => (
                                        <div key={name} className="flex items-center">
                                            {name}
                                            <img className="pl-[10px]" alt="Online Icon" src={onlineIcon} />
                                        </div>
                                    ))}
                                </h2>
                            </div>
                        </div>
                    )
                    : null
            }
        </div>
    )
}

export default TextContainer