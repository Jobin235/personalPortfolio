import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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
import { AppContext } from "./utils/context";

import { AnimatePresence } from "framer-motion";

function App() {
  const [currentMenu, setCurrentMenu] = useState("About");
  const [initialRender, setInitialRender] = useState(true);
  const [sideMenuRender, setSideMenuRender] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AppContext.Provider
      value={{
        currentMenu,
        setCurrentMenu,
        initialRender,
        setInitialRender,
        sideMenuRender,
        setSideMenuRender,
      }}
    >
      <div className="App">
        <AnimatePresence initial={false} mode={"wait"}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} exact></Route>
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
        </AnimatePresence>
      </div>
    </AppContext.Provider>
  );
}

export default App;
