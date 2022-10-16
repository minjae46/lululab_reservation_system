import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reservation from './pages/reservation/Reservation';
import Registeration from './pages/registeration/Registeration';
import ReservedList from './pages/reservedList/ReservedList';
//import ReservationMy from './pages/reservation/ReservationMy';
//주석 해제하고 확인해주세요

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reservation />} />
        {/* <Route path="/my" element={<ReservationMy />} /> */}
        {/* 주석 해제하고 확인해주세요  */}
        <Route path="/register" element={<Registeration />} />
        <Route path="/list" element={<ReservedList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
