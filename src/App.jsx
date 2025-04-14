import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Birds from "./pages/Birds";
import Mammals from "./pages/Mammals";
import Reptiles from "./pages/Reptiles";

const NotFound = () => (
  <div style={{ textAlign: "center", padding: "2rem" }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home title="Welcome to ZooWebsite" />} />
          <Route
            path="/home"
            element={<Home title="Welcome to ZooWebsite" />}
          />
          <Route
            path="/birds"
            element={<Birds title="Welcome to Birds Page" />}
          />
          <Route
            path="/mammals"
            element={<Mammals title="Welcome to Mammals Page" />}
          />
          <Route
            path="/reptiles"
            element={<Reptiles title="Welcome to Reptiles Page" />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
