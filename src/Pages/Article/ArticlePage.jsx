import Navbar from "../../components/Navbar/Navbar";
import styled from "./ArticlePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/spinner/spinner";
import { useNavigate } from "react-router-dom";

function ArticlePage() {
    const [article, setArticle] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`http://localhost:8000/articles/${params.id}`)
            .then((result) => {
                setArticle(result.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, [params.id]);

    const handleDelete = () => {
        axios
            .delete(`http://localhost:8000/articles/${params.id}`)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <Navbar title="Fahima blog" />
            <div className={styled.articleWrapper}>
                <div className="container">
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <>
                            <h1>{article.title}</h1>
                            <div className={styled.articleInfo}>
                                <span>Date: {article.date}</span>
                                <span>Author: {article.author}</span>
                                <span>Reading Time: {article.readingTime} minute</span>
                            </div>
                            <img src={article.imageUrl} alt="eagle" />
                            <p>{article.content}</p>
                            <div className={styled.buttons}>
                            <button onClick={handleDelete}>Delete</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ArticlePage;
