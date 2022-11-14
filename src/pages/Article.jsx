import AllArticle from "../components/HomePage/AllArticle"
import { Outlet } from "react-router-dom"

const Article = () => {
    return(
        <>
            <AllArticle/>
            <Outlet/>
        </>
    )
}

export default Article