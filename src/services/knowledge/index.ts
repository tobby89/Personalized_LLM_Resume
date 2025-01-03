import { personalInfo } from './personal';
import { educationInfo } from './education';
import { workExperience } from './experience';

// Combine all knowledge into a flat structure for easy matching
export const knownTopics = {
  // Personal information
  ...personalInfo,
  
  // Education
  ...educationInfo,
  
  // Work Experience
  ...workExperience,
  
  // Default response for unknown topics
  unknown: "Sorry, I am not trained yet to answer that question, please ask another question."
};

export function isKnownTopic(input: string): boolean {
  const lowercaseInput = input.toLowerCase();
  
  // Check all topic values including nested objects
  const allValues = Object.values(knownTopics).flatMap(value => {
    if (typeof value === 'object' && value !== null) {
      return Object.values(value);
    }
    return value;
  });
  
  return allValues.some(value => 
    typeof value === 'string' && lowercaseInput.includes(value.toLowerCase())
  );
}
