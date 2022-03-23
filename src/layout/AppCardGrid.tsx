import React from "react";
import {Box, Grid} from "@mui/material";
import FrontendCard from "../components/FrontendCard";
import colors from "../assets/colors.module.scss"

const AppCardGrid: React.FC = ({children}) => {
    return (
        <>
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
                <Grid columns={12} container direction={"row"} rowSpacing={1} spacing={1}>
                    <Grid item xs={4}>
                        <FrontendCard/>
                    </Grid>
                    <Grid item xs={4}>
                        <FrontendCard/>
                    </Grid>
                    <Grid item xs={4}>
                        <FrontendCard/>
                    </Grid>
                    <Grid item xs={4}>
                        <FrontendCard/>
                    </Grid>
                    <Grid item xs={4}>
                        <FrontendCard/>
                    </Grid>
                    <Grid item xs={4}>
                        <FrontendCard/>
                    </Grid>
                    <Grid item xs={4}>
                        <FrontendCard/>
                    </Grid>
                    <Grid item xs={4}>
                        <FrontendCard/>
                    </Grid>
                    <Grid item xs={4}>
                        <FrontendCard/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default AppCardGrid