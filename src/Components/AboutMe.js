import { GoTriangleRight } from "react-icons/go";
import { motion } from "framer-motion";


export default function AboutMe(props){
    const firstName = "Bede";
    const lastName = 'Eduard';
                        
    const text = `Hello! My Name is ${firstName} ${lastName}! Since I discovered programming I discovered a new passion for developing web pages!
                The way it makes you think fascinated me from the first lines written. Since then, every day I seek to improve myself and learn new things about programming. 
                Below I present some projects made by me during my self-taught learning process.`;

    const technologiiText = `Here are some technologies that I learned:`;

    const skills=['HTML',"CSS",'JavaScript(ES6)','React.JS','Tailwind CSS', 'Git Version-Control', 'Framer Motion library'];

    const mapSkills = skills.map((el, index)=>{
        return <li className="text-myGrey" key={index}><GoTriangleRight color={"#60f7d3"}/>{el}</li>
    })

    return(
    <>
        <div ref={props.aboutMeScroll} className="bg-myBlue min-h-screen flex flex-col justify-center px-10 md:px-36 pt-24 md:pt-10 ">
            <motion.div 
                    initial={{x:-40, opacity: 0 }}
                    whileInView={{x:0, opacity: 1 }}
                    transition={{duration:0.5 ,delay:0.3}}
                    className=" flex pb-9 items-center landscape:px-0 ">

                <h1 className="pb-1 text-myGrey text-3xl font-bold ">About Me</h1>
                <hr className="bottom-1/2 border-mySecondBlue w-1/2 ml-2"></hr>
            </motion.div>
            <div>
                <motion.p 
                    initial={{y:50, opacity: 0 }}
                    whileInView={{y:0, opacity: 1 }}
                    transition={{duration:0.5 ,delay:0.4}}
                    viewport={{ once: true }}
                    className="text-myGreySecond text-2xl landscape:px-0 max-w-screen-2xl flex">{text}
                </motion.p>

                <motion.h1 
                    initial={{y:50, opacity: 0 }}
                    whileInView={{y:0, opacity: 1 }}
                    transition={{duration:0.5 ,delay:0.5}}
                    viewport={{ once: true }}
                    className="text-myGreySecond text-2xl pt-10 ">{technologiiText}
                </motion.h1>

                <motion.ul 
                        initial={{y:50, opacity: 0 }}
                        whileInView={{y:0, opacity: 1 }}
                        transition={{duration:0.5 ,delay:0.6}}
                        viewport={{ once: true }}
                        className="skillsDiv pt-5 ">
                    {mapSkills}
                </motion.ul>
            </div>
                
        </div>
        </>
    )
}