import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import SignUpForm from '../components/auth/SignUpForm';

export default function SignUp() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join our community of creators and viewers"
    >
      <SignUpForm />
    </AuthLayout>
  );
}