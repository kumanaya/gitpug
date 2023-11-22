import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrivateRoute from "./routes/private.routes";

import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import SignupPage from "./pages/signup";
import HistoryPage from "./pages/history";
import { AuthProvider } from "./contexts/auth.context";
import EditProfilePage from "./pages/edit-profile";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute children={<HomePage />} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={<PrivateRoute children={<ProfilePage />} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/history"
            element={<PrivateRoute children={<HistoryPage />} />}
          />
          <Route
            path="/edit-profile"
            element={<PrivateRoute children={<EditProfilePage />} />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
