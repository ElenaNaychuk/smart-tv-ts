import React, {useEffect, useState} from "react";
import {Banner} from "../components/Banner/Banner";
import videoPath from "../assets/videos/Volvo-Trucks.mp4";
import "./HomePage.scss";

const HomePage:React.FC = () => {
    const [isBanner, setIsBanner] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsBanner(true), 1000);
    }, [])

    return(
        <main className='home-container'>
            <video
                src={videoPath}
                loop={true}
                muted={true}
                autoPlay={true}
            >
            </video>
            {isBanner &&
                <Banner />
            }
        </main>
    )
}
export {HomePage};