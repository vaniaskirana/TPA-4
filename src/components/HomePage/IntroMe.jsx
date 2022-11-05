
const IntroMe = ({imgme, nickname}) => {

    return(
<>
    <div className="m-1">
      
       <div className="m-2 text-center imgIntroMe"><img src={imgme}/></div>
        <div className="col-4 text-center mx-auto">
            <p>
            Hello! <h3 className="m-200" style={{color: "white"}}>This is {nickname} 👋</h3>I am a student from Gunadarma University and Im so interested in the world of coding specifically for web development.
            </p>
        </div>
    </div>

    <div className="row mx-auto box2">
            <div className="col-4 text-center mx-auto box2a">
                <i className="col-12 text-center fa fa-key" style={{color: "white"}}></i>
                <p>Able to operate multiple
                    programming languages ​​such as C, C++, PHP,
                    Golang, Java, and Javascript. Also supported tools
                like HTML and CSS.</p>
            </div>
            
            <div className="col-4 text-center mx-auto box2a">
                
                <i className="col-12 text-center fa fa-wrench" style={{color: "white"}}></i>
                <p>Able to operate program like XAMPP, phpMyAdmin and text editor such as
                    Visual Studio Code, Sublime Text, Netbeans, and
                    Adobe Dreamweaver 2021.</p>
            </div>
        </div>
        
</>
    )

}

export default IntroMe;