import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';
const Homeee = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi,my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Radostin Kalchev</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I`m a Front-end Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'> I have completed my academic studies in Computer Systems and Technologies and I'm currently focused on improving my skills in front-end development, especially with React. I'm looking for an opportunity as an intern to gain real-world experience and grow as a developer.</p>
        <div>
      <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'><Link  to='contact' smooth={true} duration={500}>Contact me</Link><HiArrowNarrowRight className='ml-3 hover:rotate-90 duration-300'/></button>
        </div>
      </div>
    </div>
  )
}

export default Homeee