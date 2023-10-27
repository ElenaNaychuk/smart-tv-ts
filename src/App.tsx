import React, {useEffect, useRef} from 'react';
import {HomePage} from "./pages/HomePage/HomePage";
import {Route, Routes, useLocation} from "react-router-dom";
import {RegistrationPage} from "./pages/RegistrationPage/RegistrationPage";
import './App.scss';
import videoPath from "./assets/videos/Volvo-Trucks.mp4";

export const homePath = '/smart-tv-ts/';
export const registrationPath = '/smart-tv-ts/registration';

function App() {
    const videoElemRef = useRef<HTMLVideoElement | null>(null);
    const location = useLocation();

    useEffect(()=>{
        location.pathname === homePath
            ? videoElemRef?.current?.play()
            : videoElemRef?.current?.pause();
    },[location.pathname])

  return (
    <div className="app">
        <video
            ref={videoElemRef}
            src={videoPath}
            loop={true}
            muted={true}
            autoPlay={true}
        >
        </video>
        <Routes>
            <Route path={homePath} element={<HomePage/>}/>
            <Route path={registrationPath} element={<RegistrationPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
