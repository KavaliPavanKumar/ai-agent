import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { ChatbotConfig } from '../App';

interface ChatbotPreviewProps {
  config: ChatbotConfig;
}

interface Message {
  type: 'user' | 'bot';
  text: string;
}

const ChatbotPreview: React.FC<ChatbotPreviewProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: config.welcomeMessage }
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const newMessages = [...messages, { type: 'user', text: inputValue }];
    setMessages(newMessages);
    setInputValue('');
    
    // Process user message and generate response
    setTimeout(() => {
      let botResponse = "I'm not sure how to respond to that. Can you try asking something else?";
      
      // Check for FAQ matches
      const faqMatch = config.faqs.find(faq => 
        inputValue.toLowerCase().includes(faq.question.toLowerCase())
      );
      
      if (faqMatch) {
        botResponse = faqMatch.answer;
      } else {
        // Check for keyword triggers
        const triggerMatch = config.responses.find(item => 
          inputValue.toLowerCase().includes(item.trigger.toLowerCase())
        );
        
        if (triggerMatch) {
          botResponse = triggerMatch.response;
        }
      }
      
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-6">Chatbot Preview</h2>
      <p className="text-gray-600 mb-6">This is how your chatbot will appear to your website visitors.</p>
      
      <div className="w-full max-w-sm">
        {isOpen ? (
          <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {/* Chatbot Header */}
            <div 
              className="px-4 py-3 flex justify-between items-center"
              style={{ backgroundColor: config.primaryColor }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-lg" style={{ color: config.primaryColor }}>🤖</span>
                </div>
                <span className="ml-2 font-medium text-white">{config.name}</span>
              </div>
              <div className="flex items-center">
                {!isMinimized ? (
                  <button 
                    onClick={() => setIsMinimized(true)}
                    className="text-white hover:text-gray-200"
                  >
                    <Minimize2 className="w-5 h-5" />
                  </button>
                ) : (
                  <button 
                    onClick={() => setIsMinimized(false)}
                    className="text-white hover:text-gray-200"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="ml-2 text-white hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Chat Messages */}
            {!isMinimized && (
              <>
                <div className="bg-gray-50 p-4 h-80 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div 
                        key={index} 
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-xs px-4 py-2 rounded-lg ${
                            message.type === 'user' 
                              ? 'bg-indigo-600 text-white' 
                              : 'bg-white border border-gray-200 text-gray-800'
                          }`}
                          style={message.type === 'user' ? { backgroundColor: config.primaryColor } : {}}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                </div>
                
                {/* Input Area */}
                <div className="bg-white border-t border-gray-200 p-3 flex">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 rounded-r-md text-white flex items-center justify-center"
                    style={{ backgroundColor: config.primaryColor }}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: config.primaryColor }}
          >
            <span className="text-white text-2xl">💬</span>
          </button>
        )}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">Test your chatbot by typing messages in the chat window.</p>
        <p className="text-gray-600 mt-2">Try asking about topics you've configured in your FAQs and custom responses.</p>
      </div>
    </div>
  );
};

export default ChatbotPreview;