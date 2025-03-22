
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Free',
    description: 'ATS compatibility checker',
    price: '$0',
    duration: 'forever',
    features: [
      'ATS Compatibility Score',
      'Keyword Analysis',
      'Basic Resume Review',
      'Limited Template Access',
    ],
    buttonText: 'Start Free',
    buttonVariant: 'outline',
    highlightText: '',
    highlight: false,
  },
  {
    name: 'Basic',
    description: 'Single resume optimization',
    price: '$5',
    duration: 'one-time',
    features: [
      'Everything in Free',
      '1 AI-Optimized Resume',
      'All Premium Templates',
      'Direct Download (PDF & Word)',
      'Keyword Optimization',
      '30-Day Access',
    ],
    buttonText: 'Choose Basic',
    buttonVariant: 'default',
    highlight: true,
    highlightText: 'Popular',
  },
  {
    name: 'Standard',
    description: 'Multiple resume versions',
    price: '$20',
    duration: 'one-time',
    features: [
      'Everything in Basic',
      '5 AI-Optimized Resumes',
      'Advanced Keyword Integration',
      'Customizable Sections',
      '60-Day Access',
      'Email Support',
    ],
    buttonText: 'Choose Standard',
    buttonVariant: 'default',
    highlight: false,
  },
  {
    name: 'Premium',
    description: 'Unlimited monthly access',
    price: '$35',
    duration: 'per month',
    features: [
      'Everything in Standard',
      'Unlimited AI-Optimized Resumes',
      'Advanced Content Suggestions',
      'Priority Support',
      'Unlimited Revisions',
      'Early Access to New Features',
    ],
    buttonText: 'Choose Premium',
    buttonVariant: 'default',
    highlight: false,
  },
];

const Pricing = () => {
  const [focusedPlan, setFocusedPlan] = useState<number | null>(null);
  
  // Find the plan with the most features to normalize height
  const maxFeatures = Math.max(...pricingPlans.map(plan => plan.features.length));

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs, from a free ATS checker to unlimited resume optimizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-7 flex flex-col transition-all duration-300 h-full ${
                focusedPlan === index || plan.highlight
                  ? 'shadow-card ring-2 ring-primary/20 transform -translate-y-1'
                  : 'shadow-elegant hover:shadow-card hover:transform hover:-translate-y-1'
              }`}
              onMouseEnter={() => setFocusedPlan(index)}
              onMouseLeave={() => setFocusedPlan(null)}
            >
              {plan.highlight && (
                <div className="absolute -top-3 right-5 bg-primary px-3 py-1 rounded-full text-xs font-medium text-white">
                  {plan.highlightText}
                </div>
              )}
              <div className="mb-5">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1 text-sm">/{plan.duration}</span>
              </div>
              
              {/* Features list with fixed height to ensure buttons align */}
              <div className="space-y-3 mb-7 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start list-none">
                    <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
                
                {/* Add empty space for plans with fewer features */}
                {Array(maxFeatures - plan.features.length).fill(0).map((_, i) => (
                  <div key={`empty-${i}`} className="h-[26px]"></div> // Approx height of a feature item
                ))}
              </div>
              
              {/* Button is now at the same level for all plans */}
              <Link to="/register" className="block mt-auto">
                <Button
                  variant={plan.buttonVariant as "outline" | "default"}
                  className="w-full rounded-full"
                >
                  {plan.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include secure payment processing via PayPal. No hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
