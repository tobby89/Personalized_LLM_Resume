import React, { useState } from 'react';
import { Message } from './types/chat';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { WelcomeMessage } from './components/WelcomeMessage';
import { TemplateQuestions } from './components/TemplateQuestions';
import { generateResponse } from './services/llm';
import { MessageSquare } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [askedQuestions, setAskedQuestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setAskedQuestions(prev => [...prev, content]);
    
    // Generate response
    setIsLoading(true);
    try {
      const response = await generateResponse(content);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-blue-500" />
              <h1 className="text-xl font-semibold">Chat with AI</h1>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto px-6 py-4 space-y-4">
            {messages.length === 0 ? (
              <WelcomeMessage onTemplateClick={handleSendMessage} />
            ) : (
              <>
                {messages.map(message => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                <TemplateQuestions 
                  onTemplateClick={handleSendMessage}
                  askedQuestions={askedQuestions}
                />
              </>
            )}
          </div>
          
          {/* Input Area */}
          <div className="px-6 py-4 border-t border-gray-200">
            <ChatInput onSend={handleSendMessage} disabled={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
