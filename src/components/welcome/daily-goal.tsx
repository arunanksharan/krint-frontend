import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { BenefitsOptions } from '@/lib/constants';
import { Button } from '../ui/button';
import { BenefitsOptionsType, DailyGoalOptionsType } from '@/lib/type';
import { useRegisterStore } from '@/store/useRegisterStore';

const DailyGoal: React.FC<{
  onContinue: (selection: string[]) => void;
  gridClassname: string;
  stepOptions: DailyGoalOptionsType;
}> = ({ onContinue, gridClassname, stepOptions }) => {
  const { currentStep, selectedOptions, setSelectedOption } =
    useRegisterStore();

  const [selected, setSelected] = useState<string[]>(
    selectedOptions[currentStep] || []
  );
  const handleSelection = (option: string) => {
    setSelectedOption(currentStep, option);
  };
  useEffect(() => {
    setSelected(selectedOptions[currentStep] || []);
  }, [selectedOptions, currentStep]);

  return (
    <div className="w-full max-w-lg">
      <div className={`${gridClassname}`}>
        {Object.keys(stepOptions).map((key) => (
          <div
            key={key}
            className={`p-4 border rounded-lg cursor-pointer flex items-center justify-center hover:bg-slate-100 text-lg ${
              selected.includes(stepOptions[key].title)
                ? 'border-primaryPurple text-primaryPurple '
                : 'border-slate-300 text-slate-600'
            }`}
            onClick={() => handleSelection(stepOptions[key].title)}
          >
            <div className="w-full flex flex-row justify-between items-center">
              <div>{stepOptions[key].title}</div>
              <div className="font-normal">{stepOptions[key].description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <Button
          className={`px-4 py-2 rounded-lg font-quicksand text-base ${
            selected.length > 0
              ? 'bg-primaryPurple hover:bg-primaryPurple text-white cursor-pointer'
              : 'bg-slate-100 text-slate-400 hover:bg-slate-100'
          }`}
          onClick={() => onContinue(selected)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default DailyGoal;
