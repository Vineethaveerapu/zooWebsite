import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Page from "./pages/Page";

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
          <Route
            path="/"
            element={
              <Page
                key="home"
                title="Welcome to ZooWebsite"
                slug="home"
                sidebarTitle="Zoo Animals"
              />
            }
          />
          <Route
            path="/home"
            element={
              <Page
                key="home"
                title="Welcome to ZooWebsite"
                slug="home"
                sidebarTitle="Zoo Animals"
              />
            }
          />
          <Route
            path="/birds"
            element={
              <Page
                key="birds"
                title="A World of Birds"
                slug="birds"
                sidebarTitle="Birds"
              />
            }
          />
          <Route
            path="/mammals"
            element={
              <Page
                key="mammals"
                title="A World of Mammals"
                slug="mammals"
                sidebarTitle="Mammals"
              />
            }
          />
          <Route
            path="/reptiles"
            element={
              <Page
                key="reptiles"
                title="A World of Reptiles"
                slug="reptiles"
                sidebarTitle="Reptiles"
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
