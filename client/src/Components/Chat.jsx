import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'
import ScrollToBottom from 'react-scroll-to-bottom'
import InfoBar from './InfoBar'
import Message from './Message'
import TextContainer from './TextContainer'

let socket

const Chat = () => {

  const navigate = useNavigate();
  const location = useLocation()
  const ENDPOINT = 'https://chattrix-q75w.onrender.com'
  // const ENDPOINT = 'http://localhost:3000'

  const [Name, setName] = useState("")
  const [Room, setRoom] = useState("")
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {

    socket = io(ENDPOINT)

    const { name, room } = queryString.parse(location.search)
    setName(name)
    setRoom(room)

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
        navigate('/')
      }
    })

    return () => {
      socket.disconnect();
    }

  }, [ENDPOINT, location.search])


  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message])
    })

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [])



  const sendMessage = (e) => {
    e.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }

    // console.log(message);
    // console.log(messages);
  }


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

      {/* Main Chat Section */}
      <div className='flex flex-col lg:flex-row justify-center items-center bg-[#1A1A1D] h-[calc(100vh-184px)] gap-6 px-4'>
        

        <div className='flex flex-col justify-between bg-white rounded-lg h-[85%] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[35%] shadow-md'>
          <InfoBar room={Room} />

          <ScrollToBottom className='py-[5%] overflow-auto flex-auto'>
            {messages.map((message, i) => (
              <div key={i}>
                <Message message={message} name={Name} />
              </div>
            ))}
          </ScrollToBottom>

          <form className='flex border-t-2 border-gray-300'>
            <input
              className='border-none rounded-none px-[5%] w-[80%] text-[1.2em] focus:outline-none'
              type='text'
              placeholder='Type a message...'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' ? sendMessage(e) : null}
            />
            <button
              className='text-white uppercase bg-[#2979FF] py-5 px-4 w-[20%] border-none hover:bg-[#1565C0] transition duration-200'
              onClick={(e) => sendMessage(e)}
            >
              Send
            </button>
          </form>
        </div>

        <TextContainer users={users} />
      </div>

      {/* footer Section */}
      <div className='hidden md:flex flex-col items-center justify-center bg-[#1A1A1D] text-white py-4'>
        <h2 className="text-lg text-gray-300 font-medium">
          Built with React, Express, Node & Socket.IO By Nomaan <span role="img" aria-label="emoji">❤️</span>
        </h2>
      </div>
    </>
  )
}

export default Chat