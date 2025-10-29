import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FacultyCard from './components/FacultyCard';
import FacultyFilters from './components/FacultyFilters';
import FacultyStats from './components/FacultyStats';
import FacultyTestimonials from './components/FacultyTestimonials';
import ResearchShowcase from './components/ResearchShowcase';
import ConsultationModal from './components/ConsultationModal';

const FacilitiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Campus Facilities - EduVision Academy | State-of-the-Art Learning Environment</title>
        <meta name="description" content="Explore EduVision Academy's world-class facilities including virtual campus tours, modern laboratories, study spaces, and accessibility features designed for your educational success." />
        <meta name="keywords" content="campus facilities, virtual tour, study spaces, laboratories, accessibility, learning environment, educational facilities" />
        <meta property="og:title" content="Campus Facilities - EduVision Academy" />
        <meta property="og:description" content="Discover our state-of-the-art facilities designed to inspire learning and foster collaboration in a modern educational environment." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/facilities" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <FacultyStats />
          <FacultyFilters />
          <FacultyCard />
          <FacultyTestimonials />
          <ResearchShowcase />
          <ConsultationModal />
        </main>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Campus Information</h3>
                <div className="space-y-2 text-sm opacity-80">
                  <p>123 Education Boulevard</p>
                  <p>Learning City, LC 12345</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: facilities@eduvision.edu</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <div className="space-y-2 text-sm opacity-80">
                  <p>Campus Map</p>
                  <p>Virtual Tours</p>
                  <p>Accessibility Services</p>
                  <p>Emergency Information</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Facility Hours</h3>
                <div className="space-y-2 text-sm opacity-80">
                  <p>Library: 24/7</p>
                  <p>Labs: Mon-Fri 8AM-10PM</p>
                  <p>Sports Center: 6AM-11PM</p>
                  <p>Student Center: 7AM-12AM</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Support Services</h3>
                <div className="space-y-2 text-sm opacity-80">
                  <p>IT Help Desk</p>
                  <p>Maintenance Requests</p>
                  <p>Security Services</p>
                  <p>Lost & Found</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
              <p>&copy; {new Date()?.getFullYear()} EduVision Academy. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FacilitiesPage;