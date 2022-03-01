import BodyHeader from "./components/Header/BodyHeader";
import LandPage from "./components/LandPage/LandPage";
import Ranking from './components/Ranking/Ranking';
import Login from './components/Login/Login';
import FormEnterprise from './components/FormEnterprise/FormEnterprise';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Perfil from "./components/Perfil/Perfil";

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {

  }, [theme])

  const turnLight = (light) => {
    if (light === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className={`general--frame ${theme}`}>
      <BodyHeader theme={theme} turnLight={turnLight} />
      <Routes>
        <Route path='/' element={<LandPage theme={theme} />} />
        <Route path='/ranking' element={<Ranking theme={theme} />} />
        <Route path='/login' element={<Login theme={theme} />} />
        <Route path='/perfil' element={<Perfil theme={theme} />} />
        <Route path='/FormEnterprise' element={<FormEnterprise theme={theme} />} />
      </Routes>
    </div>

  );
}

export default App;
