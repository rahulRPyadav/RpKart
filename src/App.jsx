import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import AllProjects from './pages/AllProjects';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Testimonials from './components/Testimonials';
import RecentPurchasePopup from './components/RecentPurchasePopup';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <RecentPurchasePopup />
      <Footer/>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all-projects" element={<AllProjects />} />
      <Route path="/product/:id" element={<ProductDetail />} />

    </Routes>
  );
}