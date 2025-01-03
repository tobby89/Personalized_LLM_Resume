    import React from 'react';
    import { MessageSquare } from 'lucide-react';
    
    interface WelcomeMessageProps {
      onTemplateClick: (question: string) => void;
    }
    
    export function WelcomeMessage({ onTemplateClick }: WelcomeMessageProps) {
      const templateQuestions = [
        "Tell me about yourself",
        "Tell me about your work experience history",
        "What skills do you bring if I hire you?",
        "What are your strengths?",
        "Why should we hire you?",
        "Are you allowed to work for any employer in Canada?",
        "How can I contact you?"
      ];
    
      return (
        <div className="flex flex-col items-center justify-center h-full text-gray-700">
          <MessageSquare className="w-12 h-12 mb-4 text-blue-500" />
          <p className="text-xl font-medium mb-6">
            Hi, I'm Tobias. What would you like to know about me?
          </p>
          <div className="space-y-2 w-full max-w-md">
            {templateQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => onTemplateClick(question)}
                className="w-full p-3 text-left rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      );
    }
