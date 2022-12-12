import {useState} from 'react';
import SkillBadge from '../components/SkillPage/SkillBadge';
import SkillBar from "../components/SkillPage/SkillBar"

const SkillPage = () => {
    const [percentageHtml, setPercentageHtml] = useState("95%");
    const [percentageCss, setPercentageCss] = useState("90%");
    const [percentageJs, setPercentageJs] = useState("80%");
    const [percentageReact, setPercentageReact] = useState("80%");
    const [percentageJava, setPercentageJava] = useState("60%");
    const [percentageC, setPercentageC] = useState("50%");
    const [percentageCC, setPercentageCC] = useState("50%");
    const [percentageCCC, setPercentageCCC] = useState("50%");
    const [percentageGo, setPercentageGo] = useState("50%");
    return (
        <>
            <SkillBar percentageHtml={percentageHtml} percentageReact={percentageReact} percentageJs={percentageJs} percentageJava={percentageJava} percentageGo={percentageGo} percentageCss={percentageCss} percentageC={percentageC} percentageCC={percentageCC} percentageCCC={percentageCCC}/>
            <SkillBadge/>

        </>
    )
}

export default SkillPage