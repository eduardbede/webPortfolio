import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function LeftStatic(){

    const [transition, setTransition] = useState({
        one:{duration:1 ,delay:1},
        two:{duration:1 ,delay:0.8},
        three:{duration:1 ,delay:0.6}
    })

    useEffect(()=>{
        setTimeout(() => {
            setTransition({
                one:{duration:0.2 ,delay:0},
                two:{duration:0.2 ,delay:0},
                three:{duration:0.2 ,delay:0}
            });
        }, 1000);
    },[])



    return(
            <div className="md:ml-10 ml-1 w-7 h-80 fixed bottom-0 flex flex-col items-center justify-center">
                    <div className="absolute bottom-32 pb-2 flex text-myGrey">
                        <ul className="flex flex-col gap-5 justify-center items-center no_highlights">
                            <motion.li className="active:text-mySecondBlue"
                                initial={{y:-1000}}
                                animate={{y:0}}
                                transition={transition.one}
                                whileHover={{y:-5, color:"#60f7d3"}}>
                                <button><a href="https://github.com/eduardbede"><VscGithubInverted size={'1.5em'}/></a></button>
                            </motion.li>
                            
                            <motion.li className="active:text-mySecondBlue"
                                initial={{y:-1000}}
                                animate={{y:0}}
                                transition={transition.two}
                                whileHover={{y:-5, color:"#60f7d3"}}>
                                    <button><a href="https://www.linkedin.com/in/eduard-bede-168572164/" ><AiFillLinkedin size={'1.5em'}/></a></button>
                            </motion.li>

                            <motion.li className="active:text-mySecondBlue"
                                initial={{y:-1000}}
                                animate={{y:0}}
                                transition={transition.three}
                                whileHover={{y:-5, color:"#60f7d3"}}>
                                    <button><a href="https://www.instagram.com/bde05/"><AiOutlineInstagram size={'1.5em'}/></a></button>
                             </motion.li>
                        </ul>
                    </div>
                    <div className="text-myGrey">
                        <motion.hr className="bottom-0 left-1/2 border-l h-32 absolute"
                            initial={{y:-1000}}
                            animate={{y:0}}
                            transition={{duration:1, delay:0.5}}>
                        </motion.hr>
                    </div>
            </div>
    )
}