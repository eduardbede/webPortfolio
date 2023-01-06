/* import { GoTriangleRight } from "react-icons/go"; */
import { VscCircleFilled } from "react-icons/vsc";
import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiFramer } from "react-icons/si";
import { SiTailwindcss, SiVisualstudiocode, SiReactrouter, SiTypescript } from "react-icons/si";

export default function AboutMe(props){
    const firstName = "Bede";
    const lastName = 'Eduard';
                        
    const text = `Hello! My name is ${firstName} ${lastName}!  Since I discovered programming, I have discovered a new passion for developing web pages and applications! 
                    The way it makes think fascinated me from the first lines written. 
                    Since then, I've worked hard to improve myself and learn new programming skills every day. 
                    Below I present some projects made by me during learning process.`;

    const technologiiText = `Here are some technologies that I learned:`;
    
    const skills=[
        {
            skill: 'React.JS',
            icon : <FaReact size={'1.2em'} color={"#5FD6F6"}/>
        },
        {
            skill: "CSS",
            icon : <FaCss3Alt size={'1.2em'} color={"#254BDD"}/>
        },
        {
            skill: 'JavaScript(ES6)',
            icon : <SiJavascript size={'1.2em'} color={"#EFD81D"}/>
        },
        
        {
            skill: 'HTML',
            icon : <AiFillHtml5 size={'1.2em'} color={"#DD4B25"}/>
        },
        {
            skill: 'TypeScript',
            icon : <SiTypescript size={'1.2em'} color={"#2F74C0"}/>
        },
        {
            skill: 'Bootstap',
            icon : <FaBootstrap size={'1.2em'} color={"#6e10ee"}/>
        },
        {
            skill: 'Tailwind CSS',
            icon : <SiTailwindcss size={'1.2em'} color={"#38BDF8"}/>
        },
       
        {
            skill: 'Git Version-Control',
            icon : <FaGitAlt size={'1.2em'} color={"#E84E31"}/>
        },
        
        {
            skill: 'GitHub',
            icon : <FaGithub size={'1.2em'} color={"#ffffff"}/>
        },
        {
            skill: 'React Router',
            icon : <SiReactrouter size={'1.2em'} color={"#F44250"}/>
        },
        {
            skill: 'Framer Motion',
            icon : <SiFramer size={'1.2em'} color={"#DD369C"}/>
        },

        {
            skill: 'VS Code',
            icon : <SiVisualstudiocode size={'1.2em'} color={"#3ea6eb"}/>
        },

        
    ];

    const mapSkills = skills.map((el, index)=>{
        return <li className="text-myGrey" key={index}><VscCircleFilled color={"#60f7d3"}/>{el.icon}{el.skill}</li>
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
                        className="skillsDiv pt-5 pl-6 md:pl-0">
                    {mapSkills}
                </motion.ul>
            </div>
                
        </div>
        </>
    )
}