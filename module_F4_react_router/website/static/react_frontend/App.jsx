import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainNavbar from "./components/MainNavbar.jsx";
import DetailCategory from "./components/DetailCategory.jsx";
import DetailRecepy from "./components/DetailRecepy.jsx";

export default function App(){
    

    return(
        <BrowserRouter>
            <Routes>
                <Route element={<MainNavbar/>} path="/">
                    <Route element={<DetailCategory />} path=":slug?"/> 
                    <Route path="recepy/:id" element={<DetailRecepy />}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}