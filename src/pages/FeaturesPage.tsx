import React from 'react';
import { Bot, MessageSquare, Code, Zap, Shield, Palette, BarChart, Globe, Cpu } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-indigo-600" />,
      title: 'Natural Language Processing',
      description: 'Our chatbots understand natural language and can respond to a wide variety of customer queries with human-like responses.'
    },
    {
      icon: <Code className="h-10 w-10 text-indigo-600" />,
      title: 'Easy Integration',
      description: 'Add our chatbot to your website with a simple embed code. No coding knowledge required.'
    },
    {
      icon: <Zap className="h-10 w-10 text-indigo-600" />,
      title: 'Instant Responses',
      description: 'Provide immediate answers to customer questions 24/7, improving satisfaction and reducing support costs.'
    },
    {
      icon: <Shield className="h-10 w-10 text-indigo-600" />,
      title: 'Secure & Private',
      description: 'All conversations are encrypted and we never share your data with third parties.'
    },
    {
      icon: <Palette className="h-10 w-10 text-indigo-600" />,
      title: 'Customizable Design',
      description: 'Match your brand with custom colors, logos, and messaging to create a seamless experience.'
    },
    {
      icon: <BarChart className="h-10 w-10 text-indigo-600" />,
      title: 'Analytics Dashboard',
      description: 'Track chatbot performance, popular questions, and customer satisfaction to continuously improve.'
    },
    {
      icon: <Globe className="h-10 w-10 text-indigo-600" />,
      title: 'Multilingual Support',
      description: 'Communicate with customers in their preferred language with support for over 50 languages.'
    },
    {
      icon: <Cpu className="h-10 w-10 text-indigo-600" />,
      title: 'AI-Powered Learning',
      description: 'Our chatbots learn from interactions over time, becoming more accurate and helpful with each conversation.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Your AI Chatbot</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create intelligent, responsive chatbots that engage your customers and streamline your support process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-indigo-600 rounded-xl overflow-hidden shadow-xl">
        <div className="md:flex">
          <div className="md:w-1/2 p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your customer support?</h2>
            <p className="text-indigo-100 mb-8">
              Join thousands of businesses using AI Chatbot Builder to improve customer satisfaction and reduce support costs.
            </p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
              Get Started for Free
            </button>
          </div>
          <div className="md:w-1/2 bg-indigo-700 p-12 flex items-center justify-center">
            <Bot className="h-64 w-64 text-indigo-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;