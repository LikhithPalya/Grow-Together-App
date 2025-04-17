
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  LineChart, 
  Moon, 
  Calendar, 
  Shield, 
  ArrowRight 
} from 'lucide-react';

const tools = [
  {
    icon: <LineChart className="h-10 w-10 text-parent-blue mb-4" />,
    title: "Growth Tracker",
    description: "Track your child's height, weight, and BMI with visualized charts.",
    color: "border-t-parent-blue"
  },
  {
    icon: <Moon className="h-10 w-10 text-parent-purple mb-4" />,
    title: "Sleep Log",
    description: "Monitor sleep patterns and establish healthy sleep routines.",
    color: "border-t-parent-purple"
  },
  {
    icon: <Calendar className="h-10 w-10 text-parent-teal mb-4" />,
    title: "Milestone Tracker",
    description: "Record and celebrate your child's developmental achievements.",
    color: "border-t-parent-teal"
  },
  {
    icon: <Shield className="h-10 w-10 text-parent-green mb-4" />,
    title: "Immunization Schedule",
    description: "Stay on top of recommended vaccines with timely reminders.",
    color: "border-t-parent-green"
  }
];

const ToolsPreview = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Practical Tools for Everyday Parenting</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track development, manage routines, and stay organized with our specialized parenting tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border-t-4 hover:shadow-lg transition-shadow ${tool.color}`}
            >
              <CardHeader>
                <div className="flex flex-col items-start">
                  {tool.icon}
                  <CardTitle>{tool.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 min-h-[80px]">
                  {tool.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-parent-blue hover:text-parent-blue/90 p-0">
                  Try Tool <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-parent-blue hover:bg-parent-blue/90">
            Explore All Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToolsPreview;
