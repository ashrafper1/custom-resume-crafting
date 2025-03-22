
import React from 'react';
import { Upload, Sparkles, FileCheck, Download } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-8 w-8 text-white" />,
    title: 'Upload Your Resume',
    description: 'Upload your existing resume or create a new one from scratch using our intuitive builder.'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-white" />,
    title: 'Add Job Description',
    description: 'Paste the job description you're applying for so our AI can analyze the key requirements and skills.'
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

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2 mb-4">How ResumeAI Works</h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered platform makes it easy to create tailored resumes in just a few simple steps.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
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
          
          {/* Testimonial/Stats Section */}
          <div className="mt-20 bg-blue-50 rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Why Our Approach Works</h3>
                <p className="text-muted-foreground mb-6">
                  Modern companies use Applicant Tracking Systems (ATS) to filter resumes before a human ever sees them.
                  Our AI analyzes these systems to ensure your resume gets through the initial screening and into the
                  hands of hiring managers.
                </p>
                <div className="text-sm">
                  <blockquote className="italic border-l-4 border-blue-600 pl-4">
                    "ResumeAI helped me tailor my resume to each job application, which significantly improved my
                    response rate. I landed interviews at companies that had previously rejected me."
                  </blockquote>
                  <p className="mt-3 font-medium">— Sarah J., Software Engineer</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="bg-white p-5 rounded-xl shadow-elegant">
                  <p className="text-3xl font-bold text-blue-600">93%</p>
                  <p className="text-sm text-muted-foreground">of users report higher interview rates</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-elegant">
                  <p className="text-3xl font-bold text-blue-600">4.2×</p>
                  <p className="text-sm text-muted-foreground">more likely to pass ATS screening</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-elegant">
                  <p className="text-3xl font-bold text-blue-600">78%</p>
                  <p className="text-sm text-muted-foreground">faster resume creation process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
