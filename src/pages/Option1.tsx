import React from "react";
import AppCardGrid from "../components/AppCardGrid";
import AppLayout from "../components/AppLayout";
import colors from "../assets/colors.module.scss";

const Option1: React.FC = () => {
    return (
        <div className={"option1"}>
            <AppLayout/>
            <AppCardGrid
                backgroundColor={colors.ghostWhite}
                borderColor={colors.ghostWhite}
                cardProperties={{
                    backgroundColor: colors.terraCotta,
                    cardText: "Option 1",
                    textColor: colors.royalBlue
                }}
                numberOfCards={3}
            />
        </div>
    )
}

export default Option1