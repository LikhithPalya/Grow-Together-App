
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "GrowTogether has been invaluable for tracking my baby's milestones. The age-specific content is so helpful!",
    name: "Sarah M.",
    role: "Mother of 8-month-old",
    avatar: "SM"
  },
  {
    quote: "The sleep tracker helped us establish a bedtime routine that finally works. Our toddler now sleeps through the night!",
    name: "James T.",
    role: "Father of 2-year-old",
    avatar: "JT"
  },
  {
    quote: "I love the community support. It's comforting to connect with other parents facing the same challenges with their preschoolers.",
    name: "Aisha K.",
    role: "Mother of 4-year-old",
    avatar: "AK"
  },
  {
    quote: "The expert articles have answered so many of my questions as a first-time parent. Truly a lifesaver!",
    name: "Miguel R.",
    role: "Father of 6-month-old",
    avatar: "MR"
  },
  {
    quote: "The milestone tracker helps me ensure my child is developing well, and the suggestions for activities are fantastic.",
    name: "Priya S.",
    role: "Mother of 15-month-old",
    avatar: "PS"
  }
];

const TestimonialsSection = () => {
  const renderStars = () => (
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-parent-yellow text-parent-yellow" />
      ))}
    </div>
  );

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Parents Are Saying</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of parents who are making their journey easier with GrowTogether.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    {renderStars()}
                    <blockquote className="text-gray-700 mb-6 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarFallback className="bg-parent-blue text-white">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex">
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
