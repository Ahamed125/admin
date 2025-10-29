import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationModal = ({ faculty, isOpen, onClose, onBooking }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [message, setMessage] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' }
  ];

  const consultationTypes = [
    { value: 'academic', label: 'Academic Guidance' },
    { value: 'career', label: 'Career Counseling' },
    { value: 'research', label: 'Research Discussion' },
    { value: 'course', label: 'Course Selection' }
  ];

  const handleSubmit = (e) => {
    e?.preventDefault();
    const bookingData = {
      faculty: faculty?.name,
      date: selectedDate,
      time: selectedTime,
      type: consultationType,
      message,
      studentName,
      studentEmail
    };
    onBooking(bookingData);
    onClose();
  };

  if (!isOpen || !faculty) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl border border-border shadow-brand-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src={faculty?.image}
                alt={faculty?.imageAlt}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-background flex items-center justify-center">
                <Icon name="Check" size={12} color="white" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">{faculty?.name}</h2>
              <p className="text-primary font-medium">{faculty?.title}</p>
              <p className="text-sm text-muted-foreground">{faculty?.department}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Your Name"
              type="text"
              placeholder="Enter your full name"
              value={studentName}
              onChange={(e) => setStudentName(e?.target?.value)}
              required
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e?.target?.value)}
              required
            />
          </div>

          {/* Consultation Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Preferred Date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e?.target?.value)}
              min={new Date()?.toISOString()?.split('T')?.[0]}
              required
            />
            <Select
              label="Preferred Time"
              placeholder="Select time slot"
              options={timeSlots}
              value={selectedTime}
              onChange={setSelectedTime}
              required
            />
          </div>

          <Select
            label="Consultation Type"
            placeholder="Select consultation type"
            options={consultationTypes}
            value={consultationType}
            onChange={setConsultationType}
            required
          />

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message (Optional)
            </label>
            <textarea
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              rows={4}
              placeholder="Describe what you'd like to discuss..."
              value={message}
              onChange={(e) => setMessage(e?.target?.value)}
            />
          </div>

          {/* Faculty Info */}
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">About this consultation:</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">Duration: 30 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Video" size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">Online meeting</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-accent fill-current" />
                <span className="text-muted-foreground">Rating: {faculty?.rating}/5</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">{faculty?.students} students</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              className="flex-1 bg-gradient-accent"
            >
              <Icon name="Calendar" size={16} className="mr-2" />
              Book Consultation
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;