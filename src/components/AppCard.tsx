import {Card, CardActions, CardContent, Typography} from "@mui/material";
import React from "react";
import colors from "./../assets/colors.module.scss"

export type CardProperties = {
    backgroundColor: typeof colors.ghostWhite
    cardText: string
    textColor: typeof colors.ghostWhite
}

const AppCard: React.FC<CardProperties> = (properties: CardProperties) => {
    return (
        <Card variant={"outlined"} sx={{
            bgcolor: properties.backgroundColor,
            border: "solid",
            borderColor: colors.royalBlue,
            height: "20vh"
        }}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color={properties.textColor} gutterBottom>
                    {properties.cardText}
                </Typography>
            </CardContent>
            <CardActions/>
        </Card>
    )
}

export default AppCard