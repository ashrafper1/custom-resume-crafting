
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ATSScore from '@/components/resume/ATSScore';
import UploadResume from '@/components/resume/UploadResume';
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, Lock, Mail } from 'lucide-react';
import { toast } from 'sonner';
import PaymentPlans from '@/components/resume/PaymentPlans';

const ATSScorePage = () => {
  const navigate = useNavigate();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [email, setEmail] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showUpgradeOptions, setShowUpgradeOptions] = useState(false);

  const handleResumeUploaded = (file: File) => {
    setResumeFile(file);
    
    // Simulate extracting text from resume
    setTimeout(() => {
      // This would be replaced with actual file parsing
      setResumeText(`
        Experienced software engineer with expertise in React, TypeScript, and Node.js.
        Skilled in developing scalable web applications and implementing responsive designs.
        Strong problem-solving abilities and experience with agile development methodologies.
        6+ years of experience in software development with a focus on frontend technologies.
        Proficient in HTML5, CSS3, JavaScript, and modern frontend frameworks.
      `);
    }, 500);
  };

  const handleJobDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAnalyzeResume = () => {
    // Validate inputs
    if (!resumeFile && !resumeText) {
      toast.error('Please upload a resume or enter resume text');
      return;
    }
    
    if (!jobDescription) {
      toast.error('Please enter a job description');
      return;
    }
    
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    // Simulate saving email to database for marketing
    console.log('Email for marketing:', email);
    
    // This would call an API to save the email in a real app
    // For now, we'll just show a success message
    toast.success('Analyzing your resume...');
    
    // Show analysis results after a short delay (simulating API call)
    setTimeout(() => {
      setShowResults(true);
      
      // Scroll to results
      window.scrollTo({
        top: document.getElementById('results')?.offsetTop || 0,
        behavior: 'smooth'
      });
    }, 1500);
  };

  const handlePlanSelected = (planId: string) => {
    toast.success(`Plan ${planId} selected!`);
    navigate('/resume-generator');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="h2 mb-4">Check Your Resume's ATS Score</h1>
            <p className="text-lg text-muted-foreground">
              Upload your resume and a job description to see how well your resume matches the job requirements.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border p-6 mb-10">
            <Tabs defaultValue="upload" className="mb-6">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="upload">Upload Resume</TabsTrigger>
                <TabsTrigger value="paste">Paste Resume</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload">
                <div className="mb-6">
                  <UploadResume onResumeUploaded={handleResumeUploaded} />
                </div>
              </TabsContent>
              
              <TabsContent value="paste">
                <div className="mb-6">
                  <Label htmlFor="resume-text" className="mb-2 block">Paste Your Resume Text</Label>
                  <Textarea 
                    id="resume-text"
                    placeholder="Paste the full text of your resume here..."
                    className="min-h-[200px]"
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                  />
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mb-6">
              <Label htmlFor="job-description" className="mb-2 block">Job Description</Label>
              <Textarea 
                id="job-description"
                placeholder="Paste the job description here..."
                className="min-h-[150px]"
                value={jobDescription}
                onChange={handleJobDescriptionChange}
              />
            </div>
            
            <div className="mb-8">
              <Label htmlFor="email" className="mb-2 block">Your Email</Label>
              <div className="flex">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    id="email"
                    type="email" 
                    className="pl-10" 
                    placeholder="you@example.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <Button 
                  className="ml-3 rounded-full px-6"
                  onClick={handleAnalyzeResume}
                >
                  Analyze Now
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                We'll email you your results and occasional tips to improve your resume.
              </p>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-4 text-sm flex items-start">
              <Lock className="h-5 w-5 text-muted-foreground mr-2 mt-0.5 shrink-0" />
              <p className="text-muted-foreground">
                Your resume and job description data are processed securely. We never share your personal information with third parties.
              </p>
            </div>
          </div>
          
          {showResults && (
            <div id="results" className="max-w-3xl mx-auto mb-10 scroll-mt-10">
              <ATSScore 
                jobDescription={jobDescription} 
                resumeText={resumeText || 'Experienced professional with a track record of success...'} 
              />
              
              <div className="mt-8 text-center">
                <p className="text-lg font-medium mb-4">Want to improve your ATS score?</p>
                <Button 
                  size="lg" 
                  className="rounded-full px-8"
                  onClick={() => setShowUpgradeOptions(true)}
                >
                  Upgrade to Optimize Your Resume
                  <ArrowUp className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          
          {showUpgradeOptions && (
            <div className="max-w-5xl mx-auto mt-16 pt-8 border-t">
              <h2 className="h3 text-center mb-10">Choose a Plan to Optimize Your Resume</h2>
              <PaymentPlans onPlanSelected={handlePlanSelected} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ATSScorePage;
