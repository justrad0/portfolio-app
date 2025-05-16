import React from 'react'
import HTML from '../assess/html.png';
import CSS from '../assess/css.png';
import JavaScript from '../assess/javascript.png';
import ReactImg from '../assess/react.png';
import Node from '../assess/node.png';
import GitHub from '../assess/github.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
            <div>
                <p className='text-4xl font-bold inline border-pink-600 border-b-4'>Skills</p>
                <p className='py-4'>These are the technologies I`ve worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon'></img>
                    <p className='my-4'>HTML</p>
                </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer'>
                    <img className='w-20 mx-auto' src={CSS} alt='HTML icon'></img>
                    <p className='my-4'>CSS</p>
                </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='HTML icon'></img>
                    <p className='my-4'>JavaScript</p>
                </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer'>
                    <img className='w-20 mx-auto' src={ReactImg} alt='HTML icon'></img>
                    <p className='my-4'>React</p>
                </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer'>
                    <img className='w-20 mx-auto' src={GitHub} alt='HTML icon'></img>
                    <p className='my-4'>GitHub</p>
                </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer'>
                    <img className='w-20 mx-auto' src={Node} alt='HTML icon'></img>
                    <p className='my-4'>NodeJS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills