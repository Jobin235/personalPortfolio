import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import EducationPage from "./pages/EducationPage";
import LibraryPage from "./pages/LibraryPage";
import ClientsPage from "./pages/ClientsPage";
import ErrorPage from "./pages/ErrorPage";

import Layout from "./components/Layout";

function App() {
  const [currentMenu, setCurrentMenu] = useState("About");
  const [initialRender, setInitialRender] = useState(true);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              initialRender={initialRender}
              setInitialRender={setInitialRender}
              currentMenu={currentMenu}
              setCurrentMenu={setCurrentMenu}
            />
          }
          exact
        ></Route>
        <Route
          path="/about"
          element={<Layout children={<AboutPage />}></Layout>}
        ></Route>
        <Route
          path="/skills"
          element={<Layout children={<SkillsPage />}></Layout>}
        ></Route>
        <Route
          path="/work"
          element={<Layout children={<WorkPage />}></Layout>}
        ></Route>
        <Route
          path="/contact"
          element={<Layout children={<ContactPage />}></Layout>}
        ></Route>
        <Route
          path="/portfolio"
          element={<Layout children={<PortfolioPage />}></Layout>}
        ></Route>
        <Route
          path="/education"
          element={<Layout children={<EducationPage />}></Layout>}
        ></Route>
        <Route
          path="/library"
          element={<Layout children={<LibraryPage />}></Layout>}
        ></Route>
        <Route
          path="/clients"
          element={<Layout children={<ClientsPage />}></Layout>}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;