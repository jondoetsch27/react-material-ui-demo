import React from "react";
import {Box, Grid} from "@mui/material";
import colors from "../assets/colors.module.scss"
import AppCard, {CardProperties} from "../components/AppCard";

const AppCardGrid: React.FC<CardProperties> = (properties: CardProperties) => {
    return (
        <Box sx={{
            backgroundColor: colors.ghostWhite,
            border: "solid",
            borderColor: colors.ghostWhite,
            height: "92vh",
            left: "15%",
            position: "absolute",
            top: "8%",
            width: "85vw"
        }}>
            <Grid columns={12} container direction={"row"} rowSpacing={0.5} spacing={0.5}>
                <Grid item xs={4}>
                    <AppCard
                        backgroundColor={properties.backgroundColor}
                        cardText={properties.cardText}
                        textColor={properties.textColor}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default AppCardGrid