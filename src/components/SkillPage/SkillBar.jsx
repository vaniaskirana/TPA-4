const SkillBar = ({percentageHtml, percentageCss, percentageJs, percentageReact,percentageJava, percentageC,percentageCC,percentageCCC, percentageGo}) => {
    return(
        <>
            <br></br><br></br><br></br>
            <div className="skillpage">
            <h1>Skill Page</h1>
                <div className="bar front expert"  data-skill="HTML">
                    <div className="percent">{percentageHtml}</div>   
                </div>        
                <div className="bar front advanced" data-skill="CSS">
                    <div className="percent">{percentageCss}</div>
                </div>
                <div className="bar front advanced" data-skill="Bootstrap">
                    <div className="percent">{percentageCss}</div>
                </div>
                <div className="bar front advanced" data-skill="Git/Github">
                    <div className="percent">{percentageCss}</div>
                </div>
                <div className="bar pre-advanced" data-skill="Javascript">
                    <div className="percent">{percentageJs}</div>
                </div>
                <div className="bar pre-advanced" data-skill="React JS">
                    <div className="percent">{percentageReact}</div>
                </div>
                <div className="bar intermediate" data-skill="Redux">
                    <div className="percent">{percentageJava}</div>
                </div>
                <div className="bar back learning basic" data-skill="C">
                    <div className="percent">{percentageC}</div>
                </div>
                <div className="bar back basic" data-skill="C++">
                    <div className="percent">{percentageCCC}</div>
                </div>
                <div className="bar back basic" data-skill="C#">
                    <div className="percent">{percentageCC}</div>
                </div>
                <div className="bar back basic" data-skill="Golang">
                    <div className="percent">{percentageGo}</div>
                </div>
            </div>
            
        
        </>

    )
}

export default SkillBar