import Cookies from 'js-cookie';
import axios from 'axios';

// Function to get the session ID from cookies
export const getSessionIdFromCookies = (): string | undefined => {
  return Cookies.get('sessionId');
};

// Function to save the session ID in cookies
export const saveSessionIdToCookies = (sessionId: string) => {
  Cookies.set('sessionId', sessionId, {
    expires: 7,
    secure: true,
    sameSite: 'strict',
  });
};

// Function to check if the user is authenticated via JWT
export const isAuthenticated = (): boolean => {
  const token = Cookies.get('authToken');
  return !!token;
};

// API call to create a session ID for an anonymous user
export const createAnonymousSession = async (): Promise<string> => {
  const response = { data: { sessionId: 'sess1234' } }; //await axios.post('/backend/sessions');
  return response.data.sessionId;
};

export const createAnonymousSessionWithDomain = async (
  domain: string
): Promise<string> => {
  const response = { data: { sessionId: 'sess1234' } };
  //   await axios.post('/backend/sessions', { domain });
  return response.data.sessionId;
};
