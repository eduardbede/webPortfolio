import { motion } from "framer-motion"

export default function PersonDetail(props){
  const text = "I am a future Front-End developer."
  const selfText = "Currently, I`m focused on learning to code, my newly discovered passion."

  return (
    <div ref={props.homeScroll} className="mareDiv bg-myBlue md:px-36 px-10 pt-12 md:pt-0 flex flex-col justify-center items-start min-h-screen landscape:pt-28">
      <div className="flex flex-col gap-10 landscape:px-0">

          <motion.p initial={{y:20,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.5, delay:0.6}}
                    className="text-mySecondBlue md:text-2xl text-xl pl-1">Hi, my name is
          </motion.p>

          <motion.div initial={{y:20,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.5, delay:0.7}}
                    className="text-myGrey md:text-7xl text-6xl font-bold">
                      <p>Bede</p>
                      <motion.p 
                        whileInView={{color: ['#CCD6F6',"#60f7d3",'#CCD6F6']}}
                        transition={{duration:3, delay:1.5}}>Eduard<span className="text-myGrey">.</span>
                      </motion.p>
          </motion.div>

          <motion.p initial={{y:20,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.5, delay:0.8}}
                    className="text-myGreySecond md:text-6xl text-5xl pb-6">
                      {text}
          </motion.p>

          <motion.p initial={{y:20,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.5, delay:0.9}}
                    className="text-myGreySecond text-2xl pb-9">
                      {selfText}
          </motion.p>
        </div>
    </div>
    
  )
}
