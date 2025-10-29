import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VirtualTour = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
  {
    name: "Main Campus",
    description: "Our flagship campus featuring state-of-the-art facilities, modern classrooms, and collaborative learning spaces designed for the future of education.",
    image: "https://images.unsplash.com/photo-1705505368645-288c0c190a9c",
    alt: "Modern university campus with contemporary glass and steel architecture, landscaped courtyards, students walking between buildings on sunny day",
    coordinates: "40.7589, -73.9851",
    highlights: ["Smart Classrooms", "Innovation Labs", "Student Center", "Library Complex"]
  },
  {
    name: "Technology Center",
    description: "Cutting-edge technology facilities including AI labs, robotics workshops, and advanced computing centers equipped with the latest industry-standard equipment.",
    image: "https://images.unsplash.com/photo-1720207759350-525cc3c4c9f5",
    alt: "High-tech computer laboratory with rows of modern workstations, large displays, and students working on programming projects in bright, clean environment",
    coordinates: "40.7614, -73.9776",
    highlights: ["AI Research Lab", "Robotics Workshop", "3D Printing Studio", "VR Learning Pods"]
  },
  {
    name: "Innovation Hub",
    description: "A collaborative space where creativity meets technology, featuring maker spaces, startup incubators, and flexible areas for project-based learning.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    alt: "Open-concept innovation workspace with collaborative seating areas, whiteboards, modern furniture, and entrepreneurs working on laptops in creative environment",
    coordinates: "40.7505, -73.9934",
    highlights: ["Maker Space", "Startup Incubator", "Design Studio", "Collaboration Zones"]
  },
  {
    name: "Student Life Center",
    description: "The heart of campus social life featuring dining facilities, recreational areas, fitness centers, and spaces for student organizations and events.",
    image: "https://images.unsplash.com/photo-1668809202033-00f98f525858",
    alt: "Vibrant student center with modern seating areas, high ceilings, natural lighting, students socializing and studying in comfortable lounge spaces",
    coordinates: "40.7549, -73.9840",
    highlights: ["Dining Hall", "Fitness Center", "Study Lounges", "Event Spaces"]
  }];


  const virtualFeatures = [
  {
    icon: "Camera",
    title: "360° Virtual Tours",
    description: "Immersive 360-degree views of every facility"
  },
  {
    icon: "Map",
    title: "Interactive Campus Map",
    description: "Navigate through our campus with detailed maps"
  },
  {
    icon: "Video",
    title: "Live Virtual Sessions",
    description: "Join live tours with our admission counselors"
  },
  {
    icon: "Smartphone",
    title: "Mobile Experience",
    description: "Access tours on any device, anywhere"
  }];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16">

          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Virtual Campus Tour</span>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Explore Our Campus From Anywhere
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take an immersive virtual journey through our world-class facilities and discover the spaces where innovation, learning, and community come together.
          </p>
        </motion.div>

        {/* Main Tour Interface */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Location Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4">

            <h3 className="text-xl font-bold text-foreground mb-6">Choose Your Destination</h3>
            
            {locations?.map((location, index) =>
            <motion.button
              key={location?.name}
              onClick={() => setActiveLocation(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
              activeLocation === index ?
              'bg-primary text-white border-primary shadow-lg' :
              'bg-card text-foreground border-border hover:border-primary/50 hover:shadow-md'}`
              }>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{location?.name}</h4>
                    <Icon
                    name={activeLocation === index ? "MapPin" : "ChevronRight"}
                    size={16}
                    color={activeLocation === index ? "white" : "var(--color-muted-foreground)"} />

                  </div>
                  <p className={`text-sm ${
                activeLocation === index ? 'text-white/90' : 'text-muted-foreground'}`
                }>
                    {location?.description?.substring(0, 80)}...
                  </p>
                </div>
              </motion.button>
            )}
          </motion.div>

          {/* Main Tour View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6">

            {/* Tour Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={locations?.[activeLocation]?.image}
                alt={locations?.[activeLocation]?.alt}
                className="w-full h-[400px] object-cover" />

              
              {/* Tour Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold">{locations?.[activeLocation]?.name}</h3>
                      <p className="text-white/90">{locations?.[activeLocation]?.description}</p>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                        <Icon name="Play" size={20} />
                      </button>
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                        <Icon name="Maximize" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 360° Indicator */}
              <div className="absolute top-6 right-6 bg-accent px-4 py-2 rounded-full text-white font-semibold text-sm">
                360° View Available
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-card p-6 rounded-2xl border border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Icon name="MapPin" size={16} className="mr-2 text-primary" />
                    Location Details
                  </h4>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Coordinates:</span> {locations?.[activeLocation]?.coordinates}
                    </p>
                    <div className="w-full h-32 bg-muted rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        loading="lazy"
                        title={locations?.[activeLocation]?.name}
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps?q=${locations?.[activeLocation]?.coordinates}&z=14&output=embed`}>
                      </iframe>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Icon name="Star" size={16} className="mr-2 text-accent" />
                    Key Highlights
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {locations?.[activeLocation]?.highlights?.map((highlight, idx) =>
                    <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Virtual Tour Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12">

          <div className="text-center space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Enhanced Virtual Experience
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our virtual tour platform offers cutting-edge features to give you the most comprehensive campus experience possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {virtualFeatures?.map((feature, index) =>
            <motion.div
              key={feature?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4 p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">

                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name={feature?.icon} size={24} color="white" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">{feature?.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature?.description}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white text-center">

          <div className="space-y-6">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
              <Icon name="Calendar" size={32} color="white" />
            </div>
            
            <h3 className="text-3xl font-bold">Ready for an In-Person Visit?</h3>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              While our virtual tour gives you a great preview, nothing beats experiencing our campus in person. Schedule a personalized campus visit with one of our admission counselors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center">
                <Icon name="Calendar" size={20} className="mr-2" />
                Schedule Campus Visit
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-xl transition-all duration-200 flex items-center justify-center">
                <Icon name="Phone" size={20} className="mr-2" />
                Talk to Admissions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default VirtualTour;