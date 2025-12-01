import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext.jsx';
import authService from '../services/authService';

jest.mock('../services/authService', () => ({
    refreshToken: jest.fn(),
    getCurrentUser: jest.fn(),
    logout: jest.fn(),
}));

function setupHook() {
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
    return renderHook(() => useAuth(), { wrapper });
}

describe('AuthContext', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
    });

    test('login saves user and sets isAuthenticated', () => {
        const userData = { id: 1, email: 'test@example.com' };
        const { result } = setupHook();

        act(() => {
            result.current.login(userData);
        });

        expect(result.current.user).toEqual(userData);
        expect(result.current.isAuthenticated).toBe(true);
        expect(JSON.parse(localStorage.getItem('user'))).toEqual(userData);
    });

    test('logout clears user and isAuthenticated', async () => {
        authService.logout.mockResolvedValueOnce({});

        const userData = { id: 1, email: 'test@example.com' };
        const { result } = setupHook();

        act(() => {
            result.current.login(userData);
        });

        await act(async () => {
            await result.current.logout();
        });

        expect(result.current.user).toBeNull();
        expect(result.current.isAuthenticated).toBe(false);
        expect(localStorage.getItem('user')).toBeNull();
    });

    test('updateUser merges and persists user data', () => {
        const userData = { id: 1, email: 'test@example.com', name: 'Old' };
        const updated = { name: 'New' };

        const { result } = setupHook();

        act(() => {
            result.current.login(userData);
        });

        act(() => {
            result.current.updateUser(updated);
        });

        expect(result.current.user).toEqual({ ...userData, ...updated });
        expect(JSON.parse(localStorage.getItem('user'))).toEqual({
            ...userData,
            ...updated,
        });
    });
});


