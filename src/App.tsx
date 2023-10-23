import React from 'react';
import {HomePage} from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import {RegistrationPage} from "./pages/RegistrationPage/RegistrationPage";
import './App.scss';
import videoPath from "./assets/videos/Volvo-Trucks.mp4";

function App() {
  return (
    <div className="app">
        <video
            src={videoPath}
            loop={true}
            muted={true}
            autoPlay={true}
        >
        </video>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/registration' element={<RegistrationPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
