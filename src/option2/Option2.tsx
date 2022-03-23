import React from "react";
import AppCardGrid from "../layout/AppCardGrid";
import AppLayout from "../layout/AppLayout";
import colors from "../assets/colors.module.scss";

const Option2: React.FC = () => {
    return (
        <>
            <AppLayout/>
            <AppCardGrid
                backgroundColor={colors.rifleGreen}
                cardText={"Option 2"}
                textColor={colors.ghostWhite}
            />
        </>
    )
}

export default Option2