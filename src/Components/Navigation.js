import {useState, useEffect} from "react";
import { motion, useScroll } from "framer-motion";
import NavLinks from "./NavLinks"
import { MdOutlineMenu } from "react-icons/md";
import SvgCircleLogo from "./SvgCircleLogo";


export default function Navigation(props){
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    function update() {
        if (scrollY.current > scrollY.prev) {
          setHidden(true);
        } else if (scrollY.current < scrollY.prev) {
          setHidden(false);
        }
      }
    
      useEffect(() => {
        return scrollY.onChange(() => update());
      });
    
      const variants = {
        visible: { opacity: 1, y: 0 },
        initial: { opacity: 0, y: -75 },
        hidden: { opacity: 0, y: -100 }
      };

    return(
        <>
            <motion.nav animate={hidden ? "hidden" : "visible"}
                        variants={variants}
                        onHoverStart={() => setHidden(false)}
                        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.5, delay:0.2 }}
                        className="navFull bg-myBlue h-20 flex justify-between items-center text-mySecondBlue fixed top-0 left-0 right-0 bg-opacity-90 backdrop-blur-sm">{/*  bg-opacity-90 backdrop-blur-sm */}
                    <motion.div initial={{y:-100}}
                                animate={{y:0}}
                                className="pl-2 pt-2">
                    {/* <motion.div initial={{x:0}}
                                animate={{x:20}}
                                className="border border-b-mySecondBlue rounded-full w-10 h-10 md:w-16 md:h-16 flex justify-center items-center md:text-2xl"
                                >B.E </motion.div> */}
                                <SvgCircleLogo />
                    </motion.div>
                    {!props.isOpen && <motion.div  initial={{y:-100,x:0}} 
                                                                animate={{y:0, x:-20}} 
                                                                transition={{delay:0.1}} 
                                                                className="hover:cursor-pointer md:hidden" 
                                                                onClick={()=> props.buttonToggle()}> <MdOutlineMenu size={"2em"} /> </motion.div> }
                        <div className="fullNav md:flex hidden"> <NavLinks navFunction={props.scollFunction} /></div>
            </motion.nav>
        </>
    )
}