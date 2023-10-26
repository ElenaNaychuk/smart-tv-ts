import React, {useEffect, useState} from "react";
import {Banner} from "../../components/Banner/Banner";
import "./HomePage.scss";

const HomePage:React.FC = () => {
    const [isBanner, setIsBanner] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsBanner(true), 1000);
    }, [])

    return(
        <main className='home-container'>
            {isBanner &&
                <Banner />
            }
        </main>
    )
}
export {HomePage};