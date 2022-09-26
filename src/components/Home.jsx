import React from 'react'
import HeroImage from '../assets/heroImage2.JPG'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
 <div name="home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 ">
 <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
           Welcome.
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
        My name is Baileigh Brown I'm a fullstack developer with a focus on frontend development.
        Currently, I enjoy working on web applications using technologies like React, JavaScript,
        Firebase, MongoDB, and more! 
        </p>
        <div> 
            <button className="group text-white w-fit py-3 px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
               </span>
            </button>
        </div>
    </div>
    <div>
        <img src={HeroImage} alt="heroPfp" className="rounded-2xl mx-auto w-2/3 md:w-full h-96"/>
    </div>
 </div>
    </div>
  )
}

export default Home