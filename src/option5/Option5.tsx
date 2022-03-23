import React from "react";
import AppCardGrid from "../layout/AppCardGrid";
import AppLayout from "../layout/AppLayout";
import colors from "../assets/colors.module.scss";

const Option5: React.FC = () => {
    return (
        <>
            <AppLayout/>
            <AppCardGrid
                backgroundColor={colors.royalBlue}
                cardText={"Option 5"}
                textColor={colors.ghostWhite}
            />
        </>
    )
}

export default Option5