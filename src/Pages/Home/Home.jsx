import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import styled from "./Home.module.css"
import Article from "../../components/Article/Article"
import { Link } from "react-router-dom"
import axios from "axios"
import Spinner from "../../components/spinner/spinner"

function Home() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
     
    useEffect(() => {
        setIsLoading(true)
        axios.get("http://localhost:8000/articles").then((result) => {

            setArticles(result.data)
            setIsLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setIsLoading(false)
            })
    }, []);
    

    return (
        <div className={styled.homeWrapper}>
            <Navbar title=" Fahima Blog" />
             <div className="container">
                <h2>New Articles</h2>
{/* shart ? dorost : ghalat*/}
                {
                    isLoading ? (<Spinner />) : (<div className={styled.articles}>
                    {
                        articles.map((article) => (
                <Link to={`/article/${article.id}`}>
                 <Article key={article.id} article={article} />
                </Link>
                    ))}
                </div>
                )}   
            </div>
            <Footer />
        </div>
    )
}

export default Home