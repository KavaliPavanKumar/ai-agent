import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, FileText, HelpCircle, Video, Users, ArrowRight } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Support request submitted! We will get back to you shortly.');
    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };
  
  const supportOptions = [
    {
      icon: <MessageSquare className="h-10 w-10 text-indigo-600" />,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time during business hours.',
      action: 'Start Chat',
      available: 'Available 9am-5pm EST'
    },
    {
      icon: <Mail className="h-10 w-10 text-indigo-600" />,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours.',
      action: 'Send Email',
      available: '24/7 availability'
    },
    {
      icon: <Phone className="h-10 w-10 text-indigo-600" />,
      title: 'Phone Support',
      description: 'Speak directly with our customer support team.',
      action: 'Call Now',
      available: 'Available 9am-5pm EST'
    },
    {
      icon: <FileText className="h-10 w-10 text-indigo-600" />,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and tutorials.',
      action: 'View Articles',
      available: '24/7 availability'
    }
  ];
  
  const additionalResources = [
    {
      icon: <Video className="h-8 w-8 text-indigo-600" />,
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides on how to use our platform.'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Community Forum',
      description: 'Connect with other users and share tips and experiences.'
    },
    {
      icon: <HelpCircle className="h-8 w-8 text-indigo-600" />,
      title: 'FAQ',
      description: 'Find answers to commonly asked questions.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">We're Here to Help</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our support team is available to assist you with any questions or issues you may have.
        </p>
      </div>
      
      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {supportOptions.map((option, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">{option.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
            <p className="text-gray-600 mb-4">{option.description}</p>
            <p className="text-sm text-gray-500 mb-4">{option.available}</p>
            <button className="flex items-center text-indigo-600 font-medium hover:text-indigo-800">
              {option.action} <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      
      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-20">
        <div className="md:flex">
          <div className="md:w-1/2 bg-indigo-600 p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-8">
              Fill out the form and our team will get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>support@chatbotbuilder.ai</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="h-6 w-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Live Chat</h3>
                  <p>Available 9am-5pm EST</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-12">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-3 rounded-md font-medium hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Additional Resources */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-10">Additional Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalResources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
              <button className="mt-4 text-indigo-600 font-medium hover:text-indigo-800">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;