import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <ScrollReveal direction="up" delay={200}>
              <Badge className="bg-primary/10 text-primary border-primary/20 w-fit mx-auto lg:mx-0">
                ✨ Available for Projects
              </Badge>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={400}>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Bellamkonda
                  </span>
                  <br />
                  <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Thishithasai
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground">
                  Full-Stack Developer | AI/ML Engineer
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={600}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Building impactful solutions that blend functionality and innovation. From sleek frontends
                to robust backends, I turn complex problems into elegant
                solutions.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-glow hover:scale-105"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-card px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 text-primary px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="https://drive.google.com/file/d/1-wALPWljm74an20u6ylcYFWuiUREHn3I/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={1000}>
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110" asChild>
                  <a href="https://github.com/Thishithasai406" target="_blank" rel="noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110" asChild>
                  <a href="https://www.linkedin.com/in/bellamkonda-thishithasai-422876379" target="_blank" rel="noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110" asChild>
                  <a href="mailto:thishithasaib@gmail.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <ScrollReveal direction="scale" delay={600}>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
                  <img 
                    src={profilePhoto} 
                    alt="Bellamkonda Thishithasai - Full Stack Developer" 
                    className="relative w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-2xl object-cover shadow-card transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <ScrollReveal direction="up" delay={1200}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={scrollToAbout}
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 animate-bounce"
            >
              <ChevronDown className="w-6 h-6" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
