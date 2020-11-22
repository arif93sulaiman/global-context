import React from 'react'
import { FaTimes } from "react-icons/fa";
import logo from "./logo.svg";
import { links, social} from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()

    return (
        <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"} `}>
            <div className="sidebar-header">
                <img src={logo} className="logo" alt="coding addict"/>
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes/>
                </button>
            </div>
            <ul className="links">
                {links.map((link) => {
                    const {id, url, text, icon} = link
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="social-icons">
                {social.map((icon)=>{
                    const {id, url, icons} = icon
                    return (
                        <li key={id}>
                            <a href={url}>{icons}</a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar
