import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

gsap?.registerPlugin(ScrollTrigger);

const SuccessStories = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const successStories = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Data Scientist",
    company: "Google",
    course: "Advanced Data Science & ML",
    image: "https://images.unsplash.com/photo-1566631267991-65e87613d424",
    imageAlt: "Professional headshot of Sarah Johnson, a confident woman with shoulder-length brown hair in business attire",
    testimonial: `EduVision Academy transformed my career completely. The hands-on projects and expert mentorship helped me transition from a junior analyst to a senior data scientist at Google. The curriculum is incredibly relevant to industry needs.`,
    achievement: "300% salary increase",
    timeframe: "6 months after graduation",
    rating: 5,
    previousRole: "Junior Data Analyst",
    skills: ["Machine Learning", "Python", "Deep Learning", "Data Visualization"]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Full-Stack Developer",
    company: "Microsoft",
    course: "Full-Stack Web Development",
    image: "https://images.unsplash.com/photo-1724128195747-dd25cba7860f",
    imageAlt: "Professional headshot of Michael Chen, an Asian man with short black hair wearing a navy blue suit and tie",
    testimonial: `The comprehensive curriculum and real-world projects at EduVision gave me the confidence to land my dream job at Microsoft. The instructors are industry veterans who provide invaluable insights and mentorship throughout the journey.`,
    achievement: "Dream job at Microsoft",
    timeframe: "4 months after graduation",
    rating: 5,
    previousRole: "Marketing Coordinator",
    skills: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Digital Marketing Manager",
    company: "Shopify",
    course: "Digital Marketing Mastery",
    image: "https://images.unsplash.com/photo-1575090973814-063b180ffef9",
    imageAlt: "Professional headshot of Emily Rodriguez, a Hispanic woman with long dark hair and warm smile in professional blazer",
    testimonial: `EduVision's digital marketing program opened doors I never thought possible. The practical approach and industry connections helped me secure a management position at Shopify. The ROI on this education has been incredible.`,
    achievement: "Promoted to Manager level",
    timeframe: "3 months after graduation",
    rating: 5,
    previousRole: "Social Media Assistant",
    skills: ["SEO", "Content Strategy", "Analytics", "Paid Advertising"]
  },
  {
    id: 4,
    name: "David Kim",
    role: "UX Design Lead",
    company: "Adobe",
    course: "UX/UI Design Fundamentals",
    image: "https://images.unsplash.com/photo-1698072556534-40ec6e337311",
    imageAlt: "Professional headshot of David Kim, an Asian man with stylish glasses and casual button-up shirt smiling confidently",
    testimonial: `The design thinking methodology and hands-on portfolio development at EduVision prepared me perfectly for the competitive design industry. Now I'm leading design initiatives at Adobe and couldn't be happier with my career trajectory.`,
    achievement: "Lead position at Adobe",
    timeframe: "5 months after graduation",
    rating: 5,
    previousRole: "Graphic Designer",
    skills: ["User Research", "Prototyping", "Design Systems", "Figma"]
  }];


  const stats = [
  { number: "95%", label: "Job Placement Rate", icon: "TrendingUp" },
  { number: "50K+", label: "Successful Graduates", icon: "Users" },
  { number: "250%", label: "Average Salary Increase", icon: "DollarSign" },
  { number: "4.9/5", label: "Student Satisfaction", icon: "Star" }];


  useEffect(() => {
    const ctx = gsap?.context(() => {
      gsap?.fromTo(titleRef?.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef?.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
      );

      gsap?.fromTo(sliderRef?.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sliderRef?.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
      );
    }, sectionRef);

    return () => ctx?.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % successStories?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % successStories?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + successStories?.length) % successStories?.length);
  };

  const currentStory = successStories?.[currentTestimonial];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-gradient-accent rounded-full"></div>
            <span className="text-sm font-semibold text-accent tracking-wider uppercase">
              Success Stories
            </span>
            <div className="w-12 h-1 bg-gradient-accent rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient font-accent">Real Results, Real People</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful graduates who have transformed their careers and achieved their dreams through our world-class education programs.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) =>
          <div key={index} className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-brand-md transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} color="white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">{stat?.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat?.label}</div>
            </div>
          )}
        </div>

        {/* Testimonial Slider */}
        <div ref={sliderRef} className="relative">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-brand-lg border border-border">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="space-y-6">
                {/* Quote */}
                <div className="relative">
                  <Icon name="Quote" size={48} className="text-primary/20 absolute -top-4 -left-2" />
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed pl-8">
                    "{currentStory?.testimonial}"
                  </blockquote>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(currentStory?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                  )}
                </div>

                {/* Achievement Highlight */}
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4 border-l-4 border-accent">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Trophy" size={20} className="text-accent" />
                    <span className="font-semibold text-foreground">Key Achievement</span>
                  </div>
                  <div className="text-accent font-bold">{currentStory?.achievement}</div>
                  <div className="text-sm text-muted-foreground">{currentStory?.timeframe}</div>
                </div>

                {/* Skills */}
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">Skills Gained:</div>
                  <div className="flex flex-wrap gap-2">
                    {currentStory?.skills?.map((skill, index) =>
                    <span
                      key={index}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">

                        {skill}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Profile Section */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <Image
                    src={currentStory?.image}
                    alt={currentStory?.imageAlt}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary/20" />

                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={24} color="white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{currentStory?.name}</h3>
                  <div className="text-primary font-semibold">{currentStory?.role}</div>
                  <div className="text-muted-foreground">{currentStory?.company}</div>
                  <div className="text-sm text-muted-foreground">
                    Previously: {currentStory?.previousRole}
                  </div>
                  <div className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full inline-block">
                    {currentStory?.course}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-background border border-border hover:bg-muted transition-all duration-300 hover-lift"
              aria-label="Previous testimonial">

              <Icon name="ChevronLeft" size={20} />
            </button>

            <div className="flex space-x-3">
              {successStories?.map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ?
                'bg-primary w-8' : 'bg-border hover:bg-muted-foreground'}`
                }
                aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-background border border-border hover:bg-muted transition-all duration-300 hover-lift"
              aria-label="Next testimonial">

              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join our community of successful graduates and take the first step towards transforming your career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" iconName="MessageCircle" iconPosition="left">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                View All Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SuccessStories;