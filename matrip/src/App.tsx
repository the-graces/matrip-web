import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

import FriendSearch from "./pages/FriendSearch"
import ItineraryInfo from "./pages/ItineraryInfo";
import UserProfile from "./pages/UserProfile"


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
            <Route
               path="/itineraryInfo"
               element={<ItineraryInfo />}
            />
            <Route
               path="/userProfile"
               element={<UserProfile />}
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
