import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const Timeline = () => {
  const milestones = [
    {
      year: "2009",
      title: "Foundation & Vision",
      description: "EduVision Academy was founded with a revolutionary vision to transform traditional education through innovative teaching methodologies and technology integration.",
      icon: "Rocket",
      achievements: ["First campus established", "20 founding faculty members", "100 pioneer students"]
    },
    {
      year: "2012",
      title: "Digital Innovation",
      description: "Launched our first online learning platform, making quality education accessible to students worldwide and pioneering the hybrid learning model.",
      icon: "Monitor",
      achievements: ["Online platform launch", "5,000+ online students", "Digital curriculum development"]
    },
    {
      year: "2015",
      title: "Industry Partnerships",
      description: "Established strategic partnerships with leading technology companies and industry leaders to ensure curriculum relevance and job placement opportunities.",
      icon: "Handshake",
      achievements: ["50+ industry partners", "Internship programs", "Job placement guarantee"]
    },
    {
      year: "2018",
      title: "Global Expansion",
      description: "Expanded internationally with campuses across three continents, bringing our innovative educational approach to diverse global communities.",
      icon: "Globe",
      achievements: ["International campuses", "25,000+ global students", "Multilingual programs"]
    },
    {
      year: "2021",
      title: "AI-Powered Learning",
      description: "Integrated artificial intelligence and machine learning into our educational platform, creating personalized learning experiences for every student.",
      icon: "Brain",
      achievements: ["AI tutoring system", "Personalized curricula", "Adaptive assessments"]
    },
    {
      year: "2024",
      title: "Future Ready",
      description: "Launched next-generation programs in emerging technologies, preparing students for the jobs of tomorrow while maintaining our commitment to excellence.",
      icon: "Zap",
      achievements: ["50,000+ graduates", "98% success rate", "Industry leadership"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Journey</span>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            15 Years of Educational Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From a small vision to a global educational powerhouse, discover the milestones that have shaped our journey and continue to drive our mission forward.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden lg:block"></div>

          <div className="space-y-16">
            {milestones?.map((milestone, index) => (
              <motion.div
                key={milestone?.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg z-10 hidden lg:flex">
                  <Icon name={milestone?.icon} size={24} color="white" />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                  <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 lg:hidden">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                          <Icon name={milestone?.icon} size={20} color="white" />
                        </div>
                        <div className="text-2xl font-bold text-accent">{milestone?.year}</div>
                      </div>

                      <div className="hidden lg:block text-2xl font-bold text-accent mb-2">{milestone?.year}</div>
                      
                      <h3 className="text-2xl font-bold text-foreground">{milestone?.title}</h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone?.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Key Achievements</h4>
                        <div className="flex flex-wrap gap-2">
                          {milestone?.achievements?.map((achievement, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Year Display for Desktop */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} hidden lg:block`}>
                  <div className="text-6xl font-bold text-primary/20 font-accent">
                    {milestone?.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white"
        >
          <div className="space-y-6">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
              <Icon name="Telescope" size={32} color="white" />
            </div>
            
            <h3 className="text-3xl font-bold">Looking Ahead</h3>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              As we continue our journey, we remain committed to pushing the boundaries of education, embracing emerging technologies, and preparing students for a future full of possibilities.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">2025</div>
                <div className="text-sm opacity-90">Next Campus Opening</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100K</div>
                <div className="text-sm opacity-90">Students by 2030</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">∞</div>
                <div className="text-sm opacity-90">Possibilities Ahead</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;