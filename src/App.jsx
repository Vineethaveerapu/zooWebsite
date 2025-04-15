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
                title="Welcome to Birds Page"
                slug="birds"
                sidebarTitle="Birds"
              />
            }
          />
          <Route
            path="/mammals"
            element={
              <Page
                title="Welcome to Mammals Page"
                slug="mammals"
                sidebarTitle="Mammals"
              />
            }
          />
          <Route
            path="/reptiles"
            element={
              <Page
                title="Welcome to Reptiles Page"
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
