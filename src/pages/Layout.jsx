import React from "react";
import HeaderBar from "../components/Header";
import { Outlet } from "react-router-dom";




function Layout() {
    return (
        <>
            <HeaderBar/>
            <Outlet/>
        </>
    )
}

export default Layout