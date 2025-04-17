
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, BookOpen, ArrowRight } from 'lucide-react';

const resourceCategories = ['All', 'Sleep', 'Nutrition', 'Development', 'Health', 'Education', 'Behavior'];

const resources = [
  {
    title: "Understanding Sleep Regression",
    category: "Sleep",
    age: "8-10 months",
    excerpt: "Learn why your baby's sleep patterns may change and how to handle sleep regressions.",
    readTime: "5 min read",
    color: "bg-parent-blue"
  },
  {
    title: "Introducing Solid Foods",
    category: "Nutrition",
    age: "4-6 months",
    excerpt: "A comprehensive guide to starting your baby on solid foods safely and effectively.",
    readTime: "8 min read",
    color: "bg-parent-teal"
  },
  {
    title: "Language Development Milestones",
    category: "Development",
    age: "1-2 years",
    excerpt: "Key language milestones and how to support your toddler's communication skills.",
    readTime: "6 min read",
    color: "bg-parent-purple"
  },
  {
    title: "Managing Tantrums Effectively",
    category: "Behavior",
    age: "2-3 years",
    excerpt: "Strategies for handling toddler tantrums and helping your child regulate emotions.",
    readTime: "7 min read",
    color: "bg-parent-pink"
  },
  {
    title: "Preschool Readiness Checklist",
    category: "Education",
    age: "3-4 years",
    excerpt: "Is your child ready for preschool? Essential skills and preparations to consider.",
    readTime: "6 min read",
    color: "bg-parent-green"
  },
  {
    title: "Common Childhood Illnesses",
    category: "Health",
    age: "All ages",
    excerpt: "Identifying and managing common childhood illnesses and when to seek medical help.",
    readTime: "10 min read",
    color: "bg-parent-yellow"
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-parent-blue/10 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resources Library</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Expert-backed articles, videos, and guides for every stage of your parenting journey.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 max-w-3xl mx-auto flex items-center">
              <Search className="text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="flex-grow border-none focus:outline-none text-gray-800"
              />
              <Button variant="ghost" className="text-parent-blue flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="mb-8 flex flex-wrap justify-start gap-2">
                {resourceCategories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="data-[state=active]:bg-parent-blue data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {resourceCategories.map((category) => (
                <TabsContent key={category} value={category} className="animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources
                      .filter(resource => category === 'All' || resource.category === category)
                      .map((resource, index) => (
                        <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <div className={`text-white ${resource.color} rounded-md px-3 py-1 text-xs font-medium inline-block mb-2`}>
                              {resource.category} | {resource.age}
                            </div>
                            <CardTitle className="text-xl">{resource.title}</CardTitle>
                            <CardDescription className="text-sm text-gray-500">{resource.readTime}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600">{resource.excerpt}</p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="ghost" className="text-parent-blue hover:text-parent-blue/90 p-0">
                              Read Article <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="mt-12 text-center">
              <Button className="bg-parent-blue hover:bg-parent-blue/90">
                Load More Resources
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
