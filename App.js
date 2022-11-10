import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from "./components/Home"
import { Header } from "./components/Header"
import teamLogo from "./components/images/Group 22.svg"
import teamLogo1 from "./components/images/team.svg"
import getAccess from "./components/images/Group 12.svg"
import getAccess1 from "./components/images/Group 12-1.svg"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Product } from "./components/Product"
import { Services } from "./components/Services"
import { Contact } from "./components/Contact"
import { LogIn } from "./components/LogIn"
import { createContext, useState } from "react";
import { CgCircleci } from "react-icons/cg"

export const ThemeChange = createContext();


function App() {
  const [change, setChange] = useState(false);

  function Clicked() {
    setChange(!change);
  }

  return (
    <ThemeChange.Provider value={{Clicked,change}}>
      <BrowserRouter>
        <div>

          <Header
            teamLogo={teamLogo}
            teamLogo1={teamLogo1}
            getAccess={getAccess}
            getAccess1={getAccess1}
          />

          <CgCircleci className={change? "switch-black" : "switch"} onClick={() => Clicked()}></CgCircleci>
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/product" element={<Product />}></Route>

          <Route path="/services" element={<Services />}></Route>

          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/login" element={<LogIn />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeChange.Provider>
  );
}

export default App;