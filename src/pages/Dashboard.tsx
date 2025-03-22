
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Plus, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ChevronRight,
  FileEdit
} from 'lucide-react';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface Resume {
  id: string;
  name: string;
  createdAt: string;
  status: 'optimized' | 'pending' | 'draft';
  score: number;
}

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Mock user data
  const [userData] = useState({
    name: 'Jennifer Smith',
    email: 'jennifer@example.com',
    plan: 'Premium',
    resumesRemaining: 'Unlimited',
    planExpiry: '2023-12-31',
  });
  
  // Mock resume data
  const [resumes] = useState<Resume[]>([
    {
      id: '1',
      name: 'Software Developer Resume',
      createdAt: '2023-05-12',
      status: 'optimized',
      score: 95,
    },
    {
      id: '2',
      name: 'Product Manager Application',
      createdAt: '2023-06-18',
      status: 'optimized',
      score: 88,
    },
    {
      id: '3',
      name: 'UX Designer Portfolio',
      createdAt: '2023-07-05',
      status: 'draft',
      score: 0,
    },
  ]);

  const getStatusIcon = (status: Resume['status']) => {
    switch (status) {
      case 'optimized': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'pending': return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'draft': return <FileText className="h-5 w-5 text-blue-500" />;
      default: return null;
    }
  };

  const getStatusText = (status: Resume['status']) => {
    switch (status) {
      case 'optimized': return 'Optimized';
      case 'pending': return 'Processing';
      case 'draft': return 'Draft';
      default: return '';
    }
  };

  const handleCreateNewResume = () => {
    navigate('/resume-generator');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {userData.name}! Manage your resumes and optimize them for your job applications.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="col-span-2 bg-white rounded-xl shadow-elegant p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">My Resumes</h2>
                <AnimatedButton 
                  onClick={handleCreateNewResume}
                  className="rounded-full"
                  hoverScale
                >
                  <Plus className="mr-2 h-4 w-4" />
                  New Resume
                </AnimatedButton>
              </div>
              
              {resumes.length > 0 ? (
                <div className="space-y-3">
                  {resumes.map((resume) => (
                    <div 
                      key={resume.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer"
                      onClick={() => navigate(`/resume/${resume.id}`)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{resume.name}</h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span>Created: {resume.createdAt}</span>
                            <span className="flex items-center gap-1">
                              {getStatusIcon(resume.status)}
                              {getStatusText(resume.status)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {resume.status === 'optimized' && (
                          <div className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm">
                            {resume.score}% Match
                          </div>
                        )}
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 border border-dashed rounded-lg">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No resumes yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Create your first resume to get started
                  </p>
                  <Button 
                    onClick={handleCreateNewResume}
                    className="rounded-full"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Resume
                  </Button>
                </div>
              )}
            </div>
            
            <div className="col-span-1">
              <div className="bg-white rounded-xl shadow-elegant p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">Your Account</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Plan</p>
                    <p className="font-medium">{userData.plan}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Resumes Remaining</p>
                    <p className="font-medium">{userData.resumesRemaining}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Plan Expires</p>
                    <p className="font-medium">{userData.planExpiry}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full rounded-full">
                    Manage Subscription
                  </Button>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <AlertCircle className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">Quick Tips</h3>
                    <ul className="text-sm text-blue-800 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 shrink-0">•</span>
                        Tailor your resume for each job application
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 shrink-0">•</span>
                        Include relevant keywords from the job description
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 shrink-0">•</span>
                        Update your skills section regularly
                      </li>
                    </ul>
                    <Link to="/tips" className="inline-block mt-4 text-sm text-blue-700 font-medium hover:underline">
                      View all resume tips
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/50 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Need help with your resume?</h2>
                <p className="text-muted-foreground max-w-xl">
                  Our expert team can review your resume and provide personalized feedback to help you land your dream job.
                </p>
              </div>
              <Button className="rounded-full whitespace-nowrap" size="lg">
                <FileEdit className="mr-2 h-4 w-4" />
                Get Expert Review
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
