import { BenefitsOptionsType } from './type';

// Grouping texts by step using an object
export const RegisterText = {
  ReferralSource: 'How did you hear about Krint?',
  AssessSkillLevel: 'How well do you interview?',
  Benefits: "Here's what you can achieve!",
  DailyGoal: "What's your daily learning goal?",
  PlaceToStart: "Now let's find the best place to start!",
};

// Options for the Referral Source step
export const ReferralSourceOptions: Record<string, string> = {
  Linkedin: 'Linkedin',
  Instagram: 'Instagram',
  YouTube: 'YouTube',
  Twitter: 'Twitter/X',
  Farcaster: 'Farcaster',
  GoogleSearch: 'Google Search',
  FriendsFamily: 'Friends/Family',
  Other: 'Other',
};

// Post-selection headers for Assess Skill Level step
export const AssessSkillLevelPostOptionSelectHeader = {
  Beginner: 'Welcome to the grind!',
  LongGap: 'Welcome back to the rumble!',
  Anxious: 'Practice makes perfect! ',
  Confident: "We'll help you turn water into wine!",
  NewDomain: 'Feeling adventurous? We got you covered!',
};

// Options for the Assess Skill Level step
export const AssessSkillLevelOptions: Record<string, string> = {
  Beginner: 'I am a fresher',
  LongGap: 'I am interviewing after a long time',
  Anxious: 'I get really anxious',
  Confident: 'I look forward to them',
  NewDomain: 'I am changing my role/domain',
};

export const BenefitsOptions: BenefitsOptionsType = {
  confidence: {
    title: 'Interview With Confidence',
    description: '1000+ stress-free interview experiences',
  },
  onePlace: {
    title: 'Build a large repository',
    description: 'All your interviews in one place for easy revision',
  },
  habit: {
    title: 'Develop a learning habit',
    description:
      "Learn, Practice, Evaluate, Excel. Be ready at a moment's notice",
  },
};

export const DailyGoalOptions = {
  casual: {
    title: 'Casual',
    description: '10 min / day',
    onSelectHeader: "That's 20 questions in your first week! A great start!",
  },
  regular: {
    title: 'Regular',
    description: '15 min / day',
    onSelectHeader: "That's 30 questions in your first week! Great going!",
  },
  serious: {
    title: 'Serious',
    description: '20 min / day',
    onSelectHeader: "That's 40 questions in your first week! Astounding!",
  },
  intense: {
    title: 'Intense',
    description: '30 min / day',
    onSelectHeader: 'That is 60 questions in your first week! Woah!',
  },
};

export const PlaceToStartOptions = {
  scratch: {
    title: 'Start from the basics',
    description: 'Face the questions around basic terms and concepts',
  },
  findLevel: {
    title: 'Find my level',
    description:
      'Let Krint, your AI companion, recommend where you should start',
  },
};

// Register steps identifiers
export const RegisterSteps = {
  ReferralSource: 'ReferralSource',
  AssessSkillLevel: 'AssessSkillLevel',
  Benefits: 'Benefits',
  DailyGoal: 'DailyGoal',
  PlaceToStart: 'PlaceToStart',
};

export const SelectDomainOptions = {
  softwareDevelopment: {
    name: 'software_development',
    title: 'Software Development',
    description: 'DSA, Coding & More',
    image: 'softwareDev1.jpg',
  },
  webDevelopmentFrontend: {
    name: 'web_development_frontend',
    title: 'Web Development (Frontend)',
    description: 'React, Tailwind & More',
    image: 'webDevFe.jpg',
  },
  webDevelopmentBackend: {
    name: 'web_development_backend',
    title: 'Web Development (Backend)',
    description: 'REST Api, DBMS',
    image: 'webdev_be.svg',
  },
  dataAnalytics: {
    name: 'data_analytics',
    title: 'Data Analytics',
    description: 'SQL, Tableau & More',
    image: 'dataAnalytics.png',
  },
  dataScience: {
    name: 'data_science',
    title: 'Data Science',
    description: 'ML, DL & More',
    image: 'datascienceWithBg1.jpg',
  },
  aiEngineering: {
    name: 'ai_engineering',
    title: 'AI Engineering',
    description: 'Prompting, LLMs',
    image: 'aiEngineeringWithBg.jpg',
  },
  web3: {
    name: 'web3',
    title: 'Blockchains',
    description: 'Blockchains, Crypto',
    image: 'blockchains1.svg',
  },
  productManagement: {
    name: 'product_management',
    title: 'Product Management',
    description: 'Case studies, TPM',
    image: 'productManagement1.png',
  },
};

export type RegisterStepsType =
  (typeof RegisterSteps)[keyof typeof RegisterSteps];
