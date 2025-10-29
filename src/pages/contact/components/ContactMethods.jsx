import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      icon: "Phone",
      title: "Call Us Directly",
      description: "Speak with our admissions counselors for immediate assistance",
      primary: "+1 (555) 123-4567",
      secondary: "Toll-free: +1 (800) EDU-VISION",
      hours: "Mon-Fri: 8AM-8PM EST",
      action: "Call Now",
      color: "bg-blue-50 border-blue-200 text-blue-700"
    },
    {
      id: 2,
      icon: "Mail",
      title: "Email Support",
      description: "Get detailed responses to your questions within 24 hours",
      primary: "admissions@eduvision.edu",
      secondary: "support@eduvision.edu",
      hours: "Response within 24 hours",
      action: "Send Email",
      color: "bg-green-50 border-green-200 text-green-700"
    },
    {
      id: 3,
      icon: "MessageSquare",
      title: "Live Chat",
      description: "Chat with our student advisors in real-time",
      primary: "Available on website",
      secondary: "Mobile app support",
      hours: "Mon-Sun: 7AM-11PM EST",
      action: "Start Chat",
      color: "bg-purple-50 border-purple-200 text-purple-700"
    },
    {
      id: 4,
      icon: "Video",
      title: "Video Consultation",
      description: "Schedule a personalized video call with our team",
      primary: "Zoom, Teams, or Google Meet",
      secondary: "30-60 minute sessions",
      hours: "By appointment",
      action: "Book Session",
      color: "bg-orange-50 border-orange-200 text-orange-700"
    }
  ];

  const socialChannels = [
    { name: "Facebook", icon: "Facebook", handle: "@EduVisionAcademy", color: "text-blue-600" },
    { name: "Twitter", icon: "Twitter", handle: "@EduVision_Edu", color: "text-blue-400" },
    { name: "LinkedIn", icon: "Linkedin", handle: "EduVision Academy", color: "text-blue-700" },
    { name: "Instagram", icon: "Instagram", handle: "@eduvisionacademy", color: "text-pink-600" },
    { name: "YouTube", icon: "Youtube", handle: "EduVision Academy", color: "text-red-600" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Headphones" size={20} />
            <span className="text-sm font-medium uppercase tracking-wider">Multiple Ways to Connect</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in making communication easy and accessible. Reach out through any channel that works best for you.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods?.map((method) => (
            <div key={method?.id} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover-lift">
              <div className={`w-12 h-12 rounded-lg ${method?.color} flex items-center justify-center mb-4`}>
                <Icon name={method?.icon} size={24} />
              </div>
              
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{method?.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{method?.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="text-sm font-medium text-card-foreground">{method?.primary}</div>
                <div className="text-sm text-muted-foreground">{method?.secondary}</div>
                <div className="text-xs text-muted-foreground flex items-center">
                  <Icon name="Clock" size={12} className="mr-1" />
                  {method?.hours}
                </div>
              </div>
              
              <Button variant="outline" size="sm" fullWidth>
                {method?.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-16">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="AlertTriangle" size={24} className="text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Contact</h3>
              <p className="text-red-700 mb-3">
                For urgent matters outside business hours, including student emergencies or critical technical issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="destructive" size="sm">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Emergency: +1 (555) 911-HELP
                </Button>
                <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-50">
                  <Icon name="Mail" size={16} className="mr-2" />
                  emergency@eduvision.edu
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Follow Us on Social Media</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialChannels?.map((social) => (
              <div key={social?.name} className="flex items-center space-x-3 bg-card rounded-lg px-4 py-3 border border-border hover:shadow-md transition-all duration-200">
                <Icon name={social?.icon} size={20} className={social?.color} />
                <div className="text-left">
                  <div className="text-sm font-medium text-card-foreground">{social?.name}</div>
                  <div className="text-xs text-muted-foreground">{social?.handle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;