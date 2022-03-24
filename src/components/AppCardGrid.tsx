import React from "react";
import {Box, Grid} from "@mui/material";
import colors from "../assets/colors.module.scss"
import AppCard, {CardProperties} from "./AppCard";

export type CardGridProperties = {
    backgroundColor: typeof colors.ghostWhite
    borderColor: typeof colors.ghostWhite
    cardProperties: CardProperties
    numberOfCards: number
}

const AppCardGrid: React.FC<CardGridProperties> = (properties: CardGridProperties) => {
    let cardList: any[] = []
    for (let i = 0; i < properties.numberOfCards; i++) {
        cardList.push(
            <Grid item xs={4}>
                <AppCard
                    backgroundColor={properties.cardProperties.backgroundColor}
                    cardText={properties.cardProperties.cardText}
                    textColor={properties.cardProperties.textColor}
                />
            </Grid>
        )
    }
    return (
        <Box sx={{
            backgroundColor: properties.backgroundColor,
            border: "solid",
            borderColor: properties.borderColor,
            height: "92vh",
            left: "15%",
            position: "absolute",
            top: "8%",
            width: "85vw"
        }}>
            <Grid columns={12} container direction={"row"} rowSpacing={0.5} spacing={0.5}>
                {cardList}
            </Grid>
        </Box>
    )
}

export default AppCardGrid