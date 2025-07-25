import React from 'react'
import { useState, useEffect } from 'react'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const colorThemes = [
    {
      gradient: 'bg-gradient-to-r from-green-500 to-teal-600',
      text: 'text-teal-500',
    },
    {
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
      text: 'text-pink-500',
    },
    {
      gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500',
      text: 'text-orange-500',
    },
    {
      gradient: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      text: 'text-indigo-500',
    },
    {
      gradient: 'bg-gradient-to-r from-indigo-400 to-red-500',
      text: 'text-rose-500',
    },
  ];


  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colorThemes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = colorThemes[colorIndex];
  return (
    <nav >
      <script src="https://cdn.lordicon.com/lordicon.js"></script>
      <div className=' w-full   flex justify-between items-center p-5 lg:w-3/4 lg:gap-10 mx-auto'>
        <div className="logo flex flex-col ">
          <div className={`md:text-lg text-xl text-nowrap font-bold transition-gradients duration-1000 ${current.text}`}>
            BIJAY DHAKAL
          </div>
          <div className='text-sm text-nowrap'>
            Frontend Developer
          </div>

        </div>
        <div className="burger flex ">
          <ul className=' lg:gap-4 m-1   border-gray-700 px-6 py-2   shadow-lg  hidden md:flex space-x-6'>
            <li><a href="#home" className='rounded-full flex gap-1 hover:bg-white/20 p-1  justify-center items-center text-blue-950  hover:text-blue-700  font-bold cursor-pointer transition-all duration-300 ease-in-out '> Home</a></li>

                <li><a href="#about" className='rounded-full flex gap-1 justify-center items-center hover:bg-white/20 text-blue-950  hover:text-blue-700  font-bold cursor-pointer p-1'> About </a></li>

                <li><a href="#Experience" className='rounded-full flex gap-1 justify-center items-center hover:bg-white/20 text-blue-950  hover:text-blue-700  font-bold cursor-pointer p-1'> Experience </a></li>

                <li><a href="#Skills" className='rounded-full flex gap-1 justify-center items-center hover:bg-white/20 text-blue-950  hover:text-blue-700  font-bold cursor-pointer p-1'> Skills</a></li>

                <li><a href="#Projects" className='rounded-full flex gap-1 justify-center items-center hover:bg-white/20 text-blue-950  hover:text-blue-700  font-bold cursor-pointer p-1'> Projects</a></li>

                <li><a href="#Contact" className='rounded-full flex gap-1 justify-center items-center hover:bg-white/20 text-blue-950  hover:text-blue-700  font-bold cursor-pointer p-1'> Contact</a></li>
              </ul>
          <button
            className={`md:hidden relative right-0  p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 
            ${isOpen ? 'hidden' : '' }`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)
              
            }
          >   <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
         
            
          {isOpen && (

           
            <div className="fixed h-fit   left-50 inset-0 bg-orange-500 bg-opacity-90 flex flex-col  rounded-es-full  z-1">
              <button
                className="absolute font-extrabold top-2 right-2 p-2 text-black"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
             X 
              </button>
              <ul className=' gap-5  flex flex-col  px-10 py-8     space-x-6'>
                <li><a href="#home" className='rounded-full flex gap-1 hover:bg-white/20 p-1  justify-center items-center text-blue-950  hover:text-blue-700  font-bold cursor-pointer transition-all duration-300 ease-in-out animate-bounce '> Home</a></li>

                <li><a href="#about" className='rounded-full flex gap-1 justify-center animate-bounce items-center hover:bg-white/20 text-blue-950  hover:text-blue-700  font-bold cursor-pointer p-1'> About </a></li>

                <li><a href="#Experience" className='rounded-full flex gap-1 justify-center animate-bounce items-center hover:bg-white/20 text-blue-950  hover:text-blue-700  font-bold cursor-pointer p-1'> Experience </a></li>

                <li><a href="#Skills" className='rounded-full flex gap-1 justify-center animate-bounce items-center hover:bg-white/20 text-blue-950  hover:text-blue-700  font-bold cursor-pointer p-1'> Skills</a></li>

                <li><a href="#Projects" className='rounded-full flex gap-1 justify-center animate-bounce items-center hover:bg-white/20 text-blue-950  hover:text-blue-700  font-bold cursor-pointer p-1'> Projects</a></li>

                <li><a href="#Contact" className='rounded-full flex gap-1 justify-center animate-bounce items-center hover:bg-white/20 text-blue-950  hover:text-blue-700  font-bold cursor-pointer p-1'> Contact</a></li>
              </ul>
       </div>
          )}
     </div></div>
    </nav>
  )
}

export default Navbar
