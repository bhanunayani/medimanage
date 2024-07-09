import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ResetPasswordPage from './pages/PasswordResetPage';
import AboutUsPage from './pages/aboutpage';
import ContactUsPage from './pages/contactus';
import ProfilePage from './pages/profilepage';
import Services from './pages/Services';
import Department from './pages/Department';
import Appointment from './pages/Appointment';
import AvailableDoctor from './pages/AvailableDoctor';
import Faq from './pages/Faq';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/dashboard/*" element={<ProtectedDashboardRoute />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />  
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/departments" element={<Department />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/availabledoctor" element={<AvailableDoctor />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

// ProtectedRoute component to handle authentication check
function ProtectedDashboardRoute() {
  const token = localStorage.getItem('meditoken');
  // const navigate = useNavigate();
  console.log(token)

  if (!token) {
    console.log("yesssss")
    // return <Navigate to="/login" />;
  }

  return <DashboardPage />;
}

export default App;
