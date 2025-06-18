import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
  const [Name, setName] = useState("")
  const [Room, setRoom] = useState("")

  return (
    <>
      {/* Header Section */}
      <div className='flex flex-col items-center justify-center bg-[#1A1A1D] text-white py-4'>
        <h2 className="text-4xl font-bold my-3">
          Chattrix  <span role="img" aria-label="emoji">💭</span>
        </h2>
        <h2 className="text-xl font-bold">
          A Realtime Chat Application
        </h2>
      </div>


      <div className="flex justify-center items-center bg-[#1A1A1D] h-[calc(100vh-184px)]">
        <div className="w-[30%] text-center">
          <h1 className="text-white text-4xl pb-2 border-b-2 border-white mb-4">Join</h1>
          <div>
            <input
              placeholder="Name"
              className="bg-white w-full px-5 py-4 rounded-none"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Room"
              className="bg-white w-full px-5 py-4 mt-5 rounded-none"
              type="text"
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
          <Link
            to={`/chat?name=${Name}&room=${Room}`}
            onClick={(e) => {
              if (!Name || !Room) e.preventDefault()
            }}
          >
            <button
              className="w-full mt-5 py-5 text-white uppercase bg-[#2979FF] rounded-md border-none"
              type="submit"
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>

      {/* footer Section */}
      <div className='flex flex-col items-center justify-center bg-[#1A1A1D] text-white py-4'>
        <h2 className="text-lg text-gray-300 font-medium">
          Built with React, Express, Node & Socket.IO By Nomaan <span role="img" aria-label="emoji">❤️</span>
        </h2>
      </div>
    </>
  )
}

export default Join
