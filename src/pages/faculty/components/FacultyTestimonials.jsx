import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';


const FacultyTestimonials = () => {
  const testimonials = [
  {
    id: 1,
    student: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1730222168387-051038de25be",
    avatarAlt: "Professional headshot of young woman with brown hair and bright smile",
    course: "Data Science Bootcamp",
    rating: 5,
    text: `Professor Martinez's approach to machine learning is exceptional. Her real-world examples and hands-on projects helped me land my dream job at a tech startup. The personalized feedback during consultations was invaluable.`,
    faculty: "Dr. Elena Martinez",
    date: "2024-09-15"
  },
  {
    id: 2,
    student: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1645817095143-01b4feb70470",
    avatarAlt: "Professional headshot of Asian man in business attire with confident expression",
    course: "Digital Marketing Strategy",
    rating: 5,
    text: `James Thompson's industry insights are unmatched. His consultation sessions provided clarity on my career transition from finance to marketing. The practical strategies I learned are directly applicable to my current role.`,
    faculty: "James Thompson",
    date: "2024-08-22"
  },
  {
    id: 3,
    student: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1507532459814-b32f63cf4497",
    avatarAlt: "Professional headshot of Hispanic woman with long dark hair and warm smile",
    course: "UX Design Fundamentals",
    rating: 5,
    text: `Dr. Patel's design thinking methodology transformed my approach to problem-solving. The one-on-one mentoring sessions helped me build a portfolio that impressed employers. Highly recommend her guidance.`,
    faculty: "Dr. Priya Patel",
    date: "2024-10-01"
  }];


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
    <Icon
      key={index}
      name="Star"
      size={14}
      color={index < rating ? "#F59E0B" : "#E5E7EB"}
      className={index < rating ? "fill-current" : ""} />

    );
  };

  return (
    <div className="bg-muted/30 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          What Our Students Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover how our expert faculty members have transformed careers and inspired success through personalized guidance and industry expertise.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials?.map((testimonial) =>
        <div
          key={testimonial?.id}
          className="bg-card rounded-xl border border-border p-6 shadow-brand-sm hover:shadow-brand-md transition-all duration-300 hover-lift">

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-4">
              {renderStars(testimonial?.rating)}
            </div>

            {/* Testimonial Text */}
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              "{testimonial?.text}"
            </p>

            {/* Student Info */}
            <div className="flex items-center space-x-3 mb-4">
              <Image
              src={testimonial?.avatar}
              alt={testimonial?.avatarAlt}
              className="w-12 h-12 rounded-full object-cover" />

              <div>
                <div className="font-medium text-foreground text-sm">{testimonial?.student}</div>
                <div className="text-xs text-muted-foreground">{testimonial?.course}</div>
              </div>
            </div>

            {/* Faculty & Date */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <Icon name="User" size={14} className="text-primary" />
                <span className="text-xs text-primary font-medium">{testimonial?.faculty}</span>
              </div>
              <span className="text-xs text-muted-foreground">
                {new Date(testimonial.date)?.toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric'
              })}
              </span>
            </div>
          </div>
        )}
      </div>
      {/* CTA */}
      <div className="text-center mt-8">
        <p className="text-muted-foreground mb-4">
          Ready to experience world-class mentorship?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="min-w-[160px]">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Read More Reviews
          </Button>
          <Button variant="default" className="min-w-[160px] bg-gradient-accent">
            <Icon name="Calendar" size={16} className="mr-2" />
            Book Consultation
          </Button>
        </div>
      </div>
    </div>);

};

export default FacultyTestimonials;