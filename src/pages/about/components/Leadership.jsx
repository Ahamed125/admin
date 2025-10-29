import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const Leadership = () => {
  const leaders = [
  {
    name: "Dr. Sarah Mitchell",
    position: "Chancellor & CEO",
    image: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
    alt: "Professional woman with shoulder-length brown hair in navy blazer smiling confidently at camera in modern office setting",
    credentials: "Ph.D. Education Leadership, Harvard University",
    experience: "20+ years in educational innovation",
    vision: "To democratize access to world-class education and empower every learner to achieve their full potential through innovative, technology-enhanced learning experiences.",
    achievements: ["Founded 3 successful EdTech companies", "Published 50+ research papers", "UNESCO Education Innovation Award"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Prof. Michael Chen",
    position: "Chief Academic Officer",
    image: "https://images.unsplash.com/photo-1687256457585-3608dfa736c5",
    alt: "Asian man with short black hair wearing glasses and dark suit jacket, professional headshot with warm smile in office environment",
    credentials: "Ph.D. Computer Science, MIT",
    experience: "15+ years in curriculum development",
    vision: "To bridge the gap between academic theory and industry practice, ensuring our graduates are not just knowledgeable but immediately valuable in the workforce.",
    achievements: ["Former Google Senior Engineer", "Curriculum used by 100+ universities", "AI in Education Pioneer Award"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Dr. Emily Rodriguez",
    position: "Chief Innovation Officer",
    image: "https://images.unsplash.com/photo-1714976327275-15f214514cc2",
    alt: "Hispanic woman with long dark hair in professional white blouse, confident pose with arms crossed in modern tech office with glass walls",
    credentials: "Ph.D. Educational Technology, Stanford",
    experience: "12+ years in learning innovation",
    vision: "To revolutionize how we learn by leveraging cutting-edge technology, creating immersive experiences that make education engaging, effective, and accessible to all.",
    achievements: ["VR Learning Platform Creator", "TEDx Speaker on Future of Education", "Innovation in Learning Award"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "James Thompson",
    position: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1703668355895-a19da66c4a58",
    alt: "Caucasian man with short brown hair in navy business suit and tie, professional corporate headshot with confident expression in executive office",
    credentials: "MBA Operations Management, Wharton",
    experience: "18+ years in educational operations",
    vision: "To create seamless operational excellence that supports our educational mission, ensuring every student receives consistent, high-quality service throughout their journey.",
    achievements: ["Scaled operations to 50+ countries", "Operational Excellence Award", "Student Satisfaction 98%+"],
    linkedin: "#",
    twitter: "#"
  }];


  const boardMembers = [
  {
    name: "Dr. Robert Kim",
    position: "Board Chairman",
    company: "Former CEO, Global Education Corp",
    image: "https://images.unsplash.com/photo-1714974528889-d51109fb6ae9",
    alt: "Asian man in his 50s with graying hair wearing charcoal suit and blue tie, distinguished executive portrait in boardroom setting"
  },
  {
    name: "Maria Santos",
    position: "Board Member",
    company: "Chief Learning Officer, TechCorp",
    image: "https://images.unsplash.com/photo-1677594333284-68463516a828",
    alt: "Hispanic woman with shoulder-length black hair in burgundy blazer, professional executive portrait with warm smile in corporate office"
  },
  {
    name: "David Wilson",
    position: "Board Member",
    company: "Venture Partner, Education Ventures",
    image: "https://images.unsplash.com/photo-1609786539928-8c9b926c904e",
    alt: "Caucasian man with short blonde hair in navy suit jacket, professional venture capitalist portrait in modern office with city view"
  }];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16">

          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Leadership</span>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Visionary Leaders Driving Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the exceptional leaders who guide our institution with passion, expertise, and an unwavering commitment to educational innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {leaders?.map((leader, index) =>
          <motion.div
            key={leader?.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="space-y-6">
                {/* Profile Header */}
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <Image
                    src={leader?.image}
                    alt={leader?.alt}
                    className="w-24 h-24 object-cover rounded-2xl" />

                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Award" size={16} color="white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{leader?.name}</h3>
                    <p className="text-primary font-semibold">{leader?.position}</p>
                    <p className="text-sm text-muted-foreground">{leader?.credentials}</p>
                    <p className="text-sm text-muted-foreground">{leader?.experience}</p>
                  </div>

                  <div className="flex space-x-2">
                    <a href={leader?.linkedin} className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200">
                      <Icon name="Linkedin" size={16} />
                    </a>
                    <a href={leader?.twitter} className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200">
                      <Icon name="Twitter" size={16} />
                    </a>
                  </div>
                </div>

                {/* Vision Statement */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Icon name="Eye" size={16} className="mr-2 text-primary" />
                    Vision Statement
                  </h4>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{leader?.vision}"
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Icon name="Trophy" size={16} className="mr-2 text-accent" />
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {leader?.achievements?.map((achievement, idx) =>
                  <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                  )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Board of Directors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12">

          <div className="text-center space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Board of Directors
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Distinguished industry leaders providing strategic guidance and governance oversight to ensure our continued excellence and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {boardMembers?.map((member, index) =>
            <motion.div
              key={member?.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4 group">

                <div className="relative mx-auto w-32 h-32">
                  <Image
                  src={member?.image}
                  alt={member?.alt}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300" />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground">{member?.name}</h4>
                  <p className="text-sm text-primary font-semibold">{member?.position}</p>
                  <p className="text-sm text-muted-foreground">{member?.company}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Governance Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-muted/50 to-card p-12 rounded-3xl border border-border">

          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
              <Icon name="Shield" size={24} color="white" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground">Governance & Accountability</h3>
            
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our governance structure ensures transparency, accountability, and ethical leadership at every level. We maintain the highest standards of institutional integrity, with regular audits, stakeholder engagement, and continuous improvement processes that keep us aligned with our mission and values.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Icon name="FileCheck" size={20} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-foreground">Transparency</h4>
                <p className="text-sm text-muted-foreground">Open reporting and clear communication</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Icon name="Users" size={20} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-foreground">Stakeholder Engagement</h4>
                <p className="text-sm text-muted-foreground">Regular consultation with all stakeholders</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Icon name="TrendingUp" size={20} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-foreground">Continuous Improvement</h4>
                <p className="text-sm text-muted-foreground">Ongoing enhancement of our practices</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Leadership;