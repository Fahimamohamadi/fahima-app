import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import styled from "./Home.module.css"
import Article from "../../components/Article/Article"
function Home() {
    const[articles, setArticles] = useState([])
     
    // useEffect(() => {
    //     //API call
       
        

    //  },[]);

    return (
        <div className={styled.homeWrapper}>
         <Navbar title=" Fahima Blog" />
             <div className="container">
                <h2>New Articles</h2>
                <div className={styled.articles}>
                    {
                        articles.map(article => (
                            <Article key={article.id} article={article} />))
                    }
                    </div>
            </div>
            {/* <Footer /> */}
       
        </div>
    )
}

export default Home