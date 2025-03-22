
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
    <section className="relative pt-40 pb-16 md:pt-52 md:pb-24 overflow-hidden">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
