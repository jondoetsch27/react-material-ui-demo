import React from 'react';
import './App.scss';
import Home from "./home/Home";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Option1 from "./option1/Option1";
import Option2 from "./option2/Option2";
import Option3 from "./option3/Option3";
import Option4 from "./option4/Option4";
import Option5 from "./option5/Option5";

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
