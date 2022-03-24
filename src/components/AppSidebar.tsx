import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavigationList from "./NavigationList";
import colors from "../assets/colors.module.scss"

const AppSidebar: React.FC = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: colors.royalBlue,
                height: "8vh"
            }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap component="div">
                        Main Menu
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                variant="permanent"
                sx={{
                    backgroundColor: colors.ghostWhite,
                    borderLeft: "solid",
                    borderLeftColor: colors.royalBlue,
                    borderRight: "solid",
                    borderRightColor: colors.royalBlue,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        backgroundColor: colors.ghostWhite,
                        borderLeft: "solid",
                        borderLeftColor: colors.royalBlue,
                        borderRight: "solid",
                        borderRightColor: colors.royalBlue,
                        width: "15vw",
                        boxSizing: 'border-box'
                    },
                }}>
                <Toolbar/>
                <Box sx={{
                    alignItems: "left",
                    backgroundColor: colors.ghostWhite,
                    color: colors.royalBlue,
                    display: "flex",
                    direction: "row",
                    height: "92vh",
                    justifyItems: "center",
                    overflow: 'auto',
                    position: "absolute",
                    top: "7vh",
                    width: "13vw"
                }}>
                    <NavigationList/>
                </Box>
            </Drawer>
        </Box>
    )
}

export default AppSidebar