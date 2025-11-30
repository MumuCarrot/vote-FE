import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from '../Layout/layout.jsx';


function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Main layout */}
                <Route path="/" element={<Layout />}>

                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
