export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
}

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  acceptTerms: boolean;
}

export interface SignInFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}