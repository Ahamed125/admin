import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const ImpactMetrics = () => {
  const graduationData = [
    { year: '2019', graduates: 8500, employmentRate: 94 },
    { year: '2020', graduates: 9200, employmentRate: 93 },
    { year: '2021', graduates: 10100, employmentRate: 95 },
    { year: '2022', graduates: 11300, employmentRate: 96 },
    { year: '2023', graduates: 12800, employmentRate: 97 },
    { year: '2024', graduates: 14200, employmentRate: 96 }
  ];

  const industryPlacement = [
    { name: 'Technology', value: 35, color: '#3B82F6' },
    { name: 'Healthcare', value: 22, color: '#10B981' },
    { name: 'Finance', value: 18, color: '#F59E0B' },
    { name: 'Education', value: 12, color: '#8B5CF6' },
    { name: 'Engineering', value: 8, color: '#EF4444' },
    { name: 'Other', value: 5, color: '#6B7280' }
  ];

  const globalReach = [
    {
      region: "North America",
      students: 28500,
      growth: "+12%",
      icon: "MapPin"
    },
    {
      region: "Europe",
      students: 15200,
      growth: "+18%",
      icon: "MapPin"
    },
    {
      region: "Asia Pacific",
      students: 12800,
      growth: "+25%",
      icon: "MapPin"
    },
    {
      region: "Latin America",
      students: 6400,
      growth: "+22%",
      icon: "MapPin"
    },
    {
      region: "Africa & Middle East",
      students: 3100,
      growth: "+30%",
      icon: "MapPin"
    }
  ];

  const impactStats = [
    {
      title: "Lives Transformed",
      value: "50,000+",
      description: "Students graduated since inception",
      icon: "Users",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Career Advancement",
      value: "78%",
      description: "Graduates received promotions within 2 years",
      icon: "TrendingUp",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Salary Increase",
      value: "$25K",
      description: "Average salary increase post-graduation",
      icon: "DollarSign",
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Global Network",
      value: "120+",
      description: "Countries represented in our alumni network",
      icon: "Globe",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const communityImpact = [
    {
      title: "Community Partnerships",
      value: "250+",
      description: "Local organizations we support through student projects and volunteer programs",
      icon: "Handshake"
    },
    {
      title: "Scholarship Recipients",
      value: "5,200",
      description: "Students supported through our need-based and merit scholarship programs",
      icon: "Award"
    },
    {
      title: "Research Projects",
      value: "180",
      description: "Active research initiatives addressing real-world challenges",
      icon: "Search"
    },
    {
      title: "Innovation Patents",
      value: "45",
      description: "Patents filed from student and faculty research collaborations",
      icon: "Lightbulb"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Impact & Outcomes</span>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Measuring Our Success Through Your Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our impact extends far beyond graduation day. Discover how EduVision Academy graduates are transforming industries, communities, and their own lives.
          </p>
        </motion.div>

        {/* Key Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats?.map((stat, index) => (
            <motion.div
              key={stat?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat?.color} opacity-5`}></div>
              
              <div className="relative space-y-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat?.color} rounded-2xl flex items-center justify-center`}>
                  <Icon name={stat?.icon} size={24} color="white" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">{stat?.value}</div>
                  <h3 className="font-semibold text-foreground">{stat?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat?.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Graduation & Employment Trends */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-3xl shadow-lg border border-border mb-16"
        >
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Graduation & Employment Success</h3>
              <p className="text-muted-foreground">Tracking our consistent growth in graduate numbers and employment outcomes</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Graduation Numbers */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center">
                  <Icon name="GraduationCap" size={16} className="mr-2 text-primary" />
                  Annual Graduates
                </h4>
                <div className="h-64" aria-label="Annual Graduates Bar Chart">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={graduationData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                      <XAxis dataKey="year" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'var(--color-card)', 
                          border: '1px solid var(--color-border)',
                          borderRadius: '8px'
                        }} 
                      />
                      <Bar dataKey="graduates" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Employment Rate */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center">
                  <Icon name="Briefcase" size={16} className="mr-2 text-accent" />
                  Employment Rate (%)
                </h4>
                <div className="h-64" aria-label="Employment Rate Line Chart">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={graduationData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                      <XAxis dataKey="year" stroke="#6B7280" />
                      <YAxis domain={[90, 100]} stroke="#6B7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'var(--color-card)', 
                          border: '1px solid var(--color-border)',
                          borderRadius: '8px'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="employmentRate" 
                        stroke="#F59E0B" 
                        strokeWidth={3}
                        dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Placement & Global Reach */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Industry Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl shadow-lg border border-border"
          >
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-foreground">Graduate Industry Placement</h3>
                <p className="text-sm text-muted-foreground">Distribution across major industries</p>
              </div>

              <div className="h-64" aria-label="Industry Placement Pie Chart">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={industryPlacement}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {industryPlacement?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry?.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {industryPlacement?.map((industry, index) => (
                  <div key={industry?.name} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: industry?.color }}
                    ></div>
                    <span className="text-sm text-muted-foreground">{industry?.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Global Reach */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl shadow-lg border border-border"
          >
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-foreground">Global Student Distribution</h3>
                <p className="text-sm text-muted-foreground">Students by geographic region</p>
              </div>

              <div className="space-y-4">
                {globalReach?.map((region, index) => (
                  <motion.div
                    key={region?.region}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={region?.icon} size={16} color="var(--color-primary)" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{region?.region}</div>
                        <div className="text-sm text-muted-foreground">{region?.students?.toLocaleString()} students</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-green-600 font-semibold text-sm">{region?.growth}</div>
                      <div className="text-xs text-muted-foreground">YoY Growth</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Community Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Community & Social Impact
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond individual success, we're committed to creating positive change in communities worldwide through education and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityImpact?.map((impact, index) => (
              <motion.div
                key={impact?.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4 p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name={impact?.icon} size={24} color="white" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-foreground">{impact?.value}</div>
                  <h4 className="font-semibold text-foreground">{impact?.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{impact?.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white text-center"
        >
          <div className="space-y-6">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
              <Icon name="Target" size={32} color="white" />
            </div>
            
            <h3 className="text-3xl font-bold">Our 2030 Vision</h3>
            
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              By 2030, we aim to have transformed 100,000 lives through education, established campuses on every continent, and become the global leader in innovative, accessible, and impactful higher education.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100K</div>
                <div className="text-sm opacity-90">Total Graduates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">7</div>
                <div className="text-sm opacity-90">Continents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">#1</div>
                <div className="text-sm opacity-90">Global Ranking</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactMetrics;