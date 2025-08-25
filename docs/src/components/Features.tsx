import { Shield, Zap, BarChart3, Palette, Globe, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Creator Registry",
      description: "On-chain creator profiles with verified metadata and comprehensive analytics tracking."
    },
    {
      icon: Zap,
      title: "Fast & Low Cost",
      description: "Built on Avalanche for lightning-fast transactions with minimal fees."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track staking performance, community growth, and revenue insights in real-time."
    },
    {
      icon: Palette,
      title: "Dynamic Perks",
      description: "Tier-based rewards system with exclusive content and special access privileges."
    },
    {
      icon: Globe,
      title: "Cross-platform",
      description: "Seamless Web3 wallet integration across all major blockchain networks."
    },
    {
      icon: Lock,
      title: "Secure Staking",
      description: "Smart contract audited mechanisms ensuring safe and transparent staking."
    }
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything creators and communities need to build sustainable, decentralized monetization
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 bg-card border border-border rounded-xl hover:shadow-card transition-smooth hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:shadow-glow transition-smooth">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;