import React from "react";
import { Route, Routes } from "react-router";
import {Main} from "./pages/main";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
    );
}
