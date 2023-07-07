import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ItineraryRegister from "./pages/ItineraryRegister";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={<Main />}
            />
            <Route
               path="/itineraryRegister"
               element={<ItineraryRegister />}
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
