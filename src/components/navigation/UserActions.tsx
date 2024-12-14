import React from 'react';
import { Upload, Bell, User } from 'lucide-react';

export default function UserActions() {
  const actions = [
    { icon: Upload, label: 'Upload' },
    { icon: Bell, label: 'Notifications' },
    { icon: User, label: 'Profile' },
  ];

  return (
    <div className="flex items-center gap-2">
      {actions.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="p-2 hover:bg-gray-100 rounded-full"
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
        </button>
      ))}
    </div>
  );
}