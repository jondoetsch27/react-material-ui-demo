import React from "react";
import AppCardGrid from "../components/AppCardGrid";
import AppLayout from "../components/AppLayout";
import colors from "../assets/colors.module.scss";

const Option2: React.FC = () => {
    return (
        <>
            <AppLayout/>
            <AppCardGrid
                backgroundColor={colors.ghostWhite}
                borderColor={colors.ghostWhite}
                cardProperties={{
                    backgroundColor: colors.terraCotta,
                    cardText: "Option 2",
                    textColor: colors.royalBlue
                }}
                numberOfCards={3}
            />
        </>
    )
}

export default Option2