    import React, { useState } from 'react';
    import { Send } from 'lucide-react';
    
    interface ChatInputProps {
      onSend: (message: string) => void;
      disabled?: boolean;
    }
    
    export function ChatInput({ onSend, disabled }: ChatInputProps) {
      const [input, setInput] = useState('');
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !disabled) {
          onSend(input.trim());
          setInput('');
        }
      };
    
      return (
        <form onSubmit={handleSubmit} className="flex gap-2 mt-15 p-5 bg-white"> {/* Changed p-20 to p-5 */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={disabled}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={disabled || !input.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      );
    }
