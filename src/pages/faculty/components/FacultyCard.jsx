import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FacultyCard = ({ faculty, onBookConsultation }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < Math.floor(rating) ? "#F59E0B" : "#E5E7EB"}
        className={index < Math.floor(rating) ? "fill-current" : ""}
      />
    ));
  };

  return (
    <div className="bg-card rounded-xl border border-border shadow-brand-md hover:shadow-brand-lg transition-all duration-300 hover-lift overflow-hidden group">
      {/* Faculty Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={faculty?.image}
          alt={faculty?.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            faculty?.status === 'Available' ?'bg-success/20 text-success border border-success/30' :'bg-warning/20 text-warning border border-warning/30'
          }`}>
            {faculty?.status}
          </span>
        </div>

        {/* Quick Actions Overlay */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex space-x-2">
            <Button
              variant="secondary"
              size="sm"
              className="flex-1 bg-white/90 hover:bg-white text-gray-900"
              onClick={() => onBookConsultation(faculty)}
            >
              <Icon name="Calendar" size={14} className="mr-1" />
              Book
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="bg-white/90 hover:bg-white text-gray-900"
            >
              <Icon name="MessageCircle" size={14} />
            </Button>
          </div>
        </div>
      </div>
      {/* Faculty Info */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
            {faculty?.name}
          </h3>
          <p className="text-primary font-medium text-sm mb-2">{faculty?.title}</p>
          <p className="text-muted-foreground text-sm">{faculty?.department}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex space-x-1">
            {renderStars(faculty?.rating)}
          </div>
          <span className="text-sm font-medium text-foreground">{faculty?.rating}</span>
          <span className="text-xs text-muted-foreground">({faculty?.reviewCount} reviews)</span>
        </div>

        {/* Specializations */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {faculty?.specializations?.slice(0, 3)?.map((spec, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
              >
                {spec}
              </span>
            ))}
            {faculty?.specializations?.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                +{faculty?.specializations?.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-b border-border">
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">{faculty?.experience}</div>
            <div className="text-xs text-muted-foreground">Years Exp.</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">{faculty?.students}</div>
            <div className="text-xs text-muted-foreground">Students</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">{faculty?.courses}</div>
            <div className="text-xs text-muted-foreground">Courses</div>
          </div>
        </div>

        {/* Bio Preview */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {faculty?.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Profile
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={() => onBookConsultation(faculty)}
          >
            <Icon name="Calendar" size={14} className="mr-1" />
            Consult
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;