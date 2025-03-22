
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, 
  ArrowRight,
  Check
} from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import UploadResume from '@/components/resume/UploadResume';
import TemplateSelection from '@/components/resume/TemplateSelection';
import ATSScore from '@/components/resume/ATSScore';
import PaymentPlans from '@/components/resume/PaymentPlans';
import ResumeBuilder from '@/components/resume/ResumeBuilder';
import ResumePreview from '@/components/resume/ResumePreview';

type Step = 'upload' | 'job-description' | 'template' | 'ats-score' | 'payment' | 'building' | 'preview';

const ResumeGenerator = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('upload');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [optimizedResume, setOptimizedResume] = useState<any>(null);
  const [isPaid, setIsPaid] = useState(false);
  
  // Mock resume text for ATS score
  const resumeText = `
    Experienced software engineer with expertise in React, TypeScript, and Node.js.
    Skilled in developing scalable web applications and implementing responsive designs.
    Strong problem-solving abilities and experience with agile development methodologies.
    6+ years of experience in software development with a focus on frontend technologies.
    Proficient in HTML5, CSS3, JavaScript, and modern frontend frameworks.
  `;

  const handleResumeUploaded = (file: File) => {
    setResumeFile(file);
  };

  const handleJobDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(e.target.value);
  };

  const handleTemplateSelected = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handlePlanSelected = (planId: string) => {
    setSelectedPlan(planId);
    setIsPaid(true);
  };

  const handleResumeBuilt = (resume: any) => {
    setOptimizedResume(resume);
  };

  const goToNextStep = () => {
    switch (currentStep) {
      case 'upload':
        if (!resumeFile) {
          toast.error('Please upload a resume or create a new one.');
          return;
        }
        setCurrentStep('job-description');
        break;
      case 'job-description':
        if (!jobDescription.trim()) {
          toast.error('Please enter a job description.');
          return;
        }
        setCurrentStep('template');
        break;
      case 'template':
        if (!selectedTemplate) {
          toast.error('Please select a template.');
          return;
        }
        setCurrentStep('ats-score');
        break;
      case 'ats-score':
        setCurrentStep('payment');
        break;
      case 'payment':
        // This transition happens in handlePlanSelected
        if (isPaid) {
          setCurrentStep('building');
        }
        break;
      case 'building':
        setCurrentStep('preview');
        break;
      case 'preview':
        // Complete the process and redirect to dashboard
        toast.success('Resume successfully created!');
        navigate('/dashboard');
        break;
    }
  };

  const goToPreviousStep = () => {
    switch (currentStep) {
      case 'job-description':
        setCurrentStep('upload');
        break;
      case 'template':
        setCurrentStep('job-description');
        break;
      case 'ats-score':
        setCurrentStep('template');
        break;
      case 'payment':
        setCurrentStep('ats-score');
        break;
      case 'building':
        setCurrentStep('payment');
        break;
      case 'preview':
        setCurrentStep('building');
        break;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'upload':
        return <UploadResume onResumeUploaded={handleResumeUploaded} />;
      case 'job-description':
        return (
          <div className="w-full max-w-2xl mx-auto">
            <div className="flex flex-col gap-2 mb-6">
              <h3 className="text-lg font-semibold">Add Job Description</h3>
              <p className="text-sm text-muted-foreground">
                Paste the job description to optimize your resume for this specific position.
              </p>
            </div>
            <Textarea
              placeholder="Paste job description here..."
              value={jobDescription}
              onChange={handleJobDescriptionChange}
              className="min-h-[300px]"
            />
          </div>
        );
      case 'template':
        return <TemplateSelection onTemplateSelected={handleTemplateSelected} />;
      case 'ats-score':
        return <ATSScore jobDescription={jobDescription} resumeText={resumeText} />;
      case 'payment':
        return <PaymentPlans onPlanSelected={handlePlanSelected} />;
      case 'building':
        return (
          <ResumeBuilder 
            resumeData={{ text: resumeText }}
            jobDescription={jobDescription}
            onComplete={handleResumeBuilt}
          />
        );
      case 'preview':
        return <ResumePreview resumeData={optimizedResume} templateId={selectedTemplate} />;
      default:
        return null;
    }
  };

  const getStepNumber = () => {
    const steps: Step[] = ['upload', 'job-description', 'template', 'ats-score', 'payment', 'building', 'preview'];
    return steps.indexOf(currentStep) + 1;
  };

  const getTotalSteps = () => {
    return 7; // total number of steps
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Progress header */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">
                {currentStep === 'upload' && 'Upload Your Resume'}
                {currentStep === 'job-description' && 'Job Description'}
                {currentStep === 'template' && 'Choose Template'}
                {currentStep === 'ats-score' && 'ATS Compatibility Score'}
                {currentStep === 'payment' && 'Choose a Plan'}
                {currentStep === 'building' && 'Building Your Resume'}
                {currentStep === 'preview' && 'Resume Preview'}
              </h1>
              <div className="text-sm text-muted-foreground">
                Step {getStepNumber()} of {getTotalSteps()}
              </div>
            </div>
            
            <div className="relative w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${(getStepNumber() / getTotalSteps()) * 100}%` }}
              ></div>
            </div>
            
            {/* Steps */}
            <div className="grid grid-cols-7 gap-1 pt-4">
              {['upload', 'job-description', 'template', 'ats-score', 'payment', 'building', 'preview'].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step === currentStep ? 'bg-primary text-white' :
                    index < getStepNumber() - 1 ? 'bg-primary/20 text-primary' :
                    'bg-gray-100 text-muted-foreground'
                  }`}>
                    {index < getStepNumber() - 1 ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <span className="text-xs">{index + 1}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Step content */}
          <div className="mb-10">
            {renderStepContent()}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between">
            {currentStep !== 'upload' ? (
              <Button 
                variant="outline" 
                onClick={goToPreviousStep}
                className="rounded-full"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            ) : (
              <div></div> // Empty div to maintain layout with justify-between
            )}
            
            {currentStep !== 'payment' && currentStep !== 'building' && (
              <Button 
                onClick={goToNextStep}
                className="rounded-full"
              >
                {currentStep === 'preview' ? 'Finish' : 'Continue'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumeGenerator;
