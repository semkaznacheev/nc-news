
import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import ArticlesList from './components/ArticlesList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <ArticlesList/>
    </div>
  );
}

export default App;
