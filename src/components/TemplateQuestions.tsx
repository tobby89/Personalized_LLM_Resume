    import React from 'react';
    
    interface TemplateQuestionsProps {
      onTemplateClick: (question: string) => void;
      askedQuestions: string[];
    }
    
    export function TemplateQuestions({ onTemplateClick, askedQuestions }: TemplateQuestionsProps) {
      const allTemplateQuestions = [
        "Tell me about yourself",
        "Tell me about your work experience history",
        "What skills do you bring if I hire you?",
        "What are your strengths?",
        "Why should we hire you?",
        "Are you allowed to work for any employer in Canada?",
        "How can I contact you?"
      ];
    
      // Filter out already asked questions
      const availableQuestions = allTemplateQuestions.filter(
        question => !askedQuestions.includes(question)
      );
    
      if (availableQuestions.length === 0) return null;
    
      return (
        <div className="mt-6 space-y-4">
          <p className="text-gray-700 font-medium">
            Is there anything else you want to know about me?
          </p>
          <div className="space-y-2">
            {availableQuestions.map((question, index) => (
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
