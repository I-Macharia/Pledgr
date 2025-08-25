import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Transform</span> 
            <br />Creator Economy?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the decentralized revolution. Start staking, earning, and building stronger creator communities today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Launch App
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glow" size="xl" asChild>
              <a 
                href="https://github.com/Pledger-DAO/avalanche-adamur-noc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <a 
              href="https://testnet.snowtrace.io/address/0x74e384f2aF3dD6B570F2E2AafA00E8dE24B6b2be"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
            >
              <ExternalLink className="h-4 w-4" />
              View Deployed Contract
            </a>
            <a 
              href="https://faucet.avax.network/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-smooth"
            >
              <ExternalLink className="h-4 w-4" />
              Get Testnet AVAX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;