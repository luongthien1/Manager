import { useState, useCallback } from 'react';
import { NavigationState } from '../types/navigation';

export const useNavigation = () => {
  const [navigationState, setNavigationState] = useState<NavigationState>({
    expandedItems: new Set(),
    activeItem: null,
    breadcrumb: [],
  });

  const toggleExpanded = useCallback((itemId: string) => {
    setNavigationState(prev => {
      const newExpanded = new Set(prev.expandedItems);
      if (newExpanded.has(itemId)) {
        newExpanded.delete(itemId);
      } else {
        newExpanded.add(itemId);
      }
      return {
        ...prev,
        expandedItems: newExpanded,
      };
    });
  }, []);

  const setActiveItem = useCallback((itemId: string, breadcrumb: string[]) => {
    setNavigationState(prev => ({
      ...prev,
      activeItem: itemId,
      breadcrumb,
    }));
  }, []);

  const isExpanded = useCallback((itemId: string): boolean => {
    return navigationState.expandedItems.has(itemId);
  }, [navigationState.expandedItems]);

  const isActive = useCallback((itemId: string): boolean => {
    return navigationState.activeItem === itemId;
  }, [navigationState.activeItem]);

  return {
    navigationState,
    toggleExpanded,
    setActiveItem,
    isExpanded,
    isActive,
  };
};