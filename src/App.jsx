import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Birds from "./pages/Birds";
import Mammals from "./pages/Mammals";
import Reptiles from "./pages/Reptiles";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home title="Home" />} />
          <Route path="/home" element={<Home title="Home" />} />
          <Route path="/birds" element={<Birds title="Birds" />} />
          <Route path="/mammals" element={<Mammals title="Mammals" />} />
          <Route path="/reptiles" element={<Reptiles title="Reptiles" />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
