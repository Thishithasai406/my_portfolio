import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Code } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Me Section */}
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Driven by curiosity and passion for technology
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal direction="left" delay={400}>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  I'm a third-year Computer Science and Engineering student specializing in Artificial
                  Intelligence and Machine Learning at SRM University AP. My journey in tech began
                  with a fascination for how machines can learn and make decisions.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  Currently exploring deep learning, neural networks, AWS Cloud and their applications in
                  solving real-world problems. I enjoy working on projects that combine theoretical
                  knowledge with practical implementation.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  Ready for new opportunities and currently learning cutting-edge technologies to
                  stay ahead in the rapidly evolving field of AI and machine learning.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={600}>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <Card className="p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">3rd</div>
                    <div className="text-sm text-muted-foreground">Year Student</div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">AI/ML</div>
                    <div className="text-sm text-muted-foreground">Specialization</div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="space-y-6">
            <ScrollReveal direction="right" delay={400}>
              <Card className="p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">BTech CSE AI/ML</div>
                  <div className="text-sm text-muted-foreground">SRM University AP</div>
                </div>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={600}>
              <Card className="p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold">Interests</h3>
                </div>
                <div className="space-y-1">
                  <div className="text-sm">Full-Stack Development, AI/ML, Cloud (AWS)</div>
                  <div className="text-sm text-muted-foreground">Deep Learning, NLP, Model Deployment</div>
                </div>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={800}>
              <Card className="p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold">Focus Areas</h3>
                </div>
                <div className="space-y-1">
                  <div className="text-sm">AI/ML Applications, AWS Cloud</div>
                  <div className="text-sm text-muted-foreground">Deep Learning, NLP, Model Deployment</div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Currently Learning */}
        <ScrollReveal direction="up" delay={1000}>
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">
              Currently <span className="text-primary">Learning</span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {[
                " Deep Learning", 
                "Cloud Computing (AWS)",
                "Artificial Intelligence",
                "Natural Language Processing"
              ].map((skill, index) => (
                <ScrollReveal key={skill} direction="scale" delay={1200 + index * 100}>
                  <Badge variant="secondary" className="px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105">
                    {skill}
                  </Badge>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};