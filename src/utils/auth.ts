import { SignUpFormData, SignInFormData, User } from '../types/auth';

// Simulated API calls - replace with actual API implementation
export const signUp = async (data: SignUpFormData): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate validation
  if (data.email === 'existing@example.com') {
    throw new Error('Email already exists');
  }

  return {
    id: 'user_' + Math.random().toString(36).substr(2, 9),
    name: data.name,
    email: data.email,
    createdAt: new Date(),
  };
};

export const signIn = async (data: SignInFormData): Promise<User> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate authentication
  if (data.email !== 'test@example.com' || data.password !== 'Test123!@#') {
    throw new Error('Invalid credentials');
  }

  return {
    id: 'user_123',
    name: 'Test User',
    email: data.email,
    createdAt: new Date(),
  };
};