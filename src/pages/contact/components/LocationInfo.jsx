import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationInfo = () => {
  const campusLocations = [
    {
      id: 1,
      name: "Main Campus",
      address: "123 Education Boulevard, Learning City, LC 12345",
      phone: "+1 (555) 123-4567",
      email: "main@eduvision.edu",
      hours: {
        weekdays: "Monday - Friday: 8:00 AM - 8:00 PM",
        saturday: "Saturday: 9:00 AM - 4:00 PM",
        sunday: "Sunday: Closed"
      },
      services: ["Admissions Office", "Student Services", "Library", "Computer Labs", "Cafeteria"],
      coordinates: "40.7128,-74.0060",
      isPrimary: true
    },
    {
      id: 2,
      name: "Downtown Center",
      address: "456 Business District, Metro City, MC 67890",
      phone: "+1 (555) 234-5678",
      email: "downtown@eduvision.edu",
      hours: {
        weekdays: "Monday - Friday: 9:00 AM - 7:00 PM",
        saturday: "Saturday: 10:00 AM - 3:00 PM",
        sunday: "Sunday: Closed"
      },
      services: ["Evening Classes", "Professional Programs", "Career Services", "Meeting Rooms"],
      coordinates: "40.7589,-73.9851",
      isPrimary: false
    }
  ];

  const transportationOptions = [
    {
      icon: "Car",
      title: "Driving",
      description: "Free parking available on campus",
      details: "500+ parking spaces, visitor parking near main entrance"
    },
    {
      icon: "Bus",
      title: "Public Transit",
      description: "Multiple bus routes serve our campus",
      details: "Routes 15, 23, 42 stop directly at campus entrance"
    },
    {
      icon: "Train",
      title: "Metro Rail",
      description: "Education Station - 5 minute walk",
      details: "Blue and Green lines, accessible platform"
    },
    {
      icon: "Bike",
      title: "Cycling",
      description: "Bike-friendly campus with secure storage",
      details: "Covered bike racks and repair station available"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="MapPin" size={20} />
            <span className="text-sm font-medium uppercase tracking-wider">Visit Us</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Campus Locations & Directions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We have multiple convenient locations to serve you better. Visit us in person or take a virtual tour.
          </p>
        </div>

        {/* Campus Locations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {campusLocations?.map((campus) => (
            <div key={campus?.id} className="bg-card rounded-xl border border-border overflow-hidden">
              {/* Map */}
              <div className="h-64 bg-muted relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={campus?.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${campus?.coordinates}&z=14&output=embed`}
                  className="border-0"
                />
                {campus?.isPrimary && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Main Campus
                  </div>
                )}
              </div>

              {/* Campus Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">{campus?.name}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-card-foreground font-medium">Address</p>
                      <p className="text-muted-foreground text-sm">{campus?.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="Phone" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-card-foreground font-medium">Phone</p>
                      <p className="text-muted-foreground text-sm">{campus?.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="Mail" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-card-foreground font-medium">Email</p>
                      <p className="text-muted-foreground text-sm">{campus?.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-card-foreground font-medium">Hours</p>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>{campus?.hours?.weekdays}</p>
                        <p>{campus?.hours?.saturday}</p>
                        <p>{campus?.hours?.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <p className="text-card-foreground font-medium mb-2">Available Services</p>
                  <div className="flex flex-wrap gap-2">
                    {campus?.services?.map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon name="Navigation" size={16} className="mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Virtual Tour
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transportation Options */}
        <div className="bg-card rounded-xl p-8 border border-border">
          <h3 className="text-2xl font-semibold text-card-foreground mb-8 text-center">
            Getting to Campus
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportationOptions?.map((option, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={option?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">{option?.title}</h4>
                <p className="text-muted-foreground text-sm mb-2">{option?.description}</p>
                <p className="text-xs text-muted-foreground">{option?.details}</p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Shield" size={24} className="text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-card-foreground mb-1">Safe Campus</h4>
                <p className="text-sm text-muted-foreground">24/7 security and well-lit pathways</p>
              </div>
              <div>
                <Icon name="Accessibility" size={24} className="text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-card-foreground mb-1">Accessible</h4>
                <p className="text-sm text-muted-foreground">ADA compliant facilities and services</p>
              </div>
              <div>
                <Icon name="Wifi" size={24} className="text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-card-foreground mb-1">Connected</h4>
                <p className="text-sm text-muted-foreground">Free high-speed WiFi throughout campus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;