
import React, { useState, useRef, useEffect } from 'react';
import { Upload, Sparkles, FileCheck, Download, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: <Upload className="h-8 w-8 text-white" />,
    title: 'Upload Your Resume',
    description: 'Upload your existing resume or create a new one from scratch using our intuitive builder.'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-white" />,
    title: 'Add Job Description',
    description: 'Paste the job description you\'re applying for so our AI can analyze the key requirements and skills.'
  },
  {
    icon: <FileCheck className="h-8 w-8 text-white" />,
    title: 'AI Optimization',
    description: 'Our AI tailors your resume to match the job requirements, enhancing relevant skills and experiences.'
  },
  {
    icon: <Download className="h-8 w-8 text-white" />,
    title: 'Download & Apply',
    description: 'Preview your optimized resume, make any final edits, and download it in your preferred format.'
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    text: "ResumeAI helped me land interviews at companies that had previously rejected me. The keyword optimization was a game-changer!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    role: "Marketing Specialist",
    text: "After using ResumeAI, I got responses from 8 out of 10 applications, compared to my previous 1 in 15 success rate.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    text: "The template selection and ATS optimization helped my resume stand out. Landed my dream job within 3 weeks!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    name: "David Wilson",
    role: "Project Manager",
    text: "Worth every penny! The tailored keywords matched exactly what employers were looking for in my industry.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Priya Patel",
    role: "Data Analyst",
    text: "From 0 callbacks to 5 interviews in one week after using ResumeAI. The difference was remarkable.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/37.jpg"
  },
  {
    name: "James Thompson",
    role: "Sales Manager",
    text: "I was skeptical at first, but the results speak for themselves. Three interviews in my first week of using optimized resumes.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sophia Garcia",
    role: "HR Specialist",
    text: "As someone who reviews resumes daily, I can confirm this service truly understands what recruiters are looking for.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    name: "Alex Kim",
    role: "Frontend Developer",
    text: "The custom tailoring for each job application made all the difference. Finally got calls from my dream companies!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    name: "Olivia Brown",
    role: "Content Strategist",
    text: "My resume went from being ignored to getting multiple callbacks. The AI knew exactly which keywords to highlight.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    name: "Daniel Lee",
    role: "Financial Analyst",
    text: "In a competitive field like finance, having an optimized resume is essential. This service exceeded my expectations.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/36.jpg"
  }
];

const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, i) => (
    <Star 
      key={i} 
      className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
    />
  ));
};

