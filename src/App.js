
import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';
import { Routes, Route } from "react-router-dom";
import {useState } from "react";

function App() {
  const [user, setUser] = useState("grumpy19")
  setUser(grumpy19)
  return (
    <div className="App">
      <Header user={user}/>
      <Nav />
      <Routes>
        <Route path="/" element={<ArticlesList />}> </Route>
        <Route path="/articles" element={<ArticlesList />}> </Route>
        <Route path="/articles/topics/:topic" element={<ArticlesList />}> </Route>
        <Route path={`/articles/article/:article_id`} element={<SingleArticle user={user}/>} />
        <Route path="/*" element={<div className="Load_Error_Container"><p className="Error">404 - Page not found. Sorry. </p></div>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
