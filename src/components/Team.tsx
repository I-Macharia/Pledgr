import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  const teamMembers = [
    {
      name: "Jim Leston",
      role: "Team Lead",
      github: "lestonEth",
      email: "jimlestonosoi42@gmail.com"
    },
    {
      name: "Simon Muchemi",
      role: "Backend Developer",
      github: "SymonMuchemi",
      email: "Muchemi.developer@gmail.com"
    },
    {
      name: "Shramee Srivastav",
      role: "Cryptography",
      github: "shramee",
      email: "shramee.srivastav@gmail.com"
    },
    {
      name: "Mozart Kandie",
      role: "Frontend Developer",
      github: "legacymoz",
      email: "MozzartKandie@gmail.com"
    },
    {
      name: "Tonny Murithi",
      role: "Smart Contract Developer",
      github: "metonniex",
      email: "tonnymurithi.tg@gmail.com"
    },
    {
      name: "Cynthia Wanjiru",
      role: "Full-stack Developer",
      github: "Preciousmuemi",
      email: "cynthiamuemi@gmail.com"
    },
    {
      name: "Ian Macharia",
      role: "Backend Developer",
      github: "I-Macharia",
      email: "Macharia.gichoya@gmail.com"
    }
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developers and blockchain enthusiasts building the future of creator monetization
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group p-6 bg-card border border-border rounded-xl hover:shadow-card transition-smooth hover:scale-105"
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 bg-gradient-primary rounded-full mb-4 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
              
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0"
                  asChild
                >
                  <a 
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0"
                  asChild
                >
                  <a href={`mailto:${member.email}`}>
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;