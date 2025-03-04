import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  
  const plans = [
    {
      name: 'Free',
      description: 'For individuals and small websites',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Basic chatbot customization',
        'Up to 100 conversations/month',
        '5 custom responses',
        'Standard support',
        'Basic analytics'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    },
    {
      name: 'Pro',
      description: 'For growing businesses',
      monthlyPrice: 29,
      annualPrice: 19,
      popular: true,
      features: [
        'Advanced customization',
        'Unlimited conversations',
        '50 custom responses',
        'Priority support',
        'Advanced analytics',
        'Remove AI Chatbot branding',
        'Multiple chatbots'
      ],
      buttonText: 'Start Free Trial',
      buttonClass: 'bg-indigo-600 text-white hover:bg-indigo-700'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Everything in Pro',
        'Custom AI training',
        'Dedicated account manager',
        'SLA guarantees',
        'SSO authentication',
        'Custom integrations',
        'On-premise deployment option'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'bg-gray-800 text-white hover:bg-gray-900'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the plan that's right for your business. All plans include a 14-day free trial.
        </p>
        
        <div className="mt-8 inline-flex items-center bg-gray-100 p-1 rounded-lg">
          <button
            className={`px-4 py-2 rounded-md ${isAnnual ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setIsAnnual(true)}
          >
            Annual <span className="text-green-600 text-sm font-medium ml-1">Save 35%</span>
          </button>
          <button
            className={`px-4 py-2 rounded-md ${!isAnnual ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-indigo-600 transform scale-105 md:scale-110' : ''}`}
          >
            {plan.popular && (
              <div className="bg-indigo-600 text-white text-center py-2 text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-gray-600 mt-1">{plan.description}</p>
              
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-600 ml-2">/ month</span>
                {isAnnual && plan.annualPrice > 0 && (
                  <p className="text-sm text-gray-500 mt-1">Billed annually (${plan.annualPrice * 12}/year)</p>
                )}
              </div>
              
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`mt-8 w-full py-3 rounded-md font-medium ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 bg-gray-50 rounded-xl p-8 md:p-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
            <p className="text-gray-600">Yes, you can change your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive credit toward your next billing cycle.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">What happens after my free trial?</h3>
            <p className="text-gray-600">After your 14-day free trial, you'll be automatically switched to the plan you selected. We'll send you a reminder email before your trial ends.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
            <p className="text-gray-600">We offer a 30-day money-back guarantee. If you're not satisfied with our service, contact our support team within 30 days of your purchase for a full refund.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;