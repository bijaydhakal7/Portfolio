import React from 'react'
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { FcAutomatic } from 'react-icons/fc';


const Body = () => {
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
      gradient: 'bg-gradient-to-r from-rose-400 to-pink-600',
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
    <>
     <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{once: true , amount: 0.1}}
        className=" hi mt-5 "
      >
      <div className=" w-fit mx-auto ">
        <div
          className={` mt-7   inline-block p-1 rounded-full ${current.gradient} mb-6`}
          style={{ boxShadow: 'rgba(159, 130, 246, 0.9) 1px 1px 20px' }}
        >
          <div className="bg-black/90 rounded-full px-6 py-3 flex items-center gap-2">
            <div className='animate-spin'>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                className="text-yellow-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-white text-wrap">Welcome to my universe</span>
          </div>
        </div>
      </div>
      <div className="text w-full  flex flex-col  justify-center items-center md:w-[75%] md:mx-auto ">
        <div className=' text-nowrap'>
          <span className={` text-4xl lg:text-8xl md:text-6xl  font-bold transition-gradients duration-1000 ${current.text}`}> Fronted Developer</span>
        </div>
        <div className='text-nowrap text-4xl lg:text-8xl md:text-6xl font-bold '><span className=' '> &amp; Creative </span> <span className={` font-bold transition-gradients duration-1000 ${current.text}`}>Coder</span></div>
      </div>
      <div className="description text-wrap text-xl lg:text-3xl w-fit mx-auto mt-8">
        <div className='text-center '><div>I craft <span className={` font-semibold transition-gradients duration-1000 ${current.text}`}> beautiful, interactive </span> web experiences with modern technologies.</div><div> Passionate about clean code, stunning designs, and<span className={` font-semibold transition-gradients duration-1000 ${current.text}`}> seamless user experiences.</span> </div></div>
      </div>
      <div
  className={`line  m-6 w-[100px] md:w-[15%] drop-shadow-2xl hover:scale-105  mx-auto rounded-full h-2.5  transition-all duration-1000 ${current.gradient}`}
></div>

<div className=' flex flex-col  gap-5 md:flex-row  md:gap-10 mt-8 w-fit mx-auto'>
<a
  href="#projects"
  tabIndex="0"
  className={` px-6 py-3  bg-gradient-to-r ${current.gradient} w-[250px] text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg relative overflow-hidden hover:scale-110`}
  style={{
    boxShadow: 'rgba(111, 110, 246, 0.41) 0px 12.8px 35.6px',
  }}
>

  <div className='animate-spin'>
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className="group-hover:animate-pulse"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z" />
    </svg>
  </div>

 
  <span>Explore My Universe</span>

 <style>
{`
  @keyframes slide {
    0% {
      transform: translateX(100%);
    }
     
    100% {
      transform: translateX(50%);
    }
  }
`}
</style>
  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent "
   style={{
    animation: "slide 3s linear infinite"
  }} /> 
</a>
<a href="/Bijay_Dhakal_cv.pdf" download  className='bg-black w-[250px]  hover:scale-110 rounded-full text-white px-8 py-3 items-center justify-center gap-3 flex font-semibold transition-all duration-300'>
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="18px" height="20px" viewBox="-3 0 32 32" version="1.1"><script xmlns="" id="eppiocemhmnlbhjplcgkofciiegomcon" /><script xmlns=""/><script xmlns=""/>
    
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch:type="MSPage">
        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-154.000000, -99.000000)" fill="#000000">
            <path d="M174,107 C172.896,107 172,106.104 172,105 L172,101 L178,107 L174,107 L174,107 Z M178,127 C178,128.104 177.104,129 176,129 L158,129 C156.896,129 156,128.104 156,127 L156,103 C156,101.896 156.896,101 158,101 L169.972,101 C169.954,103.395 170,105 170,105 C170,107.209 171.791,109 174,109 L178,109 L178,127 L178,127 Z M172,99 L172,99.028 C171.872,99.028 171.338,98.979 170,99 L158,99 C155.791,99 154,100.791 154,103 L154,127 C154,129.209 155.791,131 158,131 L176,131 C178.209,131 180,129.209 180,127 L180,109 L180,107 L172,99 L172,99 Z" id="file-document" sketch:type="MSShapeGroup " style={{"filter":"invert(1)"}}>

</path>
        </g>
    </g>
</svg>
<span>Download CV</span>
</a></div>

<div className="profiles w-fit mx-auto mt-10 flex gap-3">
<img src="images/github.png" alt="github" className='w-10 h-10 animate-bounce ' />
<img src="images/linkedin.png" alt="linkedin" className='w-12 h-9 animate-bounce '/>
<img src="images/mailbox.png" alt="mailbox" className='w-12 h-12 animate-bounce' />
<img src="" alt="" />
</div>
 </motion.section>

<motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className=" hi mt-5 "
      >
 

 <div className="aboutme w-fit mx-auto mt-4">
  <div className={` font-bold flex justify-center text-4xl md:text-6xl transition-gradients duration-1000 ${current.text}`}>About Me</div>
  <div
  className={`line  mt-3 mb-6 w-[100px] md:w-[50%] flex justify-center drop-shadow-2xl hover:scale-105  mx-auto rounded-full h-2.5  transition-all duration-1000 ${current.gradient}`}
></div>
<div className='text-xl'>
  Get to know the person behind the <span className={`font-bold text-2xl transition-gradients duration-1000 ${current.text}`}>code</span>
</div>
 </div></motion.section>

 <div className="intro mt-2 lg:mt-15 flex flex-col gap-20 w-[80%] mx-auto lg:flex-row  ">
 <motion.section
        initial={{ opacity: 0, y:50}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className=" hi  lg:mt-5 w-full lg:w-[50%]"
      > <div className="textPart mt-20   lg:flex  lg:flex-col gap-10 text-blue-950  text-xl "><span>I'm a passionate frontend developer with a love for creating beautiful, functional web experiences. My journey in web development started with curiosity and has evolved into a dedication to crafting digital solutions that make a difference.</span>

<span>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or learning about the latest trends in web development. I believe in continuous learning and pushing the boundaries of what's possible on the web.</span>

<span> My goal is to bridge the gap between design and development, creating seamless user experiences that are both visually stunning and highly functional.</span></div></motion.section>
<motion.section
        initial={{ opacity: 0, x:100 }}
        whileInView={{ opacity: 1, x:0}}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3}}
        className=" hi lg:mt-5 w-full lg:w-[35%]  "
      >
  <div className="h-[620px] border-4 border-gray-400 rounded-3xl overflow-hidden shadow-lg " ><img src="images/herobijay.jpg" alt="photo"  className='object-center w-full h-full' /></div></motion.section>
 </div>

<div className="projects mt-30 mb-5 w-[80%] mx-auto">
  <div className={` font-bold flex justify-center text-4xl md:text-6xl  transition-gradients duration-1000 ${current.text}`}>Projects</div>
  <div
  className={`line  mt-3 mb-6 w-[100px] md:w-[20%] flex justify-center drop-shadow-2xl hover:scale-105  mx-auto rounded-full h-2.5  transition-all duration-1000 ${current.gradient}`}
></div>
  <div className="lg:grid grid-cols-3 grid-rows-1 lg:gap-10 flex flex-col gap-5">
   <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        > <div className={`box h-[300px] md:h-[400px] border border-gray-900 rounded-lg shadow-lg hover: transform transition-transform hover:scale-106 duration-500  hover:shadow-purple-900 p-1 bg-gray-800  `}><img src="images/webwork.png" alt="" className='rounded-lg  hover:transform transition-transform hover:scale-102' /></div></motion.section>
      
       <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}>
    <div className="box h-[300px] md:h-[400px] border border-gray-900 rounded-lg p-1  shadow-lg hover: transform transition-transform hover:scale-106 duration-500  hover:shadow-purple-900 bg-gray-800"> <img src="images/password-manager.png" alt="" className='rounded-lg   hover:transform transition-transform hover:scale-102' /></div></motion.section>

      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}>
    <div className="box h-[300px] md:h-[400px] border border-gray-900 rounded-lg shadow-lg hover: transform transition-transform hover:scale-106 duration-500  hover:shadow-purple-900 p-1 bg-gray-800"><img src="images/todo.png " alt=""  className='h-[30%] w-full md:h-[50%] rounded-lg hover:transform transition-transform hover:scale-102'/>
    <div className='flex flex-col gap-5 text-white p-2'> <div className='font-semibold'>Todo App</div>A modern, responsive Todo application built with React and JavaScript. CRUD operations like Update, delete, create.... </div>
    <div className="buttons mt-2 flex px-4 gap-5"><span className='px-2 py-1 bg-gray-500 rounded-full'>React</span> <span className='py-1 px-2 bg-gray-500 rounded-full'>JavaScript</span></div></div></motion.section>
  </div>
 <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className='mt-10 w-[80%] mx-auto'>
<div className="experience">
    <div className={` font-bold flex justify-center text-4xl md:text-6xl  transition-gradients duration-1000 ${current.text}`}>Experience</div>
<div
  className={`line  mt-3 mb-6 w-[100px] md:w-[30%] flex justify-center drop-shadow-2xl hover:scale-105  mx-auto rounded-full h-2.5  transition-all duration-1000 ${current.gradient}`}
></div>
  </div></motion.section>



</div> 
     
      
     




    </>
  )
}

export default Body

