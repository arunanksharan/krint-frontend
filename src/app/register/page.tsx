'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import {
  getSessionIdFromCookies,
  saveSessionIdToCookies,
  isAuthenticated,
  createAnonymousSession,
  createAnonymousSessionWithDomain,
} from '@/utils/session';
import { RegisterSteps } from '@/lib/constants';
import { RegisterStepsType } from '@/lib/type';
import DomainGrid from '@/components/register/select-domain';

const Register: React.FC = () => {
  const router = useRouter();

  const {
    data: sessionId,
    isLoading,
    isError,
  } = useQuery(
    'sessionId',
    async () => {
      if (isAuthenticated()) {
        router.push('/dashboard');
        return undefined;
      }

      return getSessionIdFromCookies();
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
  const handleDomainSelection = async (name: string) => {
    console.log(`domain selected is:: ${name}`);
    try {
      let sessionId = getSessionIdFromCookies();
      if (!sessionId) {
        sessionId = await createAnonymousSessionWithDomain(name);
        saveSessionIdToCookies(sessionId);
      }
      //   saveSessionIdToCookies(sessionId);
      router.push('/welcome');
    } catch (error) {
      console.error('Error creating session:', error);
      // You could add additional error handling here if needed
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/** todo: add domains as grid with onClick handler which hits backend api for sessionId and redirects to welcome page */}
      <DomainGrid handleDomainSelection={handleDomainSelection} />
    </div>
  );
};

export default Register;
