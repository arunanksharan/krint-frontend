import React, { useState } from 'react';
import { AssessSkillLevelOptions } from '@/lib/constants';

const AssessSkillLevelGrid: React.FC<{
  onContinue: (selection: string) => void;
}> = ({ onContinue }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelection = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full max-w-lg">
      <div className="grid grid-cols-1 gap-4">
        {Object.keys(AssessSkillLevelOptions).map((key) => (
          <div
            key={key}
            className={`p-4 border rounded-lg cursor-pointer flex items-center justify-center ${
              selectedOption === AssessSkillLevelOptions[key]
                ? 'border-blue-500 bg-blue-900 text-white'
                : 'border-gray-500 bg-gray-800 text-gray-300'
            }`}
            onClick={() => handleSelection(AssessSkillLevelOptions[key])}
          >
            {AssessSkillLevelOptions[key]}
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedOption
              ? 'bg-blue-500 text-white cursor-pointer'
              : 'bg-gray-500 text-gray-300 cursor-not-allowed'
          }`}
          onClick={() => selectedOption && onContinue(selectedOption)}
          disabled={!selectedOption}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AssessSkillLevelGrid;
