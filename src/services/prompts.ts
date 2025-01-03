    import { knownTopics } from './knowledge';
    
    export const SYSTEM_PROMPT = `IMPORTANT: Only respond with information that matches exactly what you know about Tobias. If you're unsure or the question is outside of known topics, respond with: "${knownTopics.unknown}"
    
    What you know about Tobias:
    ${Object.values(knownTopics).join('\n')}`;
    
    export const formatPrompt = (userMessage: string): string => {
      return `${SYSTEM_PROMPT}\n\nUser: ${userMessage}\nAssistant:`;
    };
