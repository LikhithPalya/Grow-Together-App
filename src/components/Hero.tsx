
import React from 'react';
import { Button } from "@/components/ui/button";
import { Baby, ArrowRight, Calendar, BookOpen, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-gradient py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Grow alongside your child with personalized guidance
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Resources, tools, and community support tailored to your child's unique developmental journey.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-parent-blue hover:bg-white/90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-scale-in">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
              <div className="flex items-center mb-6">
                <Baby className="h-10 w-10 text-parent-blue mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Your Parenting Journey</h2>
              </div>
              <div className="space-y-6">
                <div className="feature-card">
                  <BookOpen className="h-8 w-8 text-parent-teal mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Expert Resources</h3>
                  <p className="text-gray-600">Access to age-appropriate articles and guides.</p>
                </div>
                <div className="feature-card">
                  <Calendar className="h-8 w-8 text-parent-purple mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Track Milestones</h3>
                  <p className="text-gray-600">Monitor your child's development with visual tools.</p>
                </div>
                <div className="feature-card">
                  <Heart className="h-8 w-8 text-parent-pink mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Community Support</h3>
                  <p className="text-gray-600">Connect with other parents on similar journeys.</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-parent-yellow rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
