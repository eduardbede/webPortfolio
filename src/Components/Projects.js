import { motion } from "framer-motion";
import ProjectsData from "./ProjectsData/ProjectsData";
export default function Projects(props){


    return(
        <div ref={props.projectsScroll} className="fontClass min-h-screen bg-myBlue md:px-36 px-10 pt-24 md:pt-0 flex flex-col">
            <motion.div 
            initial={{x:-40, opacity: 0 }}
            whileInView={{x:0, opacity: 1 }}
            transition={{duration:0.5, delay:0.5}}
            className=" flex pb-9 items-center landscape:px-0">
                <h1 className="pb-1 text-myGrey text-3xl font-bold">Projects</h1>
                <hr className="bottom-1/2 border-mySecondBlue w-2/4 ml-2"></hr>
            </motion.div>
                <ProjectsData />
        </div>
    )
}