import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, FileText, Bot } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const GITHUB_PROFILE = "https://github.com/Thishithasai406";

const projects = [
  {
    id: 1,
    title: "SignSpeak",
    description: "A real-time American Sign Language (ASL) alphabet recognition system using computer vision and deep learning to convert hand gestures into text and speech.",
    icon: <Bot className="w-8 h-8" />,
    status: "Live",
    github: "https://github.com/Thishithasai406/signSpeak.git",
    demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    technologies: [ "Python",
    "OpenCV",
    "MediaPipe",
    "CVZone",
    "TensorFlow",
    "Keras",
    "NumPy",
    "Tkinter",
    "pyttsx3",
    "pyenchant",
    "Pillow"],
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: 2,
    title: "IOT-based-smart-monitoring-system",
    description: "IoT-based smart farming web application using Flask and SQLite that provides real-time soil monitoring, auto-irrigation, crop guidance, and interactive analytics for farmers.",
    icon: <ShoppingCart className="w-8 h-8" />,
    status: "Live",
    github: "https://github.com/Thishithasai406/IOT-based-smart-monitoring-system.git",
    demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    technologies: ["Python",
    "Flask",
    "SQLite",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Plotly.js",
    "IoT Simulation"],
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: 3,
    title: "Movie Ticket Booking System",
    description: "A full-stack web-based movie ticket booking application that allows users to browse movies, select theaters and show timings, choose seats, and confirm bookings, with an admin panel for managing movies, theaters, users, and bookings.",
    icon: <Bot className="w-8 h-8" />,
    status: "Live",
    github: "https://github.com/Thishithasai406/movie-ticket-booking-system.git",
    demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    technologies: ["HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "PHP",
    "MySQL"],
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: 4,
    title: "AI-Powered Resume Builder",
    description: "A modern resume-building web application using HTML, CSS, and JavaScript with live preview, multiple templates, AI-powered content suggestions, and PDF export for professional resumes.",
    icon: <FileText className="w-8 h-8" />,
    status: "Live",
    github: "https://github.com/Thishithasai406/Resume_builder.git",
    demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    technologies: [ "HTML5",
    "CSS3",
    "JavaScript (ES6)",
    "jsPDF",
    "HTML2Canvas"],
    color: "bg-green-500/10 text-green-400 border-green-500/20"
  },
  {
    id: 5,
    title: "ExpenseFlow - Modern Expense Tracker",
    description: "A personal expense tracking web application built with vanilla HTML, CSS, and JavaScript, featuring expense management, budget tracking, analytics, and local data persistence.",
    icon: <Bot className="w-8 h-8" />,
    status: "Live",
    github: "https://github.com/Thishithasai406/personal-expense-tracker.git",
    demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    technologies: ["HTML5",
    "CSS3",
    "JavaScript (ES6)",
    "localStorage",
    "Chart.js"],
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I'm passionate about
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={400 + index * 200}>
              <Card className="p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105 hover:shadow-glow h-full flex flex-col">
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <Badge 
                      className={
                        project.status === "Live" 
                          ? "bg-primary/10 text-primary border-primary/20"
                          : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 flex-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary/10 hover:text-primary transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2 mt-auto">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a
                        href={(project as any).demo || (project as any).github || GITHUB_PROFILE}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-border hover:bg-card transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a
                        href={(project as any).github || GITHUB_PROFILE}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github className="w-4 h-4" />
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