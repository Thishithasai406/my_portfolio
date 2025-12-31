import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const certificates = [
   {
    id: 1,
    title: "AWS Cloud Quest: Cloud Practitioner – Trained",
    issuer: "AWS Skill Builder",
    date: "dec 2025",
    credentialId: "N/A",
    description: "Completed a game-based, hands-on cloud training program focused on real-world AWS use cases. Earned the AWS Cloud Practitioner – Trained digital badge upon successful completion. Built and validated cloud solutions using EC2, VPC, IAM, S3, EFS, RDS, DynamoDB, Auto Scaling, and CloudWatch .Gained practical experience in compute, networking, security, storage, and monitoring",
    skills: [ "Cloud Computing","Amazon CloudWatch","Amazon S3","Amazon EC2", "Auto Scaling", "ELB (Elastic Load Balancing)", "mazon VPC",  "EFS (Elastic File System)" , "Amazon Relational Database Service (RDS)", "Amazon DynamoDB", "Identity and Access Management (IAM)"],
    level: "Intermediate",
    certificateUrl: "https://drive.google.com/file/d/1XMXGjXL5DgdLYbOaMFhJEMpXUpbpvW9E/view?usp=drivesdk"
  },
  {
    id: 2,
    title: "Explore machine learning using python",
    issuer: "infosys Springboard",
    date: "Aug 2025",
    credentialId: "N/A",
    description: "Completed a course on machine learning using Python, covering classification, regression, clustering, model evaluation, and foundational neural networks. Gained hands-on experience applying ML concepts to real-world datasets and projects.",
    skills: [ "Python",
    "Machine Learning",
    "Classification",
    "Regression",
    "Clustering",
    "Model Evaluation",
    "Artificial Neural Networks"],
    level: "Intermediate",
    certificateUrl: "https://drive.google.com/file/d/13CHd3mo3WU9Vj9InNzHmlv1a5T2qeR5m/view?usp=drivesdk"
  },
  {
    id: 3,
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    issuer: "AWS Training & Certification",
    date: "Aug 2025",
    credentialId: "N/A",
    description: "Completed AWS certification on Machine Learning and AI, covering core ML concepts, deep learning, generative AI, and AWS AI services.",
    skills: ["Machine Learning",
    "Artificial Intelligence",
    "Deep Learning",
    "Generative AI",
    "AWS AI Services",
    "Foundation Models"],
    level: "Intermediate",
    certificateUrl: "https://drive.google.com/file/d/1EIlpKhNTsWFM4MdaJyjjxSPt898PGC1X/view?usp=drivesdk"
  },
  {
    id: 4,
    title: "HackVyuha’25 – GfG Summer Hackathon 2025",
    issuer: "GeeksforGeeks Student Chapter, SRM University AP",
    date: "may 2025",
    credentialId: "National-Level Hackathon Finalist",
    description: "National-level hackathon finalist; built an AI-powered assistant with offline support, smart PDF Q&A, and a custom LLM.",
    skills: [ "Problem Solving",
    "Team Collaboration",
    "AI Model Development",
    "LLM Fundamentals",
    "System Design",
    "Technical Pitching"],
    level: "National-Level Hackathon",
    certificateUrl: "https://drive.google.com/file/d/1O-zCLNS3qnJROChLlXflygRkEFLEP_8l/view?usp=drivesdk"
  }
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Certificates & <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and continuous learning milestones
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((certificate, index) => (
            <ScrollReveal key={certificate.id} direction="up" delay={400 + index * 150}>
              <Card className="p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105 hover:shadow-glow h-full flex flex-col">
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {certificate.level}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {certificate.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-2">
                      {certificate.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3 h-3" />
                      {certificate.date}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {certificate.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 flex-1">
                    {certificate.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs hover:bg-primary/10 hover:text-primary transition-colors">
                        {skill}
                      </Badge>
                    ))}
                    {certificate.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{certificate.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="pt-2 mt-auto">
                    <p className="text-xs text-muted-foreground mb-3">
                      ID: {certificate.credentialId}
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a 
                        href={certificate.certificateUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
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
