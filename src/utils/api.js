import axios from "axios";


const newsApi = axios.create({
    baseURL: "https://nc-news-qcna.onrender.com/api",
})

export const getArticles = () => {
    return newsApi.get("/articles")
    .then((res) => {
        return res.data
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