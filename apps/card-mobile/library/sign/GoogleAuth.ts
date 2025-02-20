import { GoogleSignin, statusCodes, User, isSuccessResponse, isErrorWithCode, NativeModuleError } from '@react-native-google-signin/google-signin';
import { useEffect, useMemo, useState } from 'react';

// Configure Google Sign-In
GoogleSignin.configure({
	webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
	scopes: ['profile', 'email'],
});

export const useGoogleAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkCurrentUser();
  }, []);

  const checkCurrentUser = async () => {
    try {
      const user = GoogleSignin.getCurrentUser();
      if (user) {
        getCurrentUser();
      }
    } catch (error) {
      console.error('Check user error:', error);
    }
  };

  const getCurrentUser = async () => {
    try {
      const currentUser = GoogleSignin.getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error('Get current user error:', error);
    }
  };

  const signIn = async () => {
    try {
      setLoading(true);
      setError(null);
      
      await GoogleSignin.hasPlayServices();
      const signInResult = await GoogleSignin.signIn();
      const isValid = isSuccessResponse(signInResult);
      console.log('signInResult', signInResult, 'isValid', isValid);

      if (isValid) {

        setUser(signInResult.data);
      
        // Get user's ID token
        const { accessToken, idToken } = await GoogleSignin.getTokens();
        // Send these tokens to your backend for verification
      }
      
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            console.log('Sign in cancelled');
            break;
          case statusCodes.IN_PROGRESS:
            console.log('Sign in in progress');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
        }
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser(null);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return {
    user,
    loading,
    error,
    signIn,
    signOut,
  };
};
