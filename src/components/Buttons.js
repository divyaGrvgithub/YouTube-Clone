import React from 'react'

const Buttons = ({name}) => {
  return (
    <div>
      <button className=' border border-gray-200 shadow-sm px-5 py-1 bg-gray-200 rounded-lg m-2 mt-5 hover:bg-black hover:text-white hover:ring-sky-500 '>{name}</button> 
    </div>
  )
}

export default Buttons
