import axios from "axios";


const newsApi = axios.create({
    baseURL: "https://nc-news-qcna.onrender.com/api",
})

export const getArticles = (topic) => {
    if (topic === '') return newsApi.get("/articles").then((res) => {
        return res.data;
    })
    return newsApi.get("/articles", { 
        params: { topic: topic },
    })
    .then((res) => {
        return res.data
    })
}

export const getTopics = () => {
    return newsApi.get("/topics").then((res) => {
        return res.data;
    })
}
export const getSingleArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
    .then((res) => {
        return res.data;
    })
}

export const getCommentsById = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data;
    })
}

export const patchVotesChange = (article_id, votesChange) => {
    return newsApi.patch(`/articles/${article_id}`, {inc_votes: votesChange})
   

}

export const postComment = (article_id, username, body) => {
    return newsApi.post(`/articles/${article_id}/comments`, {username:  username,
    body: body})
}

// export const getArticlesByQueries = (topic) => {
//     return newsApi.get('/articles', { params: {slug: topic}})
//     .then((res) => {
//         return res.data;
// })
// }

