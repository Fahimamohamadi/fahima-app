/* eslint-disable default-case */
import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import styled from "./createArticle.module.css"
import Input from "../../components/Input/input";
import Textarea from "../../components/TextArea/TextArea";
import axios from "axios";

function CreateArticle() {
    const [article, setArticle] = useState({
        id:"",
        author: "",
        date: "",
        title: "",
        imageUrl:"",
        readingTime: "",
        message:"",   
    }) 
    const handleChangeArticle = (e) => {

        setArticle((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    const handleChangeArticleMessage = (e) => {

        setArticle((prevState) => ({
            ...prevState,
            message: e.target.value
        }));
    };
    
    const handleCreateNewArticle = () => {
        axios.post("http://localhost:8000/articles", {
                "id": article.id,
                "author": article.author,
                "date": article.date,
                "imageUrl": article.imageUrl,
                "title": article.title,
                "readingTime": article.readingTime ,
                "content": article.message,
        })
            .then(() => {
                //Reset the article state to its initial values
                setArticle({
                    id:"",
                    author: "",
                    date: "",
                    title: "",
                    imageUrl:"",
                    readingTime: "",
                    message:"", 
                
                })
            })
            .catch((error) => {
                 console.error("Error creating article:", error);
            });
    }

    return (
        <>
            <Navbar title="Fahima Blog" />
            <div className={styled.createArticlePage}>
                <div className="container">
                    <h1>Create Article</h1>
                    <Input label="id" name="id" handleChange={handleChangeArticle} type="text" />
                    <Input label="Title" name="title" handleChange={handleChangeArticle} type="text" />
                    <Input label="Date" name="date" handleChange={handleChangeArticle} type="date"/>
                    <Input label="Author" name="author" handleChange={handleChangeArticle } type="text" />
                    <Input label="Reading Time" name="readingTime" handleChange={handleChangeArticle} type="text" />
                    <Input label="Image address" name="imageUrl" handleChange={handleChangeArticle} type="text" />
                    <Textarea label="content"  handleChange={handleChangeArticleMessage} type="text" />
                    <div className={styled.buttonWrapper}>
                        <button onClick={handleCreateNewArticle}>Create Article</button>
                    </div>
                </div>
            </div>
        </>
    )
}
    

export default CreateArticle