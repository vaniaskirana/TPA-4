import {useState} from 'react';
import Biodata from "../components/AboutMe/Biodata";
import Experience from '../components/AboutMe/Experience';
const AboutMe = () => {
    const [fullname, setFullName] = useState ("Vania Sasikirana");
    const [imgPas, setImgPas] = useState ("/img/pasme.png");
    const [desme1, setDesMe1] = useState ("Im study in University of Gunadarma - System Information, I am a student who are currently interested in the field technologies such as Web Development and Java Implementation.");
    const [desme2, setDesMe2] = useState ("Soon i will be a Web Development. My future expertise is Create and Website Design, Graphic Design, etc..");

    return (
        <>
        
        <Biodata imgPas={imgPas} fullname={fullname} desme1={desme1} desme2={desme2}/>
        <Experience/>

        </>
    )
}

export default AboutMe;