import { motion } from "framer-motion"
import { AiOutlineCloseCircle } from "react-icons/ai";
import NavLinks from "./NavLinks"
export default function NavbarMobile(props){
    
    return(
        <>
            <motion.div className="mobileNav bg-mobileNavColor h-screen fixed right-0 top-0 bottom-0 block md:hidden overflow-hidden"
                animate={props.isOpen ? {width: "65%", opacity:1} : {width: 0, opacity:0}}
            >  
              {props.isOpen && <motion.div initial={{x:100, y:-100}} 
                                           animate={{y:0, x:0}} 
                                           transition={{delay:0.1}} 
                                           className="flex justify-end pt-6 pr-4 hover:cursor-pointer text-mySecondBlue" 
                                           onClick={()=> props.buttonToggle()}> <AiOutlineCloseCircle size={"2em"} /></motion.div>}
               {props.isOpen && <div className="mobileNav"><NavLinks isOpen={props.isOpen} navFunction={props.scollFunction} /></div>}
            </motion.div>
        </>
        
    )
}