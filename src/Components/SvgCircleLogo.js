import {motion } from "framer-motion"

export default function SvgCircleLogo(){
    const textCenter = "E.B"
    return(
        <>
            <svg width="80" height="80">
                    {/* <circle cx="40" cy="40" r="40" stroke="#60f7d3" stroke-width="2" fill="none" /> */}
                    <motion.text x="30%" y="32%" textAnchor="middle" fill="#fff" dy=".3em" initial={{opacity:0}} animate={{opacity:1 }} transition={{duration:2}}  >
                        <tspan className="svgText" x="49%" dy=".9em" fontSize="1.6em" fontFamily = "Sans,Arial" >{textCenter}</tspan>
                    </motion.text>
                    <motion.path d="M10,40a30,30 0 1,0 60,0a30,30 0 1,0 -60,1 " fill="transparent" stroke="#60f7d3" strokeWidth="2" 
                        initial={{pathLength: 0}}
                        animate={{pathLength: 1}}
                        transition={{duration:2}}/>
                </svg>
        </>
    )
}