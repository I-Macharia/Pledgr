import { Code, Database, Cpu, Smartphone } from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      icon: Code,
      title: "Smart Contracts",
      technologies: ["Solidity ^0.8.19", "Foundry", "OpenZeppelin"],
      color: "primary"
    },
    {
      icon: Smartphone,
      title: "Frontend",
      technologies: ["React 18", "TypeScript", "Vite", "TailwindCSS"],
      color: "accent"
    },
    {
      icon: Database,
      title: "Backend & Infrastructure",
      technologies: ["Node.js", "The Graph", "Avalanche C-Chain"],
      color: "secondary"
    },
    {
      icon: Cpu,
      title: "Development",
      technologies: ["Ethers.js", "Core Wallet", "Python Analytics"],
      color: "primary"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built with <span className="bg-gradient-primary bg-clip-text text-transparent">Modern</span> Tech
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging cutting-edge blockchain and web technologies for optimal performance and security
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <div 
              key={index}
              className="group p-8 bg-gradient-card border border-border rounded-xl hover:shadow-card transition-smooth"
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full group-hover:shadow-glow transition-smooth ${
                  category.color === 'primary' ? 'bg-primary/10' :
                  category.color === 'accent' ? 'bg-accent/10' :
                  category.color === 'secondary' ? 'bg-secondary/10' :
                  'bg-primary/10'
                }`}>
                  <category.icon className={`h-8 w-8 ${
                    category.color === 'primary' ? 'text-primary' :
                    category.color === 'accent' ? 'text-accent' :
                    category.color === 'secondary' ? 'text-secondary-foreground' :
                    'text-primary'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Avalanche Highlight */}
        <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-xl text-center backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-4">
            <span className="text-primary">Powered by Avalanche</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Fast, low-cost, and environmentally friendly blockchain infrastructure enabling seamless creator economy growth
          </p>
          <div className="flex justify-center items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>Sub-second finality</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Low fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary-foreground rounded-full animate-pulse" />
              <span>Eco-friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;