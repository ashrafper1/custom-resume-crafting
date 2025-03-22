import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, FileEdit, Sparkles, Download, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface ResumeBuilderProps {
  resumeData: any;
  jobDescription: string;
  onComplete: (optimizedResume: any) => void;
}

const ResumeBuilder = ({ resumeData, jobDescription, onComplete }: ResumeBuilderProps) => {
  const [currentStep, setCurrentStep] = useState<'skills' | 'building' | 'review'>('skills');
  const [additionalSkills, setAdditionalSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [suggestedSkills, setSuggestedSkills] = useState([
    'Project Management', 'React.js', 'Data Analysis', 
    'Communication', 'Problem Solving', 'Leadership',
    'JavaScript', 'Python', 'Marketing'
  ]);

  // Mock function to extract skills from job description
  const extractSkillsFromJobDescription = (jobDesc: string) => {
    // In a real app, this would use AI to extract skills
    // For now, we'll return some sample skills
    return [
      'React.js', 'TypeScript', 'UI/UX Design',
      'Agile Methodology', 'Team Leadership'
    ];
  };

  const handleAddSkill = (skill: string) => {
    if (skill && !additionalSkills.includes(skill)) {
      setAdditionalSkills([...additionalSkills, skill]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setAdditionalSkills(additionalSkills.filter(skill => skill !== skillToRemove));
  };

  const handleAddSuggestedSkill = (skill: string) => {
    if (!additionalSkills.includes(skill)) {
      setAdditionalSkills([...additionalSkills, skill]);
      // Remove from suggestions
      setSuggestedSkills(suggestedSkills.filter(s => s !== skill));
    }
  };

  const handleStartBuilding = () => {
    setCurrentStep('building');
    setIsGenerating(true);
    
    // Simulate the AI generation process
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setGenerationProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsGenerating(false);
          setCurrentStep('review');
          toast.success('Your resume has been successfully optimized!');
        }, 500);
      }
    }, 300);
  };

  const handleCompleteProcess = () => {
    // In a real app, this would contain the actual optimized resume data
    const optimizedResume = {
      ...resumeData,
      skills: [...(resumeData.skills || []), ...additionalSkills],
      // Other optimized fields would be here
    };
    
    onComplete(optimizedResume);
  };

  const requiredSkills = extractSkillsFromJobDescription(jobDescription);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs defaultValue="optimize" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="optimize">AI Optimization</TabsTrigger>
          <TabsTrigger value="manual">Manual Editor</TabsTrigger>
        </TabsList>
        
        <TabsContent value="optimize" className="space-y-8">
          {currentStep === 'skills' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Enhance Your Resume with Key Skills</h3>
                <p className="text-muted-foreground mb-6">
                  We've identified these skills from the job description. Do you have any of these skills that aren't already on your resume?
                </p>
                
                <div className="bg-secondary/50 p-5 rounded-xl mb-6">
                  <h4 className="font-medium mb-3">Skills Required for This Position:</h4>
                  <div className="flex flex-wrap gap-2">
                    {requiredSkills.map((skill, index) => (
                      <div 
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <Label htmlFor="skills">Add Your Additional Skills</Label>
                  <div className="flex gap-2">
                    <Input
                      id="skills"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Enter a skill"
                      className="rounded-l-full"
                    />
                    <Button 
                      onClick={() => handleAddSkill(newSkill)}
                      disabled={!newSkill}
                      className="rounded-r-full"
                    >
                      Add
                    </Button>
                  </div>
                </div>
                
                {additionalSkills.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Added Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {additionalSkills.map((skill, index) => (
                        <div 
                          key={index}
                          className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                        >
                          {skill}
                          <button 
                            onClick={() => handleRemoveSkill(skill)}
                            className="ml-1 text-white/80 hover:text-white"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div>
                  <h4 className="font-medium mb-3">Suggested Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {suggestedSkills.map((skill, index) => (
                      <div 
                        key={index}
                        className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => handleAddSuggestedSkill(skill)}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-between">
                <Button variant="outline" className="rounded-full">
                  Skip this step
                </Button>
                <Button 
                  onClick={handleStartBuilding}
                  className="rounded-full"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          
          {currentStep === 'building' && (
            <div className="text-center py-16 space-y-8">
              <div className="bg-primary/5 p-10 rounded-2xl max-w-lg mx-auto">
                <div className="flex justify-center mb-8">
                  {isGenerating ? (
                    <div className="relative w-28 h-28">
                      <Loader2 className="animate-spin w-28 h-28 text-primary/25" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                  ) : (
                    <CheckCircle className="w-28 h-28 text-green-500" />
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">
                  {isGenerating ? 'Optimizing Your Resume' : 'Optimization Complete!'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {isGenerating 
                    ? 'Our AI is analyzing the job description and tailoring your resume...' 
                    : 'Your resume has been optimized with relevant keywords and skills.'}
                </p>
                
                {isGenerating && (
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-300 ease-out"
                        style={{ width: `${generationProgress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {generationProgress}% complete
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {currentStep === 'review' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Review Your Optimized Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Your resume has been tailored to match the job requirements. Review the changes and make any final adjustments.
                </p>
                
                <div className="border rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">Resume Preview</h4>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <FileEdit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </div>
                  
                  <div className="aspect-[8.5/11] bg-gray-50 rounded-lg border overflow-hidden">
                    <img 
                      src="https://placehold.co/800x1000/f5f5f5/a3a3a3?text=Resume+Preview" 
                      alt="Resume Preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium mb-2">Keyword Matches</h5>
                      <div className="bg-green-50 text-green-800 p-3 rounded-lg flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        <span className="font-medium">92% Match Rate</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-2">ATS Compatibility</h5>
                      <div className="bg-green-50 text-green-800 p-3 rounded-lg flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        <span className="font-medium">98% Compatibility</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep('skills')}
                  className="rounded-full"
                >
                  Back to Edit
                </Button>
                <Button 
                  onClick={handleCompleteProcess}
                  className="rounded-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="manual" className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Manual Resume Editor</h3>
            <p className="text-muted-foreground mb-6">
              Edit your resume directly using our manual editor. This option gives you full control over your content.
            </p>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="contact">Contact Information</Label>
                  <Textarea
                    id="contact"
                    placeholder="Enter your contact information..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea
                    id="summary"
                    placeholder="Write a compelling professional summary..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="experience">Work Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder="List your work experience..."
                    className="min-h-[200px]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="education">Education</Label>
                  <Textarea
                    id="education"
                    placeholder="Enter your educational background..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="skills">Skills</Label>
                  <Textarea
                    id="skills"
                    placeholder="List your skills..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="rounded-full">
                  <FileEdit className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResumeBuilder;
