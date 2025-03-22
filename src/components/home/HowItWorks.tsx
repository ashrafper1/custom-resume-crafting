
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2 mb-4">How Our AI Transforms Your Resume</h2>
          <p className="text-lg text-muted-foreground">
            Our AI technology analyzes job descriptions and optimizes your resume to match what employers are looking for.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center max-w-5xl mx-auto">
          {/* Standard Resume */}
          <div className="w-full max-w-md">
            <div className="rounded-lg border shadow-sm overflow-hidden bg-white">
              <div className="bg-gray-100 px-4 py-3 border-b">
                <h3 className="font-medium">Standard Resume</h3>
              </div>
              <div className="p-5 h-[400px] overflow-hidden">
                <div className="mb-4 border-b pb-4">
                  <h4 className="font-medium text-lg mb-1">John Smith</h4>
                  <p className="text-sm text-muted-foreground">Marketing Specialist</p>
                  <p className="text-sm">john.smith@example.com • (555) 123-4567</p>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-medium text-sm mb-2">EXPERIENCE</h5>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Marketing Coordinator, TechCorp</span>
                      <span className="text-muted-foreground">2018-2022</span>
                    </div>
                    <ul className="text-xs mt-1 space-y-1">
                      <li>• Managed social media accounts and increased followers</li>
                      <li>• Helped with email marketing campaigns</li>
                      <li>• Worked on various marketing projects as needed</li>
                      <li>• Assisted with content creation for the website</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-medium text-sm mb-2">SKILLS</h5>
                  <p className="text-xs">
                    Marketing, Social Media, Email Campaigns, Content Creation, Team Player, Communication
                  </p>
                </div>
                
                <div className="text-xs text-muted-foreground font-medium">
                  ATS Compatibility Score: 52%
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="bg-primary/10 rounded-full p-3">
              <ArrowRight className="h-8 w-8 text-primary" />
            </div>
          </div>

          {/* Optimized Resume */}
          <div className="w-full max-w-md">
            <div className="rounded-lg border shadow-sm overflow-hidden bg-white relative">
              <div className="absolute top-6 right-6 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                ATS Score: 94%
              </div>
              <div className="bg-primary/5 px-4 py-3 border-b">
                <h3 className="font-medium">AI-Optimized Resume</h3>
              </div>
              <div className="p-5 h-[400px] overflow-hidden">
                <div className="mb-4 border-b pb-4">
                  <h4 className="font-medium text-lg mb-1">John Smith</h4>
                  <p className="text-sm text-primary font-medium">Digital Marketing Specialist</p>
                  <p className="text-sm">john.smith@example.com • (555) 123-4567</p>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-medium text-sm mb-2">EXPERIENCE</h5>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Digital Marketing Coordinator, TechCorp</span>
                      <span className="text-muted-foreground">2018-2022</span>
                    </div>
                    <ul className="text-xs mt-1 space-y-1">
                      <li>• <span className="text-primary/90 font-medium">Increased social media engagement by 45%</span> through strategic content planning and community management</li>
                      <li>• <span className="text-primary/90 font-medium">Generated $125K in revenue</span> through targeted email marketing campaigns with 28% conversion rate</li>
                      <li>• <span className="text-primary/90 font-medium">Led cross-functional teams</span> on 5 marketing initiatives that increased brand awareness by 32%</li>
                      <li>• <span className="text-primary/90 font-medium">Created SEO-optimized content</span> that increased organic traffic by 67% year-over-year</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-medium text-sm mb-2">SKILLS</h5>
                  <p className="text-xs">
                    <span className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded mr-1">Digital Marketing</span>
                    <span className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded mr-1">SEO/SEM</span>
                    <span className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded mr-1">Social Media Strategy</span>
                    <span className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded mr-1">Email Marketing</span>
                    <span className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded mr-1">Analytics</span>
                    <span className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded mr-1">Content Strategy</span>
                  </p>
                </div>
                
                <div className="space-y-1 mt-4">
                  <div className="flex items-start gap-1.5">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-xs">Keyword optimized for ATS systems</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-xs">Quantified achievements with metrics</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-xs">Targeted for specific job description</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-medium mb-2">Upload Your Resume</h3>
              <p className="text-sm text-muted-foreground">
                Upload your existing resume or create a new one from scratch.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="font-medium mb-2">Add Job Description</h3>
              <p className="text-sm text-muted-foreground">
                Paste the job posting you're applying for to optimize matching.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="font-medium mb-2">Get Optimized Resume</h3>
              <p className="text-sm text-muted-foreground">
                Our AI tailors your resume for maximum ATS compatibility and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
