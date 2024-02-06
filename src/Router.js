import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import ProjectsPage from './Pages/ProjectsPage';
import ProjectDetails from './Components/ProjectDetails';
import ErrorPage from './Pages/404';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ContactUs } from './Pages/Contact';
import MyForm from './Components/Captcha';

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/captcha-form" element={<MyForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
