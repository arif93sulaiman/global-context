import React from 'react'
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
    const {sidebarOpen, openModal} = useGlobalContext()
    return (
        <main>
            <button className="sidebar-toggle" onClick={sidebarOpen}>
                <FaBars/>
            </button>
            <button onClick={openModal} className="btn">
                show modal
            </button>
        </main>
    )
}

export default Home
