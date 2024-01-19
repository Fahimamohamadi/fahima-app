import AboutUS from "./Pages/AboutUs/AboutUs";
import ArticlePage from "./Pages/Article/ArticlePage";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import CreateArticle from "./Pages/createArticle/createArticle";
import NotFound from "./Pages/Not Found/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/create-article" element={<CreateArticle />} />
     </Routes>
    </div>
  )
}

export default App;
