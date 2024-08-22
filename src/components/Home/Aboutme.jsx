import React from 'react'
import Profile from '../../assets/profile.png'

function Aboutme() {
  return (
    <>
        <div className="font-poppins bg-black relative p-20 w-auto flex px-24 justify-center">
      <div className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
        <div className="mr-10">
          <img
            className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
            src={Profile}
            alt="image of myself"
          />
        </div>
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <h1 className="text-white font-bold text-3xl mt-6 mb-8">
            Hey it's me, Harsh Mehta
          </h1>

          <p className="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
            I'm Harsh Metha, CS student at MITWPU'25.As a dedicated web developer specializing in the MERN stack, 
            I thrive on bringing innovative web solutions to life. My expertise spans across MongoDB, Express.js, React, and Node.js, allowing me to create seamless and dynamic user experiences.
            I'm passionate about continuous learning and am always eager to adopt new technologies and methodologies to stay ahead in the ever-evolving tech landscape.
            Let's connect and explore how we can collaborate to create cutting-edge web applications. 
          </p>

          <div id="social" className="flex flex-wrap justify-start items-center gap-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/harshmehta9"
              className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
            >
              <img
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                width="20px"
                height="20px"
                alt="Github"
              />
              <span>Visit my Github</span>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/harshmehta4951/"
              className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
            >
              <img
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                width="20px"
                height="20px"
                alt="LinkedIn"
              />
              <span>Follow me on Linkedin</span>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/ichbinaydin"
              className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
            >
              <img
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                src="https://x.com/harshh_m"
                width="20px"
                height="20px"
                alt="Twitter"
              />
              <span>Follow me on Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Aboutme