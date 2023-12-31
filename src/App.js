import AboutUS from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"  element={<AboutUS />} />

     </Routes>
    </div>
  );
}

export default App;
