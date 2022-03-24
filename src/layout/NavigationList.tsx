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
                        borderColor: colors.tuftsBlue
                    }}
                >
                    <ListItemText
                        aria-setsize={12}
                        color={colors.ghostWhite}
                        primary={"Home"}
                        sx={{color: colors.ghostWhite}}
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
                        borderColor: colors.tuftsBlue
                    }}
                >
                    <ListItemText
                        aria-setsize={12}
                        color={colors.ghostWhite}
                        primary={"Option 1"}
                        sx={{color: colors.ghostWhite}}
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
                        borderColor: colors.tuftsBlue
                    }}
                >
                    <ListItemText
                        aria-setsize={12}
                        color={colors.ghostWhite}
                        primary={"Option 2"}
                        sx={{color: colors.ghostWhite}}
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
                        borderColor: colors.tuftsBlue
                    }}
                >
                    <ListItemText
                        aria-setsize={12}
                        color={colors.ghostWhite}
                        primary={"Option 3"}
                        sx={{color: colors.ghostWhite}}
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
                        borderColor: colors.tuftsBlue
                    }}
                >
                    <ListItemText
                        aria-setsize={12}
                        color={colors.ghostWhite}
                        primary={"Option 4"}
                        sx={{color: colors.ghostWhite}}
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
                        borderColor: colors.tuftsBlue
                    }}
                >
                    <ListItemText
                        aria-setsize={12}
                        color={colors.ghostWhite}
                        primary={"Option 5"}
                        sx={{color: colors.ghostWhite}}
                    />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default NavigationList