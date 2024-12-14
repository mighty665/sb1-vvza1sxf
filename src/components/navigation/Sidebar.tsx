import React from 'react';
import SidebarItem from './SidebarItem';
import { sidebarItems } from '../../data/navigation';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 overflow-y-auto hidden md:block">
      <div className="py-4">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </div>
    </aside>
  );
}