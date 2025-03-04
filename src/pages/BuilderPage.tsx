import React, { useState } from 'react';
import { Save, Download } from 'lucide-react';
import ChatbotBuilder from '../components/ChatbotBuilder';
import ChatbotPreview from '../components/ChatbotPreview';

// Define types for our chatbot configuration
export interface FAQ {
  question: string;
  answer: string;
}

export interface CustomResponse {
  trigger: string;
  response: string;
}

export interface ChatbotConfig {
  name: string;
  welcomeMessage: string;
  primaryColor: string;
  faqs: FAQ[];
  responses: CustomResponse[];
}

const BuilderPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('builder');
  const [chatbotConfig, setChatbotConfig] = useState<ChatbotConfig>({
    name: 'My Chatbot',
    welcomeMessage: 'Hello! How can I help you today?',
    primaryColor: '#4F46E5',
    faqs: [
      { question: 'What is your return policy?', answer: 'You can return items within 30 days of purchase.' },
      { question: 'How do I track my order?', answer: 'You can track your order by logging into your account and viewing your order history.' },
    ],
    responses: [
      { trigger: 'pricing', response: 'Our pricing starts at $9.99 per month. You can view all pricing options on our pricing page.' },
      { trigger: 'contact', response: 'You can contact our support team at support@example.com or call us at (123) 456-7890.' },
    ]
  });

  const handleConfigChange = (newConfig: Partial<ChatbotConfig>) => {
    setChatbotConfig({...chatbotConfig, ...newConfig});
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(chatbotConfig, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "chatbot-config.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const getEmbedCode = () => {
    return `<script>
  (function(w, d) {
    const chatbotConfig = ${JSON.stringify(chatbotConfig, null, 2)};
    
    // Create chatbot container
    const container = document.createElement('div');
    container.id = 'ai-chatbot-container';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    
    // Add chatbot button
    const button = document.createElement('button');
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-5V5a3 3 0 0 0-3-3z"></path></svg>';
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.borderRadius = '50%';
    button.style.backgroundColor = chatbotConfig.primaryColor;
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    
    // Add to DOM
    container.appendChild(button);
    d.body.appendChild(container);
    
    // Initialize chatbot functionality here
    button.addEventListener('click', function() {
      alert('Chatbot would open here with the configuration: ' + chatbotConfig.name);
    });
  })(window, document);
</script>`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Chatbot Builder</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Create and customize your AI chatbot with our easy-to-use builder. Configure settings, add FAQs, and preview your chatbot in real-time.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex border-b">
          <button
            className={`px-6 py-3 font-medium flex items-center ${activeTab === 'builder' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('builder')}
          >
            Builder
          </button>
          <button
            className={`px-6 py-3 font-medium flex items-center ${activeTab === 'preview' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
          <button
            className={`px-6 py-3 font-medium flex items-center ${activeTab === 'embed' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('embed')}
          >
            Embed Code
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === 'builder' && (
            <ChatbotBuilder 
              config={chatbotConfig} 
              onConfigChange={handleConfigChange} 
            />
          )}
          
          {activeTab === 'preview' && (
            <ChatbotPreview config={chatbotConfig} />
          )}
          
          {activeTab === 'embed' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Embed Your Chatbot</h2>
              <p className="mb-4 text-gray-600">Copy and paste this code snippet into your website's HTML to add your chatbot.</p>
              
              <div className="relative">
                <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
                  {getEmbedCode()}
                </pre>
                <button 
                  className="absolute top-2 right-2 bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700"
                  onClick={() => {
                    navigator.clipboard.writeText(getEmbedCode());
                    alert('Embed code copied to clipboard!');
                  }}
                >
                  Copy
                </button>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Export Configuration</h3>
                <p className="mb-4 text-gray-600">Download your chatbot configuration as a JSON file.</p>
                <button 
                  className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center hover:bg-indigo-700"
                  onClick={handleExport}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Export Configuration
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;