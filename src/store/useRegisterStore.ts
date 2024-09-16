// src/store/useRegisterStore.ts
import { create } from 'zustand';

import { RegisterSteps, RegisterStepsType } from '@/lib/constants';

interface RegisterStore {
  currentStep: RegisterStepsType;
  selectedOptions: Record<RegisterStepsType, string[]>;
  setCurrentStep: (step: RegisterStepsType) => void;
  setSelectedOption: (
    step: RegisterStepsType,
    selection: string | string[]
  ) => void;
  clearStore: () => void;
}

export const useRegisterStore = create<RegisterStore>((set) => ({
  currentStep: RegisterSteps.ReferralSource,
  selectedOptions: {},
  setCurrentStep: (step) => set({ currentStep: step }),
  setSelectedOption: (step, selection) =>
    set((state) => {
      // Check if selection is an array or a single string
      const newSelections = Array.isArray(selection) ? selection : [selection];

      return {
        selectedOptions: {
          ...state.selectedOptions,
          [step]: newSelections,
        },
      };
    }),
  clearStore: () =>
    set({ currentStep: RegisterSteps.ReferralSource, selectedOptions: {} }),
}));
