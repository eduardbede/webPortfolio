import { VscGithubInverted } from "react-icons/vsc";
import ImageGallery from 'react-image-gallery';
import { motion } from "framer-motion";

import weatherApp from '../../img/WeatherApp/weatherApp.jpg';
import weatherApp_1 from '../../img/WeatherApp/weatherApp_1.jpg';
import weatherApp_2 from '../../img/WeatherApp/weatherApp_2.jpg';
import weatherApp_3 from '../../img/WeatherApp/weatherApp_3.jpg';

import bookLibrary_1 from '../../img/BookLibrary/BookLibrary.jpg';
import bookLibrary_2 from '../../img/BookLibrary/BookLibrary_1.jpg';
import bookLibrary_mobile from '../../img/BookLibrary/BookLibrary_mobile.jpg';

import phoneServiceAndSales from '../../img/PhoneServiceAndSales/PhoneService.jpg';
import phoneServiceAndSales_1 from '../../img/PhoneServiceAndSales/PhoneService_1.jpg';
import phoneServiceAndSales_2 from '../../img/PhoneServiceAndSales/PhoneService_2.jpg';
import phoneServiceAndSales_3 from '../../img/PhoneServiceAndSales/PhoneService_3.jpg';
import phoneServiceAndSales_4 from '../../img/PhoneServiceAndSales/PhoneService_4.jpg';
import phoneServiceAndSales_5 from '../../img/PhoneServiceAndSales/PhoneService_5.jpg';
import phoneServiceAndSales_mobile from '../../img/PhoneServiceAndSales/PhoneService_mobile.jpg';
import phoneServiceAndSales_mobile_1 from '../../img/PhoneServiceAndSales/PhoneService_mobile_1.jpg';
import phoneServiceAndSales_mobile_2 from '../../img/PhoneServiceAndSales/PhoneService_mobile_2.jpg';

import ticTacToe from '../../img/TicTacToe/TicTacToe.jpg';
import ticTacToe_1 from '../../img/TicTacToe/TicTacToe_1.jpg';
import ticTacToe_mobile from '../../img/TicTacToe/TicTacToe_mobile.jpg';

import rockPaperScissors from '../../img/RockPaperScissors/RockPaperScissors.png';
import rockPaperScissors_1 from '../../img/RockPaperScissors/RockPaperScissors_1.png';
import rockPaperScissors_mobile from '../../img/RockPaperScissors/RockPaperScissors_mobile.png';
import rockPaperScissors_mobile_1 from '../../img/RockPaperScissors/RockPaperScissors_mobile_1.png';

import calculator from '../../img/Calculator/Calculator.png';
import calculator_1 from '../../img/Calculator/Calculator_1.png';
import calculator_mobile from '../../img/Calculator/Calculator_mobile.png';

import signInLogIn from '../../img/SignInLogIn/SignInLogIn.jpg';
import signInLogIn_1 from '../../img/SignInLogIn/SignInLogIn_1.jpg';
import signInLogIn_2 from '../../img/SignInLogIn/SignInLogIn_2.jpg';
import signInLogIn_mobile from '../../img/SignInLogIn/SignInLogIn_mobile.jpg';
import signInLogIn_mobile_1 from '../../img/SignInLogIn/SignInLogIn_mobile_1.jpg';

import adminDashboard from '../../img/AdminDashboard/AdminDashboard.png'
import adminDashboard_mobile from '../../img/AdminDashboard/AdminDashboard_mobile.png'

import etchASketch from '../../img/EtchASketch/EtchASketch.png';
import etchASketch_1 from '../../img/EtchASketch/EtchASketch_1.png';

import moonPhase from '../../img/moonPhase/moonPhase.jpg';
import moonPhase_1 from '../../img/moonPhase/moonPhase_1.jpg';
import moonPhase_mobile_1 from '../../img/moonPhase/moonPhase_mobile.png';
import moonPhase_mobile_2 from '../../img/moonPhase/moonPhase_mobile_1.png';

