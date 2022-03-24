import React from "react";
import AppSidebar from "./AppSidebar";

//TODO: prevent AppLayout re-render
/*class AppLayout extends React.Component {
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
}*/

const AppLayout: React.FC = () => {
    return (
        <AppSidebar/>
    )
}

export default React.memo(AppLayout)