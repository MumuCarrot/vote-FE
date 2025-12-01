import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app.jsx';
import { AuthProvider } from '../../contexts/AuthContext.jsx';

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

        expect(screen.getByText(/Elector/i)).toBeInTheDocument();
    });
});

