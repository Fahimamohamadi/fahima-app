import styled from "./Article.module.css"

function Article(props) {
     
    return (
        <div className={styled.articleWrapper}>
            <img alt="Js" src={props.article.imageUrl} />
            <h3>{props.article.title}</h3>
            <p>Read {props.article.readingTime} minute</p>
        </div> 
    )
}

export default Article