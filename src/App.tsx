import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { LoginPage } from "./components/LoginPage";
import { HomePage } from "./components/HomePage";

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
