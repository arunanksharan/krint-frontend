import { RegisterSteps } from './constants';

export type RegisterStepsType =
  (typeof RegisterSteps)[keyof typeof RegisterSteps];

// Options for the Benefits step
export type BenefitOption = {
  title: string;
  description: string;
};

export type BenefitsOptionsType = Record<string, BenefitOption>;

export type DailyGoalOption = {
  title: string;
  description: string;
  onSelectHeader: string;
};

export type DailyGoalOptionsType = Record<string, DailyGoalOption>;

export type PlaceToStartOption = {
  title: string;
  description: string;
};

export type PlaceToStartOptionsType = Record<string, PlaceToStartOption>;
