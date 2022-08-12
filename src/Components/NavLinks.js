import { motion } from "framer-motion"
export default function NavLinks(props){
  
    return(
        <motion.ul initial={props.isOpen === undefined?{x:-5}:{x:0}} 
                   animate={props.isOpen === undefined?{x:-20}:{x:0}} 
                   transition={{delay:1}}>
            <li><motion.button initial={props.isOpen === undefined?{y:-50, opacity: 0}:{y:-20, opacity: 0}} 
                               animate={{y:0, opacity: 1}}
                               className="no_highlights text-myWhite hover:text-mySecondBlue text-xl active:text-mySecondBlue"
                               name="home"
                               onClick={(e)=>props.navFunction(e)}
                               >home</motion.button>
            </li>

            <li><motion.button initial={props.isOpen === undefined?{y:-50, opacity: 0}:{y:-20, opacity: 0}} 
                               animate={{y:0, opacity: 1}} 
                               transition={{ delay: 0.1 }} 
                               onClick={(e)=>props.navFunction(e)}
                               name="aboutMe"
                               className="no_highlights text-myWhite hover:text-mySecondBlue text-xl active:text-mySecondBlue"
                               >about me</motion.button>
            </li>

            <li><motion.button initial={props.isOpen === undefined?{y:-50, opacity: 0}:{y:-20, opacity: 0}} 
                               animate={{y:0, opacity: 1}} 
                               transition={{ delay: 0.2 }} 
                               className="no_highlights text-myWhite hover:text-mySecondBlue text-xl active:text-mySecondBlue"
                               onClick={(e)=>props.navFunction(e)}
                               name="projects"
                               >projects</motion.button>
            </li>

            <li><motion.button initial={props.isOpen === undefined?{y:-50, opacity: 0}:{y:-20, opacity: 0}} 
                               animate={{y:0, opacity: 1}} 
                               transition={{ delay: 0.3 }} 
                               className="no_highlights text-myWhite hover:text-mySecondBlue text-xl active:text-mySecondBlue"
                               onClick={(e)=>props.navFunction(e)}
                               name='contact'
                               >contact</motion.button>
            </li>

            <li><motion.button initial={props.isOpen === undefined?{y:-50, opacity: 0}:{y:-20, opacity: 0}} 
                               animate={{y:0, opacity: 1}} 
                               transition={{ delay: 0.4 }} 
                               className="no_highlights resumeButton text-mySecondBlue border border-mySecondBlue
                                         rounded-lg h-10 w-20 hover:bg-buttonHoverColor text-lg active:text-mySecondBlue">
                               <a href={require("../../src/resume/resume.pdf")} download="Bede Eduard-IoanEN">resume</a>
                               </motion.button>
            </li>
           
        </motion.ul>
    )
}