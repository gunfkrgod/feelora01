import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Heart, Smile, Frown, Meh } from 'lucide-react';
import { generateCounselorResponse } from '../lib/gemini';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI wellness companion. I'm here to listen and support you. How are you feeling today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);



  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Get conversation history for context
      const conversationHistory = messages
        .filter(msg => msg.sender === 'user')
        .map(msg => msg.content)
        .slice(-5); // Last 5 user messages for context

      // Generate AI response using Gemini API
      const aiResponseText = await generateCounselorResponse(inputMessage, conversationHistory);
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponseText,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      // Fallback response if API fails
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm here to listen and support you. I'm experiencing some technical difficulties right now, but I want you to know that your feelings are valid and important. Would you like to try sharing again, or would you prefer to connect with one of our human counselors?",
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickResponses = [
    { text: "I'm feeling anxious", emoji: "😰" },
    { text: "I need someone to talk to", emoji: "💬" },
    { text: "I'm having a tough day", emoji: "😔" },
    { text: "I want to feel better", emoji: "🌱" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-md border-b border-blue-100 p-6">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-full">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AI Wellness Assistant</h1>
              <p className="text-sm text-gray-600">Available 24/7 • Confidential & Safe</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`p-2 rounded-full ${
                    message.sender === 'user' 
                      ? 'bg-blue-600' 
                      : 'bg-gradient-to-r from-blue-600 to-green-500'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Heart className="h-4 w-4 text-white" />
                    )}
                  </div>
                  
                  <div className={`p-4 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-white shadow-sm border border-gray-100 rounded-bl-sm'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-full">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <div className="bg-white shadow-sm border border-gray-100 rounded-2xl rounded-bl-sm p-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Responses */}
        {messages.length === 1 && (
          <div className="px-6 pb-4">
            <p className="text-sm text-gray-600 mb-3">Quick responses:</p>
            <div className="flex flex-wrap gap-2">
              {quickResponses.map((response, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(response.text)}
                  className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <span>{response.emoji}</span>
                  <span>{response.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="bg-white border-t border-gray-100 p-6">
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share what's on your mind..."
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                rows={1}
                style={{ minHeight: '44px', maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-3 rounded-2xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-3 text-center">
            This AI assistant provides support but is not a replacement for professional therapy.
            <br />
            For emergencies, please contact crisis services immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;