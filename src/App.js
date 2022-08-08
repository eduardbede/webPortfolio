import React from "react";
import { useState, useEffect, useRef} from "react";
import NavbarMobile from "./Components/NavbarMobile";
import Navigation from "./Components/Navigation";
import PersonDetail from "./Components/PersonDetail";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import LeftStatic from "./Components/LeftStatic";
import RightStatic from "./Components/RightStatic";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const home = useRef(null);
  const aboutMe = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null)



  const handleClick = (e) => {

    if(e.target.name ==='home'){
      setIsOpen(false);
      home.current?.scrollIntoView({behavior: 'smooth'  });
    }else if(e.target.name === 'aboutMe'){
      setIsOpen(false);
      aboutMe.current?.scrollIntoView({behavior: 'smooth'});
    }else if(e.target.name === 'projects'){
      setIsOpen(false);
    projects.current?.scrollIntoView({behavior: 'smooth'});
    }else if(e.target.name === 'contact'){
      setIsOpen(false)
    contact.current?.scrollIntoView({behavior: 'smooth'});
    }
  };

  const [dimensions, setDimensions] = useState(window.innerWidth)
  function buttonToggle(){
    setIsOpen(prevOpen => !prevOpen)
  }
  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth)
      if(dimensions >= 768){
        setIsOpen(false)
      }
}
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
}
  },[])


  useEffect(()=>{
    function closeBody(){
      setIsOpen(false)
    }
    document.querySelector('.closeBody').addEventListener('click', closeBody);
      return function cleanup(){
        window.removeEventListener('click', closeBody );
    } 
    });
 

  useEffect(()=>{
    if(isOpen === true){
      document.body.style.overflow = "hidden"
    } else if(isOpen===false){
      document.body.style.overflow = "visible"
    }
  },[isOpen]);

  
  

  return (
    <> 
      <Navigation isOpen = {isOpen}
                  buttonToggle = {buttonToggle}
                  scollFunction={handleClick}/>
      <NavbarMobile isOpen = {isOpen}
                    buttonToggle = {buttonToggle}
                    scollFunction={handleClick}
                    />
      <div className="closeBody">
          <PersonDetail homeScroll={home}/>
          <AboutMe aboutMeScroll={aboutMe}/>
          <Projects projectsScroll={projects}/>
          <ContactMe contactScroll={contact} />
          <Footer />
          <LeftStatic />
          <RightStatic />
      </div>              
      
    </>
  );
}

export default App;
