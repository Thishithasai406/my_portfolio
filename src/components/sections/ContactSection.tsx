import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <ScrollReveal direction="left" delay={400}>
              <div className="space-y-6">
                <Card className="p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105">
                  <a href="mailto:thishithasaib@gmail.com" className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">thishithasaib@gmail.com</p>
                    </div>
                  </a>
                </Card>
                
                <Card className="p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105">
                  <a href="https://www.linkedin.com/in/bellamkonda-thishithasai-422876379" target="_blank" rel="noreferrer" className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">LinkedIn</h3>
                      <p className="text-muted-foreground">@Bellamkonda Thishithasai</p>
                    </div>
                  </a>
                </Card>
                
                <Card className="p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105">
                  <a href="https://github.com/Thishithasai406" target="_blank" rel="noreferrer" className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">GitHub</h3>
                      <p className="text-muted-foreground">@Thishithasai406</p>
                    </div>
                  </a>
                </Card>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Contact Form */}
          <div>
            <ScrollReveal direction="right" delay={400}>
              <Card className="p-8 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Send me a message</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  I typically respond within 24 hours. Let's discuss your project!
                </p>
                
                <form action="https://formsubmit.co/thishithasaib@gmail.com" method="POST" className="space-y-6">
                  <input type="hidden" name="_subject" value="New message from portfolio" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="/" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, timeline, and requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};