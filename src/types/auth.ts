export interface User {
  username: string;
  isAuthenticated: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}
