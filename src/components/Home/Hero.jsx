import React from 'react'
import './Hero.css'
import ProfileImg from "../../assets/profile.png"
import { useState, useEffect } from 'react';
import axios from 'axios';


function Hero() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(()=>{
    const token = localStorage.getItem("token")
    axios.get("http://localhost:3000/admin/me", {headers: {authorization:"Bearer " + token}})
    .then((data)=>{
      setUserEmail(data.data.username);
    })
  },[])

  if(userEmail){
    return (
      <>
        <div className="h-screen w-screen bg-black">
      <div className="mx-auto max-w-7xl pt-16 sm:pt-24">
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                    learning Section
                  </span>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                    <span className="sm:text-6xl"></span>
                    Learn About Creating  
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                     Course
                    </span>
                    <br />
                    Give Quality Education.
                  </h1>
                </div>

                <p className="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  I don't know what to write here but this dynamic. This page is only visible if you are logged in. If you are not logged in you might see my photo on the hero section
                </p>
              </div>

              <div className="border-t border-gray-700"></div>

              <div className="flex space-x-4 items-center text-white">
                <div className="flex items-center space-x-2">
                  <div className="flex flex-shrink-0 -space-x-1">
                    <img loading="lazy" width="400" height="400" decoding="async" className="h-6 w-6 max-w-none rounded-full ring-2 ring-white" style={{ color: 'transparent' }} src="https://randomuser.me/api/portraits/men/29.jpg" alt="User 1" />
                    <img loading="lazy" width="400" height="400" decoding="async" className="h-6 w-6 max-w-none rounded-full ring-2 ring-white" style={{ color: 'transparent' }} src="https://randomuser.me/api/portraits/men/90.jpg" alt="User 2" />
                    <img loading="lazy" width="100" height="100" decoding="async" className="h-6 w-6 max-w-none rounded-full ring-2 ring-white" style={{ color: 'transparent' }} src="https://randomuser.me/api/portraits/men/75.jpg" alt="User 3" />
                    <img loading="lazy" width="200" height="200" decoding="async" className="h-6 w-6 max-w-none rounded-full ring-2 ring-white" style={{ color: 'transparent' }} src="https://randomuser.me/api/portraits/men/5.jpg" alt="User 4" />
                  </div>
                  <span className="flex-shrink-0 text-xs font-medium leading-5">+15</span>
                </div>

                <div className="h-4 border-l border-gray-700"></div>

                <div className="flex items-center">
                  <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                  </svg>
                  <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                  </svg>
                  <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                  </svg>
                  <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                  </svg>
                  <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                  </svg>
                </div>

                <div className="h-4 border-l border-gray-700"></div>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1&theme=light" className="w-32 h-8 md:w-48 md:h-12 lg:w-64 lg:h-16" width="250" height="54" alt="Product Hunt" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full col-span-6">
            <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
              <div style={{ width: '100%', height: '100%' }}>
                <div style={{ width: '100%', height: '100%' }}>
                  {/* <iframe
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/watch?v=uWYZ5nvTe0U"
                    id="widget2"
                    title="YouTube Video"
                  ></iframe> */}

                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1PiuGCTP4PU" 
                  title="How To Create An Online Course For Beginners in 2024  (Step by Step)" 
                  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
      </>
    )
  }else{
  return (
    <>
        <div className="bg-gradient-to-b from-violet-600/10 via-transparent ">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 flex flex-col h-screen justify-center items-center align-middle">
        
        {/* Title */}
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Find variety of Courses of your choice
          </h1>
        </div>
        {/* End Title */}

        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-white/70">
            A Mart of courses from CS to science and Many more 
          </p>
        </div>

        {/* Buttons */}
        <div className="text-center">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
            href="#"
          >
            Get started
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
        {/* End Buttons */}
      </div>
    </div>
    </>
  )
}
}

export default Hero