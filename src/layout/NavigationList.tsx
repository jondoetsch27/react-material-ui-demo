import React from "react";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";
import colors from "../assets/colors.module.scss";

const NavigationList: React.FC = ({children}) => {
    let navigate = useNavigate()
    const dynamicNavigate: any = (path: string) => {
        navigate(path)
    }
    return (
        <List>
            <ListItem>
                <ListItemButton
                    color={colors.royalBlue}
                    onClick={() => {
                        dynamicNavigate("/home")
                    }}
                    sx={{
                        backgroundColor: colors.royalBlue,
                        border: "solid",
                        borderColor: colors.tuftsBlue,
                        '&:hover': {backgroundColor: colors.terraCotta}
                    }}
                >
                    <ListItemText
                        color={colors.ghostWhite}
                        primary={"Home"}
                        primaryTypographyProps={{
                            align: "center",
                            color: colors.ghostWhite,
                            fontSize: 20,
                            fontWeight: "bolder"
                        }}
                    />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton
                    color={colors.royalBlue}
                    onClick={() => {
                        dynamicNavigate("/option1")
                    }}
                    sx={{
                        backgroundColor: colors.royalBlue,
                        border: "solid",
                        borderColor: colors.tuftsBlue,
                        width: "10vw",
                        '&:hover': {backgroundColor: colors.terraCotta}
                    }}
                >
                    <ListItemText
                        color={colors.ghostWhite}
                        primary={"Option 1"}
                        primaryTypographyProps={{
                            align: "center",
                            color: colors.ghostWhite,
                            fontSize: 20,
                            fontWeight: "bolder"
                        }}
                    />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton
                    color={colors.royalBlue}
                    onClick={() => {
                        dynamicNavigate("/option2")
                    }}
                    sx={{
                        backgroundColor: colors.royalBlue,
                        border: "solid",
                        borderColor: colors.tuftsBlue,
                        '&:hover': {backgroundColor: colors.terraCotta}
                    }}
                >
                    <ListItemText
                        color={colors.ghostWhite}
                        primary={"Option 2"}
                        primaryTypographyProps={{
                            align: "center",
                            color: colors.ghostWhite,
                            fontSize: 20,
                            fontWeight: "bolder"
                        }}
                    />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton
                    color={colors.royalBlue}
                    onClick={() => {
                        dynamicNavigate("/option3")
                    }}
                    sx={{
                        backgroundColor: colors.royalBlue,
                        border: "solid",
                        borderColor: colors.tuftsBlue,
                        '&:hover': {backgroundColor: colors.terraCotta}
                    }}
                >
                    <ListItemText
                        color={colors.ghostWhite}
                        primary={"Option 3"}
                        primaryTypographyProps={{
                            align: "center",
                            color: colors.ghostWhite,
                            fontSize: 20,
                            fontWeight: "bolder"
                        }}
                    />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton
                    color={colors.royalBlue}
                    onClick={() => {
                        dynamicNavigate("/option4")
                    }}
                    sx={{
                        backgroundColor: colors.royalBlue,
                        border: "solid",
                        borderColor: colors.tuftsBlue,
                        '&:hover': {backgroundColor: colors.terraCotta,}
                    }}
                >
                    <ListItemText
                        color={colors.ghostWhite}
                        primary={"Option 4"}
                        primaryTypographyProps={{
                            align: "center",
                            color: colors.ghostWhite,
                            fontSize: 20,
                            fontWeight: "bolder"
                        }}
                    />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton
                    color={colors.royalBlue}
                    onClick={() => {
                        dynamicNavigate("/option5")
                    }}
                    sx={{
                        backgroundColor: colors.royalBlue,
                        border: "solid",
                        borderColor: colors.tuftsBlue,
                        '&:hover': {backgroundColor: colors.terraCotta,}
                    }}
                >
                    <ListItemText
                        color={colors.ghostWhite}
                        primary={"Option 5"}
                        primaryTypographyProps={{
                            align: "center",
                            color: colors.ghostWhite,
                            fontSize: 20,
                            fontWeight: "bolder"
                        }}
                    />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default NavigationList