
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-6 hero-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Begin Your Personalized Parenting Journey Today
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of parents who are gaining confidence and enjoying their parenting journey with age-appropriate guidance and tools.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-white text-parent-blue hover:bg-white/90">
            Create Free Account
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-secondary-foreground hover:bg-white/10"
          >
            Explore Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
