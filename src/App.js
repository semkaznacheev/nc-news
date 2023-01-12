
import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';
import { Routes, Route } from "react-router-dom";
import {useState } from "react";

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<ArticlesList />}> </Route>
        <Route path="/articles" element={<ArticlesList />}> </Route>
        <Route path={`/articles/article/:article_id`} element={<SingleArticle/>} />
      </Routes>
    </div>
  );
}

export default App;
