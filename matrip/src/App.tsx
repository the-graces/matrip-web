import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ItinerarySearch from './pages/ItinerarySearch';
import FriendSearch from './pages/FriendSearch';
import ItineraryInfo from './pages/ItineraryInfo';
import UserProfile from './pages/UserProfile';
import MapSearch from './pages/MapSearch';
import TripSchedule from './pages/TripSchedule';
import Notificiation from './pages/Notification';
import Dibs from './pages/Dibs';
import NotFound from './pages/NotFound';

import GlobalFonts from './styles/fonts';
import { GlobalStyle } from './styles/GlobalStyles';
import { lightTheme } from './styles/theme/theme';
import Management from './pages/Management';
import Management from './pages/Management';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <GlobalFonts />
      <GlobalStyle theme={lightTheme} />
      <Routes>
        <Route path='/ItinerarySearch' element={<ItinerarySearch />} />
        <Route path='/login' element={<Login />} />
        <Route path='/friendSearch' element={<FriendSearch />} />
        <Route path='/itineraryInfo' element={<ItineraryInfo />} />
        <Route path='/userProfile' element={<UserProfile />} />
        <Route path='/tripSchedule' element={<TripSchedule />} />
        <Route path='/notifications' element={<Notificiation />} />
        <Route path='/Dibs' element={<Dibs />} />
        <Route path='/mapSearch' element={<MapSearch />} />
        <Route path='/management' element={<Management />} />
        <Route path='/management' element={<Management />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
