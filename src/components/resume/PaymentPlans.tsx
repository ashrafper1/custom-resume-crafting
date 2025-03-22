
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

interface PaymentPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  resumes: number;
  duration: string;
  cta: string;
}

interface PaymentPlansProps {
  onPlanSelected: (planId: string) => void;
}

const plans: PaymentPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 5,
    description: 'Perfect for one-time job applications',
    features: [
      'AI Resume Optimization',
      'Keyword Enhancement',
      'All Premium Templates',
      'ATS Compatibility Check',
      'PDF & Word Downloads',
    ],
    resumes: 1,
    duration: 'one-time',
    cta: 'Buy Now ($5)',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 20,
    description: 'Ideal for active job seekers',
    features: [
      'Everything in Basic',
      'Multiple Resume Versions',
      'Advanced Keyword Integration',
      'Customizable Sections',
      'Priority Support',
    ],
    resumes: 5,
    duration: 'one-time',
    cta: 'Buy Now ($20)',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 35,
    description: 'Best for intensive job hunting',
    features: [
      'Everything in Standard',
      'Unlimited Resume Optimizations',
      'Advanced Content Suggestions',
      'Priority Support',
      'Early Access to New Features',
    ],
    resumes: -1, // Unlimited
    duration: 'per month',
    cta: 'Buy Now ($35/month)',
  },
];

const PaymentPlans = ({ onPlanSelected }: PaymentPlansProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    setIsPaymentModalOpen(true);
  };

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaymentModalOpen(false);
      
      // Notify parent component of plan selection
      if (selectedPlan) {
        onPlanSelected(selectedPlan);
        toast.success(`Successfully purchased ${plans.find(p => p.id === selectedPlan)?.name} plan!`);
      }
    }, 2000);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-2 mb-6">
          <h3 className="text-lg font-semibold">Choose a Plan</h3>
          <p className="text-sm text-muted-foreground">
            Select a plan that fits your needs. All plans include AI-powered resume optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="border rounded-xl p-6 hover:shadow-card hover:border-primary/30 transition-all duration-200 flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground text-sm"> /{plan.duration}</span>
              </div>
              
              <div className="mb-6 flex-grow">
                <p className="text-sm font-medium mb-3">
                  {plan.resumes === -1 ? 'Unlimited Resumes' : `${plan.resumes} Resume${plan.resumes > 1 ? 's' : ''}`}
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                className="w-full rounded-xl"
                onClick={() => handleSelectPlan(plan.id)}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Complete your purchase</DialogTitle>
          </DialogHeader>
          
          {selectedPlan && (
            <div className="space-y-4 py-4">
              <div className="bg-secondary p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{plans.find(p => p.id === selectedPlan)?.name} Plan</h4>
                  <span className="font-bold">${plans.find(p => p.id === selectedPlan)?.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {plans.find(p => p.id === selectedPlan)?.resumes === -1 
                    ? 'Unlimited Resumes' 
                    : `${plans.find(p => p.id === selectedPlan)?.resumes} Resume${plans.find(p => p.id === selectedPlan)?.resumes! > 1 ? 's' : ''}`}
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm">Payment method</p>
                <div className="border rounded-lg p-3 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  <span className="font-medium">PayPal</span>
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground">
                By proceeding, you agree to our <a href="#" className="text-primary underline">Terms of Service</a> and <a href="#" className="text-primary underline">Privacy Policy</a>.
              </div>
            </div>
          )}
          
          <DialogFooter className="sm:justify-between flex-col sm:flex-row gap-3">
            <Button variant="outline" onClick={() => setIsPaymentModalOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="min-w-32"
            >
              {isProcessing ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <>
                  Pay with PayPal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PaymentPlans;
