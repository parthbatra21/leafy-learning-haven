import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const navigate = useNavigate();
  
  // Create refs for elements we want to animate
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const circlesRef = useRef(null);
  
  const handleCreateAccount = () => {
    navigate('/create-account');
  };
  
  useEffect(() => {
    // Animate background circles
    const circles = circlesRef.current.querySelectorAll('.circle-bg');
    circles.forEach((circle) => {
      gsap.to(circle, {
        y: gsap.utils.random(-20, 20),
        x: gsap.utils.random(-20, 20),
        duration: gsap.utils.random(10, 20),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  
    // Hero section animation
    const heroElements = heroRef.current.querySelectorAll('h1, p, button');
    gsap.fromTo(
      heroElements, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power2.out" }
    );
    
    // Features section animation
    const featureCards = featuresRef.current.querySelectorAll('.feature-card');
    gsap.fromTo(
      featureCards,
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.15, 
        duration: 0.7, 
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%"
        }
      }
    );
    
    // Stats animation
    const statElements = statsRef.current.querySelectorAll('.p-6');
    gsap.fromTo(
      statElements,
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        stagger: 0.2, 
        duration: 0.6, 
        ease: "power1.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%"
        }
      }
    );
    
    // CTA section animation
    const ctaElements = ctaRef.current.querySelectorAll('h2, p, button');
    gsap.fromTo(
      ctaElements,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2, 
        duration: 0.7, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div ref={circlesRef}>
        <div className="circle-bg absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-circle-purple opacity-15 blur-2xl -z-10"></div>
        <div className="circle-bg absolute top-[40%] left-[10%] w-[400px] h-[400px] rounded-full bg-circle-yellow opacity-10 blur-3xl -z-10"></div>
        <div className="circle-bg absolute bottom-[15%] right-[15%] w-[350px] h-[350px] rounded-full bg-circle-green opacity-10 blur-2xl -z-10"></div>
        <div className="circle-bg absolute top-[60%] left-[50%] w-[250px] h-[250px] rounded-full bg-circle-red opacity-15 blur-xl -z-10"></div>
        <div className="circle-bg absolute top-[-5%] left-[20%] w-[200px] h-[200px] rounded-full bg-circle-blue-purple opacity-10 blur-xl -z-10"></div>
        <div className="circle-bg absolute bottom-[5%] left-[5%] w-[180px] h-[180px] rounded-full bg-circle-red-yellow opacity-10 blur-xl -z-10"></div>
        <div className="circle-bg absolute top-[30%] right-[15%] w-[220px] h-[220px] rounded-full bg-circle-teal opacity-10 blur-xl -z-10"></div>
      </div>
      
      {/* Content container */}
      <div className="text-slate-800">
        {/* Hero Section */}
        <section ref={heroRef} className="container mx-auto px-4 pt-20 pb-16 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-slate-900">
            Career <span className="text-blue-600">Guidance</span> Reimagined
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-12 text-slate-700">
            AI-powered personalized career guidance designed specifically for underserved students, 
            helping you discover and pursue your dream career path.
          </p>
          <button 
            onClick={handleCreateAccount}
            className="bg-gradient-hero
            px-8 py-4 rounded-xl font-semibold text-lg text-white shadow-lg 
            transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Create Your Account
          </button>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">How We Help You <span className="text-purple-600">Succeed</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-gradient-feature-blue p-8 rounded-2xl border border-blue-100 shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Personalized Guidance</h3>
              <p className="text-slate-700">Receive career recommendations tailored to your unique interests, strengths, and goals.</p>
            </div>
            
            <div className="feature-card bg-gradient-feature-purple p-8 rounded-2xl border border-purple-100 shadow-md">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Resource Connection</h3>
              <p className="text-slate-700">Access scholarships, mentorship opportunities, and educational resources specific to your career path.</p>
            </div>
            
            <div className="feature-card bg-gradient-feature-teal p-8 rounded-2xl border border-teal-100 shadow-md">
              <div className="bg-teal-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal-700">Ongoing Support</h3>
              <p className="text-slate-700">Receive continuous guidance and updates to help you stay on track with your career journey.</p>
            </div>
          </div>
        </section>

        {/* Testimonials/Stats Section */}
        <section ref={statsRef} className="bg-gradient-stats py-16 border-y border-slate-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-slate-900">Empowering <span className="text-teal-600">Students</span> Nationwide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-blue-100">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">5,000+</h3>
                <p className="text-slate-700">Students Guided</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-purple-100">
                <h3 className="text-4xl font-bold text-purple-600 mb-2">90%</h3>
                <p className="text-slate-700">Satisfaction Rate</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-teal-100">
                <h3 className="text-4xl font-bold text-teal-600 mb-2">200+</h3>
                <p className="text-slate-700">Partner Schools</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section ref={ctaRef} className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-cta rounded-3xl p-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Discover Your Path?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-50">
              Join thousands of students who've found their calling with our personalized guidance platform.
            </p>
            <button 
              onClick={handleCreateAccount}
              className="bg-white hover:bg-blue-50 
              px-8 py-4 rounded-xl font-semibold text-lg text-blue-700 shadow-lg 
              transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Start Your Journey
            </button>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-gradient-footer py-8 text-white">
          <div className="container mx-auto px-4 text-center">
            <p>© 2023 Career Guidance Platform. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage; 