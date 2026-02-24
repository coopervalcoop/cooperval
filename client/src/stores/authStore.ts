import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "editor" | "viewer";
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
  checkAuth: () => Promise<void>;
}

// Credenciais padrão (em produção, usar um backend seguro)
const ADMIN_CREDENTIALS = {
  email: "admin@cooperval.com",
  password: "cooperval2024", // MUDE ISSO EM PRODUÇÃO!
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          // Simular validação (em produção, chamar um backend)
          if (
            email === ADMIN_CREDENTIALS.email &&
            password === ADMIN_CREDENTIALS.password
          ) {
            const user: User = {
              id: "admin-001",
              email: email,
              name: "Administrador Cooperval",
              role: "admin",
            };
            set({ user, isAuthenticated: true });
            localStorage.setItem("auth_token", "token_" + Date.now());
          } else {
            throw new Error("Credenciais inválidas");
          }
        } catch (error) {
          set({ isAuthenticated: false, user: null });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
        localStorage.removeItem("auth_token");
      },

      setUser: (user) => {
        set({ user, isAuthenticated: !!user });
      },

      checkAuth: async () => {
        const token = localStorage.getItem("auth_token");
        if (token) {
          // Verificar se o token ainda é válido
          const user: User = {
            id: "admin-001",
            email: ADMIN_CREDENTIALS.email,
            name: "Administrador Cooperval",
            role: "admin",
          };
          set({ user, isAuthenticated: true });
        } else {
          set({ user: null, isAuthenticated: false });
        }
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
