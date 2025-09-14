import React from 'react';
import { NavigationItem } from './NavigationItem';
import { navigationData } from '../../data/navigationData';
import { useNavigation } from '../../hooks/useNavigation';

export const Sidebar: React.FC = () => {
  const { toggleExpanded, setActiveItem, isExpanded, isActive } = useNavigation();

  const maxVisibleLevel = 2; // Ẩn cấp cha khi có hơn 3 cấp con

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
      </div>
      
      <nav className="p-4 space-y-1">
        {navigationData.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            level={0}
            isExpanded={isExpanded(item.id)}
            isActive={isActive(item.id)}
            onToggleExpanded={toggleExpanded}
            onSetActive={setActiveItem}
            breadcrumb={[]}
            maxVisibleLevel={maxVisibleLevel}
          />
        ))}
      </nav>
    </div>
  );
};