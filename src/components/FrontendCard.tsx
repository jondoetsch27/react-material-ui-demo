import {Card, CardActions, CardContent, Typography} from "@mui/material";
import React from "react";
import colors from "./../assets/colors.module.scss"

const FrontendCard: React.FC = ({children}) => {
    return (
        <Card variant={"outlined"} sx={{ bgcolor: colors.terraCotta, border: "solid", borderColor: colors.royalBlue, height: "20vh"}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color={colors.royalBlue} gutterBottom>
                    Frontend
                </Typography>
            </CardContent>
            <CardActions/>
        </Card>
    )
}

export default FrontendCard