const HowItWorks = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setActiveSlide((prev) => 
      prev >= testimonials.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) => 
      prev === 0 ? testimonials.length - 3 : prev - 1
    );
  };

  useEffect(() => {
    if (testimonialsRef.current) {
      testimonialsRef.current.style.transform = `translateX(-${activeSlide * (100 / 3)}%)`;
    }
  }, [activeSlide]);

  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2 mb-4">How ResumeAI Works</h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered platform makes it easy to create tailored resumes for each job application.
          </p>
        </div>

        {/* Resume Transformation - SMALLER SIZE */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
            {/* Bad Resume */}
            <div className="transform transition-all hover:-translate-y-1 duration-300 max-w-xs mx-auto md:ml-auto">
              <div className="relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  Standard Resume
                </div>
                <div className="border border-red-200 rounded-xl p-4 bg-white shadow-elegant">
                  <div className="space-y-1 mb-3">
                    <div className="h-6 bg-gray-100 rounded-md w-1/2"></div>
                    <div className="h-3 bg-gray-100 rounded-md w-3/4"></div>
                  </div>
                  <div className="space-y-1 mb-4">
                    <div className="h-2 bg-red-100 rounded-md w-full"></div>
                    <div className="h-2 bg-red-100 rounded-md w-full"></div>
                    <div className="h-2 bg-red-100 rounded-md w-3/4"></div>
                  </div>
                  <div className="space-y-1 mb-3">
                    <div className="h-4 bg-gray-100 rounded-md w-1/3"></div>
                    <div className="space-y-1">
                      <div className="h-2 bg-red-100 rounded-md w-full"></div>
                      <div className="h-2 bg-red-100 rounded-md w-5/6"></div>
                    </div>
                  </div>
                  
                  {/* Problem indicators */}
                  <div className="absolute -right-2 top-1/4 bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs font-medium shadow-sm animate-pulse">
                    Missing keywords
                  </div>
                  <div className="absolute -right-2 bottom-1/4 bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs font-medium shadow-sm animate-pulse delay-300">
                    ATS score: 35%
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow and AI process in the middle for desktop */}
            <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-blue-600 rounded-full p-3 shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                AI Optimization
              </div>
              <svg className="absolute top-1/2 -left-20 transform -translate-y-1/2" width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,15 Q40,-10 80,15" stroke="#2563EB" strokeWidth="2" fill="none" strokeDasharray="4,4" />
                <path d="M73,10 L80,15 L73,20" stroke="#2563EB" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Mobile arrow */}
            <div className="flex md:hidden justify-center my-2">
              <div className="bg-blue-600 rounded-full p-2 shadow-md">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Optimized Resume */}
            <div className="transform transition-all hover:-translate-y-1 duration-300 max-w-xs mx-auto md:mr-auto">
              <div className="relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  Optimized Resume
                </div>
                <div className="border border-green-200 rounded-xl p-4 bg-white shadow-card">
                  <div className="space-y-1 mb-3">
                    <div className="h-6 bg-gray-100 rounded-md w-1/2"></div>
                    <div className="h-3 bg-gray-100 rounded-md w-3/4"></div>
                  </div>
                  <div className="space-y-1 mb-4">
                    <div className="h-2 bg-green-100 rounded-md w-full"></div>
                    <div className="h-2 bg-green-100 rounded-md w-full"></div>
                    <div className="h-2 bg-green-100 rounded-md w-3/4"></div>
                  </div>
                  <div className="space-y-1 mb-3">
                    <div className="h-4 bg-gray-100 rounded-md w-1/3"></div>
                    <div className="space-y-1">
                      <div className="h-2 bg-green-100 rounded-md w-full"></div>
                      <div className="h-2 bg-green-100 rounded-md w-5/6"></div>
                    </div>
                  </div>
                  
                  {/* Success indicators */}
                  <div className="absolute -right-2 top-1/4 bg-green-100 text-green-600 px-2 py-1 rounded-lg text-xs font-medium shadow-sm">
                    Keywords matched
                  </div>
                  <div className="absolute -right-2 bottom-1/4 bg-green-100 text-green-600 px-2 py-1 rounded-lg text-xs font-medium shadow-sm">
                    ATS score: 95%
                  </div>
                  <div className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/4 bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold shadow-xl">
                    100+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-0 w-full border-t-2 border-dashed border-gray-200 z-0 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full shadow-elegant">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Testimonial Carousel (3 at once) */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">What Our Users Say</h3>
          
          <div className="relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
              <Button 
                onClick={prevSlide} 
                variant="outline" 
                size="icon" 
                className="rounded-full h-10 w-10 bg-white shadow-md hover:bg-gray-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="overflow-hidden mx-12">
              <div 
                ref={testimonialsRef}
                className="flex transition-transform duration-500 ease-out"
                style={{ width: `${(testimonials.length / 3) * 100}%` }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div 
                    key={idx} 
                    className="w-1/3 px-3"
                  >
                    <Card className="h-full border-none shadow-elegant hover:shadow-card transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="flex">{renderStars(testimonial.rating)}</div>
                        </div>
                        <p className="text-base italic mb-6 h-24 overflow-hidden line-clamp-4">"{testimonial.text}"</p>
                        <div className="flex items-center mt-auto">
                          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                            <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                          </div>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
              <Button 
                onClick={nextSlide} 
                variant="outline" 
                size="icon" 
                className="rounded-full h-10 w-10 bg-white shadow-md hover:bg-gray-100"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-1">
            {Array(testimonials.length - 2).fill(0).map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === idx ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial group ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Get Started Button */}
        <div className="text-center mt-16">
          <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-card">
            Get Started for Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
