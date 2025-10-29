import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResearchShowcase = () => {
  const researchProjects = [
  {
    id: 1,
    title: "AI-Powered Learning Analytics for Personalized Education",
    faculty: "Dr. Elena Martinez",
    department: "Computer Science",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    imageAlt: "Modern computer screen displaying colorful data analytics dashboard with charts and graphs",
    abstract: `This groundbreaking research explores the implementation of machine learning algorithms to create adaptive learning pathways that respond to individual student needs and learning patterns in real-time.`,
    tags: ["Machine Learning", "Education Technology", "Data Analytics"],
    publicationDate: "2024-08-15",
    citations: 47,
    status: "Published"
  },
  {
    id: 2,
    title: "Sustainable Business Models in the Digital Economy",
    faculty: "James Thompson",
    department: "Business Administration",
    image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
    imageAlt: "Business professionals analyzing sustainable growth charts on digital tablet in modern office",
    abstract: `An comprehensive analysis of how digital transformation is reshaping traditional business models while maintaining environmental sustainability and social responsibility.`,
    tags: ["Digital Marketing", "Sustainability", "Business Strategy"],
    publicationDate: "2024-07-22",
    citations: 32,
    status: "Under Review"
  },
  {
    id: 3,
    title: "Human-Centered Design in Healthcare Technology",
    faculty: "Dr. Priya Patel",
    department: "Design & Innovation",
    image: "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684",
    imageAlt: "Healthcare professional using tablet interface with clean, user-friendly medical application design",
    abstract: `Investigating how user experience design principles can improve patient outcomes and healthcare provider efficiency through intuitive digital health platforms.`,
    tags: ["UX Design", "Healthcare", "Human-Computer Interaction"],
    publicationDate: "2024-09-10",
    citations: 28,
    status: "Published"
  }];


  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Faculty Research Excellence
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore cutting-edge research and thought leadership from our distinguished faculty members who are shaping the future of their respective fields.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {researchProjects?.map((project) =>
        <div
          key={project?.id}
          className="bg-card rounded-xl border border-border shadow-brand-md hover:shadow-brand-lg transition-all duration-300 hover-lift overflow-hidden group">

            {/* Research Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
              src={project?.image}
              alt={project?.imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project?.status === 'Published' ? 'bg-success/20 text-success border border-success/30' : 'bg-warning/20 text-warning border border-warning/30'}`
              }>
                  {project?.status}
                </span>
              </div>

              {/* Quick Stats */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between text-white text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Quote" size={14} />
                      <span>{project?.citations}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} />
                      <span>{new Date(project.publicationDate)?.getFullYear()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title & Faculty */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {project?.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="User" size={14} className="text-primary" />
                  <span className="text-primary font-medium">{project?.faculty}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{project?.department}</p>
              </div>

              {/* Abstract */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project?.abstract}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project?.tags?.map((tag, index) =>
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">

                    {tag}
                  </span>
              )}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between py-3 border-t border-border">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Quote" size={12} />
                    <span>{project?.citations} citations</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} />
                    <span>{new Date(project.publicationDate)?.toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric'
                    })}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-xs">
                  <Icon name="ExternalLink" size={12} className="mr-1" />
                  Read More
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* View All Research CTA */}
      <div className="text-center mt-8">
        <Button variant="outline" className="min-w-[200px]">
          <Icon name="BookOpen" size={16} className="mr-2" />
          View All Research Publications
        </Button>
      </div>
    </div>);

};

export default ResearchShowcase;