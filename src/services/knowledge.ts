    export const knownTopics = {
      // Existing knowledge (preserved)
      "Tell me about yourself": "I'm Tobias, a multimedia specialist with over 12 years of experience across Southeast Asia and Australia. I recently graduated with a Master’s in Computing Science from the University of Alberta, specializing in multimedia. I currently hold a Post Graduate Work Permit, which allows me to work for any employer in Canada without any restriction. My expertise lies in UX research, UX design, web development, and managing design teams.",
      "Tell me about your work experience history": "I have extensive experience in multimedia, UX design, and web development across various companies in Southeast Asia, Australia, and Indonesia. My roles have ranged from User Experience Designer at C-Tribe to Interaction Design Specialist at Accenture, and I’ve managed teams at Blibli.com and Traveloka.",
      "What skills do you bring": "I bring a strong background in UX design, user research, and multimedia development. I’m skilled in tools like Figma and Adobe Creative Suite and have a proven track record of creating user-centered designs across web and mobile platforms.",
      "What are your strengths": "I’m strong in UX design, problem-solving, and communication. I also have excellent project management skills and the ability to collaborate across different teams to achieve project goals.",
      "Why should we hire you": "With over a decade of experience in multimedia and UX design, I bring both technical expertise and a creative eye for design. I have a strong portfolio of successful projects, and I’m eager to apply my skills in a new, challenging environment.",
      "Are you allowed to work in Canada": "Yes, I hold a Post Graduate Work Permit, which allows me to work for any employer in Canada without any restriction.",
      "How can I contact you": "I can be reached on phone +15873376643 or email ttobias@ualberta.ca.",
      "unknown": "Sorry, I am not trained yet to answer that question, please ask another question.",
      "Can you share your academic background": "I hold a Master’s in Computing Science from the University of Alberta, specializing in multimedia, with a GPA of 3.8/4.0. I also have a Bachelor’s degree in Computing Science with a focus on Graphics and Multimedia from STMIK LIKMI in Indonesia, where I graduated with a GPA of 3.69/4.0.",
      "What professional certifications do you have": "I’ve earned several certifications, including Supervising Safely from the University of Alberta, the Mitacs Accelerate Program, and Australian Skill Assessments for Multimedia Specialist and Web Designer.",
      "Can you summarize your work experience": "I have 12+ years of experience in multimedia, UX design, and web development. My career includes roles such as User Experience Designer at C-Tribe in Canada, Interaction Design Specialist at Accenture in Southeast Asia, and Associate UX Manager at Blibli.com in Indonesia. I’ve worked on projects for government and corporate clients, focusing on creating user-centered designs and managing design teams.",
      "What tools and technologies are you proficient in": "I’m proficient in design and development tools like Figma, Adobe Creative Suite, HTML, CSS, and JavaScript. I’m also experienced in conducting user research and working with cross-functional teams to implement design solutions.",
      "What notable clients or projects have you worked on": "I’ve worked with high-profile clients, including government and corporate entities in Singapore, Thailand, Indonesia, and Malaysia. Projects involved creating user-centered designs, conducting user research, and developing multimedia solutions for diverse audiences.",
      "What industries have you worked in": "I’ve worked in industries such as e-commerce, technology, finance, and event management. My roles involved designing and developing digital products, leading design teams, and collaborating with clients to meet project objectives.",
      "What motivates you in your career": "I’m motivated by solving complex design challenges, creating impactful user experiences, and continuously learning new skills to stay at the forefront of technology and design trends.",
      "What is your leadership experience": "I have leadership experience managing design teams, such as during my time at Blibli.com, where I led a team of seven designers to develop an e-commerce platform using research-driven methodologies.",
      "What is your preferred working style": "I thrive in collaborative environments where I can engage with diverse teams and stakeholders. I value open communication, clear objectives, and the opportunity to contribute creatively to projects.",

      // New knowledge added with improved keyword handling
      "Are you allowed to work for any employer in Canada": "Yes, I hold a Post Graduate Work Permit, which allows me to work for any employer in Canada without any restriction.",
      "What is your name": "Tobias",
      "What is your nationality": "Indonesian",
      "Where are you located": "Edmonton, Alberta, Canada",
      "What is your religious belief": "Christian",
      "What is your contact information": "Phone: (587) 337-6643, Email: ttobias@ualberta.ca, LinkedIn: https://www.linkedin.com/in/tobias89/, Portfolio: http://www.fransiscustobias.com",
      "What program are you studying": "Master's in Computing Science, Multimedia Program",
      "Which institution are you attending": "University of Alberta",
      "When will you graduate": "December 2024",
      "What is your GPA": "3.8/4.0",
      "Where is your transcript available": "https://bit.ly/UofA-Transcript",
      "What are your academic interests": "UI/UX research, Computing science roles, Bear safety",
      "What was your undergraduate degree": "Institution: Sekolah Tinggi Manajemen Informatika and Komputer LIKMI, Indonesia, Degree: Bachelor in Computing Science, Graphics and Multimedia, GPA: 3.69/4.0, Verification Link: https://bit.ly/WES-Verified-International-Academic-Qualifications",
      "How many years of experience do you have": "12+ years in UX design",
      "What are your skills": "UI/UX design, Computing science, Coding, Animation (Figma and Lottie files)",
      "What tools and technologies are you proficient in": "Adobe Creative Suite, Figma, HTML, CSS, JavaScript, Google Analytics",
      "What organizations have you worked for": "C-Tribe (User Experience Design, 12/2023 - Present), Accenture (Interaction Design Specialist, 12/2020 - 07/2023), Blibli.com (Associate UX Manager, 05/2020 - 12/2020), Traveloka.com (Product Designer, 11/2017 - 04/2020), Pearce and Co (Lead UI/UX Designer, 10/2016 - 12/2016), Australian Credit and Finance (Lead UI/UX Designer, 07/2016 - 09/2016), Dimopay (UI/UX Designer, 05/2015 - 06/2016), Qraved.com (UI/UX Developer, 12/2013 - 04/2015), Okezone.com (Web Designer, 03/2012 - 09/2013), Hymnindo.com (Web Designer, 02/2011 - 02/2012)",
      "What certifications do you hold": "Supervising Safely (University of Alberta), Australian Skill Assessment for Multimedia Specialist (Australia), Australian Skill Assessment for Web Designer (Australia)",
      "What are your career goals": "Contribute to the Canadian economy, especially in IT, Work for the Canadian government leveraging consulting experience, Promote inclusion and diversity in Canadian workplaces",
      "What are you passionate about": "Supporting marginalized individuals, Inspiring Canadians from diverse heritage backgrounds, Driving economic and social impact through technology",
      "any career goals": "Contribute to the Canadian economy, especially in IT, Work for the Canadian government leveraging consulting experience, Promote inclusion and diversity in Canadian workplaces"

    };
    
    export function isKnownTopic(input: string): boolean {
      const lowercaseInput = input.toLowerCase();
      // Use a more flexible matching strategy
      return Object.keys(knownTopics).some(topic => {
        const lowercaseTopic = topic.toLowerCase();
        // Check for partial matches and ignore punctuation
        const keywords = lowercaseTopic.split(' ');
        return keywords.some(keyword => lowercaseInput.includes(keyword));
      });
    }
