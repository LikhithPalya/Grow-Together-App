
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ageGroups = [
  {
    id: "infants",
    label: "Infants",
    range: "0-12 months",
    color: "bg-parent-blue",
    resources: [
      { title: "Sleep Patterns", category: "Sleep" },
      { title: "Feeding Milestones", category: "Nutrition" },
      { title: "Motor Development", category: "Development" },
      { title: "First Vaccinations", category: "Health" }
    ],
    featuredTitle: "Starting Solid Foods",
    featuredDescription: "Learn when and how to introduce solid foods to your baby's diet safely."
  },
  {
    id: "toddlers",
    label: "Toddlers",
    range: "1-3 years",
    color: "bg-parent-teal",
    resources: [
      { title: "Potty Training", category: "Daily Life" },
      { title: "Language Development", category: "Development" },
      { title: "Dealing with Tantrums", category: "Behavior" },
      { title: "Healthy Snacks", category: "Nutrition" }
    ],
    featuredTitle: "Managing the Terrible Twos",
    featuredDescription: "Strategies for handling tantrums and setting healthy boundaries."
  },
  {
    id: "preschool",
    label: "Preschoolers",
    range: "3-5 years",
    color: "bg-parent-purple",
    resources: [
      { title: "School Readiness", category: "Education" },
      { title: "Social Skills", category: "Development" },
      { title: "Nurturing Creativity", category: "Activities" },
      { title: "Sleep Routines", category: "Sleep" }
    ],
    featuredTitle: "Preparing for Kindergarten",
    featuredDescription: "Help your child develop the skills they need for a smooth transition to school."
  },
  {
    id: "schoolage",
    label: "School Age",
    range: "6-12 years",
    color: "bg-parent-green",
    resources: [
      { title: "Homework Strategies", category: "Education" },
      { title: "Building Confidence", category: "Development" },
      { title: "Screen Time Balance", category: "Lifestyle" },
      { title: "Healthy Friendships", category: "Social" }
    ],
    featuredTitle: "Managing Screen Time",
    featuredDescription: "Creating healthy digital habits while balancing technology use and other activities."
  }
];

const AgeBasedContent = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Content That Grows With Your Child</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore resources tailored to your child's specific stage of development.
          </p>
        </div>
        
        <Tabs defaultValue="infants" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {ageGroups.map((age) => (
              <TabsTrigger 
                key={age.id} 
                value={age.id}
                className="data-[state=active]:bg-parent-blue data-[state=active]:text-white"
              >
                <div>
                  <div className="font-medium">{age.label}</div>
                  <div className="text-xs mt-1 opacity-80">{age.range}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {ageGroups.map((age) => (
            <TabsContent key={age.id} value={age.id} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{age.label}: What to Expect</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {age.resources.map((resource, i) => (
                      <Card key={i} className="resource-card">
                        <CardContent className="p-5">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-gray-900">{resource.title}</p>
                              <span className={`age-badge ${age.color} text-white mt-2 inline-block`}>
                                {resource.category}
                              </span>
                            </div>
                            <ArrowRight className="h-5 w-5 text-parent-blue" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" className="border-parent-blue text-parent-blue hover:bg-parent-blue hover:text-white">
                      View All {age.label} Resources <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="col-span-1">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className={`text-white ${age.color} rounded-md px-4 py-2 text-sm font-medium inline-block self-start mb-4`}>
                        Featured Resource
                      </div>
                      <h4 className="text-xl font-bold mb-3">{age.featuredTitle}</h4>
                      <p className="text-gray-600 mb-6 flex-grow">{age.featuredDescription}</p>
                      <Button className={`bg-parent-blue hover:bg-parent-blue/90 mt-auto`}>
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AgeBasedContent;
