import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

import FriendSearch from "./pages/FriendSearch";
import ItineraryInfo from "./pages/ItineraryInfo";
import UserProfile from "./pages/UserProfile";
import MapSearch from "./pages/MapSearch";

import GlobalFonts from "./styles/fonts";
import TripSchedule from "./pages/TripSchedule";
import Notice from "./pages/Notice";
import Dibs from "./pages/Dibs";

function App() {

  return (
    <BrowserRouter>
      <GlobalFonts />
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
        <Route
          path="/tripSchedule"
          element={<TripSchedule />}
        />
        <Route
          path="/notice"
          element={<Notice />}
        />
        <Route
          path="/Dibs"
          element={<Dibs />}
        />
        <Route
          path="/mapSearch"
          element={<MapSearch />}
        />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
