import React, { useState, useContext } from "react";

const AppContext = React.createContext()

const AppProvider = ({ children }) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const sidebarOpen = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <AppContext.Provider value={{isSidebarOpen,
        sidebarOpen,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal}}>
            {children}
        </AppContext.Provider>
    )
}

//two ways to import use context function and manually export it
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider}