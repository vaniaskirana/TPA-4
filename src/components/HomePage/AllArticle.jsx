import {Link } from "react-router-dom"


const AllArticle = () => {
    return(
        <>
        <br/><br/><br/>
        <div className="artikel">
            <h1 className="text-center" >Article</h1>
            <a>
                <article>
                    <h2>What is Gamefi and How it Works</h2> 
                    <p>GameFi stands for <i>Game</i> and <i>Finance</i>. GameFi is a play-to-earn blockchain 
                        game that offers players economic incentives. Usually..</p>
                    <h6>5 October 2022</h6>
                    <Link to={"article/1"} style={{textDecoration: 'none'}} className="nav-link"><button className="col-12 buttonartikel">Read More</button><hr/></Link>
                    
                    
                </article>
            </a>
            
            <a>
            <article>
                <h2>What is NFT</h2>
                <p>Non-Fungible Tokens or NFTs are digital assets with unique metadata attached to the token.
                    The tokens can be used for digital collections, voting, or </p>
                <h6>5 October 2022</h6>
                <Link to={"article/2"} style={{textDecoration: 'none'}} className="nav-link"><button className="col-12 buttonartikel">Read More</button><hr/></Link>           
            </article>
            </a>
            <a>
                <article>
                    <h2>Lets Know About P2E</h2>
                    <p>Play-to-earn games, also called P2E games or even just crypto games, are games that have cryptocurrency and NFT as part of their...</p>
                    <h6>5 October 2022</h6>
                    <Link to={"article/3"} style={{textDecoration: 'none'}} className="nav-link"><button className="col-12 buttonartikel">Read More</button><hr/></Link>   
                </article>
            </a>

        </div>
        </>
    )
}

export default AllArticle