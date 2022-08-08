import {motion } from "framer-motion"

export default function SvgCircleLogo(){
    const textCenter = "E.B"
    return(
        <>
            <svg width="60" height="60">
                    {/* <circle cx="40" cy="40" r="40" stroke="#60f7d3" stroke-width="2" fill="none" /> */}
                    <motion.text x="30%" y="28%" textAnchor="middle" fill="#fff" dy=".3em" initial={{ opacity:0}} animate={{rotate:360 ,opacity:1 }} transition={{duration:2}}>
                        <tspan className="svgText" x="49%" dy=".9em" fontSize="1.2em" fontFamily = "Sans,Arial" >{textCenter}</tspan>
                    </motion.text>
                    <motion.path d="M4,27a25,25 0 1,0 50,0a25,25 0 1,0 -50,1" fill="transparent" stroke="#60f7d3" strokeWidth="2" 
                        initial={{pathLength: 0}}
                        animate={{pathLength: 1}} 
                        transition={{duration: 2}}
                        />
                </svg>
        </>
    )
}