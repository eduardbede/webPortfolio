import { motion } from "framer-motion";

export default function ContactMe(props){
    return(
        <div ref={props.contactScroll} className='bg-myBlue md:px-36 px-10 pb-10'>
                <motion.div 
                        initial={{x:-40, opacity: 0 }}
                        whileInView={{x:0, opacity: 1 }}
                        transition={{duration:0.5 ,delay:0.3}}
                        className=" flex pb-9 items-center landscape:px-0 ">

                    <h1 className="text-myGrey text-3xl font-bold">Contact Me</h1>
                    <hr className="bottom-1/2 border-mySecondBlue w-1/2 ml-2"></hr>
                </motion.div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-myGreySecond text-xl md:text-2xl pb-10">If you want to say hello or ask me a question, you can do so by pressing the button below.</h1>
                <button className="border w-28 h-11 rounded-md border-mySecondBlue hover:bg-buttonHoverColor
                                flex justify-center items-center text-xl text-mySecondBlue"><a href="mailto:bede.eduard@gmail.com">Say Hi!</a></button>
            </div>
            
        </div>
        
    )
}