import BodyHeader from "./components/Header/BodyHeader";
import LandPage from "./components/LandPage/LandPage";
import Ranking from './components/Ranking/Ranking';
import Login from './components/Login/Login';
import FormEnterprise from './components/FormEnterprise/FormEnterprise';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { ProviderLogin } from "./components/Login/ProviderLogin";

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
      <ProviderLogin>
        <BodyHeader theme={theme} turnLight={turnLight} />
        <Routes>
          <Route path='/' element={<LandPage theme={theme} />} />
          <Route path='/ranking' element={<Ranking theme={theme} />} />
          <Route path='/login' element={<Login theme={theme} />} />
          <Route path='/profile' element={<Profile theme={theme} />} />
          <Route path='/FormEnterprise' element={<FormEnterprise theme={theme} />} />
        </Routes>
      </ProviderLogin>
    </div>
  );
}

export default App;
