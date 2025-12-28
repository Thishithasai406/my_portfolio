import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const experiences = [
  {
    id: 1,
    title: "Salesforce Developer Intern",
    company: "SmartBridge (in collaboration with Salesforce & AICTE)",
    location: "Remote",
    period: " june 2025 - august 2025 (8-Week Virtual Internship)",
    description: "Gained hands-on experience in Salesforce CRM development, including Apex programming, Lightning Web Components, object relationships, process automation, security management, and UI customization for building scalable enterprise solutions.",
    achievements: [
       "Earned Salesforce Superbadges: Apex Specialist, Object Relationships, Lightning Web Components Basics, and Agentblazer Champion",
    "Developed an end-to-end CRM-based vehicle order management system for WhatNext Vision Motors",
    "Automated dealer assignment based on customer location and implemented bulk order scheduling using Batch Apex",
    "Reduced manual operations by leveraging custom objects, flows, Apex triggers, and Lightning App Builder"
    ],
    technologies: ["Salesforce",
    "Apex",
    "Lightning Web Components (LWC)",
    "SOQL",
    "Flows",
    "Batch Apex",
    "Lightning App Builder"],
    certificate: "https://drive.google.com/file/d/12QAT6AVGrpHv3R0e7t7cgkwpNkxiNQit/view?usp=drivesdk" // Add your certificate URL here
  },
  {
    id: 2,
    title: "AI & Data Analytics Intern (Skills4Future Program)",
    company: "Edunet Foundation | AICTE | Shell India",
    location: "Remote",
    period: "Oct 2025 – Nov 2025",
    description: "Completed a 4-week internship focused on AI and data analytics, gaining hands-on experience in data preprocessing, visualization, model building, and evaluation as part of the Skills4Future program.",
    achievements: [
     "Learned project planning, data preprocessing, and data visualization techniques",
    "Worked on model selection, model building, and performance evaluation",
    "Applied AI and data analytics concepts to an industry-oriented hands-on project",
    "Strengthened problem-solving skills through practical tasks and guided sessions"
    ],
    technologies: ["Python", "Machine Learning", "Deep Learning", "Data Visualization", "Pandas", "NumPy", "Matplotlib", "TensorFlow", "PyTorch"],
    certificate: "https://drive.google.com/file/d/1MRPaeQhsSNmToppz4XNPk29mPjm6oVQt/view?usp=drivesdk" // Add your certificate URL here
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="text-primary">Experience</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and contributions to various projects
            </p>
          </div>
        </ScrollReveal>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ScrollReveal key={experience.id} direction="up" delay={400 + index * 300}>
              <Card className="p-6 lg:p-8 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-medium">{experience.company}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary/10 hover:text-primary transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {experience.certificate && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs gap-2 w-full"
                          asChild
                        >
                          <a 
                            href={experience.certificate} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            View Certificate
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                      {experience.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="text-muted-foreground text-sm lg:text-base">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};