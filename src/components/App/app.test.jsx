import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app.jsx';
import { AuthProvider } from '../../contexts/AuthContext.jsx';

// Mock react-router-dom so Jest does not need the real implementation
jest.mock('react-router-dom', () => {
    const React = require('react');
    const navigateMock = jest.fn();
    return {
        BrowserRouter: ({ children }) => <div>{children}</div>,
        Routes: ({ children }) => <div>{children}</div>,
        Route: ({ element }) => <>{element}</>,
        Outlet: () => <div />,
        useNavigate: () => navigateMock,
        Link: ({ children, ...props }) => <a {...props}>{children}</a>,
    };
});

// Mock axios to avoid Jest trying to execute ESM axios implementation
jest.mock('axios', () => ({
    create: () => ({
        interceptors: { response: { use: jest.fn() } },
    }),
}));

describe('App', () => {
    test('renders main layout without crashing', () => {
        render(
            <AuthProvider>
                <App />
            </AuthProvider>
        );

        // Header title from Layout/Header
        expect(screen.getByText(/Elector/i)).toBeInTheDocument();
    });
});

