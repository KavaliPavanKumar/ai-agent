import React, { useState } from 'react';
import { FileText, Code, Settings, MessageSquare, Database, Server, HelpCircle } from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('getting-started');
  
  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: <FileText className="w-5 h-5" /> },
    { id: 'integration', name: 'Integration', icon: <Code className="w-5 h-5" /> },
    { id: 'customization', name: 'Customization', icon: <Settings className="w-5 h-5" /> },
    { id: 'responses', name: 'Training Responses', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'api', name: 'API Reference', icon: <Database className="w-5 h-5" /> },
    { id: 'deployment', name: 'Deployment', icon: <Server className="w-5 h-5" /> },
    { id: 'faq', name: 'FAQ', icon: <HelpCircle className="w-5 h-5" /> }
  ];
  
  const content: Record<string, React.ReactNode> = {
    'getting-started': (
      <div>
        <h2 className="text-2xl font-bold mb-6">Getting Started with AI Chatbot Builder</h2>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            Welcome to AI Chatbot Builder! This guide will help you create and deploy your first AI-powered chatbot in just a few minutes.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Step 1: Create an Account</h3>
          <p className="mb-4">
            Sign up for a free account at <a href="#" className="text-indigo-600 hover:text-indigo-800">chatbotbuilder.ai</a>. You can start with our free plan and upgrade later as your needs grow.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Step 2: Create Your First Chatbot</h3>
          <p className="mb-4">
            After logging in, click the "Create New Chatbot" button on your dashboard. Give your chatbot a name and customize its appearance to match your brand.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Step 3: Train Your Chatbot</h3>
          <p className="mb-4">
            Add frequently asked questions and custom responses to train your chatbot. The more information you provide, the more helpful your chatbot will be.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Step 4: Test Your Chatbot</h3>
          <p className="mb-4">
            Use the preview feature to test your chatbot. Try asking different questions to see how it responds. Make adjustments as needed.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Step 5: Deploy Your Chatbot</h3>
          <p className="mb-4">
            When you're satisfied with your chatbot, click the "Embed" tab to get the code snippet. Add this code to your website to deploy your chatbot.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h4 className="text-lg font-semibold mb-2">Quick Tips</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Start with 10-15 of your most common customer questions</li>
              <li>Use clear, concise language in your responses</li>
              <li>Regularly review chatbot analytics to identify improvement areas</li>
              <li>Update your chatbot with new information as your business evolves</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    'integration': (
      <div>
        <h2 className="text-2xl font-bold mb-6">Integrating Your Chatbot</h2>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            Integrating your AI chatbot into your website is simple. Follow these steps to add your chatbot to any website.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Website Integration</h3>
          <p className="mb-4">
            To add your chatbot to your website, copy the embed code from the "Embed" tab and paste it into your website's HTML, just before the closing <code>&lt;/body&gt;</code> tag.
          </p>
          
          <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto my-6">
            <pre className="text-sm">
{`<script>
  (function(w, d) {
    const chatbotConfig = {
      name: "My Chatbot",
      welcomeMessage: "Hello! How can I help you today?",
      primaryColor: "#4F46E5",
      // other configuration options...
    };
    
    // Chatbot initialization code...
  })(window, document);
</script>`}
            </pre>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Content Management Systems</h3>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">WordPress</h4>
          <p className="mb-4">
            For WordPress sites, you can add the embed code to your theme's footer.php file or use a plugin like "Header and Footer Scripts" to add the code site-wide.
          </p>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Shopify</h4>
          <p className="mb-4">
            In Shopify, go to Online Store &gt; Themes &gt; Edit code and add the embed code to the theme.liquid file just before the closing body tag.
          </p>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Wix</h4>
          <p className="mb-4">
            In Wix, go to Settings &gt; Custom Code and add the embed code with the "Add Custom Code" button. Set it to load on all pages.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">API Integration</h3>
          <p className="mb-4">
            For more advanced integrations, you can use our REST API to interact with your chatbot programmatically. See the API Reference section for details.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <HelpCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Need help with integration? Contact our support team or schedule a call with one of our integration specialists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'customization': (
      <div>
        <h2 className="text-2xl font-bold mb-6">Customizing Your Chatbot</h2>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            Customize your chatbot's appearance and behavior to match your brand and meet your specific needs.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Appearance Customization</h3>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Colors and Branding</h4>
          <p className="mb-4">
            Change your chatbot's primary color to match your brand. This color will be used for the chatbot button, user message bubbles, and other UI elements.
          </p>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Chat Window Size</h4>
          <p className="mb-4">
            Adjust the size of the chat window by modifying the width and height parameters in the advanced settings.
          </p>
          
          <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto my-6">
            <pre className="text-sm">
{`// Advanced configuration options
{
  chatWindowWidth: "360px",
  chatWindowHeight: "500px",
  buttonPosition: "right", // "right" or "left"
  buttonOffset: "20px"
}`}
            </pre>
          </div>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Custom Icons</h4>
          <p className="mb-4">
            Pro and Enterprise plans allow you to upload a custom icon for the chatbot button. The recommended size is 64x64 pixels.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Behavior Customization</h3>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Welcome Message</h4>
          <p className="mb-4">
            Set a custom welcome message that appears when a user first opens the chatbot. Make it friendly and informative.
          </p>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Auto-Open Settings</h4>
          <p className="mb-4">
            Configure your chatbot to automatically open after a certain time delay or when a user visits specific pages.
          </p>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Operating Hours</h4>
          <p className="mb-4">
            Set specific hours when your chatbot is available. Outside these hours, you can display a custom message or an email form.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Advanced Customization</h3>
          <p className="mb-4">
            Enterprise customers can access our JavaScript API for complete customization of the chatbot's behavior and appearance.
          </p>
          
          <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto my-6">
            <pre className="text-sm">
{`// Example of using the JavaScript API
window.AIChatbot.on('message:received', function(message) {
  console.log('New message received:', message);
  // Custom handling code here
});

window.AIChatbot.setTheme({
  fontFamily: 'Arial, sans-serif',
  fontSize: '14px',
  borderRadius: '8px'
});`}
            </pre>
          </div>
        </div>
      </div>
    ),
    'responses': (
      <div>
        <h2 className="text-2xl font-bold mb-6">Training Your Chatbot Responses</h2>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            The effectiveness of your chatbot depends on how well it's trained. This guide will help you create high-quality responses that satisfy your users.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Adding FAQs</h3>
          <p className="mb-4">
            Frequently Asked Questions (FAQs) are the foundation of your chatbot's knowledge. Add questions that your customers commonly ask, along with clear, concise answers.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mt-4 mb-8">
            <h4 className="text-lg font-semibold mb-2">Best Practices for FAQs</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use natural language that matches how customers actually ask questions</li>
              <li>Include variations of the same question to improve matching</li>
              <li>Keep answers concise but complete</li>
              <li>Include links to more detailed information when appropriate</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Custom Keyword Responses</h3>
          <p className="mb-4">
            Keyword responses trigger when a user's message contains specific words or phrases. These are useful for handling a wide range of inquiries that might not match your FAQs exactly.
          </p>
          
          <table className="min-w-full border border-gray-300 mt-4 mb-8">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Keyword</th>
                <th className="py-2 px-4 border-b text-left">Example Response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">pricing, cost, price</td>
                <td className="py-2 px-4 border-b">Our pricing starts at $9.99 per month. You can view all pricing options on our pricing page.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">contact, support, help</td>
                <td className="py-2 px-4 border-b">You can contact our support team at support@example.com or call us at (123) 456-7890.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">hours, open, schedule</td>
                <td className="py-2 px-4 border-b">We're open Monday-Friday from 9am to 5pm EST. On weekends, we're available from 10am to 3pm.</td>
              </tr>
            </tbody>
          </table>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Advanced AI Training</h3>
          <p className="mb-4">
            Enterprise customers can upload training documents, support transcripts, and product manuals to enhance their chatbot's knowledge base. Our AI will analyze these documents and extract relevant information.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Testing and Refinement</h3>
          <p className="mb-4">
            Regularly test your chatbot by asking various questions and reviewing its responses. Use the analytics dashboard to identify common queries that your chatbot struggles with, and add new responses accordingly.
          </p>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mt-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-indigo-700">
                  <strong>Pro Tip:</strong> Review your chatbot's conversation logs weekly to identify gaps in its knowledge and opportunities for improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'api': (
      <div>
        <h2 className="text-2xl font-bold mb-6">API Reference</h2>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            Our comprehensive API allows you to programmatically manage your chatbots, retrieve conversation data, and integrate with other systems.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Authentication</h3>
          <p className="mb-4">
            All API requests require authentication using an API key. You can generate an API key in your account settings.
          </p>
          
          <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto my-6">
            <pre className="text-sm">
{`// Example API request with authentication
curl -X GET "https://api.chatbotbuilder.ai/v1/chatbots" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            </pre>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Endpoints</h3>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Chatbots</h4>
          
          <table className="min-w-full border border-gray-300 mt-4 mb-8">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Endpoint</th>
                <th className="py-2 px-4 border-b text-left">Method</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">/v1/chatbots</td>
                <td className="py-2 px-4 border-b">GET</td>
                <td className="py-2 px-4 border-b">List all chatbots</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">/v1/chatbots/{'{id}'}</td>
                <td className="py-2 px-4 border-b">GET</td>
                <td className="py-2 px-4 border-b">Get a specific chatbot</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">/v1/chatbots</td>
                <td className="py-2 px-4 border-b">POST</td>
                <td className="py-2 px-4 border-b">Create a new chatbot</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">/v1/chatbots/{'{id}'}</td>
                <td className="py-2 px-4 border-b">PUT</td>
                <td className="py-2 px-4 border-b">Update a chatbot</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">/v1/chatbots/{'{id}'}</td>
                <td className="py-2 px-4 border-b">DELETE</td>
                <td className="py-2 px-4 border-b">Delete a chatbot</td>
              </tr>
            </tbody>
          </table>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Conversations</h4>
          
          <table className="min-w-full border border-gray-300 mt-4 mb-8">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Endpoint</th>
                <th className="py-2 px-4 border-b text-left">Method</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">/v1/chatbots/{'{id}'}/conversations</td>
                <td className="py-2 px-4 border-b">GET</td>
                <td className="py-2 px-4 border-b">List conversations for a chatbot</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">/v1/conversations/{'{id}'}</td>
                <td className="py-2 px-4 border-b">GET</td>
                <td className="py-2 px-4 border-b">Get a specific conversation</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">/v1/conversations/{'{id}'}/messages</td>
                <td className="py-2 px-4 border-b">GET</td>
                <td className="py-2 px-4 border-b">Get messages in a conversation</td>
              </tr>
            </tbody>
          </table>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Rate Limits</h3>
          <p className="mb-4">
            API requests are subject to rate limiting to ensure fair usage. The limits vary by plan:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Free plan: 100 requests per day</li>
            <li>Pro plan: 10,000 requests per day</li>
            <li>Enterprise plan: Custom limits based on your needs</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Error Handling</h3>
          <p className="mb-4">
            The API uses standard HTTP status codes to indicate success or failure. Error responses include a JSON body with details about the error.
          </p>
          
          <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto my-6">
            <pre className="text-sm">
{`// Example error response
{
  "error": {
    "code": "invalid_auth",
    "message": "Invalid API key provided",
    "status": 401
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    ),
    'deployment': (
      <div>
        <h2 className="text-2xl font-bold mb-6">Deploying Your Chatbot</h2>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            Once you've built and tested your chatbot, it's time to deploy it to your website. This guide covers the deployment process and best practices.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Deployment Options</h3>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Website Embed</h4>
          <p className="mb-4">
            The simplest way to deploy your chatbot is by embedding it on your website using the provided JavaScript snippet. This method works with any website platform.
          </p>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">WordPress Plugin</h4>
          <p className="mb-4">
            If you use WordPress, you can install our dedicated plugin for easier integration. Search for "AI Chatbot Builder" in the WordPress plugin directory.
          </p>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Mobile App Integration</h4>
          <p className="mb-4">
            Enterprise customers can integrate their chatbot into iOS and Android mobile apps using our mobile SDKs.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Deployment Checklist</h3>
          
          <div className="bg-gray-50 p-6 rounded-lg mt-4 mb-8">
            <h4 className="text-lg font-semibold mb-2">Before You Deploy</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Test your chatbot thoroughly with various questions and scenarios</li>
              <li>Ensure all FAQs and custom responses are accurate and up-to-date</li>
              <li>Customize the appearance to match your brand</li>
              <li>Set up appropriate fallback responses for unanswered questions</li>
              <li>Configure operating hours if applicable</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Monitoring and Maintenance</h3>
          
          <p className="mb-4">
            After deploying your chatbot, it's important to monitor its performance and make continuous improvements.
          </p>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Analytics Dashboard</h4>
          <p className="mb-4">
            Use the analytics dashboard to track key metrics such as:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Number of conversations</li>
            <li>Average conversation length</li>
            <li>Most common questions</li>
            <li>Unanswered questions</li>
            <li>User satisfaction ratings</li>
          </ul>
          
          <h4 className="text-lg font-semibold mt-6 mb-2">Regular Updates</h4>
          <p className="mb-4">
            Schedule regular reviews of your chatbot's performance and update its knowledge base as needed. We recommend reviewing at least once a month.
          </p>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  <strong>Success Tip:</strong> The most effective chatbots are those that are continuously improved based on real user interactions. Don't set it and forget it!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'faq': (
      <div>
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <div className="prose max-w-none">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">How does the AI chatbot work?</h3>
              <p>
                Our AI chatbot uses natural language processing (NLP) to understand user queries and provide relevant responses. It matches user questions against your configured FAQs and custom responses, and uses machine learning to improve over time.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I customize the appearance of my chatbot?</h3>
              <p>
                Yes, you can customize the colors, chat window size, button position, and more. Pro and Enterprise plans also allow for custom icons and complete UI customization.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How many chatbots can I create?</h3>
              <p>
                The Free plan allows for 1 chatbot, the Pro plan allows for up to 5 chatbots, and the Enterprise plan offers unlimited chatbots.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Can the chatbot handle multiple languages?</h3>
              <p>
                Yes, our chatbot supports over 50 languages. You can create separate FAQs and responses for each language, or use our automatic translation feature (available on Pro and Enterprise plans).
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How do I transfer conversations to a human agent?</h3>
              <p>
                Pro and Enterprise plans include a live chat handoff feature. When the chatbot can't resolve an issue, it can transfer the conversation to a human agent through integrations with popular customer support platforms.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Is my data secure?</h3>
              <p>
                Yes, we take security seriously. All data is encrypted in transit and at rest. We comply with GDPR, CCPA, and other privacy regulations. Enterprise plans include additional security features such as SSO and custom data retention policies.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I export conversation data?</h3>
              <p>
                Yes, you can export conversation data in CSV or JSON format for analysis or backup purposes. This feature is available on all plans.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How do I cancel my subscription?</h3>
              <p>
                You can cancel your subscription at any time from your account settings. If you cancel, you'll continue to have access to your plan until the end of your current billing period.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you offer a free trial?</h3>
              <p>
                Yes, we offer a 14-day free trial of our Pro plan. No credit card is required to start your trial.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How do I get help if I have questions?</h3>
              <p>
                We offer several support options:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Email support: available to all customers</li>
                <li>Live chat support: available on Pro and Enterprise plans</li>
                <li>Phone support: available on Enterprise plans</li>
                <li>Knowledge base: accessible to everyone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to know about building, customizing, and deploying your AI chatbot.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <nav className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                    activeCategory === category.id
                      ? 'bg-indigo-50 text-indigo-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-3">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md p-8">
            {content[activeCategory]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;

