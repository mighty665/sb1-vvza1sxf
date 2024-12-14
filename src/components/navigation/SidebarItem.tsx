import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

export default function SidebarItem({ icon: Icon, label, active }: SidebarItemProps) {
  return (
    <button
      className={`w-full flex items-center gap-4 px-6 py-3 hover:bg-gray-100 transition-colors ${
        active ? 'bg-gray-100' : ''
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}