import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import http from '../api/axiosClient';

type User = {
  id: number | string;
  email: string;
  createdAt: string;
};

type AuthResponse = {
  user: User;
  token: string;
};

type AuthContextValue = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  signup: (payload: { email: string; password: string; confirmPassword: string }) => Promise<void>;
  login: (payload: { email: string; password: string }) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const raw = localStorage.getItem('authUser');
    return raw ? (JSON.parse(raw) as User) : null;
  });
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('authToken'));

  // keep axios default header optionally (not required since interceptor reads localStorage)
  useEffect(() => {
    if (token) {
      // Optional: http.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
      // delete http.defaults.headers.common.Authorization;
    }
  }, [token]);

  useEffect(() => {
    if (user) localStorage.setItem('authUser', JSON.stringify(user));
    else localStorage.removeItem('authUser');
  }, [user]);

  const signup = async (payload: { email: string; password: string; confirmPassword: string }) => {
    console.log(payload);
    const { data } = await http.post<AuthResponse>('/api/auth/signup', payload);
    setUser(data.user);
    setToken(data.token);
  };

  const login = async (payload: { email: string; password: string }) => {
  console.log(payload);
  
    const { data } = await http.post<AuthResponse>('/api/auth/login', payload);
    setUser(data.user);
    setToken(data.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token),
      signup,
      login,
      logout,
    }),
    [user, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
