import BodyHeader from "./components/Header/BodyHeader";
import LandPage from "./components/LandPage/LandPage";
import Ranking from './components/Ranking/Ranking';
import Login from './components/Login/Login';
import FormEnterprise from './components/FormEnterprise/FormEnterprise';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { ProviderLogin } from "./components/Login/ProviderLogin";
import FormLogin from "./components/PurchaseForm/PurchaseForm";
import Modifyenterprise from "./components/FormEnterprise/ModifyEnterprise";
import SearchPage from './components/SearchPage/SearchPage'

const App = () => {
  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    const loggedUserThemeJSON = window.localStorage.getItem('theme');
    if (loggedUserThemeJSON) {
        const loggedUserTheme= JSON.parse(loggedUserThemeJSON);
        setTheme(loggedUserTheme);
    }
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
          <Route path='/FormEnterprise/:idUser' element={<FormEnterprise theme={theme} />} />
          <Route path='/Modifyenterprise/:idUser' element={<Modifyenterprise theme={theme} />} />
          <Route path='/Purchase/:idCompany' element={<FormLogin theme={theme} />} />
          <Route path='*' element={<LandPage theme={theme} />} />
          <Route path='search/:enterpriseName' element={<SearchPage theme={theme}/>}/>
        </Routes>
       
      </ProviderLogin>
    </div>
  );
}

export default App;
