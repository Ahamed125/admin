import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

gsap?.registerPlugin(ScrollTrigger);

const FeaturedCourses = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const featuredCourses = [
  {
    id: 1,
    title: "Advanced Data Science & Machine Learning",
    category: "Technology",
    duration: "12 weeks",
    level: "Advanced",
    students: 2847,
    rating: 4.9,
    price: 899,
    originalPrice: 1299,
    instructor: "Dr. Sarah Chen",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    imageAlt: "Modern data visualization dashboard with colorful charts and graphs on computer screen",
    description: "Master machine learning algorithms, deep learning, and data visualization techniques used by top tech companies.",
    skills: ["Python", "TensorFlow", "Data Analysis", "Neural Networks"],
    isPopular: true,
    nextBatch: "Nov 15, 2024"
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    category: "Marketing",
    duration: "8 weeks",
    level: "Intermediate",
    students: 3521,
    rating: 4.8,
    price: 599,
    originalPrice: 899,
    instructor: "Mark Rodriguez",
    image: "https://images.unsplash.com/photo-1690192336223-063c7197bd29",
    imageAlt: "Creative marketing workspace with laptop showing analytics, colorful sticky notes, and marketing materials",
    description: "Learn comprehensive digital marketing strategies including SEO, social media, and conversion optimization.",
    skills: ["SEO", "Social Media", "Analytics", "Content Strategy"],
    isNew: true,
    nextBatch: "Nov 8, 2024"
  },
  {
    id: 3,
    title: "Full-Stack Web Development",
    category: "Programming",
    duration: "16 weeks",
    level: "Beginner to Advanced",
    students: 4156,
    rating: 4.9,
    price: 1199,
    originalPrice: 1699,
    instructor: "Alex Thompson",
    image: "https://images.unsplash.com/photo-1695070534772-b3db40410818",
    imageAlt: "Multiple computer monitors displaying colorful code editor with HTML, CSS, and JavaScript programming languages",
    description: "Complete web development bootcamp covering frontend, backend, databases, and deployment strategies.",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    isBestseller: true,
    nextBatch: "Nov 22, 2024"
  },
  {
    id: 4,
    title: "UX/UI Design Fundamentals",
    category: "Design",
    duration: "10 weeks",
    level: "Beginner",
    students: 2134,
    rating: 4.7,
    price: 749,
    originalPrice: 999,
    instructor: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1626593188526-6defe6f7222d",
    imageAlt: "Designer working on user interface mockups with design tools, sketches, and color palettes on desk",
    description: "Learn user-centered design principles, prototyping, and create stunning digital experiences.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    isPopular: false,
    nextBatch: "Dec 1, 2024"
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
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
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

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">
              Featured Courses
            </span>
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient font-accent">Popular Learning Paths</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our most sought-after courses designed by industry experts to accelerate your career growth and unlock new opportunities.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {featuredCourses?.map((course, index) =>
          <div
            key={course?.id}
            ref={addToRefs}
            className="group bg-card rounded-2xl overflow-hidden shadow-brand-md hover:shadow-brand-lg transition-all duration-500 hover-lift border border-border">

              {/* Course Image */}
              <div className="relative overflow-hidden">
                <Image
                src={course?.image}
                alt={course?.imageAlt}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />

                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {course?.isPopular &&
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      Popular
                    </span>
                }
                  {course?.isNew &&
                <span className="px-3 py-1 bg-success text-success-foreground text-xs font-semibold rounded-full">
                      New
                    </span>
                }
                  {course?.isBestseller &&
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Bestseller
                    </span>
                }
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="text-right">
                    <div className="text-lg font-bold text-foreground">${course?.price}</div>
                    {course?.originalPrice &&
                  <div className="text-sm text-muted-foreground line-through">${course?.originalPrice}</div>
                  }
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6 space-y-4">
                {/* Category & Level */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {course?.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{course?.level}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {course?.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {course?.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {course?.skills?.slice(0, 3)?.map((skill, skillIndex) =>
                <span
                  key={skillIndex}
                  className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">

                      {skill}
                    </span>
                )}
                  {course?.skills?.length > 3 &&
                <span className="text-xs text-muted-foreground">
                      +{course?.skills?.length - 3} more
                    </span>
                }
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{course?.students?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-foreground">{course?.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{course?.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Instructor & Next Batch */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="User" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{course?.instructor}</span>
                  </div>
                  <div className="text-sm text-primary font-medium">
                    Next: {course?.nextBatch}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                variant="default"
                fullWidth
                className="mt-4 bg-gradient-primary hover:shadow-glow-primary"
                iconName="ArrowRight"
                iconPosition="right">

                  Enroll Now
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            iconName="BookOpen"
            iconPosition="left">

            <Link to="/courses" className="flex items-center">
              Explore All Courses
            </Link>
          </Button>
        </div>
      </div>
    </section>);

};

export default FeaturedCourses;