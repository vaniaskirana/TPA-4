// components
import {useState} from 'react';
import AllArticle from '../components/HomePage/AllArticle';
import IntroMe from "../components/HomePage/IntroMe";

const HomePage = () => {
    const[nickname, setNickname] = useState("Vania")
    const[imgme, setImageMe] = useState("/img/me.png")
    
    return(
        <>
        
        <IntroMe imgme={imgme} nickname={nickname}/>
        <AllArticle/>
        
        </>
    )
}

export default HomePage;