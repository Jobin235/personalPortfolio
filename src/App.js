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

function detectOS() {
  const platform =
    window.navigator?.userAgentData?.platform || window.navigator.platform;
  if (platform.indexOf("Win") !== -1) return "Windows";
  if (platform.indexOf("Mac") !== -1) return "Mac OS";
  if (platform.indexOf("Linux") !== -1) return "Linux";
  if (platform.indexOf("iPhone") !== -1) return "iOS";
  if (platform.indexOf("Android") !== -1) return "Android";
  if (platform.indexOf("iPad") !== -1) return "iPad";
  return "Unknown";
}

function App() {
  const [currentMenu, setCurrentMenu] = useState("About");
  const [sideMenuRender, setSideMenuRender] = useState(false);
  const [os, setOs] = useState("");
  const location = useLocation();

  useEffect(() => {
    const detectOs = detectOS();
    setOs(detectOs);
    const metaViewport = document.querySelector('meta[name="viewport"]');
    os === "Windows"
      ? metaViewport.setAttribute("content", "width=device-width, initial-scale=" + 1 / window.devicePixelRatio)
      : metaViewport.setAttribute("content", "width=device-width, initial-scale=1");
  }, [os]);

  // useEffect(() => {
  //   document
  //     .querySelector("meta[name=viewport]")
  //     .setAttribute(
  //       "content",
  //       "width=device-width, initial-scale=" + 1 / window.devicePixelRatio
  //     );
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AppContext.Provider
      value={{
        currentMenu,
        setCurrentMenu,
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
