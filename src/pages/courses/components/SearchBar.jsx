import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ searchQuery, onSearchChange, onSuggestionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);

  const mockSuggestions = [
    { type: 'course', title: 'React Development Masterclass', category: 'Programming' },
    { type: 'course', title: 'Advanced JavaScript Concepts', category: 'Programming' },
    { type: 'course', title: 'UI/UX Design Fundamentals', category: 'Design' },
    { type: 'course', title: 'Digital Marketing Strategy', category: 'Marketing' },
    { type: 'course', title: 'Data Science with Python', category: 'Data Science' },
    { type: 'instructor', title: 'Dr. Sarah Johnson', category: 'AI & Machine Learning' },
    { type: 'instructor', title: 'Prof. Michael Chen', category: 'Web Development' },
    { type: 'category', title: 'Programming & Development', category: '45 courses' },
    { type: 'category', title: 'Design & Creative', category: '32 courses' },
    { type: 'skill', title: 'JavaScript', category: 'Programming Language' },
    { type: 'skill', title: 'React', category: 'Frontend Framework' },
    { type: 'skill', title: 'Python', category: 'Programming Language' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef?.current && !searchRef?.current?.contains(event?.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    const query = e?.target?.value;
    onSearchChange(query);

    if (query?.length > 0) {
      const filtered = mockSuggestions?.filter(item =>
        item?.title?.toLowerCase()?.includes(query?.toLowerCase()) ||
        item?.category?.toLowerCase()?.includes(query?.toLowerCase())
      )?.slice(0, 8);
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion?.title);
    onSuggestionSelect(suggestion);
    setIsOpen(false);
  };

  const getIconForType = (type) => {
    switch (type) {
      case 'course': return 'BookOpen';
      case 'instructor': return 'User';
      case 'category': return 'Folder';
      case 'skill': return 'Code';
      default: return 'Search';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'course': return 'Course';
      case 'instructor': return 'Instructor';
      case 'category': return 'Category';
      case 'skill': return 'Skill';
      default: return '';
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon name="Search" size={20} className="text-muted-foreground" />
        </div>
        
        <Input
          type="text"
          placeholder="Search courses, instructors, or skills..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-12 pr-12 h-12 text-base bg-background border-2 border-border focus:border-primary rounded-xl shadow-sm"
        />

        {searchQuery && (
          <button
            onClick={() => {
              onSearchChange('');
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Icon name="X" size={20} />
          </button>
        )}
      </div>
      {/* Search Suggestions Dropdown */}
      {isOpen && suggestions?.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
          <div className="py-2">
            {suggestions?.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full px-4 py-3 text-left hover:bg-muted transition-colors duration-200 flex items-center space-x-3 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <Icon 
                      name={getIconForType(suggestion?.type)} 
                      size={16} 
                      className="text-primary" 
                    />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-foreground truncate">
                      {suggestion?.title}
                    </p>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                      {getTypeLabel(suggestion?.type)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {suggestion?.category}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <Icon 
                    name="ArrowUpRight" 
                    size={14} 
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-200" 
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="border-t border-border px-4 py-3">
            <p className="text-xs text-muted-foreground mb-2">Quick Actions</p>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 text-xs bg-muted hover:bg-muted/80 rounded-full transition-colors duration-200">
                View All Courses
              </button>
              <button className="px-3 py-1 text-xs bg-muted hover:bg-muted/80 rounded-full transition-colors duration-200">
                Browse Categories
              </button>
              <button className="px-3 py-1 text-xs bg-muted hover:bg-muted/80 rounded-full transition-colors duration-200">
                Popular Instructors
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;