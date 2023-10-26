import React, {useEffect, useRef} from 'react';
import {HomePage} from "./pages/HomePage";
import {Route, Routes, useLocation} from "react-router-dom";
import {RegistrationPage} from "./pages/RegistrationPage/RegistrationPage";
import './App.scss';
import videoPath from "./assets/videos/Volvo-Trucks.mp4";

function App() {
    const videoElemRef = useRef<HTMLVideoElement | null>(null);
    const location = useLocation();

    useEffect(()=>{
        location.pathname === '/'
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
            <Route path='/' element={<HomePage/>}/>
            <Route path='/registration' element={<RegistrationPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
