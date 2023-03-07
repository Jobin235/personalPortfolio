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

function App() {
  const [currentMenu, setCurrentMenu] = useState("About");
  const [initialRender, setInitialRender] = useState(true);

  return (
    <div className="App">
        <Routes>
          <Route
            path=""
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
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/skills" element={<SkillsPage />}></Route>
          <Route path="/work" element={<WorkPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/portfolio" element={<PortfolioPage />}></Route>
          <Route path="/education" element={<EducationPage />}></Route>
          <Route path="/library" element={<LibraryPage />}></Route>
          <Route path="/clients" element={<ClientsPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    </div>
  );
}

export default App;
