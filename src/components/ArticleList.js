import React from "react";
import Article from './Article';

function ArticleList({posts}) {

    const singleArticle = posts.map((post) => {
        // console.log(article)
        return <Article key={post.id} post={post}/>
    })
    console.log(singleArticle)
    return(
        <main>
            {singleArticle}
        </main>
    )
}

export default ArticleList