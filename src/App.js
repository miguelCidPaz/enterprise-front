import BodyHeader from "./components/Header/BodyHeader";
import LandPage from "./components/LandPage/LandPage";
import { useState, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {

  }, theme)

  return (
    <div className={`general--frame ${theme}`}>
      <BodyHeader theme={theme} setTheme={setTheme} />
      <LandPage theme={theme} />
    </div>

  );
}

export default App;
