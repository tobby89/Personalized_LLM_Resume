    import React, { useState } from 'react';
    import { Message } from './types/chat';
    import { ChatMessage } from './components/ChatMessage';
    import { ChatInput } from './components/ChatInput';
    import { WelcomeMessage } from './components/WelcomeMessage';
    import { TemplateQuestions } from './components/TemplateQuestions';
    import { generateResponse } from './services/llm';
    
    function App() {
      const [messages, setMessages] = useState<Message[]>([]);
      const [askedQuestions, setAskedQuestions] = useState<string[]>([]);
      const [isLoading, setIsLoading] = useState(false);
    
      const handleSendMessage = async (content: string) => {
        const userMessage: Message = {
          id: Date.now().toString(),
          content,
          role: 'user',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, userMessage]);
        setAskedQuestions(prev => [...prev, content]);
        
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
        <div className="min-h-screen bg-white w-full h-full">
          <div className="w-full h-full"> {/* Removed px-4 py-8 */}
            <div className="w-full h-full">
              <div className="h-[500px] overflow-y-auto space-y-4"> {/* Removed px-6 py-4 */}
                {messages.length === 0 ? (
                  <WelcomeMessage onTemplateClick={handleSendMessage} />
                 ): (
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
              <div> {/* Removed px-6 py-4 */}
                <ChatInput onSend={handleSendMessage} disabled={isLoading} />
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default App;
