import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from "./Layout/components/Header";
import HomePage from "./Layout/components/HomePage";
import Feature from "./pages/Feature/Feature";
import Support from "./pages/Support/Support";
import Faq from "./pages/Faq/Faq";
import Communication from "./pages/Communication/Communication";
import Bank from "./pages/Bank/Bank";
import PrivateRoute from "./Route/PrivateRoute";


function App() {
  const [dark, setDark] = useState(false);

  return (
    <Router>
      <Header dark={dark} setDark={setDark} />
      <div className={dark ? "dark" : ""}>
        <Routes>
          <Route path="/" element={<HomePage dark={dark}/>} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/bank" 
           element= {
            <PrivateRoute>
              {<Bank />}
            </PrivateRoute>
           } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
































// import { useState } from "react";
// import "./index.css";
// // import Header from "./Layout/components/Header";

// import { RouterProvider } from "react-router-dom";
// import router from "./Route/Router";


// function App() {
//   const [dark, setDark] = useState(false);

//   return (
//     <div className={dark ? "dark" : ""}>
//       <div className="bg-[#F8F9FA] text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
//     {/* Header Always Visible */}
//         {/* <Header dark={dark} setDark={setDark} /> */}

      
//         <RouterProvider router={router}  />
//       </div>
//     </div>
//   );
// }

// export default App;
