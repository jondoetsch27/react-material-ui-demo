import React from "react";
import AppSidebar from "./AppSidebar";
import AppCardGrid from "./AppCardGrid";

const AppLayout: React.FC = ({children}) => {
    return (
        <>
            <AppSidebar/>
            <AppCardGrid/>
        </>
    )
}

export default AppLayout