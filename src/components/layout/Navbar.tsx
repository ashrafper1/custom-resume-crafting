
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on location change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">ResumeAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/features') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/pricing') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/how-it-works" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/how-it-works') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              How It Works
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm" className="rounded-full px-6">
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="rounded-full px-6">
                Sign up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen glass py-4' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-4 pb-4">
            <Link 
              to="/" 
              className={`text-sm font-medium px-2 py-2 rounded transition-colors ${
                isActive('/') ? 'bg-secondary text-primary' : 'text-muted-foreground hover:bg-secondary/50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`text-sm font-medium px-2 py-2 rounded transition-colors ${
                isActive('/features') ? 'bg-secondary text-primary' : 'text-muted-foreground hover:bg-secondary/50'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium px-2 py-2 rounded transition-colors ${
                isActive('/pricing') ? 'bg-secondary text-primary' : 'text-muted-foreground hover:bg-secondary/50'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/how-it-works" 
              className={`text-sm font-medium px-2 py-2 rounded transition-colors ${
                isActive('/how-it-works') ? 'bg-secondary text-primary' : 'text-muted-foreground hover:bg-secondary/50'
              }`}
            >
              How It Works
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Link to="/login">
                <Button variant="outline" className="w-full rounded-full">
                  Log in
                </Button>
              </Link>
              <Link to="/register">
                <Button className="w-full rounded-full">
                  Sign up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
