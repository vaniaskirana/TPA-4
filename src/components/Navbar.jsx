import {Link } from "react-router-dom"


const Navbar = () => {
return (
    <>

    <nav className="navbar navbar-expand-lg navbar">
        <div className="container-fluid">
            <a className="navbar-brand imgNav" href="#"><img src="/img/me.png" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item navku">
                <Link to={"/"} style={{textDecoration: 'none'}} className="nav-link">Home</Link>
                </li>
                <li className="nav-item navku">
                <Link to={"about"} style={{textDecoration: 'none'}} className="nav-link">About</Link>
                </li>
                <li className="nav-item navku">
                <Link to={"article"} style={{textDecoration: 'none'}} className="nav-link">Article</Link>
                </li>
                <li className="nav-item navku">
                <Link to={"skill"} style={{textDecoration: 'none'}} className="nav-link">Skill</Link>

                </li>

            
            </ul>
            <div className="col iconku">
                    <li className="icon">
                    <a className="fa fa-instagram icon" href="https://www.instagram.com/vania.kirana/" target="_blank"></a>
                    </li>
                    <li className="icon">
                    <a className="fa fa-linkedin-square icon" href="https://www.linkedin.com/in/vania-sasikirana" target="_blank"></a>
                    </li>
                    <li className="icon">
                    <a className="fa fa-github icon" href="https://github.com/vaniaskirana" target="_blank"></a>
                    </li>
                </div>
            </div>
        </div>
        </nav>
   
    </>

)

}

export default Navbar