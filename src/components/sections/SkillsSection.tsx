import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
       { name: "React", icon: "⚛️", color: "bg-blue-500/10 text-blue-400" },
    { name: "TypeScript", icon: "💠", color: "bg-blue-600/10 text-blue-500" },
    { name: "Next.js", icon: "⏭️", color: "bg-gray-500/10 text-gray-400" },
     { name: "Bootstrap", icon: "🅱️", color: "bg-purple-500/10 text-purple-400" },
    { name: "Tailwind CSS", icon: "🌬️", color: "bg-cyan-500/10 text-cyan-400" },
    { name: "HTML5", icon: "📄", color: "bg-orange-500/10 text-orange-400" },
    { name: "CSS3", icon: "🎨", color: "bg-blue-600/10 text-blue-500" },
    { name: "JavaScript", icon: "🟨", color: "bg-yellow-500/10 text-yellow-400" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢", color: "bg-green-600/10 text-green-500" },
      { name: "Python", icon: "🐍", color: "bg-yellow-500/10 text-yellow-400" },
      { name: "Express.js", icon: "🚀", color: "bg-gray-600/10 text-gray-400" },
      { name: "FastAPI", icon: "⚡", color: "bg-green-500/10 text-green-400" },
      { name: "Django", icon: "🎯", color: "bg-green-700/10 text-green-600" },
      { name: "PHP", icon: "🐘", color: "bg-purple-500/10 text-purple-400" },
       { name: "C", icon: "🔹", color: "bg-blue-500/10 text-blue-400" },
    { name: "C++", icon: "➕", color: "bg-purple-500/10 text-purple-400" },
      { name: "Apex (Salesforce)", icon: "🛠️", color: "bg-blue-600/10 text-blue-500" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: "🐘", color: "bg-blue-600/10 text-blue-500" },
      { name: "MongoDB", icon: "🍃", color: "bg-green-600/10 text-green-500" },
      { name: "MySQL", icon: "🗄️", color: "bg-orange-500/10 text-orange-400" },
      { name: "Redis", icon: "🔴", color: "bg-red-500/10 text-red-400" },
      { name: "Firebase", icon: "🔥", color: "bg-yellow-600/10 text-yellow-500" },
       { name: "Salesforce Objects", icon: "📦", color: "bg-blue-500/10 text-blue-400" }
    ]
  },
  {
    title: "AI/ML",
    skills: [
      { name: "TensorFlow", icon: "🧠", color: "bg-orange-500/10 text-orange-400" },
      { name: "PyTorch", icon: "🔥", color: "bg-red-600/10 text-red-500" },
      { name: "Scikit-learn", icon: "📊", color: "bg-blue-500/10 text-blue-400" },
      { name: "OpenCV", icon: "👁️", color: "bg-green-600/10 text-green-500" },
      { name: "Pandas", icon: "🐼", color: "bg-purple-500/10 text-purple-400" },
      { name: "NLP", icon: "🗣️", color: "bg-yellow-500/10 text-yellow-400" },
      { name: "Deep Learning", icon: "🤖", color: "bg-red-500/10 text-red-400" }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: "📝", color: "bg-orange-600/10 text-orange-500" },
      { name: "AWS", icon: "☁️", color: "bg-yellow-600/10 text-yellow-500" },
      { name: "Vercel", icon: "⚡", color: "bg-gray-600/10 text-gray-400" },
      { name: "Figma", icon: "🎨", color: "bg-purple-600/10 text-purple-500" },
      { name: "VS Code", icon: "🖥️", color: "bg-blue-500/10 text-blue-400" },
    { name: "Jupyter Notebook", icon: "📓", color: "bg-orange-500/10 text-orange-400" }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>
        </ScrollReveal>
        
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <ScrollReveal direction="up" delay={400 + categoryIndex * 200}>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
                  {category.title}
                </h3>
              </ScrollReveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <ScrollReveal 
                    key={skill.name} 
                    direction="scale" 
                    delay={600 + categoryIndex * 200 + skillIndex * 100}
                  >
                    <Card className="p-4 lg:p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-glow">
                      <div className="text-center space-y-3">
                        <div className={`w-12 h-12 lg:w-16 lg:h-16 mx-auto rounded-xl ${skill.color} flex items-center justify-center text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                        <div className="text-xs lg:text-sm font-medium group-hover:text-primary transition-colors">
                          {skill.name}
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};