import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'Info' },
    { name: 'Courses', path: '/courses', icon: 'BookOpen' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const Logo = () => (
    <Link to="/homepage" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-brand-md group-hover:shadow-glow-blue transition-all duration-300">
          <Icon name="GraduationCap" size={24} color="white" strokeWidth={2.5} />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse-glow"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gradient font-accent">EduVision</span>
        <span className="text-xs text-muted-foreground font-medium tracking-wider">ACADEMY</span>
      </div>
    </Link>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-header transition-all duration-300 ${isScrolled
        ? 'bg-background/95 backdrop-blur-brand shadow-brand-md border-b border-border'
        : 'bg-background/80 backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift ${isActivePath(item?.path)
                    ? 'text-primary bg-primary/10 shadow-brand-sm'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-brand ${isMobileMenuOpen
          ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
        <div className="bg-background/95 backdrop-blur-brand border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="pt-4 border-t border-border space-y-3">
              <Button variant="outline" fullWidth>
                Login to Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;