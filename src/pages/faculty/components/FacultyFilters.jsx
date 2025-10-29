import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const FacultyFilters = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedDepartment, 
  setSelectedDepartment,
  selectedSpecialization,
  setSelectedSpecialization,
  sortBy,
  setSortBy,
  onClearFilters,
  departments,
  specializations
}) => {
  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'experience', label: 'Most Experienced' },
    { value: 'students', label: 'Most Students' }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-brand-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground flex items-center">
          <Icon name="Filter" size={20} className="mr-2 text-primary" />
          Filter Faculty
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="text-muted-foreground hover:text-foreground"
        >
          <Icon name="X" size={16} className="mr-1" />
          Clear All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="lg:col-span-2">
          <Input
            type="search"
            placeholder="Search faculty by name, expertise..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="w-full"
          />
        </div>

        {/* Department Filter */}
        <div>
          <Select
            placeholder="All Departments"
            options={departments}
            value={selectedDepartment}
            onChange={setSelectedDepartment}
            clearable
          />
        </div>

        {/* Sort By */}
        <div>
          <Select
            placeholder="Sort by"
            options={sortOptions}
            value={sortBy}
            onChange={setSortBy}
          />
        </div>

        {/* Specialization Filter */}
        <div className="lg:col-span-2">
          <Select
            placeholder="All Specializations"
            options={specializations}
            value={selectedSpecialization}
            onChange={setSelectedSpecialization}
            searchable
            clearable
          />
        </div>

        {/* Quick Filters */}
        <div className="lg:col-span-2 flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="text-xs">
            <Icon name="Star" size={12} className="mr-1" />
            Top Rated (4.5+)
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <Icon name="Clock" size={12} className="mr-1" />
            Available Today
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <Icon name="Award" size={12} className="mr-1" />
            Industry Experts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FacultyFilters;