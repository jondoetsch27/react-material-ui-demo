import React from "react";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";

const NavigationList: React.FC = ({children}) => {
    let navigate = useNavigate()
    const dynamicNavigate: any = (path: string) => {
        navigate(path)
    }
    return (
        <List>
            <ListItem>
                <ListItemButton
                    onClick={() => {
                        dynamicNavigate("/home")
                    }}>
                    <ListItemText primary={"Home"}/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton
                    onClick={() => {
                        dynamicNavigate("/option1")
                    }}>
                    <ListItemText primary={"Option 1"}/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton
                    onClick={() => {
                        dynamicNavigate("/option2")
                    }}>
                    <ListItemText primary={"Option 2"}/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton
                    onClick={() => {
                        dynamicNavigate("/option3")
                    }}>
                    <ListItemText primary={"Option 3"}/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton
                    onClick={() => {
                        dynamicNavigate("/option4")
                    }}>
                    <ListItemText primary={"Option 4"}/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton
                    onClick={() => {
                        dynamicNavigate("/option5")
                    }}>
                    <ListItemText primary={"Option 5"}/>
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default NavigationList