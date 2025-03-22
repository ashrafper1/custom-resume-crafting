
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation to ensure smooth transition after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-8 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute left-1/3 bottom-0 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block mb-6 px-6 py-2 bg-secondary rounded-full">
              <span className="text-sm font-medium text-primary/80">AI-Powered Resume Optimization</span>
            </div>
            <h1 className="h1 mb-6 max-w-3xl mx-auto">
              Craft Perfect Resumes That <span className="relative inline-block">
                <span className="relative z-10">Stand Out</span>
                <span className="absolute left-0 bottom-2 w-full h-3 bg-blue-100 rounded-sm -z-10"></span>
              </span> and Get You Hired
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Our AI analyzes job descriptions and optimizes your resume to match exactly what employers are looking for, improving your chances of landing interviews.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="rounded-full px-8 py-6 text-md shadow-elegant">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-md">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>

          {/* Preview Image */}
          <div className={`mt-16 sm:mt-20 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img 
                  src="https://placehold.co/1200x740/f9fafb/d1d5db?text=Resume+AI+Preview" 
                  alt="ResumeAI Preview" 
                  className="w-full h-auto"
                />
              </div>
              {/* Floating engagement indicators */}
              <div className="absolute -top-5 -right-8 bg-white rounded-xl p-3 shadow-elegant animate-float hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium">ATS Score: 98%</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-10 bg-white rounded-xl p-3 shadow-elegant animate-float animation-delay-300 hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium">Keyword Match: 92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
