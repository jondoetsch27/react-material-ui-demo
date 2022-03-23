import React from "react";
import AppCardGrid from "../layout/AppCardGrid";
import AppLayout from "../layout/AppLayout";
import colors from "./../assets/colors.module.scss"

const Home: React.FC = () => {
    return (
        <>
            <AppLayout/>
            <AppCardGrid
                backgroundColor={colors.terraCotta}
                cardText={"Home"}
                textColor={colors.royalBlue}
            />
        </>
    )
}

export default Home