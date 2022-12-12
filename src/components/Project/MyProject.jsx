const MyProject = () => {
    return(
        <>
        <br/>
        <br/>
        <br/>
        <div className="row container text-center projekKu">
            <div className="col">
                <h1>Group Project : </h1>
                <br></br>
                <h2>Voluntegreen</h2>
                <a href="https://voluntegreen.netlify.app/" style={{textDecoration: "none", color: "black"}} title="Click" target="_blank"><h4 style={{color: "aqua"}}>https://voluntegreen.netlify.app/</h4> <br/>
                <iframe src="https://voluntegreen.netlify.app/" width="50%" height={600}></iframe><hr/>
                </a>


                <br></br>
                <h1>Personal Project : </h1>
                <h2>Todo App ( React - Redux):</h2> <br/>
                <iframe src="https://vaniaskirana-tpa5.vercel.app/" width="50%" height={600}></iframe><hr/>

                <h2>Fetch-API Movie TMDB :</h2> <br/>
                <iframe src="https://vaniaskirana-tpa3.netlify.app/" width="50%" height={600}></iframe><hr/>
               
                <h2>BMI Calculator :</h2> <br/><br/>
                <iframe src="https://vaniaskirana-tpa2.netlify.app/" width="60%" height={600}></iframe>
                </div>
        </div>
        </>
    )
}

export default MyProject