import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

gsap?.registerPlugin(ScrollTrigger);

const NewsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const newsArticles = [
  {
    id: 1,
    title: "EduVision Academy Launches Revolutionary AI-Powered Learning Platform",
    excerpt: "Our new adaptive learning system uses artificial intelligence to personalize education paths for each student, resulting in 40% faster skill acquisition and improved retention rates.",
    category: "Innovation",
    date: "2024-10-20",
    readTime: "5 min read",
    author: "Dr. Sarah Mitchell",
    authorRole: "Chief Academic Officer",
    image: "https://images.unsplash.com/photo-1669643470668-19d6fb1d3f21",
    imageAlt: "Modern AI technology interface with neural network visualization and learning analytics dashboard",
    isFeature: true,
    tags: ["AI", "EdTech", "Innovation"]
  },
  {
    id: 2,
    title: "Partnership with Fortune 500 Companies Creates New Career Pathways",
    excerpt: "Strategic partnerships with Google, Microsoft, and Amazon provide direct internship and job placement opportunities for our graduates, with 98% placement rate in Q3 2024.",
    category: "Partnerships",
    date: "2024-10-18",
    readTime: "3 min read",
    author: "Mark Rodriguez",
    authorRole: "Industry Relations Director",
    image: "https://images.unsplash.com/photo-1653669487003-7d89b2020f3c",
    imageAlt: "Professional business meeting with diverse executives shaking hands in modern corporate office",
    isFeature: false,
    tags: ["Partnerships", "Career", "Industry"]
  },
  {
    id: 3,
    title: "Global Expansion: New Campuses Opening in 5 Countries",
    excerpt: "EduVision Academy announces international expansion with new state-of-the-art campuses in Singapore, London, Toronto, Sydney, and Dubai, bringing world-class education globally.",
    category: "Expansion",
    date: "2024-10-15",
    readTime: "4 min read",
    author: "Emma Thompson",
    authorRole: "Global Operations VP",
    image: "https://images.unsplash.com/photo-1703757117920-13ff79115e45",
    imageAlt: "World map with glowing connection points showing global network of educational institutions",
    isFeature: false,
    tags: ["Global", "Expansion", "Campus"]
  },
  {
    id: 4,
    title: "Scholarship Program Awards $2M to Underrepresented Students",
    excerpt: "Our diversity and inclusion initiative provides full scholarships to 200 students from underrepresented communities, promoting equal access to quality education and career opportunities.",
    category: "Community",
    date: "2024-10-12",
    readTime: "6 min read",
    author: "Dr. James Wilson",
    authorRole: "Diversity & Inclusion Director",
    image: "https://images.unsplash.com/photo-1671549213121-d28170cf3aa7",
    imageAlt: "Diverse group of happy students celebrating with scholarship certificates in university courtyard",
    isFeature: false,
    tags: ["Scholarship", "Diversity", "Community"]
  }];


  const upcomingEvents = [
  {
    id: 1,
    title: "Virtual Career Fair 2024",
    date: "2024-11-15",
    time: "10:00 AM - 4:00 PM EST",
    type: "Virtual Event",
    description: "Connect with top employers and explore career opportunities across various industries.",
    registrations: 2847
  },
  {
    id: 2,
    title: "AI in Education Webinar",
    date: "2024-11-08",
    time: "2:00 PM - 3:30 PM EST",
    type: "Webinar",
    description: "Learn how artificial intelligence is transforming modern education and career development.",
    registrations: 1523
  },
  {
    id: 3,
    title: "Alumni Success Summit",
    date: "2024-11-22",
    time: "9:00 AM - 5:00 PM EST",
    type: "In-Person",
    description: "Annual gathering of successful alumni sharing insights and networking opportunities.",
    registrations: 856
  }];


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

      cardsRef?.current?.forEach((card, index) => {
        if (card) {
          gsap?.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
          );
        }
      });
    }, sectionRef);

    return () => ctx?.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef?.current?.includes(el)) {
      cardsRef?.current?.push(el);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">
              Latest News & Events
            </span>
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient font-accent">Stay Connected & Informed</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the latest developments, achievements, and upcoming events that shape the future of education at EduVision Academy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Articles Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Latest News</h3>
              <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
                View All News
              </Button>
            </div>

            {/* Featured Article */}
            <div ref={addToRefs} className="bg-card rounded-2xl overflow-hidden shadow-brand-md border border-border hover:shadow-brand-lg transition-all duration-300">
              <div className="relative">
                <Image
                  src={newsArticles?.[0]?.image}
                  alt={newsArticles?.[0]?.imageAlt}
                  className="w-full h-64 object-cover" />

                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded">{newsArticles?.[0]?.category}</span>
                  <span>{formatDate(newsArticles?.[0]?.date)}</span>
                  <span>{newsArticles?.[0]?.readTime}</span>
                </div>
                
                <h4 className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                  {newsArticles?.[0]?.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {newsArticles?.[0]?.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {newsArticles?.[0]?.tags?.map((tag, index) =>
                  <span key={index} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                      #{tag}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} color="white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{newsArticles?.[0]?.author}</div>
                      <div className="text-xs text-muted-foreground">{newsArticles?.[0]?.authorRole}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Other Articles */}
            <div className="grid md:grid-cols-2 gap-6">
              {newsArticles?.slice(1)?.map((article, index) =>
              <div
                key={article?.id}
                ref={addToRefs}
                className="bg-card rounded-xl overflow-hidden shadow-brand-sm border border-border hover:shadow-brand-md transition-all duration-300 hover-lift">

                  <Image
                  src={article?.image}
                  alt={article?.imageAlt}
                  className="w-full h-40 object-cover" />

                  
                  <div className="p-4 space-y-3">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded">{article?.category}</span>
                      <span>{formatDate(article?.date)}</span>
                    </div>
                    
                    <h5 className="font-bold text-foreground hover:text-primary transition-colors duration-300 cursor-pointer line-clamp-2">
                      {article?.title}
                    </h5>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {article?.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article?.readTime}</span>
                      <Button variant="ghost" size="xs" iconName="ArrowRight" iconPosition="right">
                        Read
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Events Sidebar */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Upcoming Events</h3>
              <Button variant="ghost" size="sm" iconName="Calendar" iconPosition="right">
                View Calendar
              </Button>
            </div>

            {upcomingEvents?.map((event, index) =>
            <div
              key={event?.id}
              ref={addToRefs}
              className="bg-card rounded-xl p-4 border border-border hover:shadow-brand-md transition-all duration-300 hover-lift">

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                      {event?.type}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Icon name="Users" size={12} />
                      <span>{event?.registrations}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    {event?.title}
                  </h4>
                  
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={14} />
                      <span>{formatDate(event?.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={14} />
                      <span>{event?.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {event?.description}
                  </p>
                  
                  <Button variant="outline" size="sm" fullWidth iconName="Calendar" iconPosition="left">
                    Register Now
                  </Button>
                </div>
              </div>
            )}

            {/* Newsletter Signup */}
            <div ref={addToRefs} className="bg-gradient-primary rounded-xl p-6 text-center">
              <Icon name="Mail" size={32} color="white" className="mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Stay Updated</h4>
              <p className="text-white/90 text-sm mb-4">
                Get the latest news and updates delivered to your inbox.
              </p>
              <Button variant="secondary" size="sm" fullWidth iconName="ArrowRight" iconPosition="right">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default NewsSection;