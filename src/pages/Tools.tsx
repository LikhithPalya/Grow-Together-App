
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LineChart, 
  Moon, 
  Calendar, 
  Shield, 
  Ruler, 
  Apple, 
  Brain, 
  Clock,
  ArrowRight 
} from 'lucide-react';

const toolCategories = ['All Tools', 'Tracking', 'Development', 'Health', 'Daily Routines'];

const tools = [
  {
    icon: <LineChart className="h-10 w-10 text-parent-blue mb-4" />,
    title: "Growth Tracker",
    description: "Track your child's height, weight, and BMI with visualized charts and percentile comparisons.",
    category: "Tracking",
    color: "border-t-parent-blue"
  },
  {
    icon: <Moon className="h-10 w-10 text-parent-purple mb-4" />,
    title: "Sleep Log",
    description: "Monitor sleep patterns and establish healthy sleep routines with our interactive sleep diary.",
    category: "Daily Routines",
    color: "border-t-parent-purple"
  },
  {
    icon: <Calendar className="h-10 w-10 text-parent-teal mb-4" />,
    title: "Milestone Tracker",
    description: "Record and celebrate your child's developmental achievements with age-appropriate milestones.",
    category: "Development",
    color: "border-t-parent-teal"
  },
  {
    icon: <Shield className="h-10 w-10 text-parent-green mb-4" />,
    title: "Immunization Schedule",
    description: "Stay on top of recommended vaccines with timely reminders and a personalized vaccination record.",
    category: "Health",
    color: "border-t-parent-green"
  },
  {
    icon: <Ruler className="h-10 w-10 text-parent-blue mb-4" />,
    title: "Height Predictor",
    description: "Estimate your child's adult height based on parental heights and current growth patterns.",
    category: "Tracking",
    color: "border-t-parent-blue"
  },
  {
    icon: <Apple className="h-10 w-10 text-parent-pink mb-4" />,
    title: "Nutrition Planner",
    description: "Create balanced meal plans and track your child's nutritional intake with age-appropriate suggestions.",
    category: "Daily Routines",
    color: "border-t-parent-pink"
  },
  {
    icon: <Brain className="h-10 w-10 text-parent-yellow mb-4" />,
    title: "Development Assessments",
    description: "Simple questionnaires to help you track your child's cognitive, social, and emotional development.",
    category: "Development",
    color: "border-t-parent-yellow"
  },
  {
    icon: <Clock className="h-10 w-10 text-parent-purple mb-4" />,
    title: "Routine Builder",
    description: "Create and maintain consistent daily routines that help children thrive with visual schedules.",
    category: "Daily Routines",
    color: "border-t-parent-purple"
  }
];

const Tools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-parent-teal/10 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Parenting Tools</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Practical tools and trackers to simplify your parenting journey and support your child's development.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="All Tools" className="w-full">
              <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
                {toolCategories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="data-[state=active]:bg-parent-teal data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {toolCategories.map((category) => (
                <TabsContent key={category} value={category} className="animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {tools
                      .filter(tool => category === 'All Tools' || tool.category === category)
                      .map((tool, index) => (
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
                            <Button variant="ghost" className="text-parent-teal hover:text-parent-teal/90 p-0">
                              Try Tool <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">All Tools Are Personalized to Your Child's Age</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Create a profile for your child to unlock age-appropriate tools and recommendations.
            </p>
            <Button className="bg-parent-teal hover:bg-parent-teal/90 text-white">
              Create Child Profile
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
