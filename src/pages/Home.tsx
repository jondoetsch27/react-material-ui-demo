import React from "react";
import Button from "@mui/material/Button"
import AppCardGrid from "../components/AppCardGrid";
import AppLayout from "../components/AppLayout";
import colors from "../assets/colors.module.scss"

const Home: React.FC = () => {
    return (
        <div className={"home"}>
            <Button disabled={true}/>
            <AppLayout/>
            <AppCardGrid
                backgroundColor={colors.ghostWhite}
                borderColor={colors.ghostWhite}
                cardProperties={{
                    backgroundColor: colors.terraCotta,
                    cardText: "Home",
                    textColor: colors.royalBlue
                }}
                numberOfCards={3}
            />
        </div>
    )
}

export default Home