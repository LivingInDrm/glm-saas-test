import { createContext, useContext, useState, type ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ name: string; email: string } | null>(() => {
    const saved = localStorage.getItem('bizpulse_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email: string, _password: string) => {
    const name = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const userData = { name, email };
    setUser(userData);
    localStorage.setItem('bizpulse_user', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bizpulse_user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
