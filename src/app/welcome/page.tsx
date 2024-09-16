'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import {
  getSessionIdFromCookies,
  saveSessionIdToCookies,
  isAuthenticated,
  createAnonymousSession,
} from '@/utils/session';
import {
  AssessSkillLevelOptions,
  BenefitsOptions,
  DailyGoalOptions,
  PlaceToStartOptions,
  ReferralSourceOptions,
  RegisterSteps,
  RegisterText,
} from '@/lib/constants';
import { RegisterStepsType } from '@/lib/type';
import ProgressBar from '@/components/welcome/progress-bar';
import StepOptionsGrid from '@/components/welcome/step-options-grid';
import { useRegisterStore } from '@/store/useRegisterStore';
import Benefits from '@/components/welcome/benefits';
import DailyGoal from '@/components/welcome/daily-goal';
import PlaceToStart from '@/components/welcome/place-to-start';

const Welcome: React.FC = () => {
  //   const [currentStep, setCurrentStep] = useState<RegisterStepsType>(
  //     RegisterSteps.ReferralSource
  //   );
  const router = useRouter();
  const totalSteps = 5;

  const {
    currentStep,
    setCurrentStep,
    selectedOptions,
    setSelectedOption,
    clearStore,
  } = useRegisterStore();
  const stepIndex = Object.values(RegisterSteps).indexOf(currentStep) + 1;

  const {
    data: session,
    isLoading,
    isError,
  } = useQuery(
    'sessionId',
    async () => {
      if (isAuthenticated()) {
        router.push('/dashboard');
        return;
      }

      let sessionId = getSessionIdFromCookies();

      if (!sessionId) {
        sessionId = await createAnonymousSession();
        saveSessionIdToCookies(sessionId);
      }
      return sessionId;
    },
    {
      enabled: true,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error occurred while setting up the session.</div>;
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case RegisterSteps.ReferralSource:
        return (
          <div>
            <div className="font-quicksand text-2xl font-semibold mb-8 mt-1">
              {RegisterText.ReferralSource}
            </div>
            <StepOptionsGrid
              onContinue={handleContinue}
              gridClassname="grid grid-cols-2 gap-4"
              stepOptions={ReferralSourceOptions}
            />
          </div>
        );
      case RegisterSteps.AssessSkillLevel:
        return (
          <div>
            <div className="font-quicksand text-2xl font-semibold mb-8 mt-1">
              {RegisterText.AssessSkillLevel}
            </div>
            <StepOptionsGrid
              onContinue={handleContinue}
              gridClassname="grid grid-cols-1 gap-4"
              stepOptions={AssessSkillLevelOptions}
            />
          </div>
        );
      case RegisterSteps.Benefits:
        return (
          <div className="font-quicksand text-2xl font-semibold mb-8 mt-1">
            {RegisterText.Benefits}
            <Benefits
              gridClassname="grid grid-cols-1 gap-4 mt-6"
              onContinue={goToNextStep}
              stepOptions={BenefitsOptions}
            />
          </div>
        );
      case RegisterSteps.DailyGoal:
        return (
          <div className="font-quicksand text-2xl font-semibold mb-8 mt-1">
            {RegisterText.DailyGoal}
            <DailyGoal
              gridClassname="grid grid-cols-1 gap-4 mt-6"
              onContinue={handleContinue}
              stepOptions={DailyGoalOptions}
            />
          </div>
        );
      case RegisterSteps.PlaceToStart:
        return (
          <div>
            <div className="font-quicksand text-2xl font-semibold mb-8 mt-1">
              {RegisterText.PlaceToStart}
            </div>
            <div>
              <PlaceToStart
                gridClassname="grid grid-cols-1 gap-4 mt-6"
                onContinue={handleContinue}
                stepOptions={PlaceToStartOptions}
              />
            </div>
          </div>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  const goToPreviousStep = () => {
    const stepOrder = [
      RegisterSteps.ReferralSource,
      RegisterSteps.AssessSkillLevel,
      RegisterSteps.Benefits,
      RegisterSteps.DailyGoal,
      RegisterSteps.PlaceToStart,
    ];

    const currentIndex = stepOrder.indexOf(currentStep);

    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const goToNextStep = () => {
    const stepOrder = [
      RegisterSteps.ReferralSource,
      RegisterSteps.AssessSkillLevel,
      RegisterSteps.Benefits,
      RegisterSteps.DailyGoal,
      RegisterSteps.PlaceToStart,
    ];

    const currentIndex = stepOrder.indexOf(currentStep);

    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
    if (currentIndex === stepOrder.length - 1) {
      // clearStore();
      console.log('redirect to dashboard');
      console.log('selectedOptions', selectedOptions);
      // Todo: Call backend api with these choices for the given sessionId generated from session
      // Todo: Route to the Interviewing agent for starting interview
      // router.push('/dashboard');
    }
  };

  const handleContinue = (selection: string[]) => {
    setSelectedOption(currentStep, selection);
    goToNextStep();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-xl flex flex-col items-center justify-start relative">
        <div
          className="absolute top-[17px] -left-[6px] cursor-pointer"
          onClick={goToPreviousStep}
        >
          <ArrowLeftIcon width={20} height={20} color="gray" />
        </div>
        <div className="w-full max-w-lg mb-6">
          <ProgressBar currentStep={stepIndex} totalSteps={totalSteps} />
        </div>
        <div className="w-full max-w-lg">{renderCurrentStep()}</div>
      </div>
    </div>
  );
};

export default Welcome;
