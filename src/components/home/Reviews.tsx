
import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Thompson",
    position: "Software Engineer",
    company: "TechCorp",
    content: "I was struggling to get interviews until I used this service. The AI completely transformed my resume, and I started getting callbacks within days!",
    rating: 5,
    image: "https://placehold.co/100x100/d8e4ff/5a78b1?text=AT"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Marketing Manager",
    company: "BrandWorks",
    content: "The ATS optimization was a game-changer. After applying to over 50 jobs with no response, my optimized resume got me 5 interviews in just one week.",
    rating: 5,
    image: "https://placehold.co/100x100/ffd8eb/b15a8a?text=SJ"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    position: "Financial Analyst",
    company: "Capital Partners",
    content: "Worth every penny! The templates are professional, and the AI suggestions helped highlight achievements I would have never thought to include.",
    rating: 4,
    image: "https://placehold.co/100x100/d8ffea/5ab18a?text=MR"
  },
  {
    id: 4,
    name: "Emily Chen",
    position: "UX Designer",
    company: "CreativeLabs",
    content: "As a designer, I was skeptical about using AI for my resume, but it actually helped me quantify my achievements in a way recruiters appreciate.",
    rating: 5,
    image: "https://placehold.co/100x100/fff3d8/b1a05a?text=EC"
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Project Manager",
    company: "BuildTech",
    content: "The keyword optimization feature is brilliant. My resume now passes every ATS system and gets into the hands of actual hiring managers.",
    rating: 5,
    image: "https://placehold.co/100x100/e4d8ff/785ab1?text=DW"
  },
  {
    id: 6,
    name: "Jessica Moore",
    position: "HR Specialist",
    company: "TalentHub",
    content: "As someone who reviews resumes daily, I can say this tool creates exactly what recruiters want to see. Now I use it for my own job searches!",
    rating: 4,
    image: "https://placehold.co/100x100/ffeed8/b1785a?text=JM"
  },
  {
    id: 7,
    name: "Ryan Park",
    position: "Sales Director",
    company: "GrowthForce",
    content: "The before and after difference was incredible. My optimized resume clearly showcased my achievements and helped me land my dream job.",
    rating: 5,
    image: "https://placehold.co/100x100/d8f3ff/5a9db1?text=RP"
  },
  {
    id: 8,
    name: "Olivia Martinez",
    position: "Content Strategist",
    company: "MediaFocus",
    content: "I was able to create tailored resumes for different job applications in minutes. This saved me hours of work and improved my results.",
    rating: 5,
    image: "https://placehold.co/100x100/f0ffd8/8ab15a?text=OM"
  },
  {
    id: 9,
    name: "Thomas Lee",
    position: "Data Scientist",
    company: "AnalyticsPro",
    content: "The ATS score feature helped me understand exactly why I wasn't getting interviews. After optimizing, I saw a dramatic improvement in responses.",
    rating: 4,
    image: "https://placehold.co/100x100/d8e9ff/5a6fb1?text=TL"
  },
  {
    id: 10,
    name: "Sophia Garcia",
    position: "Operations Manager",
    company: "LogisticSmart",
    content: "Skeptical at first, but the results speak for themselves. Landed a job with a 25% higher salary than my previous position. Highly recommend!",
    rating: 5,
    image: "https://placehold.co/100x100/ffe5d8/b16a5a?text=SG"
  }
];

const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 336; // Width of a single review card + gap
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-white" id="reviews">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="h2 mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of job seekers who have transformed their job search with our AI resume optimization.
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full shadow-md"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div 
            ref={scrollRef}
            className="overflow-x-auto hide-scrollbar py-4 flex gap-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="min-w-[300px] max-w-[300px] bg-white border rounded-xl p-6 shadow-sm flex flex-col snap-start hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-base">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.position}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-sm mb-3 flex-grow">{review.content}</p>
                
                <p className="text-xs text-muted-foreground">
                  {review.company}
                </p>
              </div>
            ))}
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full shadow-md"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Reviews;
