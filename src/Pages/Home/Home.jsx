import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import styled from "./Home.module.css"
import Article from "../../components/Article/Article"
import axios from "axios"
function Home() {
    const[articles, setArticles] = useState([])
     
    useEffect(() => {
        //API call
       
        axios.get("http://localhost:8000/articles").then((result) => {

            setArticles(result.data.data)
            
            console.log(result.data.data); 
        })
        .catch((error) => {
            console.log(error)
            })

     },[]);

    return (
        <div className={styled.homeWrapper}>
         <Navbar title=" Fahima Blog" />
             <div className="container">
                <h2>New Articles</h2>
                <div className={styled.articles}>
                    {
                        articles.map((article) => (
                    <Article key={article.id} article={article} />
                    ))
                    }
                    </div>
            </div>
            <Footer />
       
        </div>
    )
}

export default Home