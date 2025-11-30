import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from '../Layout/layout.jsx';
import HomePage from '../Pages/HomePage/HomePage.jsx';
import LoginPage from '../Pages/Auth/LoginPage.jsx';
import SignUpPage from '../Pages/Auth/SignUpPage.jsx';
import VotesPage from '../Pages/Votes/VotesPage.jsx';


function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Main layout */}
                <Route path="/" element={<Layout />}>
                    {/* Home page */}
                    <Route index element={<HomePage />} />

                    {/* Authentication routes */}
                    <Route path="auth/login" element={<LoginPage />} />
                    <Route path="auth/register" element={<SignUpPage />} />

                    {/* Votes routes */}
                    <Route path="votes" element={<VotesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
