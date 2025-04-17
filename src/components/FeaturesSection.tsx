import React from 'react';
import { 
  Calendar, 
  BookOpen, 
  Users, 
  LineChart, 
  Shield, 
  Star
} from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-parent-blue" />,
    title: "Age-Based Content",
    description: "Receive information tailored to your child's exact developmental stage."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-parent-teal" />,
    title: "Resource Library",
    description: "Access thousands of expert-reviewed articles, videos, and activities."
  },
  {
    icon: <Users className="h-8 w-8 text-parent-purple" />,
    title: "Parent Community",
    description: "Connect with other parents sharing similar experiences and challenges."
  },
  {
    icon: <LineChart className="h-8 w-8 text-parent-green" />,
    title: "Development Tracking",
    description: "Monitor milestones and celebrate your child's progress with visual tools."
  },
  {
    icon: <Shield className="h-8 w-8 text-parent-pink" />,
    title: "Privacy Focused",
    description: "Your family's data is protected with industry-leading security measures."
  },
  {
    icon: <Star className="h-8 w-8 text-parent-yellow" />,
    title: "Expert Guidance",
    description: "Content developed and reviewed by pediatricians and child development experts."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features-section" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need in One Place</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed by parents, for parents - tools and resources to support your parenting journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
