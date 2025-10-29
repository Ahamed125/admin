import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import ConsultationBooking from './components/ConsultationBooking';
import LocationInfo from './components/LocationInfo';
import FAQ from './components/FAQ';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - EduVision Academy | Get in Touch Today</title>
        <meta 
          name="description" 
          content="Contact EduVision Academy for admissions, program information, and student support. Multiple ways to connect including phone, email, live chat, and campus visits. Schedule your free consultation today." 
        />
        <meta name="keywords" content="contact EduVision Academy, admissions office, student support, campus visit, consultation booking, education inquiry" />
        <meta property="og:title" content="Contact Us - EduVision Academy" />
        <meta property="og:description" content="Get in touch with EduVision Academy. Multiple contact methods, free consultations, and personalized support for your educational journey." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://eduvision.edu/contact" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <ContactHero />
          
          {/* Contact Methods */}
          <ContactMethods />
          
          {/* Contact Form */}
          <ContactForm />
          
          {/* Consultation Booking */}
          <ConsultationBooking />
          
          {/* Location Information */}
          <LocationInfo />
          
          {/* FAQ Section */}
          <FAQ />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2 text-sm">
                  <p>123 Education Boulevard</p>
                  <p>Learning City, LC 12345</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Email: info@eduvision.edu</p>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2 text-sm">
                  <p><a href="/about" className="hover:text-accent transition-colors">About Us</a></p>
                  <p><a href="/courses" className="hover:text-accent transition-colors">Programs</a></p>
                  <p><a href="/faculty" className="hover:text-accent transition-colors">Faculty</a></p>
                  <p><a href="/facilities" className="hover:text-accent transition-colors">Facilities</a></p>
                </div>
              </div>
              
              {/* Student Resources */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Student Resources</h3>
                <div className="space-y-2 text-sm">
                  <p>Student Portal</p>
                  <p>Library Services</p>
                  <p>Career Services</p>
                  <p>Technical Support</p>
                </div>
              </div>
              
              {/* Office Hours */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <p>Monday - Friday: 8AM - 8PM</p>
                  <p>Saturday: 9AM - 4PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-accent">Emergency: 24/7</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
              <p>&copy; {new Date()?.getFullYear()} EduVision Academy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;