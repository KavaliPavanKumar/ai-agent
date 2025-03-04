import React from 'react';
import { Bot, MessageSquare, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Build Intelligent Chatbots Without Coding
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Create, customize, and deploy AI-powered chatbots in minutes. Enhance customer support and boost engagement with our easy-to-use platform.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/builder" 
                  className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium text-lg flex items-center justify-center"
                >
                  Start Building <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/features" 
                  className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-lg font-medium text-lg flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-72 h-72 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="relative z-10">
                  <Bot className="h-64 w-64 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Chatbot Builder?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes it easy to create powerful, intelligent chatbots that engage your customers and streamline your support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quick Setup</h3>
              <p className="text-gray-600">
                Get your chatbot up and running in minutes with our intuitive builder interface. No coding required.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Smart Responses</h3>
              <p className="text-gray-600">
                Train your chatbot with custom responses and FAQs to handle common customer inquiries automatically.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security ensures your data and customer conversations are always protected.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Businesses Worldwide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers are saying about our AI Chatbot Builder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Jane Doe</h4>
                  <p className="text-gray-600">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "We implemented the AI chatbot on our website and saw a 40% reduction in support tickets within the first month. The setup was incredibly easy."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                  MS
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Mike Smith</h4>
                  <p className="text-gray-600">E-commerce Owner</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Our customers love being able to get instant answers to their questions. The chatbot has significantly improved our conversion rates."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                  AT
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Alex Thompson</h4>
                  <p className="text-gray-600">Customer Support Lead</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The customization options are fantastic. We were able to match our brand perfectly and the AI learning capabilities keep improving our responses."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses using our AI Chatbot Builder to improve customer satisfaction and reduce support costs.
          </p>
          <Link 
            to="/builder" 
            className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-lg font-medium text-lg inline-block"
          >
            Start Building Your Chatbot
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;