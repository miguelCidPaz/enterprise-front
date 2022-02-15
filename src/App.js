import BodyHeader from "./components/Header/BodyHeader";
import LandPage from "./components/LandPage/LandPage";
import Ranking from './components/Ranking/Ranking';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {

  }, theme)

  return (
    <div className={`general--frame ${theme}`}>
      <BodyHeader theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<LandPage theme={theme} />} />
        <Route path='/ranking' element={<Ranking theme={theme} />} />
      </Routes>
    </div>

  );
}

export default App;
