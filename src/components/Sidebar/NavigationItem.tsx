import React from 'react';
import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { NavigationItem as NavigationItemType } from '../../types/navigation';

interface NavigationItemProps {
  item: NavigationItemType;
  level: number;
  isExpanded: boolean;
  isActive: boolean;
  onToggleExpanded: (itemId: string) => void;
  onSetActive: (itemId: string, breadcrumb: string[]) => void;
  breadcrumb: string[];
  maxVisibleLevel: number;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  level,
  isExpanded,
  isActive,
  onToggleExpanded,
  onSetActive,
  breadcrumb,
  maxVisibleLevel,
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const shouldHideParent = level > maxVisibleLevel;

  const handleTriangleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasChildren) {
      onToggleExpanded(item.id);
    }
  };

  const handleTitleClick = () => {
    const newBreadcrumb = [...breadcrumb, item.title];
    onSetActive(item.id, newBreadcrumb);
  };

  if (shouldHideParent && !isExpanded && level > 0) {
    return null;
  }

  return (
    <div className="select-none">
      <div
        className={clsx(
          'flex items-center py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 group',
          {
            'bg-blue-100 text-blue-700': isActive,
            'hover:bg-gray-100': !isActive,
            'ml-4': level > 0,
          }
        )}
        style={{ paddingLeft: `${12 + level * 16}px` }}
      >
        {hasChildren && (
          <button
            onClick={handleTriangleClick}
            className={clsx(
              'flex items-center justify-center w-5 h-5 mr-2 transition-transform duration-200 hover:bg-gray-200 rounded',
              {
                'transform rotate-90': isExpanded,
              }
            )}
          >
            <ChevronRight size={14} />
          </button>
        )}
        
        {!hasChildren && (
          <div className="w-5 h-5 mr-2" />
        )}

        <span
          onClick={handleTitleClick}
          className={clsx(
            'flex-1 text-sm font-medium transition-colors duration-200',
            {
              'text-blue-700': isActive,
              'text-gray-700 group-hover:text-gray-900': !isActive,
            }
          )}
            maxVisibleLevel={level >= 2 ? level : maxVisibleLevel}
          {item.title}
        </span>
      </div>

      {hasChildren && isExpanded && (
        <div
          className={clsx(
            'overflow-hidden transition-all duration-300 ease-in-out',
            {
              'animate-slideDown': isExpanded,
            }
          )}
        >
          {item.children?.map((child) => (
            <NavigationItem
              key={child.id}
              item={child}
              level={level + 1}
              isExpanded={false}
              isActive={false}
              onToggleExpanded={onToggleExpanded}
              onSetActive={onSetActive}
              breadcrumb={[...breadcrumb, item.title]}
              maxVisibleLevel={maxVisibleLevel}
            />
          ))}
        </div>
      )}
    </div>
  );
};