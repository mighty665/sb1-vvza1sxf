import React from 'react';

interface AuthInputProps {
  id: string;
  label: string;
  type?: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function AuthInput({
  id,
  label,
  type = 'text',
  error,
  value,
  onChange,
  placeholder,
}: AuthInputProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}