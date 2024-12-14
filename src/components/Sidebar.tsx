import React from 'react';
import { Home, Compass, PlaySquare, Clock, ThumbsUp, Film, Users, Trophy } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home' },
  { icon: Compass, label: 'Explore' },
  { icon: PlaySquare, label: 'Library' },
  { icon: Clock, label: 'History' },
  { icon: ThumbsUp, label: 'Liked Videos' },
  { icon: Film, label: 'Your Videos' },
  { icon: Users, label: 'Following' },
  { icon: Trophy, label: 'Creator Studio' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 overflow-y-auto hidden md:block">
      <div className="py-4">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-4 px-6 py-3 hover:bg-gray-100 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}