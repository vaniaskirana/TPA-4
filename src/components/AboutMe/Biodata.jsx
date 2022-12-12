import Pdf from './Resume_Vania Sasikirana.pdf'

const Biodata = ({fullname, imgPas, desme1, desme2}) => {
    return (
        <>

    <div className="container aboutmeintro">
            <div className="row">
                <div className="col m-2 text-center pasme"><img src={imgPas}/></div>
                    <div className="col mt-5 text-center intro">
                        <br></br>
                        <h1 style={{color: "white", fontWeight:600}}>Hello👋 <br></br>My Name is {fullname}</h1><br></br><br></br>
                            <p>{desme1}</p>
                            <br></br>
                            <p>{desme2}</p>
                            <br></br><br></br>
                            
                            <a href={Pdf} style={{textDecoration: 'none'}} target="_blank"><button>Download Resume</button></a>
                            <br></br>
                            <br></br>
                            <br></br>
                </div>
            </div>
    </div>

        </>

    )
}

export default Biodata;