export default function ProjectsData(){
      
const projects=[
          {
            id:1,
            title: "Moon Phase Application",
            images:[
                {
                  original: moonPhase,
                },
                {
                  original: moonPhase_1,
                },
                {
                  original: moonPhase_mobile_1,
                },
                {
                  original: moonPhase_mobile_2,
                },
              ],
            link: "https://eduardbede.github.io/moonPhase/",
            text : <div>Moon Phase Application is built with <span className='text-mySecondBlue'>React.JS</span>, <span className='text-mySecondBlue'>Tailwind</span> and
                    <span className='text-mySecondBlue'> Luxon</span> for time format.
                    I like the moon so much that it influences my life. It automatically shows you the current moon, when the new moon will be, and when the next full moon will be.
                    I have implemented a calendar so that we can see what the phases of the moon will be in the desired period.
                    </div>
            },
  
      {
        id:2,
        title: "Weather App",
        images:[
            {
              original: weatherApp,
            },
            {
              original: weatherApp_1,
            },
            {
              original: weatherApp_2,
            },
            {
              original: weatherApp_3,
            },
          ],
        link: "https://eduardbede.github.io/weatherApp/",
        text : <div>Weather App is built with <span className='text-mySecondBlue'>React.JS</span> and <span className='text-mySecondBlue'>Tailwind</span>. 
                Features include the ability to search for any location; 
                automatically changing timezones based on where the application is accessed; 
                automatically determining location based on IP address; 
                and converting degrees from Celsius to Fahrenheit.</div>
        },

        {
        id:3,
        title: "Phone Service And E-Commerce",
        images:[
                {
                  original: phoneServiceAndSales,
                },
                {
                  original: phoneServiceAndSales_1,
                },
                {
                  original: phoneServiceAndSales_2,
                },
                {
                  original: phoneServiceAndSales_3,
                },
                {
                  original: phoneServiceAndSales_4,
                },
                {
                  original: phoneServiceAndSales_5,
                },
                {
                  original: phoneServiceAndSales_mobile,
                },
                {
                  original: phoneServiceAndSales_mobile_1,
                },
                {
                  original: phoneServiceAndSales_mobile_2,
                },
              ],
        link: "https://eduardbede.github.io/phoneServiceAndSales/",
        text : <div>This application is build with <span className='text-mySecondBlue'>HTML</span>, <span className='text-mySecondBlue'>CSS</span> {' '}
        and <span className='text-mySecondBlue'>JavaScript</span>. Features : you can create an account, add phones to the shopping cart, 
                    it automatically calculates the cost of the products in the shopping cart, when you log out, it resets the shopping cart.</div>
        },

        {
        id:4,
        title: "Books Library",
        images:[
            {
              original: bookLibrary_1,
            },
            {
              original: bookLibrary_2,
            },
            {
              original: bookLibrary_mobile,
            },
          ],
        link: "https://eduardbede.github.io/bookLibrary/",
        text : <div>The Book Library app is built with <span className='text-mySecondBlue'>JavaScript</span>. You can add the books you want to read; 
                    you can edit the added books; 
                    calculate the total number of books added; 
                    the number of pages read; the number of books read; 
                    and, of course, you can delete any book you want.</div>,
        },

        {
        id:5,
        title: "Tic Tac Toe",
        images:[
            {
                original: ticTacToe,
            },
            {
                original: ticTacToe_1,
            },
            {
                original: ticTacToe_mobile,
            },
          
        ],
        link: "https://eduardbede.github.io/ticTacToe/",
        text : <div>The Tic-Tac-Toe game is built with <span className='text-mySecondBlue'>JavaScript</span>. You can play VS Computer or VS Player, choose whether you want to be with X or O, 
                    and whether the computer or player makes the first move. 
                    There is also a scoreboard.</div>,
        },

        {
        id:6,
        title: "Rock Paper Scissors",
        images:[
            {
                original: rockPaperScissors,
            },
            {
                original: rockPaperScissors_1,
            },
            {
                original: rockPaperScissors_mobile,
            },
            {
                original: rockPaperScissors_mobile_1,
            },
          ],
          link: "https://eduardbede.github.io/rock-paper-scissors/",
          text : <div>Rock, Paper, Scissors is a fun game built with <span className='text-mySecondBlue'>JavaScript</span>.
                      It has scoreboard, shows what we selected, 
                      what computer selected and who wins.</div>,
          },

          {
          id:7,
          title: "Calculator",
          images:[
              {
                  original: calculator,
              },
              {
                  original: calculator_1,
              },
              {
                  original: calculator_mobile,
              },
            ],
            link: "https://eduardbede.github.io/calculator/",
            text : <div>The Calculator is built with <span className='text-mySecondBlue'>JavaScript</span>. Features : you can do any calculation you want, it's a daily help.</div>,
          },

          {
          id:8,
          title: "Sign In and Log In Pages",
          images:[
            {
                original: signInLogIn,
            },
            {
                original: signInLogIn_1,
            },
            {
                original: signInLogIn_2,
            },
            {
               original: signInLogIn_mobile,
            },
            {
               original: signInLogIn_mobile_1,
            },
          ],
          link: "https://eduardbede.github.io/signinpage/",
          text : <div>Sign In and Log In pages are built with <span className='text-mySecondBlue'>JavaScript</span>. 
                      You can create an account and login with the new account you created.</div>,
          },

          {
          id:9,
          title: "Admin Dashboard",
          images:[
            {
                original: adminDashboard,
            },
            {
                original: adminDashboard_mobile,
            },
          ],
          link: "https://eduardbede.github.io/adminDashboard/",
          text : <div>Admin Dashboard build with <span className='text-mySecondBlue'>HTML</span> and <span className='text-mySecondBlue'>CSS</span>. 
                      The page is made to practice CSS and responsiveness on phones.</div>,
          },

          {
          id:10,
          title: "Etch a Sketch",
          images:[
            {
                original: etchASketch,
            },
            {
                original: etchASketch_1,
            },
          ],
          link: "https://eduardbede.github.io/etch-a-sketch/",
          text : <div>Etch A Sketch is built with <span className='text-mySecondBlue'> HTML</span>, <span className='text-mySecondBlue'>CSS</span> and <span className='text-mySecondBlue'>JavaScript</span>. 
                      This little project was one of the first projects done in JavaScript. It was a challenge that I successfully overcame!
                      Features : you can select the size of the board, color and can clean the board.</div>,
            },
        
];

const mapProjects = projects.map(el=>{
       return <div key={el.id} className='flex flex-col justify-center pb-20'>
                <div className="text-myGrey pb-10 text-2xl underline">{el.title}</div>
                <div className="flex flex-col md:flex-row justify-center gap-6 flex-wrap">
                 <motion.div 
                            initial={{y:20}}
                            whileInView={{y:0}}
                            transition={{delay:0.5, duration:0.3}}
                            viewport={{ once: true }}
                            className='flex items-center justify-center md:w-3/4' >
                    <ImageGallery items={el.images} 
                                  useTranslate3D={true} 
                                  showBullets={true} 
                                  onErrorImageURL={"error"} 
                                  slideInterval={5000} 
                                  fullscreen 
                                  swipingTransitionDuration={4000} 
                                  useWindowKeyDown={false}/>
                </motion.div>
                <motion.div 
                            initial={{y:20}}
                            whileInView={{y:0}}
                            transition={{delay:0.6, duration:0.3}}
                            viewport={{ once: true }}
                            className="projectText text-myGreySecond flex flex-col items-center md:w-3/4 text-xl md:text-2xl gap-4">
                    {el.text}
                    <motion.a
                              initial={{scale:0.5}}
                              whileInView={{scale:1}}
                              transition={{duration:1}}
                              viewport={{ once: true }}
                              href={el.link} className="text-myGrey no_highlights flex items-center gap-2 font-bold text-xl"
                      > Click to see this project!<VscGithubInverted size={'1em'}/>
                    </motion.a>
                </motion.div>
                </div>
             </div>  
})

    return(
        <>
         {mapProjects}
        </>
        
    )
}