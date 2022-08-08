
export default function Footer(){
    const date = new Date();
    let year = date.getFullYear();
    const an = year + " @eduardbede ";
    return(
            <footer className="font-mono flex flex-col items-center justify-center gap-2 bg-myBlue text-myGrey pb-5">
                <p>Build by Eduard Bede</p>
                <div>
                    {an}
                    {/* <a href="https://github.com/eduardbede" className="underline decoration-mySecondBlue no_highlights">Visit GitHub</a> */}
                </div>
                
              </footer>
    )
}