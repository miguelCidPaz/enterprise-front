import BodyHeader from "./components/Header/BodyHeader";
import LandPage from "./components/LandPage/LandPage";
import { useState } from "react";

const App = () => {
  const { theme, setTheme } = useState('light')

  return (
    <div className="general--frame">
      <BodyHeader setTheme={setTheme} />
      <LandPage />
    </div>

  );
}

export default App;
