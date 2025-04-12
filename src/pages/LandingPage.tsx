import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Content container */}
      <div className="text-slate-800">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-16 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-slate-900">
            Career Guidance Reimagined
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-12 text-slate-700">
            AI-powered personalized career guidance designed specifically for underserved students, 
            helping you discover and pursue your dream career path.
          </p>
          <button 
            onClick={handleCreateAccount}
            className="bg-blue-600 hover:bg-blue-700 
            px-8 py-4 rounded-xl font-semibold text-lg text-white shadow-lg 
            transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Create Your Account
          </button>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">How We Help You Succeed</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Personalized Guidance</h3>
              <p className="text-slate-700">Receive career recommendations tailored to your unique interests, strengths, and goals.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Resource Connection</h3>
              <p className="text-slate-700">Access scholarships, mentorship opportunities, and educational resources specific to your career path.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
              <div className="bg-teal-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Ongoing Support</h3>
              <p className="text-slate-700">Receive continuous guidance and updates to help you stay on track with your career journey.</p>
            </div>
          </div>
        </section>

        {/* Testimonials/Stats Section */}
        <section className="bg-white py-16 border-y border-slate-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-slate-900">Empowering Students Nationwide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">5,000+</h3>
                <p className="text-slate-700">Students Guided</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-bold text-purple-600 mb-2">90%</h3>
                <p className="text-slate-700">Satisfaction Rate</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-bold text-teal-600 mb-2">200+</h3>
                <p className="text-slate-700">Partner Schools</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Ready to Discover Your Path?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-slate-700">
            Join thousands of students who've found their calling with our personalized guidance platform.
          </p>
          <button 
            onClick={handleCreateAccount}
            className="bg-blue-600 hover:bg-blue-700 
            px-8 py-4 rounded-xl font-semibold text-lg text-white shadow-lg 
            transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Start Your Journey
          </button>
        </section>
        
        {/* Footer */}
        <footer className="bg-slate-100 py-8 border-t border-slate-200">
          <div className="container mx-auto px-4 text-center text-slate-600">
            <p>© 2023 Career Guidance Platform. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage; 