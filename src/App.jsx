import { useState } from "react";
import "./index.css";
import Header from "./Layout/components/Header";

import { RouterProvider } from "react-router-dom";
import router from "./Route/Router";


function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-[#F8F9FA] text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
    {/* Header Always Visible */}
        {/* <Header dark={dark} setDark={setDark} /> */}

      
        <RouterProvider router={router}   dark={dark} setDark={setDark}/>
      </div>
    </div>
  );
}

export default App;
