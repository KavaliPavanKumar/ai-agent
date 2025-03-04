import React, { useState } from 'react';
import { PlusCircle, Trash2, Save } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface CustomResponse {
  trigger: string;
  response: string;
}

interface ChatbotConfig {
  name: string;
  welcomeMessage: string;
  primaryColor: string;
  faqs: FAQ[];
  responses: CustomResponse[];
}

interface ChatbotBuilderProps {
  config: ChatbotConfig;
  onConfigChange: (newConfig: Partial<ChatbotConfig>) => void;
}

const ChatbotBuilder: React.FC<ChatbotBuilderProps> = ({ config, onConfigChange }) => {
  const [newFaq, setNewFaq] = useState<FAQ>({ question: '', answer: '' });
  const [newResponse, setNewResponse] = useState<CustomResponse>({ trigger: '', response: '' });

  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onConfigChange({ [name]: value } as Partial<ChatbotConfig>);
  };

  const addFaq = () => {
    if (newFaq.question.trim() === '' || newFaq.answer.trim() === '') {
      alert('Please fill in both question and answer fields');
      return;
    }
    
    onConfigChange({
      faqs: [...config.faqs, { ...newFaq }]
    });
    
    setNewFaq({ question: '', answer: '' });
  };

  const removeFaq = (index: number) => {
    const updatedFaqs = [...config.faqs];
    updatedFaqs.splice(index, 1);
    onConfigChange({ faqs: updatedFaqs });
  };

  const addResponse = () => {
    if (newResponse.trigger.trim() === '' || newResponse.response.trim() === '') {
      alert('Please fill in both trigger and response fields');
      return;
    }
    
    onConfigChange({
      responses: [...config.responses, { ...newResponse }]
    });
    
    setNewResponse({ trigger: '', response: '' });
  };

  const removeResponse = (index: number) => {
    const updatedResponses = [...config.responses];
    updatedResponses.splice(index, 1);
    onConfigChange({ responses: updatedResponses });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Chatbot Configuration</h2>
      
      <div className="space-y-8">
        {/* Basic Settings */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Basic Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Chatbot Name
              </label>
              <input
                type="text"
                name="name"
                value={config.name}
                onChange={handleBasicInfoChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Color
              </label>
              <div className="flex items-center">
                <input
                  type="color"
                  name="primaryColor"
                  value={config.primaryColor}
                  onChange={handleBasicInfoChange}
                  className="w-12 h-10 border border-gray-300 rounded-md mr-2"
                />
                <input
                  type="text"
                  name="primaryColor"
                  value={config.primaryColor}
                  onChange={handleBasicInfoChange}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Welcome Message
            </label>
            <textarea
              name="welcomeMessage"
              value={config.welcomeMessage}
              onChange={handleBasicInfoChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </section>
        
        {/* FAQs */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-600 mb-4">Add common questions and answers to train your chatbot.</p>
          
          <div className="space-y-4 mb-6">
            {config.faqs.map((faq, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-md bg-gray-50">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-medium">{faq.question}</p>
                    <p className="text-gray-600 mt-1">{faq.answer}</p>
                  </div>
                  <button 
                    onClick={() => removeFaq(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <h4 className="font-medium mb-3">Add New FAQ</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Question
                </label>
                <input
                  type="text"
                  value={newFaq.question}
                  onChange={(e) => setNewFaq({...newFaq, question: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., How do I reset my password?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Answer
                </label>
                <textarea
                  value={newFaq.answer}
                  onChange={(e) => setNewFaq({...newFaq, answer: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., You can reset your password by clicking on the 'Forgot Password' link on the login page."
                />
              </div>
              
              <button
                onClick={addFaq}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 flex items-center"
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Add FAQ
              </button>
            </div>
          </div>
        </section>
        
        {/* Custom Responses */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Custom Responses</h3>
          <p className="text-gray-600 mb-4">Add keyword triggers and custom responses for your chatbot.</p>
          
          <div className="space-y-4 mb-6">
            {config.responses.map((item, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-md bg-gray-50">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-medium">Trigger: <span className="text-indigo-600">{item.trigger}</span></p>
                    <p className="text-gray-600 mt-1">{item.response}</p>
                  </div>
                  <button 
                    onClick={() => removeResponse(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <h4 className="font-medium mb-3">Add New Response</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Trigger Keyword
                </label>
                <input
                  type="text"
                  value={newResponse.trigger}
                  onChange={(e) => setNewResponse({...newResponse, trigger: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., pricing"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Response
                </label>
                <textarea
                  value={newResponse.response}
                  onChange={(e) => setNewResponse({...newResponse, response: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., Our pricing starts at $9.99 per month. You can view all pricing options on our pricing page."
                />
              </div>
              
              <button
                onClick={addResponse}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 flex items-center"
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Response
              </button>
            </div>
          </div>
        </section>
        
        <div className="flex justify-end">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-700 flex items-center">
            <Save className="w-4 h-4 mr-2" />
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotBuilder;