import React from 'react';
import Icon from '../../../components/AppIcon';

const FacultyStats = ({ totalFaculty, departments, avgRating, totalStudents }) => {
  const stats = [
    {
      icon: 'Users',
      label: 'Expert Faculty',
      value: totalFaculty,
      description: 'Industry professionals',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'Building',
      label: 'Departments',
      value: departments,
      description: 'Specialized fields',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: 'Star',
      label: 'Average Rating',
      value: avgRating,
      description: 'Student satisfaction',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: 'GraduationCap',
      label: 'Students Taught',
      value: `${totalStudents}K+`,
      description: 'Successful graduates',
      color: 'text-success',
      bgColor: 'bg-success/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-brand-md transition-all duration-300 hover-lift"
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat?.bgColor} mb-4`}>
            <Icon name={stat?.icon} size={24} className={stat?.color} />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
          <div className="text-sm font-medium text-foreground mb-1">{stat?.label}</div>
          <div className="text-xs text-muted-foreground">{stat?.description}</div>
        </div>
      ))}
    </div>
  );
};

export default FacultyStats;