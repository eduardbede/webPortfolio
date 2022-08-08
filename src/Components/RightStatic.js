import { motion } from "framer-motion";
import { useState, useEffect } from "react";
export default function RightStatic(){

    const [transitionDuration, setTransitionDuration] = useState({duration :1, delay:1})
    
    useEffect(()=>{
        setTimeout(() => {
            setTransitionDuration({ 
                duration : 0.2, 
                delay:0
             });
        }, 1000);
    },[])                                                  
  
    const textMail = "bede.eduard@gmail.com";


    return(
            <div className="right-0 md:mr-10 mr-1 w-7 h-80 fixed bottom-0 flex flex-col items-center justify-center ">
                    <div className="rotate-90 absolute bottom-56 flex gap-2 ml-1 text-myGrey">
                            <motion.a 
                                    className="no_highlights active:text-mySecondBlue"
                                    initial={{x:-1000}}
                                    animate={{x:0}}
                                    transition={transitionDuration}
                                    whileHover={{
                                        x:-10,
                                        color:'#60f7d3',
                                    }}
                                    href="mailto:bede.eduard@gmail.com">{textMail}
                            </motion.a>
                    </div>
                    <div className="text-myGrey">
                        <motion.hr 
                            initial={{y:-1000}}
                            animate={{y:0}}
                            transition={{duration:1, delay:0.7}}
                            className="bottom-0 left-1/2 border-l h-32 absolute">
                        </motion.hr>
                    </div>
                    
            </div>
    )
}