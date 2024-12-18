import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LoginPage } from "./components/LoginPage";
import { HomePage } from "./components/HomePage";
import { useAuth } from "./context/AuthContext";

// Change this to a function that returns the element directly
const PrivateRoute = () => {
  const { user } = useAuth();
  return user?.isAuthenticated ? <HomePage /> : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<PrivateRoute />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
