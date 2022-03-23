import React from "react";
import AppSidebar from "./AppSidebar";

class AppLayout extends React.Component {
    componentDidMount() {
        alert("AppLayout mounted")
    }
    componentWillUnmount() {
        alert("AppLayout unmounted")
    }
    render() {
        return (
            <AppSidebar/>
        )
    }
}

export default React.memo(AppLayout)