import { UserPlus, Coins, Gift } from "lucide-react";
import howItWorksImage from "@/assets/how-it-works.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Register as Creator",
      description: "Set up your creator profile with metadata and exclusive content offerings."
    },
    {
      icon: Coins,
      title: "2. Community Stakes",
      description: "Fans stake AVAX tokens to support creators and unlock premium access."
    },
    {
      icon: Gift,
      title: "3. Unlock Perks",
      description: "Stakers receive exclusive content, early access, and tier-based rewards."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">Pledgr</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple three-step process that revolutionizes creator monetization through decentralized staking
          </p>
        </div>

        {/* Background Image */}
        <div className="relative mb-16">
          <img 
            src={howItWorksImage} 
            alt="How Pledgr Works Process" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-card opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-card rounded-2xl" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-card rounded-full mx-auto border border-border shadow-accent group-hover:shadow-glow transition-smooth">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-border" />
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;