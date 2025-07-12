import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Full-stack development with modern frameworks and technologies",
      technologies: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description: "User-centered design with focus on aesthetics and usability",
      technologies: ["Figma", "Adobe Creative Suite", "Tailwind CSS", "Framer Motion"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimized solutions for speed, scalability, and user experience",
      technologies: ["Webpack", "Vite", "AWS", "Docker", "CI/CD"]
    }
  ];

  return (
    <section id="about" className="w-full py-20 px-6 bg-white/5">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I&apos;m a passionate developer who loves creating digital experiences that make a difference. 
              With over 5 years of experience in web development, I specialize in building scalable, 
              user-friendly applications using modern technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My approach combines technical expertise with creative problem-solving, ensuring that 
              every project not only functions flawlessly but also delivers an exceptional user experience.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or enjoying outdoor activities.
            </p>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center border border-white/20">
              <div className="w-72 h-72 bg-gradient-to-br from-gray-600/50 to-gray-800/50 rounded-full flex items-center justify-center">
                <span className="text-6xl">👋</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-white mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
