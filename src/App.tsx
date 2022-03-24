import React from 'react';
import './App.scss';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Option1 from "./pages/Option1";
import Option2 from "./pages/Option2";
import Option3 from "./pages/Option3";
import Option4 from "./pages/Option4";
import Option5 from "./pages/Option5";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Navigate to={"/home"}/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/option1"} element={<Option1/>}/>
                <Route path={"/option2"} element={<Option2/>}/>
                <Route path={"/option3"} element={<Option3/>}/>
                <Route path={"/option4"} element={<Option4/>}/>
                <Route path={"/option5"} element={<Option5/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
