import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const Accreditation = () => {
  const accreditations = [
  {
    name: "Higher Learning Commission",
    type: "Regional Accreditation",
    logo: "https://images.unsplash.com/photo-1646728149824-0d1ba11e4add",
    alt: "Official Higher Learning Commission accreditation seal with blue and gold design featuring academic symbols and institutional excellence badge",
    description: "Comprehensive institutional accreditation ensuring academic quality and integrity across all programs.",
    validUntil: "2029",
    status: "Active"
  },
  {
    name: "ABET Engineering Accreditation",
    type: "Program Specific",
    logo: "https://images.unsplash.com/photo-1649778651059-32c6b61b580a",
    alt: "ABET accreditation logo with engineering symbols, gears and technical design elements in professional blue and silver color scheme",
    description: "Specialized accreditation for engineering and technology programs meeting industry standards.",
    validUntil: "2027",
    status: "Active"
  },
  {
    name: "AACSB Business Accreditation",
    type: "Business Programs",
    logo: "https://images.unsplash.com/photo-1726446332177-a28e44cab7dc",
    alt: "AACSB business school accreditation emblem with corporate design elements, globe symbol and professional certification badge in navy and gold",
    description: "Premier business education accreditation recognized globally for excellence in business education.",
    validUntil: "2028",
    status: "Active"
  },
  {
    name: "ISO 21001:2018",
    type: "Quality Management",
    logo: "https://images.unsplash.com/photo-1634099887443-7e33fa2ed661",
    alt: "ISO 21001 quality management certification logo with international standards symbols, checkmark and quality assurance badge in green and blue",
    description: "International standard for educational organizations management systems ensuring continuous improvement.",
    validUntil: "2026",
    status: "Active"
  }];


  const certifications = [
  {
    title: "UNESCO Chair in Education Innovation",
    organization: "United Nations Educational, Scientific and Cultural Organization",
    year: "2023",
    icon: "Globe"
  },
  {
    title: "Excellence in Online Learning Award",
    organization: "Distance Education Accrediting Commission",
    year: "2024",
    icon: "Monitor"
  },
  {
    title: "Diversity & Inclusion Excellence",
    organization: "National Association of Student Personnel Administrators",
    year: "2024",
    icon: "Users"
  },
  {
    title: "Innovation in Teaching Award",
    organization: "International Association of Universities",
    year: "2023",
    icon: "Lightbulb"
  }];


  const qualityMetrics = [
  {
    metric: "Student Satisfaction",
    value: "98.5%",
    description: "Based on annual student surveys",
    icon: "Heart",
    trend: "+2.3%"
  },
  {
    metric: "Graduate Employment",
    value: "96.2%",
    description: "Within 6 months of graduation",
    icon: "Briefcase",
    trend: "+1.8%"
  },
  {
    metric: "Faculty Credentials",
    value: "94%",
    description: "Hold terminal degrees in their field",
    icon: "GraduationCap",
    trend: "+3.1%"
  },
  {
    metric: "Retention Rate",
    value: "92.7%",
    description: "First-year to second-year retention",
    icon: "TrendingUp",
    trend: "+1.5%"
  }];


  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16">

          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Accreditation & Quality</span>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Recognized Excellence & Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to educational excellence is validated by prestigious accreditations and certifications from leading organizations worldwide.
          </p>
        </motion.div>

        {/* Accreditations Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {accreditations?.map((accreditation, index) =>
          <motion.div
            key={accreditation?.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Image
                    src={accreditation?.logo}
                    alt={accreditation?.alt}
                    className="w-16 h-16 object-cover rounded-xl" />

                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} color="white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{accreditation?.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {accreditation?.type}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                        {accreditation?.status}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Valid Until</div>
                    <div className="font-semibold text-foreground">{accreditation?.validUntil}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {accreditation?.description}
                </p>

                {/* Verification Link */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">Verification Available</span>
                  <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200">
                    <span className="text-sm font-medium">Verify Status</span>
                    <Icon name="ExternalLink" size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Quality Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20">

          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Quality Performance Metrics
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Measurable outcomes that demonstrate our commitment to excellence and continuous improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityMetrics?.map((metric, index) =>
            <motion.div
              key={metric?.metric}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-2xl shadow-sm border border-border text-center space-y-4 hover:shadow-lg transition-all duration-300">

                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto">
                  <Icon name={metric?.icon} size={20} color="white" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">{metric?.value}</div>
                  <h4 className="font-semibold text-foreground">{metric?.metric}</h4>
                  <p className="text-sm text-muted-foreground">{metric?.description}</p>
                  
                  <div className="flex items-center justify-center space-x-1 text-green-600">
                    <Icon name="TrendingUp" size={14} />
                    <span className="text-sm font-medium">{metric?.trend}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Awards & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12">

          <div className="text-center space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Awards & Recognition
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recent honors and certifications that recognize our leadership in educational innovation and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications?.map((cert, index) =>
            <motion.div
              key={cert?.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-lg transition-all duration-300">

                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={cert?.icon} size={20} color="var(--color-accent)" />
                </div>
                
                <div className="flex-1 space-y-1">
                  <h4 className="font-semibold text-foreground">{cert?.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert?.organization}</p>
                </div>

                <div className="text-right">
                  <div className="text-lg font-bold text-accent">{cert?.year}</div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white text-center">

          <div className="space-y-6">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
              <Icon name="ShieldCheck" size={32} color="white" />
            </div>
            
            <h3 className="text-3xl font-bold">Your Trust, Our Commitment</h3>
            
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              These accreditations and certifications represent more than just credentials—they are our promise to you that EduVision Academy meets and exceeds the highest standards of educational excellence, integrity, and student success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-xl transition-colors duration-200">
                View All Certifications
              </button>
              <button className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-xl transition-all duration-200">
                Download Accreditation Report
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Accreditation;