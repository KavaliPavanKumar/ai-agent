import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BuilderPage from './pages/BuilderPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import DocumentationPage from './pages/DocumentationPage';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </main>
      
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2025 AI Chatbot Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;