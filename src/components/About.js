import React from 'react'
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi.I'm Radostin, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
  I’m a motivated and curious developer with a strong interest in building clean and user-friendly web applications. Currently completing my degree in Computer Systems and Technologies at TU-Varna, I’ve spent the last year focused on improving my skills in JavaScript and frontend development. I enjoy learning new technologies and turning ideas into functional and meaningful projects. My goal is to create software that is not only technically solid, but also helpful to real people.
</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About