
import React from 'react';
import { Shield, Zap, FileText, PieChart, Repeat, Download } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    title: 'AI Resume Optimization',
    description: 'Our AI analyzes job descriptions and optimizes your resume to highlight the most relevant skills and experiences.'
  },
  {
    icon: <PieChart className="h-6 w-6 text-blue-600" />,
    title: 'ATS Compatibility Score',
    description: 'Test how well your resume performs against Applicant Tracking Systems used by employers to filter candidates.'
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-600" />,
    title: 'Professional Templates',
    description: 'Choose from a variety of professionally designed templates that are both visually appealing and ATS-friendly.'
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: 'Keyword Optimization',
    description: 'Automatically identify and incorporate the most important keywords from the job description.'
  },
  {
    icon: <Repeat className="h-6 w-6 text-blue-600" />,
    title: 'Unlimited Customization',
    description: 'Make unlimited edits to your resume to ensure it perfectly reflects your experience and the job requirements.'
  },
  {
    icon: <Download className="h-6 w-6 text-blue-600" />,
    title: 'Multiple Export Options',
    description: 'Download your optimized resume in PDF or Word format, ready to send to employers.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary/50" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2 mb-4">Powerful Features to Land Your Dream Job</h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered tools help you create tailored resumes that get past the ATS and impress hiring managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-elegant card-hover"
            >
              <div className="w-12 h-12 bg-blue-100/60 rounded-xl flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
