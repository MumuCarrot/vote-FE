import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

function Header() {
    const navigate = useNavigate();
    const { isAuthenticated, user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 shadow-sm relative min-h-[64px]">
            <div className="flex items-center flex-shrink-0">
                <Link to="/" className="text-gray-800 font-bold text-2xl transition-colors hover:text-blue-600 no-underline">
                    <span>Elector</span>
                </Link>
            </div>
            
            <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 items-center">
                <Link to="/" className="text-gray-800 font-medium py-2 px-4 rounded transition-all hover:bg-gray-100 hover:text-blue-600 no-underline">
                    Home
                </Link>
                <Link to="/votes" className="text-gray-800 font-medium py-2 px-4 rounded transition-all hover:bg-gray-100 hover:text-blue-600 no-underline">
                    Votes
                </Link>
                <Link to="/votes/create" className="text-gray-800 font-medium py-2 px-4 rounded transition-all hover:bg-gray-100 hover:text-blue-600 no-underline">
                    Create
                </Link>
            </nav>
            
            <div className="flex items-center gap-3 flex-shrink-0 ml-auto">
                {isAuthenticated ? (
                    <>
                        <Link 
                            to="/profile"
                            className="text-gray-800 font-medium py-2 px-5 rounded transition-all hover:bg-gray-100 hover:text-blue-600 no-underline inline-block"
                        >
                            Profile
                        </Link>
                        <button 
                            className="py-2 px-5 rounded cursor-pointer font-medium text-sm transition-all bg-transparent text-red-600 border border-red-600 hover:bg-red-600 hover:text-white"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button 
                            className="py-2 px-5 rounded cursor-pointer font-medium text-sm transition-all bg-transparent text-gray-800 border border-gray-200 hover:bg-gray-100 hover:border-blue-600 hover:text-blue-600"
                            onClick={() => navigate('/auth/login')}
                        >
                            Sign In
                        </button>
                        <button 
                            className="py-2 px-5 rounded cursor-pointer font-medium text-sm transition-all bg-blue-600 text-white hover:bg-blue-700 border-none"
                            onClick={() => navigate('/auth/register')}
                        >
                            Sign Up
                        </button>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;

