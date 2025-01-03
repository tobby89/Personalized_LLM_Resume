import { HfInference } from '@huggingface/inference';
import { formatPrompt } from './prompts';
import { knownTopics } from './knowledge';

const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY || 'dummy-api-key');

export async function generateResponse(prompt: string): Promise<string> {
  try {
    // First check if we can find a direct match in known topics
    const lowercasePrompt = prompt.toLowerCase();
    for (const [topic, response] of Object.entries(knownTopics)) {
      if (lowercasePrompt.includes(topic.toLowerCase())) {
        return response;
      }
    }

    // If no direct match, return the unknown response
    return knownTopics.unknown;
  } catch (error) {
    console.error('Error generating response:', error);
    return knownTopics.unknown;
  }
}
