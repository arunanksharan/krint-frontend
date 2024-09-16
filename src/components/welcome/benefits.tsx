import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { BenefitsOptions } from '@/lib/constants';
import { Button } from '../ui/button';
import { BenefitsOptionsType } from '@/lib/type';

const Benefits: React.FC<{
  onContinue: () => void;
  gridClassname: string;
  stepOptions: BenefitsOptionsType;
}> = ({ onContinue, gridClassname, stepOptions }) => {
  return (
    <div className={gridClassname}>
      {Object.entries(stepOptions).map(([key, benefit]) => (
        <Card
          key={key}
          className="border rounded-lg shadow-none font-quicksand border-slate-300 text-slate-600"
        >
          <CardHeader className="">
            <CardTitle className="text-lg">{benefit.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base font-normal">
              {benefit.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
      <div className="mt-6 flex justify-end">
        <Button
          className={`px-4 py-2 rounded-lg font-quicksand text-base bg-primaryPurple hover:bg-primaryPurple text-white cursor-pointer`}
          onClick={onContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Benefits;
