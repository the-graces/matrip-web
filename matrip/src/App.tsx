import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import FriendSearch from "./pages/FriendSearch"


function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={<Main />}
            />
            <Route
               path="/friendSearch"
               element={<FriendSearch />}
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
