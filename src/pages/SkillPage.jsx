import {useState} from 'react';
import SkillBar from "../components/SkillPage/SkillBar"

const SkillPage = () => {
    const [percentageHtml, setPercentageHtml] = useState("95%");
    const [percentageCss, setPercentageCss] = useState("90%");
    const [percentageJs, setPercentageJs] = useState("80%");
    const [percentageJava, setPercentageJava] = useState("60%");
    const [percentageC, setPercentageC] = useState("50%");
    const [percentageCC, setPercentageCC] = useState("50%");
    const [percentageCCC, setPercentageCCC] = useState("50%");
    const [percentageGo, setPercentageGo] = useState("50%");
    return (
        <>
            <h2>halooo</h2>

        <SkillBar percentageHtml={percentageHtml} percentageJs={percentageJs} percentageJava={percentageJava} percentageGo={percentageGo} percentageCss={percentageCss} percentageC={percentageC} percentageCC={percentageCC} percentageCCC={percentageCCC}/>

        <div className="badge">
            <div id="badge1">
                <br></br><br></br> <br></br><br></br>
                <img src="img/badge-webdev.png" width={150} height={150}/>
                <h3>Skilvul - Web Development</h3>
                <a href="https://skilvul.com/paths/web-development-pemula/student/cl5hmbzet045g01lqvub4t6wm" target="_blank">
                <button>Click Here</button>
                </a>
            </div>
            <div id="badge2">
                <br></br><br></br> <br></br><br></br>
                <img src="img/badge-js.png" width={150} height={150}/>
                <h3>Skilvul - Javascript Dasar</h3>
                <a href="https://skilvul.com/courses/javascript-dasar/student/cl5hmbzet045g01lqvub4t6wm" target="_blank">
                <button>Click Here</button>
                </a>
            </div>
            <div id="badge3">
                <br></br><br></br> <br></br><br></br>
                <img src="img/badge-uiux.png" width={150} height={150}/>
                <h3>Skilvul - UI/UX Design Mastery</h3>
                <a href="https://skilvul.com/courses/uiux-design-mastery/student/cl5hmbzet045g01lqvub4t6wm" target="_blank">
                <button>Click Here</button>
                </a>
            </div>
        
        </div>

        </>
    )
}

export default SkillPage