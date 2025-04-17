
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, Heart, ThumbsUp, Users, MessageSquare, PenLine } from 'lucide-react';

const communityCategories = ['All Topics', 'Infants', 'Toddlers', 'Preschoolers', 'School Age', 'Parenting Tips'];

const discussions = [
  {
    title: "Tips for getting baby to sleep through the night?",
    author: "Maria L.",
    authorAvatar: "ML",
    category: "Infants",
    replies: 24,
    likes: 18,
    time: "2 hours ago",
    preview: "My 6-month-old still wakes up multiple times at night. We've tried..."
  },
  {
    title: "Toddler suddenly refusing vegetables",
    author: "James W.",
    authorAvatar: "JW",
    category: "Toddlers",
    replies: 19,
    likes: 12,
    time: "5 hours ago",
    preview: "My previously good eater is now refusing all vegetables. Any creative ideas to..."
  },
  {
    title: "Preparing for kindergarten anxiety",
    author: "Sophia T.",
    authorAvatar: "ST",
    category: "Preschoolers",
    replies: 31,
    likes: 28,
    time: "1 day ago",
    preview: "My daughter is starting kindergarten next month and is showing signs of anxiety..."
  },
  {
    title: "Screen time limits for 8-year-old",
    author: "David M.",
    authorAvatar: "DM",
    category: "School Age",
    replies: 42,
    likes: 35,
    time: "2 days ago",
    preview: "How much screen time is appropriate for an 8-year-old? We're struggling with..."
  },
  {
    title: "Self-care tips for busy parents",
    author: "Priya K.",
    authorAvatar: "PK",
    category: "Parenting Tips",
    replies: 29,
    likes: 47,
    time: "3 days ago",
    preview: "Finding time for self-care as a parent of young children feels impossible. How do you..."
  },
  {
    title: "Transition from crib to toddler bed",
    author: "Thomas B.",
    authorAvatar: "TB",
    category: "Toddlers",
    replies: 16,
    likes: 22,
    time: "4 days ago",
    preview: "Our 2-year-old has started climbing out of his crib. Any advice for making the transition..."
  }
];

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-parent-purple/10 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Parent Community</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Connect with other parents, share experiences, and get support on your parenting journey.
              </p>
              <Button className="bg-parent-purple hover:bg-parent-purple/90">
                <PenLine className="mr-2 h-4 w-4" /> Start New Discussion
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Sidebar */}
              <div className="md:w-1/4">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-parent-purple" /> 
                      Community Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Active Members:</span>
                        <span className="font-medium">4,285</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Discussions:</span>
                        <span className="font-medium">13,427</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Comments:</span>
                        <span className="font-medium">89,142</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="mr-2 h-5 w-5 text-parent-purple" />
                      Popular Topics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {['Sleep', 'Discipline', 'Feeding', 'Development', 'Education', 'Health', 'Behavior', 'Activities'].map((tag) => (
                        <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-parent-purple/10 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Main Content */}
              <div className="md:w-3/4">
                <Tabs defaultValue="All Topics" className="w-full">
                  <TabsList className="mb-6 flex flex-wrap justify-start gap-2">
                    {communityCategories.map((category) => (
                      <TabsTrigger 
                        key={category} 
                        value={category}
                        className="data-[state=active]:bg-parent-purple data-[state=active]:text-white"
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {communityCategories.map((category) => (
                    <TabsContent key={category} value={category} className="animate-fade-in">
                      <div className="space-y-4">
                        {discussions
                          .filter(discussion => category === 'All Topics' || discussion.category === category)
                          .map((discussion, index) => (
                            <Card key={index} className="hover:border-parent-purple transition-colors">
                              <CardHeader className="pb-2">
                                <div className="flex justify-between">
                                  <CardTitle className="text-xl hover:text-parent-purple cursor-pointer transition-colors">
                                    {discussion.title}
                                  </CardTitle>
                                  <Badge variant="outline" className="bg-parent-purple/10 text-parent-purple border-parent-purple">
                                    {discussion.category}
                                  </Badge>
                                </div>
                                <CardDescription className="flex items-center space-x-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarFallback className="bg-parent-purple text-white text-xs">
                                      {discussion.authorAvatar}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span>{discussion.author}</span>
                                  <span>•</span>
                                  <span>{discussion.time}</span>
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <p className="text-gray-600">{discussion.preview}</p>
                              </CardContent>
                              <CardFooter className="flex justify-between text-sm text-gray-500">
                                <div className="flex items-center space-x-6">
                                  <div className="flex items-center">
                                    <MessageSquare className="h-4 w-4 mr-1" /> {discussion.replies} replies
                                  </div>
                                  <div className="flex items-center">
                                    <Heart className="h-4 w-4 mr-1" /> {discussion.likes} likes
                                  </div>
                                </div>
                                <Button variant="ghost" className="text-parent-purple hover:text-parent-purple/90 p-0">
                                  Join Conversation
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                      </div>
                      <div className="mt-8 text-center">
                        <Button variant="outline" className="border-parent-purple text-parent-purple hover:bg-parent-purple hover:text-white">
                          Load More Discussions
                        </Button>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
