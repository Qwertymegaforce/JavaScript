import App from "./App.jsx";
import {createRoot} from 'react-dom/client'
import React from "react";
import "../css/styles.css"


const root = document.getElementById('root');
const reactRoot = createRoot(root);


reactRoot.render(<App />)
