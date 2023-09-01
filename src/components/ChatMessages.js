import React from 'react'

const ChatMessages = ({name,message}) => {


  return (
    <div className='flex m-2'>
      <img
          className="h-6"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user-logo"
        />
        <p className=' px-2 text-sm font-bold'>{name}</p>
        <p className=' text-sm' >{message}</p>
    </div>
  )
}

export default ChatMessages
