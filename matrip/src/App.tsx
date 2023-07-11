import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import FriendSearch from './pages/FriendSearch';
import ItineraryInfo from './pages/ItineraryInfo';
import UserProfile from './pages/UserProfile';
import MapSearch from './pages/MapSearch';
import TripSchedule from './pages/TripSchedule';
import Notice from './pages/Notice';
import Dibs from './pages/Dibs';
import NotFound from './pages/NotFound';

import GlobalFonts from './styles/fonts';
import { GlobalStyle } from './styles/GlobalStyles';
import { lightTheme } from './styles/theme/theme';

function App() {
  return (
    <BrowserRouter>
      <GlobalFonts />
      <GlobalStyle theme={lightTheme} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/friendSearch' element={<FriendSearch />} />
        <Route path='/itineraryInfo' element={<ItineraryInfo />} />
        <Route path='/userProfile' element={<UserProfile />} />
        <Route path='/tripSchedule' element={<TripSchedule />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/Dibs' element={<Dibs />} />
        <Route path='/mapSearch' element={<MapSearch />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
