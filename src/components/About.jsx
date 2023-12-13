import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col justify-center h-screen items-center bg-gray-100 p-20'>
      <div className="bg-red-400 w-full h-1/6 grid items-center text-center">
        
      </div>
      <div className='flex w-full h-full bg-red-400'>
        <div className='flex w-1/2 justify-center h-full bg-green-400'>
            Image
        </div>
        <div className='flex w-1/2 justify-center h-full bg-blue-400'>
            Text
        </div>
      </div>
    </div>
  )
}

export default About
